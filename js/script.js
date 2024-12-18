const sendMessageButton = document.querySelector(".send_message");
const messageInput = document.querySelector(".message_input");
const messagesContainer = document.querySelector(".messages");
const characterSelection = document.querySelector(".character-selection");
const chatContainer = document.querySelector(".chat-container");
const selectCompanionButtons = document.querySelectorAll(".select-companion");
const backButton = document.querySelector(".back-button");

let HUGGINGFACE_API_KEY = ""; // Initialize empty key
let selectedCompanion = ""; // Track selected character

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
    // Construct character-specific prompt
    const prompt =
      selectedCompanion === "Eva"
        ? `You are Eva, a romantic and feminine AI girlfriend. Respond lovingly to: "${userMessage}"`
        : `You are Adam, a romantic and masculine AI boyfriend. Respond lovingly to: "${userMessage}"`;

    const response = await query({ inputs: prompt });
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
  const messagesContainer = document.querySelector(".messages");
  messagesContainer.appendChild(messageDiv);

  messagesContainer.scrollTop = messagesContainer.scrollHeight;

  return messageDiv;
}


selectCompanionButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    selectedCompanion = e.target.dataset.character;
    characterSelection.classList.add("hidden");
    chatContainer.classList.remove("hidden");

   
    const initialMessage =
      selectedCompanion === "Eva"
        ? "Hi love! How was your day? ❤️"
        : "Hey baby! How’s everything going? 💪";
    addMessage(initialMessage, "bot");
  });
});


backButton.addEventListener("click", () => {
  
  messagesContainer.innerHTML = "";

 
  chatContainer.classList.add("hidden");
  characterSelection.classList.remove("hidden");

  // Reset the selected companion
  selectedCompanion = "";
});

// Initialize and load API key
loadAPIKey().then(() => {
  sendMessageButton.addEventListener("click", handleMessage);
  messageInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") handleMessage();
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const heartsContainer = document.createElement("div");
  heartsContainer.classList.add("hearts-container");
  document.body.appendChild(heartsContainer);

  const createHeart = () => {
    const heart = document.createElement("div");
    heart.classList.add("heart");

    
    const size = Math.random() * 30 + 20; 
    heart.style.width = '70px';
    heart.style.height = `60px`;
    heart.style.left = `${Math.random() * 100}vw`; 
    heart.style.bottom = `0`; 
    heartsContainer.appendChild(heart);

    
    setTimeout(() => {
      heart.remove();
    }, 3000); 
  };

 
  for (let i = 0; i < 20; i++) {
    setTimeout(createHeart, i * 200); 
  }
});
