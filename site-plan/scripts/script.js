
if(document.querySelector("#take-a-chance-btn")){
    const button = document.querySelector("#take-a-chance-btn");

    function goToPage(){
        let games = ['dnd_page.html','fallout_page.html'];
        let gameSelected = Math.round(Math.random() * 1);
        window.location.href = games[gameSelected];
        return;
    }

    button.addEventListener("click", goToPage);
}

