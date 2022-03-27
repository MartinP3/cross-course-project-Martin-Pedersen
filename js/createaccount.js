const form = document.querySelector("#form");
const username = document.querySelector("#username");
const usernameError = document.querySelector("#usernameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const password = document.querySelector("#password");
const passwordError = document.querySelector("#passwordError");
const password2 = document.querySelector("#password2");
const password2Error = document.querySelector("#password2Error");
const formSuccess = document.querySelector("#form-success");

function validateForm() {
    event.preventDefault();

    if (checkLength(username.value, 4)) {
        usernameError.style.display = "none";
    } else {
        usernameError.style.display = "block";
    }
    if (validateEmail(email.value)) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }
    if (checkLength(password.value, 7)) {
        passwordError.style.display = "none";
    } else {
        passwordError.style.display = "block";
    }
    if (checkLength(password2.value, 7)) {
        password2Error.style.display = "none";
    } else {
        password2Error.style.display = "block";
    }

    if ((validateEmail(email.value)) &&
        (checkLength(password.value, 7))) {
        formSuccess.style.display = "block";
    } else {
        formSuccess.style.display = "none";
    }
}
form.addEventListener("submit", validateForm);

function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const RegEx = /\S+@\S+\.\S+/;
    const emailPattern = RegEx.test(email);
    return emailPattern;
}