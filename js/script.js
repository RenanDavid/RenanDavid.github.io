// Initialize ScrollReveal
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 1000,
    reset: false
});

sr.reveal('.header-content', { delay: 200 });
sr.reveal('.section-title', { delay: 200 });
sr.reveal('.timeline-item', { interval: 200 });
sr.reveal('.skill-card', { interval: 100 });
sr.reveal('.education-card', { interval: 200 });
sr.reveal('.testimonial-card', { interval: 200 });

// Navbar Blur Effect on Scroll
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(15, 16, 20, 0.95)';
    } else {
        navbar.style.background = 'rgba(15, 16, 20, 0.85)';
    }
});

// Active Timeline Items on Scroll
const observerOptions = {
    threshold: 0,
    rootMargin: "-45% 0px -45% 0px" // Creates a narrow activation band in the center
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        } else {
            entry.target.classList.remove('active');
        }
    });
}, observerOptions);

document.querySelectorAll('.timeline-item').forEach(item => {
    observer.observe(item);
});

// Custom Navigation Scrolling
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');

        if (targetId === '#experience') {
            // Special case: Scroll to center the first timeline item
            const firstItem = document.querySelector('.timeline-item.main-role');
            if (firstItem) {
                firstItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        } else {
            // Default behavior with offset handled by CSS scroll-padding-top
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// Profile Video Hover Effect
const profileVideo = document.getElementById('profileVideo');

if (profileVideo) {
    profileVideo.addEventListener('mouseenter', () => {
        profileVideo.play();
    });

    profileVideo.addEventListener('mouseleave', () => {
        // Pause and reset video
        profileVideo.pause();
        profileVideo.currentTime = 0;
        // Restore poster (force reload/reset) if needed, but styling usually handles it
        profileVideo.load();
    });
}