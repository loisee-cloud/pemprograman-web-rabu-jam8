// Add event listener to handle form submission
document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const position = document.getElementById('position').value;
    const country = document.getElementById('country').value;
    const city = document.getElementById('city').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    alert(`Registration successful!\n\nDetails:\nName: ${fullName}\nEmail: ${email}\nPhone: ${phone}\nPosition: ${position}\nCountry: ${country}\nCity: ${city}\nGender: ${gender}`);
});
