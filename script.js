// Form Validation
const form = document.querySelector('#contact form');
form.addEventListener('submit', function (e) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
        alert('Please fill out all fields before submitting.');
        e.preventDefault();  // Prevent form submission only if validation fails
        return;
    }

    // Simple email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        e.preventDefault(); // Prevent form submission if email is invalid
        return;
    }

    // If all checks pass, allow the form to submit to Formspree
    alert('Thank you for reaching out! Your message has been sent.');
});