// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Platform tabs functionality
const tabs = document.querySelectorAll('.tab');
const platformInstructions = document.querySelectorAll('.platform-instructions');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active class from all tabs and instructions
        tabs.forEach(t => t.classList.remove('active'));
        platformInstructions.forEach(p => p.classList.remove('active'));
        
        // Add active class to clicked tab and corresponding instructions
        tab.classList.add('active');
        const platform = tab.getAttribute('data-platform');
        document.getElementById(platform).classList.add('active');
    });
});

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.classList.remove('scroll-up');
        return;
    }
    
    if (currentScroll > lastScroll && !navbar.classList.contains('scroll-down')) {
        // Scroll down
        navbar.classList.remove('scroll-up');
        navbar.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && navbar.classList.contains('scroll-down')) {
        // Scroll up
        navbar.classList.remove('scroll-down');
        navbar.classList.add('scroll-up');
    }
    lastScroll = currentScroll;
});

// Add animation to feature cards on scroll
const featureCards = document.querySelectorAll('.feature-card');
const securityCards = document.querySelectorAll('.security-card');

const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

featureCards.forEach(card => observer.observe(card));
securityCards.forEach(card => observer.observe(card)); 