document.getElementById('light-mode-toggle').addEventListener('click', function() {
  document.body.classList.toggle('light-mode');

  // Toggle icon
  const icon = this.querySelector('i');
  if (document.body.classList.contains('light-mode')) {
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
  } else {
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const nameSpan = document.getElementById('typed-name');
  const cursorSpan = document.getElementById('cursor');
  const name = 'Rahul Setia'; // Replace with your name
  
  let charIndex = 0;
  
  function type() {
    if (charIndex < name.length) {
      nameSpan.textContent += name.charAt(charIndex);
      charIndex++;
      setTimeout(type, 150); // Adjust typing speed (milliseconds)
    } else {
      cursorSpan.style.display = 'inline-block'; // Show cursor after typing
    }
  }
  
  type();
});

// Get the menu bar element
const menuBar = document.querySelector('.menu-bar');

// Get the offset position of the menu bar
const offsetPosition = menuBar.offsetTop;

// Function to handle scroll event
function handleScroll() {
if (window.scrollY > offsetPosition) {
  menuBar.classList.add('fixed');
} else {
  menuBar.classList.remove('fixed');
}
}

// Listen for scroll events
window.addEventListener('scroll', handleScroll);

document.getElementById('hamburger').addEventListener('click', function() {
  var menu = document.querySelector('.mobile-menu');
  menu.classList.toggle('open');
});
