// DOM Elements
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');
const skillsSection = document.getElementById('skills');
const progressBars = document.querySelectorAll('.progress');

// Typing Effect
const textToType = "Java Full Stack Developer";
const typedTextElement = document.getElementById('typed-text');
let typeIndex = 0;

function typeWriter() {
    if (typeIndex < textToType.length) {
        typedTextElement.innerHTML += textToType.charAt(typeIndex);
        typeIndex++;
        setTimeout(typeWriter, 100);
    }
}

// Start typing when page loads
window.onload = typeWriter;

// Scroll Observer removed to ensure static visibility
// Skills fill animation triggered on load instead
window.addEventListener('load', () => {
    animateSkills();
});

// Animate Skills
function animateSkills() {
    progressBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        bar.style.width = width + '%';
    });
}

// Active Link Highlighter
// Active Link Highlighter & Glass Nav (Throttled)
let isScrolling = false;

window.addEventListener('scroll', () => {
    if (!isScrolling) {
        window.requestAnimationFrame(() => {
            let current = '';
            const scrollPosition = window.scrollY + 100; // Offset

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;

                if (scrollPosition >= sectionTop) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(a => {
                a.classList.remove('active');
                if (a.getAttribute('href').includes(current)) {
                    a.classList.add('active');
                }
            });

            // Glass Nav on Scroll effect
            const nav = document.querySelector('nav');
            if (window.scrollY > 50) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }

            isScrolling = false;
        });
        isScrolling = true;
    }
});

// Tilt Effect for Cards (Vanilla JS)
// Tilt Effect for Cards (Optimized with requestAnimationFrame)
document.querySelectorAll('.card, .hero-img').forEach(card => {
    let ticking = false;

    card.addEventListener('mousemove', (e) => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                const rotateX = ((y - centerY) / centerY) * -10; // Max 10deg rotation
                const rotateY = ((x - centerX) / centerX) * 10;

                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
                ticking = false;
            });
            ticking = true;
        }
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    });
});
// Contact Form Handling
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('form-status');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Show loading state
        const submitBtn = contactForm.querySelector('.submit-btn');
        const originalBtnText = submitBtn.innerText;
        submitBtn.innerText = 'Sending...';
        submitBtn.disabled = true;

        const formData = new FormData(contactForm);

        // FormSubmit.co AJAX Endpoint
        fetch("https://formsubmit.co/ajax/urmiprajapati707@gmail.com", {
            method: "POST",
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                // Success
                formStatus.style.display = 'block';
                formStatus.style.color = '#00f3ff'; // Success color (Primary)
                formStatus.innerText = "Thank you! Your message has been sent successfully.";
                contactForm.reset();

                // Reset button
                submitBtn.innerText = originalBtnText;
                submitBtn.disabled = false;

                // Hide message after 5 seconds
                setTimeout(() => {
                    formStatus.style.display = 'none';
                }, 5000);
            })
            .catch(error => {
                // Error
                formStatus.style.display = 'block';
                formStatus.style.color = 'red';
                formStatus.innerText = "Oops! Something went wrong. Please try again.";
                submitBtn.innerText = originalBtnText;
                submitBtn.disabled = false;
            });
    });
}
