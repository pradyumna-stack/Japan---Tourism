document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.navbar a');
    const sections = document.querySelectorAll('section');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default anchor click behavior
            const targetId = this.getAttribute('href').substring(1); // Get the target section id

            // Hide all sections
            sections.forEach(section => {
                section.style.display = 'none';
            });

            // Show the target section
            document.getElementById(targetId).style.display = 'block';
        });
    });
});
