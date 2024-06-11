document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Implement login functionality here
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Example of a basic check (replace this with your actual login logic)
    if (email  && password ) {
        alert('Login successful!');
        // Redirect to user dashboard or home page
        window.location.href = '/dashboard';
    } else {
        alert('Login failed: Invalid email or password');
    }
});

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Implement signup functionality here
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Example of a basic check (replace this with your actual signup logic)
    if (username && email && password) {
        alert('Signup successful!');
        // Redirect to login page or user dashboard
        window.location.href = '/login';
    } else {
        alert('Signup failed: Please fill in all fields');
    }
});

