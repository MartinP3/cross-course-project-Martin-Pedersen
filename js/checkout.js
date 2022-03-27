// change game being purchased's name after clicking purchase on previous page.
gamesContainer = document.querySelector(".gamesList");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const worksId = params.get("id");

const url = "https://api.rawg.io/api/games/" + worksId + "?key=1910b7a1d43a48428eb30a50747fbee0";
console.log(url);
async function fetchGame() {

    try {
        const response = await fetch(url);
        const games = await response.json();

        addGames(games);  
        console.log(games);
    }
    catch(error) {
        console.log(error);
        gamesContainer.innerHTML = "oops, an error has occured :(", error;
    }
}
fetchGame();

function addGames(game) {
    gamesContainer.innerHTML =
        `${game.name}`;
}

// checkout form ||  I created a monster.
const form = document.querySelector("#form");
const fullName = document.querySelector("#fullName");
const fullNameError = document.querySelector("#fullNameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const address = document.querySelector("#address");
const addressError = document.querySelector("#addressError");
const city = document.querySelector("#city");
const cityError = document.querySelector("#cityError");
const postalCode = document.querySelector("#postalCode");
const postalCodeError = document.querySelector("#postalCodeError");
const cName = document.querySelector("#cName");
const cNameError = document.querySelector("#cNameError");
const ccNo = document.querySelector("#ccNo");
const ccNoError = document.querySelector("#ccNoError");
const expMonth = document.querySelector("#expMonth");
const expMonthError = document.querySelector("#expMonthError");
const expYear = document.querySelector("#expYear");
const expYearError = document.querySelector("#expYearError");
const ccv = document.querySelector("#ccv");
const ccvError = document.querySelector("#ccvError");
const formSuccess = document.querySelector("#form-success")


function validateForm() {
    event.preventDefault();

    if (checkLength(fullName.value, 4)) {
        fullNameError.style.display = "none";
    } else {
        fullNameError.style.display = "block";
    }
    if (checkLength(address.value, 4)) {
        addressError.style.display = "none";
    } else {
        addressError.style.display = "block";
    }
    if (checkLength(city.value, 3)) {
        cityError.style.display = "none";
    } else {
        cityError.style.display = "block";
    }
    if (validateEmail(email.value)) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }
    if (checkLength(postalCode.value, 3)) {
        postalCodeError.style.display = "none";
    } else {
        postalCodeError.style.display = "block";
    }
    if (checkLength(cName.value, 4)) {
        cNameError.style.display = "none";
    } else {
        cNameError.style.display = "block";
    }
    if (checkLength(ccNo.value, 10)) {
        ccNoError.style.display = "none";
    } else {
        ccNoError.style.display = "block";
    }
    if (checkLength(expMonth.value, 1)) {
        expMonthError.style.display = "none";
    } else {
        expMonthError.style.display = "block";
    }
    if (checkLength(expYear.value, 1)) {
        expYearError.style.display = "none";
    } else {
        expYearError.style.display = "block";
    }
    if (checkLength(ccv.value, 2)) {
        ccvError.style.display = "none";
    } else {
        ccvError.style.display = "block";
    }
    if ((checkLength(fullName.value, 0)) &&
        (checkLength(address.value, 4)) &&
        (checkLength(city.value, 3)) &&
        (checkLength(postalCode.value, 3)) &&
        (checkLength(cName.value, 4)) &&
        (checkLength(ccNo.value, 10)) &&
        (checkLength(expMonth.value, 1)) &&
        (checkLength(expYear.value, 1)) &&
        (checkLength(ccv.value, 2)) &&
        (validateEmail(email.value))) {
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
