// Add your JavaScript code here
const messageInput = document.getElementById("message-input");
const sendButton = document.getElementById("send-button");
const chatMessages = document.getElementById("chat-messages");

sendButton.addEventListener("click", () => {
    const messageText = messageInput.value;
    if (messageText.trim() !== "") {
        const messageDiv = document.createElement("div");
        messageDiv.className = "message";
        messageDiv.textContent = messageText;
        chatMessages.appendChild(messageDiv);
        messageInput.value = "";
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
});
