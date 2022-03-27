const form = document.querySelector("#form");
const orderNum = document.querySelector("#orderNum");
const orderNumError = document.querySelector("#orderNumError"); // leaving this in case i ever make it a requirement
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const subjectMatter = document.querySelector("#subjectMatter");
const subjectMatterError = document.querySelector("#subjectMatterError");
const formSuccess = document.querySelector("#form-success");

function validateForm() {
    event.preventDefault();

    if (validateEmail(email.value)) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }
    if (checkLength(subject.value, 4)) {
        subjectError.style.display = "none";
    } else {
        subjectError.style.display = "block";
    }
    if (checkLength(subjectMatter.value, 19)) {
        subjectMatterError.style.display = "none";
    } else {
        subjectMatterError.style.display = "block";
    }
    if ((validateEmail(email.value)) &&
        (checkLength(subject.value, 4)) &&
        (checkLength(subjectMatter.value, 19))) {
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