// Initialize Lenis for smooth scrolling
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Ease-out quartic
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false
});

// Sync Lenis with ScrollTrigger
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

// Create Parallax Effect
const parallaxImages = document.querySelectorAll('.parallax-image');

parallaxImages.forEach(image => {
    const speed = parseFloat(image.dataset.speed) || 1;

    gsap.to(image, {
        y: () => speed * ScrollTrigger.maxScroll(window) * 0.1, // Adjust multiplier for intensity
        ease: 'none',
        scrollTrigger: {
            trigger: image,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
        }
    });
});

// Optional: Add hover effect
parallaxImages.forEach(image => {
    image.addEventListener('mouseenter', () => {
        gsap.to(image.querySelector('img'), {
            scale: 1.05,
            duration: 0.3
        });
    });

    image.addEventListener('mouseleave', () => {
        gsap.to(image.querySelector('img'), {
            scale: 1,
            duration: 0.3
        });
    });
});