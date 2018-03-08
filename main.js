
$(document).ready(initializeApp)

function initializeApp(){
    applyClickHandlers();
    renderResultsOnDom();
}

function applyClickHandlers(){
    $("#search").on("click", wikiApiCall);
    $("#search").on("click", youtubeApiCall);
}

function handleResultClick(){
    var searchTerm = $(this).text();
    // flickrGetData(searchTerm);
    youtubeApiCall(searchTerm);
    getSearchInfo(searchTerm);
    wikiApiCall(searchTerm);
    
    // getSearchInfo(searchTerm);
    $( ".results-container" ).fadeOut( 400 );
    $( ".content" ).removeClass("hidden");
}


