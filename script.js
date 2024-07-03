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

// document.getElementById('hamburger').addEventListener('click', function() {
//   var menu = document.querySelector('.mobile-menu');
//   menu.classList.toggle('open');
// });

document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.mobile-menu-bar button.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');

  // Toggle mobile menu
  hamburger.addEventListener('click', function() {
    // Toggle open class on hamburger button
    hamburger.classList.toggle('open');
    
    // Toggle open class on mobile menu
    mobileMenu.classList.toggle('open');

    // Disable scrolling when the menu is open (optional)
    document.body.classList.toggle('no-scroll');
  });

  // Close mobile menu when clicking outside the menu (optional)
  document.addEventListener('click', function(event) {
    const isClickInsideMenu = mobileMenu.contains(event.target);
    const isClickOnHamburger = hamburger.contains(event.target);

    if (!isClickInsideMenu && !isClickOnHamburger && mobileMenu.classList.contains('open')) {
      // Close the menu
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
      
      // Enable scrolling again
      document.body.classList.remove('no-scroll');
    }
  });

  // Close mobile menu when clicking a menu item (optional)
  const menuItems = document.querySelectorAll('.mobile-menu a');
  menuItems.forEach(item => {
    item.addEventListener('click', function() {
      // Close the menu
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
      
      // Enable scrolling again
      document.body.classList.remove('no-scroll');
    });
  });
});



  // Smooth scrolling function
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();

      const sectionId = this.getAttribute('href').substring(1);
      const section = document.getElementById(sectionId);

      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
      });
    });
  });