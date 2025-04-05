// script.js of the navbar menu
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
menuIcon.onclick= () => {
    menuIcon.classList.toggle('bx-x');// Toggle the icon to 'x' when clicked
    navbar.classList.toggle('active');
}

//code of emailjs at the contact form
document.getElementById('contact-form').addEventListener('submit', function(event) {
event.preventDefault(); // Prevent the default form submission

emailjs.sendForm('service_simo', 'template_simo', this)
    .then(function() {
    alert('Message sent successfully!');
    }, function(error) {
    alert('Failed to send the message. Please try again.');
            console.error('Error:', error);
    });
});
