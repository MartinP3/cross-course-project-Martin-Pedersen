const gamesContainer = document.querySelector(".gamesList");

const url = "https://martinwebdev.site/cross-course/wp-json/wc/store/products";

async function fetchGames() {

    try {
        const response = await fetch(url);
        const results = await response.json();

        gamesContainer.innerHTML = "";

        const games = results;
        console.log(games);

        games.forEach(function(game) {
            gamesContainer.innerHTML +=
                `<div class="row product">
                <a href="product.html?id=${game.id}" class="column">
                    <div class="image"><img src="${game.images[0].src}"/></div>
                    <div>       
                    <h4 class="name" style="color: white">${game.name}</h4>         
                    </div>
                </a></div>`;
        }); 
    }
    catch(error) {
        console.log(error);
        gamesContainer.innerHTML ="There was an error on our end, please contact Martin Pedersen regarding this to get it fixed as soon as possible.", error;
    }
}
fetchGames();