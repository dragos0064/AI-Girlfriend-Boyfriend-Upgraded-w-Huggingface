const sendMessageButton = document.querySelector(".send_message");
const messageInput = document.querySelector(".message_input");
const messagesContainer = document.querySelector(".messages");

let HUGGINGFACE_API_KEY = ""; // Initialize empty key

// Function to load API key from config.json
async function loadAPIKey() {
  const response = await fetch("config.json");
  const config = await response.json();
  HUGGINGFACE_API_KEY = config.HUGGINGFACE_API_KEY;
}

// Function to query Hugging Face API
async function query(data) {
  const response = await fetch(
    "https://api-inference.huggingface.co/models/EleutherAI/gpt-neo-1.3B",
    {
      headers: {
        Authorization: `Bearer ${HUGGINGFACE_API_KEY}`,
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    }
  );

  if (!response.ok) {
    const errorData = await response.json();
    console.error("API Error:", errorData);
    throw new Error("Failed to fetch the response from Hugging Face API");
  }

  return await response.json();
}

// Function to handle user input
async function handleMessage() {
  const userMessage = messageInput.value.trim();
  if (!userMessage) return;

  addMessage(userMessage, "user");
  messageInput.value = "";

  const thinkingMessage = addMessage("Thinking...", "bot");

  try {
    const response = await query({ inputs: userMessage });
    const botResponse = response[0]?.generated_text || "Sorry, I couldn't generate a response.";
    thinkingMessage.textContent = botResponse;
  } catch (error) {
    console.error("Error communicating with Hugging Face API:", error);
    thinkingMessage.textContent = "Oops! Something went wrong. Please try again.";
  }
}

// Function to add a message to the chat
function addMessage(text, sender) {
  const messageDiv = document.createElement("div");
  messageDiv.className = `message ${sender}`;
  messageDiv.textContent = text;
  messagesContainer.appendChild(messageDiv);

  messagesContainer.scrollTop = messagesContainer.scrollHeight;

  return messageDiv;
}

// Initialize and load API key
loadAPIKey().then(() => {
  sendMessageButton.addEventListener("click", handleMessage);
  messageInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") handleMessage();
  });
});
