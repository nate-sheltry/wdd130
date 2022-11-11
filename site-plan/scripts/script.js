
const button = document.querySelector("#take_a_chance_btn");

function goToPage(){
    var games = ['/dnd_page.html','/fallout_page.html'];
    var gameSelected = Math.floor(Math.random() * 1);
    window.location.href += games[gameSelected];
    return;
}

button.addEventListener("click", goToPage);

