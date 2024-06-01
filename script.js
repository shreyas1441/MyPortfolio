AOS.init();

// Add animation to card text
document.querySelectorAll('.card-text').forEach((text) => {
    text.addEventListener('mouseover', () => {
        text.classList.add('animated');
    });
    text.addEventListener('mouseout', () => {
        text.classList.remove('animated');
    });
});