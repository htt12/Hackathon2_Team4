
$(document).ready(initializeApp)

function initializeApp(){
    applyClickHandlers();
}

function applyClickHandlers(){
    $("#search").on("click", wikiApiCall);
    $("#search").on("click", youtubeApiCall);
    $('#search').on("click", flickrApiCall)
}




