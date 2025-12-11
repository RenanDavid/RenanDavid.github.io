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
sr.reveal('.bg-decor-item', {
    delay: 300,
    distance: '50px',
    duration: 1500,
    origin: 'bottom',
    interval: 300
});

// Navbar Blur Effect on Scroll
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Profile Video Hover Effect
const profileVideo = document.getElementById('profileVideo');
if (profileVideo) {
    profileVideo.addEventListener('mouseenter', () => {
        // Ensure video plays
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

// Preloader
const preloader = document.getElementById('preloader');
if (preloader) {
    window.addEventListener('load', () => {
        preloader.style.opacity = '0';
        preloader.style.visibility = 'hidden';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    });
}

// Comic Bubbles Logic
const bubbleContainer = document.getElementById('speech-bubbles');
const profileContainer = document.querySelector('.profile-image-container');
const messagePairs = [
    ["Yes, I use AI.", "But it is just a tool."],
    ["You should worry about people.", "People can ruin your life, machines won't."]
];
let pairIndex = 0;
let timeout1, timeout2;

if (profileContainer && bubbleContainer) {
    profileContainer.addEventListener('mouseenter', () => {
        // Step 1: Wait 2s before starting
        timeout1 = setTimeout(() => {
            const [msg1, msg2] = messagePairs[pairIndex];

            // Show first bubble
            bubbleContainer.innerHTML = `
                <div class="speech-bubble bubble-top-right">${msg1}</div>
            `;

            // Step 2: Wait another 1.5s for second bubble
            timeout2 = setTimeout(() => {
                // Show second bubble alongside first (append)
                const bubble2 = document.createElement('div');
                bubble2.className = 'speech-bubble bubble-bottom-left';
                bubble2.textContent = msg2;
                bubbleContainer.appendChild(bubble2);

                // Advance index only after full sequence
                pairIndex = (pairIndex + 1) % messagePairs.length;
            }, 1500);

        }, 2000);
    });

    profileContainer.addEventListener('mouseleave', () => {
        clearTimeout(timeout1);
        clearTimeout(timeout2);
        bubbleContainer.innerHTML = ''; // Hide bubbles immediately
    });
}