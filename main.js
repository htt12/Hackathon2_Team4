
$(document).ready(initializeApp)

function initializeApp(){
    applyClickHandlers();
    renderResultsOnDom();
}

function applyClickHandlers(){
    $("#search").on("click", wikiApiCall);
    $("#search").on("click", youtubeApiCall);
    $(".pulse").on("click", randomAdventure);
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

function randomAdventure() {
    var searchTerm = activityArray[Math.floor((Math.random()*activityArray.length))];
    youtubeApiCall(searchTerm);
    getSearchInfo(searchTerm);
    wikiApiCall(searchTerm);
    $( ".results-container" ).fadeOut( 400 );
    $( ".content" ).removeClass("hidden");

}