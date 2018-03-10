
$(document).ready(initializeApp)

function initializeApp(){
    applyClickHandlers();
    renderActivitiesOnDom();
}

function applyClickHandlers(){
    $("#search").on("click", wikiApiCall);
    $("#search").on("click", youtubeApiCall);
    $(".pulse").on("click", randomAdventure);
}


function handleResultClick(){
    var searchTerm = $(this).text();
    youtubeApiCall(searchTerm);
    getSearchInfo(searchTerm);
    wikiApiCall(searchTerm);
    $( ".results-container" ).fadeOut( 400 );
    $( ".content" ).removeClass("hidden");
}

function randomAdventure() {
    $(".youtube-video").empty();
    $(".wiki-content").empty();
    var searchTerm = activityArray[Math.floor((Math.random()*activityArray.length))];
    youtubeApiCall(searchTerm);
    getSearchInfo(searchTerm);
    wikiApiCall(searchTerm);
    $( ".results-container" ).fadeOut( 400 );
    $( ".content" ).removeClass("hidden");
}