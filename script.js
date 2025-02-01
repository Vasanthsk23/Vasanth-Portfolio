// JavaScript to handle form submission
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    let name = this.querySelector('input[type="text"]').value;
    let email = this.querySelector('input[type="email"]').value;
    let message = this.querySelector('textarea').value;

    // Basic validation (can be extended as needed)
    if (name && email && message) {
        alert(`Thank you for your message, ${name}! We'll get back to you shortly.`);
        this.reset(); // Reset the form after submission
    } else {
        alert('Please fill in all fields.');
    }
});
