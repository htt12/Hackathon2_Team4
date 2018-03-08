
$(document).ready(initializeApp)

function initializeApp(){
    applyClickHandlers();
    wikiApiCall();
}

function applyClickHandlers(){
    $("#search").on("click", wikiApiCall);
    $("#search").on("click", youtubeApiCall);
}

function handleResultClick(){
    var searchTerm = $(this).text();
    // flickrGetData(searchTerm);
    youtubeApiCall(searchTerm);
    // getSearchInfo(searchTerm);
    $( ".results-container" ).fadeOut( 400 );
    $( ".content" ).removeClass("hidden");
}


