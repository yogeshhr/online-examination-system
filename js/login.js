//ROLE SWITCH

const roleBtns = document.querySelectorAll('.role-btn');
let selectedRole = "student";

roleBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    roleBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    selectedRole = btn.dataset.role;
  });
});


//LOGIN VALIDATION

const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('error-message');

loginForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  errorMessage.textContent = "";

  //Validation
  if (!email || !password) {
    errorMessage.textContent = "All fields are required.";
    return;
  }

  if (!validateEmail(email)) {
    errorMessage.textContent = "Please enter a valid email address.";
    return;
  }

  if (password.length < 6) {
    errorMessage.textContent = "Password must be at least 6 characters.";
    return;
  }

  //Fake authentication logic
  if (selectedRole === "student") {
    window.location.href = "student-dashboard.html";
  } else {
    window.location.href = "admin-dashboard.html";
  }

});


//EMAIL VALIDATION FUNCTION

function validateEmail(email) {
  const regex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  return regex.test(email);
}