// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
// JavaScript for Mobile Menu
document.querySelector('.mobile-menu-btn').addEventListener('click', function () {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
});

// Mobile menu toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Location list population
const locations = [
    "Along Mombasa Road", "Other Cities", "Muranga", "Karen", "Nakuru", "Runda", 
    "Nyeri", "Meru", "Limuru", "Kiambu", "Kirinyaga", "Machakos", "Kajiado", 
    "Kisii", "Malindi", "Kericho", "Busia", "Nyandarua", "Embu", "Laikipia", 
    "Garissa", "Mandera", "Kilifi", "Lamu", "Gilgil", "Mwea", "Gigiri", 
    "Westlands", "Kasarani", "Ruaka", "Ridgeways", "Maasai Mara", "Nyahururu", 
    "Kitale", "Muthaiga", "Mlolongo", "Lavington", "Jogoo Road", "Lang'ata", 
    "Kitengela", "Kilimani", "Kileleshwa", "Thika Road", "Langata Road", 
    "Kiambu Road", "Spring Valley", "Ngong", "Kiserian", "Ruai", "Juja", 
    "Utawala", "Makuyu", "Karatina", "Nanyuki", "Naivasha", "Eldoret", 
    "Bungoma", "Kakamega", "Bomet", "Narok", "Isinya"
];

const locationList = document.querySelector('.location-list');
if (locationList) {
    locations.forEach(location => {
        const locationElement = document.createElement('span');
        locationElement.textContent = location;
        locationElement.style.color = '#003087';
        locationList.appendChild(locationElement);
    });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Chat Bot Toggle and Functionality
const chatBot = document.querySelector('.chat-bot');
const chatBotWindow = document.getElementById('chatBotWindow');
const closeChat = document.getElementById('closeChat');
const chatBody = document.getElementById('chatBody');
const chatInput = document.getElementById('chatInput');
const sendChat = document.getElementById('sendChat');

// Toggle chatbot window
chatBot.addEventListener('click', () => {
    chatBotWindow.style.display = 'block';
});

// Close chatbot window
closeChat.addEventListener('click', () => {
    chatBotWindow.style.display = 'none';
});

// Predefined bot responses
const botResponses = {
    "hello": "Hello! How can I assist you today?",
    "hi": "Hi there! How can I help you?",
    "services": "We offer car towing, flatbed towing, motorcycle towing, and more. Visit our services page for details.",
    "contact": "You can reach us at 0704851297 or email us at info@archerstowing.com.",
    "default": "I'm sorry, I didn't understand that. Can you please clarify?"
};

// Handle sending messages
sendChat.addEventListener('click', sendMessage);

// Allow pressing Enter to send a message
chatInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const userMessage = chatInput.value.trim();
    if (!userMessage) return;

    // Display user message
    appendMessage(userMessage, 'user');

    // Get bot response
    const botMessage = botResponses[userMessage.toLowerCase()] || botResponses['default'];
    setTimeout(() => {
        appendMessage(botMessage, 'bot');
    }, 500); // Simulate a slight delay

    // Clear input field
    chatInput.value = '';
}

// Append messages to the chat body
function appendMessage(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    messageElement.textContent = message;
    chatBody.appendChild(messageElement);

    // Scroll to the bottom of the chat
    chatBody.scrollTop = chatBody.scrollHeight;
}
