function validateSignIn() {
    let isValid = true;
    document.getElementById('signInEmailError').textContent = '';
    document.getElementById('signInPasswordError').textContent = '';

    const signInEmail = document.getElementById('signInEmail').value;
    const signInPassword = document.getElementById('signInPassword').value;

    if (!signInEmail.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)) {
        document.getElementById('signInEmailError').textContent = 'Please enter a valid email address.';
        isValid = false;
    }

    if (signInPassword.length < 8) {
        document.getElementById('signInPasswordError').textContent = 'Password must be at least 8 characters long.';
        isValid = false;
    }

    if (!isValid) {
        console.log('SignIn form is not valid');
    }
}

function validateSignUp() {
    let isValid = true;
    document.querySelectorAll('.error').forEach(el => el.textContent = '');

    const fullName = document.getElementById('fullName').value.trim();
    const phone = document.getElementById('phone').value;
    const dob = document.getElementById('dob').value;
    const gender = document.getElementById('gender').value;
    const email = document.getElementById('signUpEmail').value;
    const password = document.getElementById('signUpPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const terms = document.getElementById('terms').checked;

    if (!fullName) {
        document.getElementById('fullNameError').textContent = 'Full name is required.';
        isValid = false;
    }

    if (!phone.match(/^\+?\d{0,13}$/)) {
        document.getElementById('phoneError').textContent = 'Invalid phone number.';
        isValid = false;
    }

    if (!dob) {
        document.getElementById('dobError').textContent = 'Date of birth is required.';
        isValid = false;
    } else {
        const dobDate = new Date(dob);
        const now = new Date();
        if (dobDate >= now) {
            document.getElementById('dobError').textContent = 'Date of birth must be in the past.';
            isValid = false;
        }
    }

    if (!gender) {
        document.getElementById('genderError').textContent = 'Gender selection is required.';
        isValid = false;
    }

    if (!email.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)) {
        document.getElementById('signUpEmailError').textContent = 'Invalid email format.';
        isValid = false;
    }

    if (password.length < 8) {
        document.getElementById('signUpPasswordError').textContent = 'Password must be at least 8 characters long.';
        isValid = false;
    }

    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = 'Passwords do not match.';
        isValid = false;
    }

    if (!terms) {
        document.getElementById('termsError').textContent = 'You must agree to the terms and conditions.';
        isValid = false;
    }

    if (!isValid) {
        console.log('SignUp form is not valid');
    }
}