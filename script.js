
  const realUser = {
    username: 'escalador321',
    password: 'escala2025'
  };

  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("login_form");

    if (!form) return;

    const errorMsg = document.getElementById("login_error");

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const usernameInput = document.getElementById("username").value.trim();
      const passwordInput = document.getElementById("password").value.trim();

      if (usernameInput === realUser.username && passwordInput === realUser.password) {
        errorMsg.style.color = "lightgreen";
        errorMsg.textContent = "¡Inicio de sesión exitoso! Redirigiendo...";

        setTimeout(() => {
          window.location.href = "index.html";
        }, 1500);
      } else {
        errorMsg.style.color = "red";
        errorMsg.textContent = "Usuario o contraseña incorrectos.";
      }
    });
  });
