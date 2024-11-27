// Typing Effect
const texts = ["Hi, I'm Tamika.", "Web Developer.", "Creative Thinker."];
let index = 0;
let charIndex = 0;
const typingSpeed = 100;
const erasingSpeed = 50;
const typingElement = document.querySelector('.typing-text');

function type() {
  if (charIndex < texts[index].length) {
    typingElement.textContent += texts[index].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingSpeed);
  } else {
    setTimeout(erase, 2000);
  }
}

function erase() {
  if (charIndex > 0) {
    typingElement.textContent = texts[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingSpeed);
  } else {
    index = (index + 1) % texts.length; // Loop through texts
    setTimeout(type, 1000);
  }
}

document.addEventListener('DOMContentLoaded', type);

// Scroll Progress Bar
window.onscroll = function () {
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / scrollHeight) * 100;
  document.querySelector('.progress-bar').style.width = scrollPercent + "%";
};

// Back to Top Button
const backToTopButton = document.querySelector('.back-to-top');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Contact Form Validation and Submission
const form = document.querySelector('#contact form');
form.addEventListener('submit', function (e) {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  let isValid = true;

  // Clear previous error messages
  document.getElementById('name-error').textContent = '';
  document.getElementById('email-error').textContent = '';
  document.getElementById('message-error').textContent = '';

  // Validation for empty fields
  if (name === '') {
    document.getElementById('name-error').textContent = 'Name is required.';
    isValid = false;
  }

  if (email === '') {
    document.getElementById('email-error').textContent = 'Email is required.';
    isValid = false;
  }

  if (message === '') {
    document.getElementById('message-error').textContent = 'Message is required.';
    isValid = false;
  }

  // Simple email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email && !emailRegex.test(email)) {
    document.getElementById('email-error').textContent = 'Please enter a valid email address.';
    isValid = false;
  }

  if (!isValid) {
    e.preventDefault(); // Prevent form submission if there are errors
    return;
  }

  // Show loading spinner and hide the form
  document.getElementById('loading-spinner').style.display = 'block';
  form.style.display = 'none';

  // Simulate form submission
  setTimeout(function () {
    // Simulate success response
    document.getElementById('loading-spinner').style.display = 'none';
    form.reset();
    form.style.display = 'block';

    // Show success message
    document.getElementById('success-message').style.display = 'block';
    setTimeout(function () {
      document.getElementById('success-message').style.display = 'none';
      form.reset();
      form.style.display = 'block';
    }, 5000);
  }, 3000);
});

