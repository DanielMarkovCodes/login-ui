const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const emailLabel = document.querySelector("label[for='email']");
const passwordLabel = document.querySelector("label[for='password']");
const themeToggle = document.getElementById('themeToggle');
const container = document.querySelector('.container');

emailInput.addEventListener("input", () => {
    if (emailInput.value.trim() !== "") {
        emailLabel.style.opacity = "0";
    } else {
        emailLabel.style.opacity = "1";
    }
});

passwordInput.addEventListener("input", () => {
    if (passwordInput.value.trim() !== "") {
        passwordLabel.style.opacity = "0";
    } else {
        passwordLabel.style.opacity = "1";
    }
});

themeToggle.addEventListener('change', () => {
    container.classList.toggle('light-theme');
});

