// script.js
// This function generates a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Wait for the DOM to fully load before attaching event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Change background color when the page is clicked
    document.body.addEventListener('click', function() {
        document.body.style.backgroundColor = getRandomColor();
    });
    
    // Display initial message
    const message = document.createElement('h1');
    message.textContent = 'Click anywhere to change the background color!';
    message.style.textAlign = 'center';
    message.style.fontFamily = 'Arial, sans-serif';
    message.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
    message.style.padding = '20px';
    message.style.borderRadius = '10px';
    message.style.position = 'absolute';
    message.style.top = '50%';
    message.style.left = '50%';
    message.style.transform = 'translate(-50%, -50%)';
    document.body.appendChild(message);
});