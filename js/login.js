const form = document.querySelector("#form");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const password = document.querySelector("#password");
const passwordError = document.querySelector("#passwordError");
const formSuccess = document.querySelector("#form-success");

function validateForm() {
    event.preventDefault();

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