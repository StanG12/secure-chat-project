document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get input values
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    // Perform basic validation
    if (username === 'admin' && password === 'password') {
      // Redirect to chat.html
      window.location.href = 'index.html';
    } else {
      alert('Invalid username or password. Please try again.');
      window.location.href = 'login.html';
      // Redirect to login.html
    }
  });