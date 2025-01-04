// Simple client-side logic to simulate form submission

// Dummy data for users (this would typically come from a backend database)
const users = [];

document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('newUsername').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('newPassword').value;

    // Add user to the dummy "database"
    users.push({ username, email, password });
    alert('User successfully registered!');
    window.location.href = '/login.html';  // Redirect to login after signup
});

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if the user exists in the dummy "database"
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        alert('Login successful!');
        window.location.href = '/';  // Redirect to home after login
    } else {
        alert('Invalid username or password!');
    }
});
