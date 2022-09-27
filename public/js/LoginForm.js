const loginForm = document.querySelector('.login-form');
let user = document.getElementById('user');
let password = document.getElementById('password');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let loginData = {
        user: user.value,
        password: password.value,
    }

    fetch(window.location.origin.toString() + '/login-validation', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(loginData),
    })
        .then(response => response.text())
        .then((response) => {
            console.log(response);
            if (response == 'wrong email or phone') {
                alert('We do not have your email or phone registered, please sign up!')
            }
            else if (response == 'wrong password') {
                alert('Wrong password, please try again!');
            }
        })
});