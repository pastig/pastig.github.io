document.addEventListener('DOMContentLoaded', function () {
    // Navbar items fade with shadow
    const navbarItems = document.querySelectorAll('.navbar ul li');
    navbarItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
            item.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)'; // Drop shadow effect
        }, 120 * index); // Staggered effect
    });

    // Content fade in with shadow
    const contentContainers = document.querySelectorAll('.card');
    setTimeout(() => {
        contentContainers.forEach((container, index) => {
            setTimeout(() => {
                container.style.opacity = '1';
                container.style.transform = 'translateY(0)';
                container.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
            }, 200 * index);
        });
    }, 120 * navbarItems.length);
});

document.addEventListener('DOMContentLoaded', function () {
    const currentPage = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll('.navbar ul li a');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage || (currentPage === '' && link.getAttribute('href') === 'index.html')) {
            link.classList.add('active');
        }
    });
});
