// Initialize Lucide Icons
lucide.createIcons();

// Check if user is on mobile to dramatically reduce canvas overhead
const isMobile = window.innerWidth < 768;

// Particle.js Configuration for Neural Network effect
particlesJS('particles-js', {
  "particles": {
    "number": {
      "value": isMobile ? 25 : 60,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": ["#900C3F", "#D4AF37", "#ffffff"]
    },
    "shape": {
      "type": "circle",
    },
    "opacity": {
      "value": 0.5,
      "random": true,
    },
    "size": {
      "value": 3,
      "random": true,
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#900C3F",
      "opacity": 0.2,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 1.5,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 0.5
        }
      },
      "push": {
        "particles_nb": 3
      }
    }
  },
  "retina_detect": true
});

// Rotating Text Logic
document.addEventListener('DOMContentLoaded', () => {
    const texts = document.querySelectorAll('.tagline-text');
    let currentIndex = 0;

    // The CSS animation is handling the scrolling, we just need to duplicate the first element
    // to the end to make the loop infinite and seamless
    const wrapper = document.querySelector('.tagline-wrapper');
    if (texts.length > 0) {
        const clone = texts[0].cloneNode(true);
        wrapper.appendChild(clone);
    }
});

// Scroll Reveal Animation (Intersection Observer)
const revealElements = document.querySelectorAll('.reveal');

const revealOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
};

const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('active');
        // Optional: Stop observing once revealed
        // observer.unobserve(entry.target);
    });
}, revealOptions);

revealElements.forEach(el => {
    revealObserver.observe(el);
});

// Navigation Highlight on Scroll (Performance Optimized)
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

const navObserverOptions = {
    root: null,
    rootMargin: '-50% 0px -50% 0px', // Trigger when section passes the middle of viewport
    threshold: 0
};

const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const currentId = entry.target.getAttribute('id');
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').substring(1) === currentId) {
                    link.classList.add('active');
                }
            });
        }
    });
}, navObserverOptions);

sections.forEach(section => {
    navObserver.observe(section);
});
