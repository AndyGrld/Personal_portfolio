// Function to toggle between dark and light themes
function toggleTheme() {
    const themeLink = document.getElementById('theme-link');
    
    if (themeLink.getAttribute('href') === 'styles.css') {
        themeLink.setAttribute('href', 'styles-dark.css');
    } else {
        themeLink.setAttribute('href', 'styles.css');
    }
}

// Add event listener to the theme switch button
document.getElementById('theme-switch').addEventListener('click', toggleTheme);
