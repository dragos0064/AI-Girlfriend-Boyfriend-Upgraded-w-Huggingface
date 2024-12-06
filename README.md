# AI Companion Chat Application

## 🎯 Project Overview
The **AI Companion Chat Application** is an interactive web-based platform where users can chat with two AI companions: **Eva** and **Adam**. With a romantic theme and visually captivating design, this project provides a personalized experience for users.

---

## ✨ Features

### Character Selection
- Users can select:
  - **Eva**: A romantic and feminine AI companion who calls the user "love" and "baby."
  - **Adam**: A romantic and masculine AI companion who also uses affectionate terms like "love" and "baby."
- Each character has a unique introduction when selected.

### Dynamic Chat Interface
- **Chat Simulation**:
  - User messages appear on the **right**.
  - AI companion responses appear on the **left**.
  - Smooth scrolling for conversations.
- **Responsive Design**:
  - Adapts to desktop, tablet, and mobile devices.

### Visual Enhancements
- **Cupid-Themed Background**:
  - The backdrop features **Cupid** with a romantic floral setting.
- **Heart Animation**:
  - Hearts dynamically rise from the bottom of the screen when the page loads.

### Hugging Face API Integration
- Leverages **EleutherAI's GPT-Neo-1.3B model**.
- AI generates dynamic responses based on user inputs.

---

## 🛠️ Technology Stack

- **Frontend**:
  - HTML5
  - CSS3 (Animations and transitions)
  - JavaScript (Vanilla JS)
- **API**:
  - Hugging Face Inference API
- **Media**:
  - Images (`Eros.jpg`, `Heart.png`) for aesthetics.

---

## 📂 Files Included

### 1. **index.html**
- Contains the structure for the main application, including:
  - Character selection screen.
  - Chat interface.

### 2. **styles.css**
- Defines the styling for:
  - Character selection.
  - Chat interface.
  - Floating heart animations.
  - Background design.

### 3. **script.js**
- Implements:
  - API communication with Hugging Face.
  - Character selection logic.
  - Dynamic message handling.

### 4. **config.json**
- Stores the Hugging Face API key securely:
  ```json
  {
    "HUGGINGFACE_API_KEY": "your_api_key_here"
  }
   ```

  
### 5. **Eros.jpg**
- Features Cupid in a romantic, floral backdrop.
- Used to create an immersive, romantic theme for the interface.
- Enhanced with faded shadows and corner effects for a subtle visual appearance.


### 6. **Heart.png**
- Glossy red heart image used for dynamic animations.
- Hearts float upward from the bottom of the screen.
- Dynamically added and removed for visual engagement.


### 7. **.gitignore**
- Excludes the config.json file containing the Hugging Face API key.
- Ignores temporary or system-specific files such as:
  -config.js







## 🖼️ Visual Examples

**Character Selection Screen**


![Untitled video - Made with Clipchamp (3)](https://github.com/user-attachments/assets/131f5a60-9eb9-4515-9d93-4d502608e860)



**Chat Interface**


![image](https://github.com/user-attachments/assets/a15c0624-bfb6-4419-9ab4-dd0aeb9de998)


**Floating Heart Animation**


![Untitled video - Made with Clipchamp (2)](https://github.com/user-attachments/assets/5940a4cb-9616-4545-94c8-b8f42407db21)

