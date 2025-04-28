// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
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

// Chat bot toggle
const chatBot = document.querySelector('.chat-bot');
chatBot.addEventListener('click', () => {
    // Add chat bot functionality here
    alert('Chat bot feature coming soon!');
});