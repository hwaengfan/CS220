const passField = document.querySelector('.pass-key');
const showButton = document.querySelector('.show');

showButton.addEventListener('click', function () {
    if (passField.type === "password") {
        passField.type = "text";
        showButton.textContent = "HIDE";
        showButton.style.color = "#3498db";
    } else {
        passField.type = "password";
        showButton.textContent = "SHOW";
        showButton.style.color = "#222";
    }
});