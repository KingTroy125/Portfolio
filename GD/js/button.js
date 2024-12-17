// Add this to one of your JavaScript files, such as skills.js or create a new buttons.js

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.hover-btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const text = button.querySelector('.hover-btn-text');
            const originalText = text.textContent;
            
            text.textContent = 'Clicked!';
            setTimeout(() => {
                text.textContent = originalText;
            }, 1000);
        });
    });
});

function navigateToPage() {
    window.location.href = "next-page.html"; // Replace "next-page.html" with your target URL
  }
  