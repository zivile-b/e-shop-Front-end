document.addEventListener('keyup', function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        login();
    }
});

const error = document.querySelector('#error-msg');

function showError(code) {

    error.style.display = 'inline-block';

    switch (code) {
        case 0:
            error.innerHTML = 'Error: Email is empty';
            break;
        case 1:
            error.innerHTML = 'Error: It\'s not an email';
            break;
        case 2:
            error.innerHTML = 'Error: Password is empty';
            break;
        case 3:
            error.innerHTML = 'Error: Password is too short';
            break;
        case 4:
            error.innerHTML = 'Error: Bad email or password';
            break;
        default:
            error.innerHTML = 'Error: Unknown error';
            break;
    }

    return code;
}

function login() {

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (!email || email.length == 0) {
        return showError(0);
    }

    if (!validateEmail(email)) {
        return showError(1);
    }

    if (!password || password.length == 0) {
        return showError(2);
    }

    if (password.length <= 4) {
        return showError(3);
    }

    const emailF = document.querySelector('#email').value;
    const passwordF = document.querySelector('#password').value;

    if (emailF == 'admin@admin.com' && base64salt(passwordF) == 'YWRtaW4rKys=') {
        return location.replace('../admin/admin.html');
    }

    for (let i = 0; i < login_info.length; i++) {
        if (login_info[i].email == emailF && login_info[i].password == base64salt(passwordF)) {
            return location.replace('../Vendor/vendor.html#' + login_info[i].id);
        }
    }
    return showError(4);
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function base64salt(string) {
    return btoa(string + '+++');
}

function hoverHelp(val) {
    let el = document.querySelector('.help-text');
    switch (val) {
        case 0:
            el.style.display = 'inline-block';
            break;
        case 1:
            el.style.display = 'none';
            break;
    }

}