// Get the navbar element
const navbar = document.getElementById('navbar');

// Function to change navbar style on scroll
window.onscroll = function () {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
};

// Optional: Change navbar style when hovering over menu items
const navLinks = document.querySelectorAll('.navbar ul li a');

navLinks.forEach(link => {
  link.addEventListener('mouseenter', () => {
    link.style.color = '#ff6347'; // Change font color on hover
  });

  link.addEventListener('mouseleave', () => {
    link.style.color = ''; // Reset font color on hover out
  });
});
