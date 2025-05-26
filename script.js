// Confetti effect for birthday page
function triggerConfetti() {
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function() {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        
        // Confetti from left
        confetti({
            ...defaults,
            particleCount,
            origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
        });
        
        // Confetti from right
        confetti({
            ...defaults,
            particleCount,
            origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
        });
    }, 250);
}

// Background music control
const bgMusic = document.getElementById('bgMusic');
let isMusicPlaying = false;

function toggleMusic() {
    if (isMusicPlaying) {
        bgMusic.pause();
    } else {
        bgMusic.play();
    }
    isMusicPlaying = !isMusicPlaying;
}

// Name verification
function checkName() {
    const nameInput = document.getElementById('nameInput');
    const content = document.querySelector('.content');
    
    if (nameInput && content) {
        nameInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const name = nameInput.value.trim().toLowerCase();
                if (name === 'sanya') {
                    content.style.display = 'block';
                    nameInput.style.display = 'none';
                    triggerConfetti();
                    // Store in localStorage that the name was verified
                    localStorage.setItem('nameVerified', 'true');
                } else {
                    nameInput.value = '';
                    nameInput.placeholder = 'Try again...';
                }
            }
        });
    }
}

// Sunflower interaction
function initSunflowerInteraction() {
    const sunflower = document.getElementById('growingSunflower');
    if (sunflower) {
        document.addEventListener('mousemove', (e) => {
            const rect = sunflower.getBoundingClientRect();
            const sunflowerCenterX = rect.left + rect.width / 2;
            const sunflowerCenterY = rect.top + rect.height / 2;
            
            const angle = Math.atan2(e.clientY - sunflowerCenterY, e.clientX - sunflowerCenterX);
            const degrees = angle * (180 / Math.PI);
            
            sunflower.style.transform = `rotate(${degrees}deg)`;
        });
    }
}

// Time capsule
function initTimeCapsule() {
    const timeCapsule = document.querySelector('.time-capsule');
    if (timeCapsule) {
        // Show time capsule after 10 seconds
        setTimeout(() => {
            timeCapsule.style.display = 'block';
            timeCapsule.style.animation = 'fadeIn 1s ease-out';
        }, 10000);
    }
}

// Easter eggs
function initEasterEggs() {
    const sunflowers = document.querySelectorAll('.sunflower-bg::before');
    sunflowers.forEach((sunflower, index) => {
        sunflower.addEventListener('click', () => {
            const messages = [
                "Remember our first coffee date? ☕",
                "That time we laughed until we cried 😂",
                "Our favorite song playing in the background 🎵"
            ];
            alert(messages[index % messages.length]);
        });
    });
}

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    // Add music control button
    const musicBtn = document.createElement('button');
    musicBtn.innerHTML = '🎵';
    musicBtn.className = 'music-btn';
    musicBtn.onclick = toggleMusic;
    document.body.appendChild(musicBtn);

    // Add music button styles
    const style = document.createElement('style');
    style.textContent = `
        .music-btn {
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.9);
            border: none;
            font-size: 24px;
            cursor: pointer;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
            z-index: 1000;
            transition: transform 0.3s;
        }
        .music-btn:hover {
            transform: scale(1.1);
        }
    `;
    document.head.appendChild(style);

    // Check if name was already verified
    if (localStorage.getItem('nameVerified') === 'true') {
        const content = document.querySelector('.content');
        const nameInput = document.getElementById('nameInput');
        if (content && nameInput) {
            content.style.display = 'block';
            nameInput.style.display = 'none';
        }
    }

    // Initialize features based on page
    if (document.body.classList.contains('birthday-page')) {
        checkName();
        initEasterEggs();
    } else if (document.body.classList.contains('sorry-page')) {
        initSunflowerInteraction();
        initTimeCapsule();
    }
}); 