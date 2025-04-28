// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Location List Population
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

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Chatbot Toggle
const chatBotButton = document.querySelector('.chat-bot');
const chatBotWindow = document.getElementById('chatBotWindow');
const closeChat = document.getElementById('closeChat');
const chatBody = document.getElementById('chatBody');
const chatInput = document.getElementById('chatInput');
const sendChat = document.getElementById('sendChat');

// Open/Close Chatbot Window
chatBotButton.addEventListener('click', () => {
    chatBotWindow.classList.toggle('open');
});

closeChat.addEventListener('click', () => {
    chatBotWindow.classList.remove('open');
});

// Predefined Bot Responses
const botResponses = {
    "hello": "Hello! How can I assist you today?",
    "hi": "Hi there! How can I help you?",
    "services": "We offer car towing, flatbed towing, motorcycle towing, and more. Visit our services page for details.",
    "contact": "You can reach us at 0704851297 or email us at info@archerstowing.com.",
    "default": "I'm sorry, I didn't understand that. Can you please clarify?"
};

// Handle Sending Messages
sendChat.addEventListener('click', sendMessage);

chatInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const userMessage = chatInput.value.trim();
    if (!userMessage) return;

    // Display User Message
    appendMessage(userMessage, 'user');

    // Get Bot Response
    const botMessage = botResponses[userMessage.toLowerCase()] || botResponses['default'];
    setTimeout(() => {
        appendMessage(botMessage, 'bot');
    }, 500); // Simulate a slight delay

    // Clear Input Field
    chatInput.value = '';
}

// Append Messages to the Chat Body
function appendMessage(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    messageElement.textContent = message;
    chatBody.appendChild(messageElement);

    // Scroll to Bottom of Chat
    chatBody.scrollTop = chatBody.scrollHeight;
}
