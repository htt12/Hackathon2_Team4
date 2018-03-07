
$(document).ready(initializeApp)
var firstGame = null;

function initializeApp(){
    applyClickHandlers();
}

function applyClickHandlers(){
    $("#search").on("click", wikiApiCall);
}

