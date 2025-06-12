function togglePassword(id, icon) {
  const input = document.getElementById(id);
  const isPassword = input.type === 'password';
  input.type = isPassword ? 'text' : 'password';

  icon.classList.toggle('fa-eye');
  icon.classList.toggle('fa-eye-slash');
}

document.getElementById("signUpForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const password = document.getElementById("password").value.trim();
  const confirmPassword = document.getElementById("confirmPassword").value.trim();

  if (password === "") {
    alert("Password cannot be empty.");
    return;
  }

  if (confirmPassword !== password) {
    alert("Password confirmation does not match.");
    return;
  }

window.location.href = "../home/home.html";
});


