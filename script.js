// Animate skill progress bars on scroll
function animateSkillBars() {
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach(card => {
        const bar = card.querySelector('.progress-bar-inner');
        const level = card.getAttribute('data-level');
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight - 60) {
            bar.style.width = level + '%';
            bar.style.boxShadow = '0 0 12px #00c6ff88';
        }
    });
}
window.addEventListener('scroll', animateSkillBars);
window.addEventListener('DOMContentLoaded', animateSkillBars);

// Contact form success message and button animation
const contactForm = document.getElementById('contact-form');
const successMsg = document.getElementById('form-success-message');
if (contactForm && successMsg) {
    contactForm.addEventListener('submit', function(e) {
        setTimeout(() => {
            contactForm.reset();
            successMsg.style.display = 'block';
            contactForm.querySelector('button').innerHTML = '<i class="fas fa-check"></i> Sent!';
            contactForm.querySelector('button').classList.add('sent');
            setTimeout(() => {
                successMsg.style.display = 'none';
                contactForm.querySelector('button').innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
                contactForm.querySelector('button').classList.remove('sent');
            }, 2000);
        }, 100);
    });
}

// Fade-in animation for Contact Me section
window.addEventListener('DOMContentLoaded', () => {
    const contactSection = document.querySelector('.contact-me-section');
    if (contactSection) {
        contactSection.classList.add('fade-in');
    }

    // Typing animation for roles in home section
    const roles = [
        'Web Designer',
        'Full Stack Developer',
        'AWS Cloud',
        'AWS Certified Cloud Practitioner',
        'Problem Solver'
    ];
    const animatedRoles = document.getElementById('animated-roles');
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 120;
    let pauseTime = 1200;

    function typeRole() {
        if (!animatedRoles) return;
        const currentRole = roles[roleIndex];
        if (isDeleting) {
            animatedRoles.textContent = currentRole.substring(0, charIndex--);
        } else {
            animatedRoles.textContent = currentRole.substring(0, charIndex++);
        }

        if (!isDeleting && charIndex === currentRole.length) {
            isDeleting = true;
            setTimeout(typeRole, pauseTime);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            setTimeout(typeRole, typingSpeed);
        } else {
            setTimeout(typeRole, isDeleting ? typingSpeed / 2 : typingSpeed);
        }
    }
    typeRole();
    }
});
// Animate skill progress bars on scroll
function animateSkillBars() {
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach(card => {
        const bar = card.querySelector('.progress-bar-inner');
        const level = card.getAttribute('data-level');
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight - 60) {
            bar.style.width = level + '%';
            bar.style.boxShadow = '0 0 12px #00c6ff88';
        }
    });
}
window.addEventListener('scroll', animateSkillBars);
window.addEventListener('DOMContentLoaded', animateSkillBars);
// Contact form success message and button animation
const contactForm = document.getElementById('contact-form');
const successMsg = document.getElementById('form-success-message');
if (contactForm && successMsg) {
    contactForm.addEventListener('submit', function(e) {
        setTimeout(() => {
            contactForm.reset();
            successMsg.style.display = 'block';
            contactForm.querySelector('button').innerHTML = '<i class="fas fa-check"></i> Sent!';
            contactForm.querySelector('button').classList.add('sent');
            setTimeout(() => {
                successMsg.style.display = 'none';
                contactForm.querySelector('button').innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
                contactForm.querySelector('button').classList.remove('sent');
            }, 2000);
        }, 100);
    });
}

// Fade-in animation for Contact Me section
window.addEventListener('DOMContentLoaded', () => {
    const contactSection = document.querySelector('.contact-me-section');
    if (contactSection) {
        contactSection.classList.add('fade-in');
    }
});
// Contact form success message and button animation
const contactForm = document.getElementById('contact-form');
const successMsg = document.getElementById('form-success-message');
if (contactForm && successMsg) {
    contactForm.addEventListener('submit', function(e) {
        setTimeout(() => {
            contactForm.reset();
            successMsg.style.display = 'block';
            contactForm.querySelector('button').innerHTML = '<i class="fas fa-check"></i> Sent!';
            contactForm.querySelector('button').classList.add('sent');
            setTimeout(() => {
                successMsg.style.display = 'none';
                contactForm.querySelector('button').innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
                contactForm.querySelector('button').classList.remove('sent');
            }, 2000);
        }, 100);
    });
}
// Contact form success animation
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        // Let Formspree handle submission, but show animation
        setTimeout(() => {
            contactForm.reset();
            contactForm.querySelector('button').innerHTML = '<i class="fas fa-check"></i> Sent!';
            contactForm.querySelector('button').classList.add('sent');
            setTimeout(() => {
                contactForm.querySelector('button').innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
                contactForm.querySelector('button').classList.remove('sent');
            }, 2000);
        }, 100);
    });
}
// Navbar mobile toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Animated typing text effect
const typingText = document.querySelector('.typing-text');
const phrases = [
    'Aspiring Software Developer',
    'Problem Solver',
    'Tech Enthusiast'
];
let phraseIndex = 0;
let charIndex = 0;
let typingSpeed = 80;
let erasingSpeed = 40;
let delayBetween = 1200;

function typePhrase() {
    if (charIndex < phrases[phraseIndex].length) {
        typingText.textContent += phrases[phraseIndex][charIndex];
        charIndex++;
        setTimeout(typePhrase, typingSpeed);
    } else {
        setTimeout(erasePhrase, delayBetween);
    }
}
function erasePhrase() {
    if (charIndex > 0) {
        typingText.textContent = phrases[phraseIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erasePhrase, erasingSpeed);
    } else {
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(typePhrase, typingSpeed);
    }
}
window.addEventListener('DOMContentLoaded', () => {
    typingText.textContent = '';
    typePhrase();
});

// Animated skill progress bars
function animateProgressBars() {
    const bars = document.querySelectorAll('.progress-bar');
    bars.forEach(bar => {
        const progress = bar.getAttribute('data-progress');
        let inner = document.createElement('div');
        inner.className = 'progress-bar-inner';
        bar.appendChild(inner);
        setTimeout(() => {
            inner.style.width = progress + '%';
        }, 400);
    });
}
window.addEventListener('DOMContentLoaded', animateProgressBars);

// Smooth scroll for anchor links
const anchorLinks = document.querySelectorAll('a[href^="#"]');
anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            e.preventDefault();
            targetSection.scrollIntoView({ behavior: 'smooth' });
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        }
    });
});

// Contact form (demo only)
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for reaching out! I will get back to you soon.');
    this.reset();
});
