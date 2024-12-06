const menu = document.getElementById("menu");
const closeButton = document.getElementById("close-mobile");
const nav = document.getElementById("nav-mobile");
const navLink = document.querySelectorAll(".nav-link");

menu.addEventListener("click", () => {
  nav.classList.add("show");
});

closeButton.addEventListener("click", () => {
  nav.classList.remove("show");
});

navLink.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("show");
  });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
  } else {
      navbar.classList.remove('scrolled');
  }
});

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Scroll animations
document.addEventListener('DOMContentLoaded', function() {
  // Intersection Observer for scroll animations
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              // Add visible class to all animate-text elements inside the card
              entry.target.querySelectorAll('.animate-text').forEach((el, index) => {
                  setTimeout(() => {
                      el.classList.add('visible');
                  }, index * 100); // Staggered animation
              });
          }
      });
  }, {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px'
  });

  // Observe all project cards
  document.querySelectorAll('.project-card').forEach(card => {
      observer.observe(card);
  });

  // 3D Tilt Effect
  document.querySelectorAll('.project-card').forEach(card => {
      card.addEventListener('mousemove', (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          
          const rotateX = (y - centerY) / 10;
          const rotateY = -(x - centerX) / 10;
          
          card.style.transform = `
              perspective(1000px)
              rotateX(${rotateX}deg)
              rotateY(${rotateY}deg)
              translateZ(10px)
          `;
      });

      card.addEventListener('mouseleave', () => {
          card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
      });
  });

  const iframe = document.querySelector('.spline-container iframe');
  
  // Function to check if iframe loaded successfully
  //function checkIframeLoaded() {
      //try {
          // Check if we can access the iframe's document
          //const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
          //if (iframeDoc) {
              //iframe.classList.add('loaded');
              //return;
          //}
      //} catch (e) {
          // If there's an error, retry after a delay
          //setTimeout(checkIframeLoaded, 100);
      //}
  //}

  // Start checking if iframe is loaded
  //checkIframeLoaded();

  // Backup timeout to show iframe anyway after 5 seconds
  //setTimeout(() => {
      //iframe.classList.add('loaded');
  //}, 5000);
});
