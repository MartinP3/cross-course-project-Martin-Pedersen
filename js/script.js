const gamesContainer = document.querySelector(".gamesList");

const url = "https://api.rawg.io/api/games?key=1910b7a1d43a48428eb30a50747fbee0";

async function fetchGames() {

    try {
        const response = await fetch(url);
        const results = await response.json();

        gamesContainer.innerHTML = "";

        const games = results.results;
        console.log(games);
        
        games.forEach(function(game) {
            gamesContainer.innerHTML +=
                `<div class="row product">
                <a href="product.html?id=${game.id}" class="column">
                    <div class="image" style="background-image: url(${game.background_image})"></div>
                    <div>
                    <h4 class="name">${game.name}</h4>                
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