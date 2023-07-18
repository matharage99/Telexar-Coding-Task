// Register a new student
function registerStudent() {

    const firstname = document.getElementById('fname').value;
    const lastname = document.getElementById('lname').value;

    // Clear input fields
    document.getElementById('fname').value = '';
    document.getElementById('lname').value = '';
    document.getElementById('gud').value = '';
    document.getElementById('age').value = '';
    document.getElementById('gender').value = '';
    document.getElementById('mobile').value = '';
    document.getElementById('address').value = '';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
    document.getElementById('repassword').value = '';
    
    // Show success message
    alert('Registered successfully!');
  }