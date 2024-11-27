// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', function (e) {
      e.preventDefault(); // Prevent the default anchor behavior

      const targetId = this.getAttribute('href').slice(1); // Get the section ID
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
          window.scrollTo({
              top: targetSection.offsetTop - 50, // Adjust for potential header offset
              behavior: 'smooth' // Smooth scrolling effect
          });
      }
  });
});

// Form Validation
const form = document.querySelector('#contact form');
form.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent the default form submission

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (name === '' || email === '' || message === '') {
      alert('Please fill out all fields before submitting.');
      return;
  }

  // Simple email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
  }

  alert('Thank you for reaching out! Your message has been sent.');
  form.reset(); // Clear the form after submission
});