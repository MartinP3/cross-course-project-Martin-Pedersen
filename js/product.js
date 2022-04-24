gamesContainer = document.querySelector(".gamesList");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const worksId = params.get("id");

const url = "https://martinwebdev.site/cross-course/wp-json/wc/store/products/" + worksId;
console.log(url);
async function fetchGame() {

    try {
        const response = await fetch(url);
        const games = await response.json();

        addGames(games);
        console.log(games);
    }
    catch (error) {
        console.log(error);
        gamesContainer.innerHTML = "There was an error on our end, please contact Martin Pedersen regarding this to get it fixed as soon as possible.", error;
    }

}
fetchGame();

function addGames(game) {
    gamesContainer.innerHTML =
        `<div class="gameDescription">
        <img src="${game.images[0].src}" class="image"/>
        <h1>${game.name}</h1>
        <p>${game.short_description}</p>
        <p>${game.description}</p>
        <p>Price: ${game.prices.price} american cents!</p>
        <a href="checkout.html?id=${game.id}" class="cta cta-small">Purchase</a>
        </div>`;
}