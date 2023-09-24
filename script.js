/*Create form validation for the registration form */
document.addEventListener('DOMContentLoaded', function () {
    // Get form and form elements
    const form = document.getElementById('registration-form');
    const emailInput = document.getElementById('email');
    const countryInput = document.getElementById('country');
    const zipCodeInput = document.getElementById('zip-code');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');
    const submitButton = document.querySelector('button[type="submit"]');
    const successMessage = document.getElementById('success-message');
    // Validation functions for each field
    function validateEmail() {
        const emailValue = emailInput.value;
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailRegex.test(emailValue)) {
            document.getElementById('email-error').style.display = 'block';
            return false;
        }
        document.getElementById('email-error').style.display = 'none';
        return true;
    }
    function validateCountry() {
        if (countryInput.value === '') {
            document.getElementById('country-error').style.display = 'block';
            return false;
        }
        document.getElementById('country-error').style.display = 'none';
        return true;
    }
    function validateZipCode() {
        const zipCodeValue = zipCodeInput.value;
        // Add your zip code validation logic here (e.g., regex)
        if (!/^\d{5}$/.test(zipCodeValue)) {
            document.getElementById('zip-code-error').style.display = 'block';
            return false;
        }
        document.getElementById('zip-code-error').style.display = 'none';
        return true;
    }
    function validatePassword() {
        const passwordValue = passwordInput.value;
        if (passwordValue.length < 8) {
            document.getElementById('password-error').style.display = 'block';
            return false;
        }
        document.getElementById('password-error').style.display = 'none';
        return true;
    }
    function validateConfirmPassword() {
        const passwordValue = passwordInput.value;
        const confirmPasswordValue = confirmPasswordInput.value;
        if (passwordValue !== confirmPasswordValue) {
            document.getElementById('confirm-password-error').style.display = 'block';
            return false;
        }
        document.getElementById('confirm-password-error').style.display = 'none';
        return true;
    }
    // Event listeners for live validation
    emailInput.addEventListener('blur', validateEmail);
    countryInput.addEventListener('blur', validateCountry);
    zipCodeInput.addEventListener('blur', validateZipCode);
    passwordInput.addEventListener('blur', validatePassword);
    confirmPasswordInput.addEventListener('blur', validateConfirmPassword);
    // Submit handler with final validation
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const isEmailValid = validateEmail();
        const isCountryValid = validateCountry();
        const isZipCodeValid = validateZipCode();
        const isPasswordValid = validatePassword();
        const isConfirmPasswordValid = validateConfirmPassword();
        if (isEmailValid && isCountryValid && isZipCodeValid && isPasswordValid && isConfirmPasswordValid) {
            // Show success message and reset the form
            successMessage.style.display = 'block';
            form.reset();
        }
    });
});
