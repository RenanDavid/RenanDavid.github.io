// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', () => {
    // Add scroll reveal animations
    const sr = ScrollReveal({
        origin: 'bottom',
        distance: '20px',
        duration: 1000,
        delay: 200,
        easing: 'ease-in-out'
    });

    // Reveal sections
    sr.reveal('.section', { interval: 200 });
    sr.reveal('.skill-category', { interval: 100 });
    sr.reveal('.recommendation', { interval: 100 });
    
    // Animate section titles when scrolled into view
    sr.reveal('.section-title', { 
        origin: 'right',
        distance: '50px',
        duration: 1000,
        afterReveal: function(el) {
            el.classList.add('animate-underline');
        }
    });
    
    // Add current year to footer
    const yearSpan = document.querySelector('.current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});