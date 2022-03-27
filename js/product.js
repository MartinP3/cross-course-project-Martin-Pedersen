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
        gamesContainer.innerHTML = "There was an error on our end, please contact Martin Pedersen regarding this to get it fixed as soon as possible.", error;
    }

}
fetchGame();

function addGames(game) {
    gamesContainer.innerHTML =
        `<div class="gameDescription">
        <img src="${game.background_image}" class="image"/>
        <h1>${game.name}</h1>
        <p>${game.name} was released in: <b>${game.released}</b>
        <h2>Ratings</h2>
        <p>Metacritic has rated it: ${game.metacritic}</p>
        <p>And user have rated it an average of: ${game.rating}</p>
        <p>Price: <b>$14.99</b></p>
        <a href="checkout.html?id=${game.id}" class="cta cta-small">Purchase</a>
        </div>`;
}