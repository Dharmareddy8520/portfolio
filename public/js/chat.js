// Open the chatbot form when the user clicks the chatbot button
function openForm() {
    document.getElementById("chatbot-form").style.display = "block";
}

// Close the chatbot form when the user clicks the close button
function closeForm() {
    document.getElementById("chatbot-form").style.display = "none";
}

// Send a message to the chatbot and receive a response
function sendMessage() {
    var input = document.getElementById("chatbot-input");
    var message = input.value;
    var output = document.getElementById("chatbot-messages");
    
    if (message.trim() == "") {
        return;
    }
    
    // Add user's message to the chatbot
    var userMessage = document.createElement("p");
    userMessage.innerHTML = message;
    userMessage.classList.add("user-message");
    output.appendChild(userMessage);
    input.value = "";
    
    // Determine appropriate response based on input
    var chatbotMessage = document.createElement("p");
    chatbotMessage.classList.add("chatbot-message");
    
    if (message.toLowerCase().includes("hi")) {
        chatbotMessage.innerHTML = "Hello! How can I assist you today?";
    } 
    else if (message.toLowerCase().includes("hello")) {
        chatbotMessage.innerHTML = "Hello! How can I assist you today?";
    }else if (message.toLowerCase().includes("help")) {
        chatbotMessage.innerHTML = "Sure, I'm happy to help. What do you need assistance with?";
    }
    else if (message.toLowerCase().includes("what is your name")) {
        chatbotMessage.innerHTML = "Sure, I'm happy to help. my name is chat bot";
    }
    else if (message.toLowerCase().includes("name")) {
        chatbotMessage.innerHTML = "Sure, I'm happy to help. my name is bot";
    } else if (message.toLowerCase().includes("bye")) {
        chatbotMessage.innerHTML = "Goodbye! Have a great day.";
    } else {
        chatbotMessage.innerHTML = "I'm sorry, I don't understand. Can you please rephrase your question?";
    }
    
    output.appendChild(chatbotMessage);
    
    // Scroll to the bottom of the chatbot
    output.scrollTop = output.scrollHeight;
}
