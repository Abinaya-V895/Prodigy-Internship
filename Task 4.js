// You can add interactive features like scroll animations or form validation here

// Example: Scroll to section smoothly when clicking navigation links
const links = document.querySelectorAll('nav a');
links.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    window.scrollTo({
      top: targetElement.offsetTop - 50,
      behavior: 'smooth'
    });
  });
});
