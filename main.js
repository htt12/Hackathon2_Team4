
$(document).ready(initializeApp)

function initializeApp(){
    applyClickHandlers();
}

function applyClickHandlers(){
    $("#search").on("click", wikiApiCall);
}




