document.addEventListener("DOMContentLoaded", function () {
    // Get all links in the navbar
    const navLinks = document.querySelectorAll('.navbar a');

    // Get the current URL's path, excluding query parameters or fragments
    const currentPath = window.location.pathname.split("/").pop();

    // Default to 'index.html' if path is empty (e.g., home page)
    const normalizedPath = currentPath === "" ? "index.html" : currentPath;

    // Loop through the links and add the active class to the one matching the current path
    navLinks.forEach(link => {
        // Compare the href of the link with the normalized path
        if (link.getAttribute('href').includes(normalizedPath)) {
            link.classList.add('active');
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const letters = document.querySelectorAll('.wavy-text span');
    letters.forEach((letter, index) => {
        letter.style.setProperty('--i', index);
    });
});


