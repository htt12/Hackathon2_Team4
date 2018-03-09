function wikiApiCall(searchTerm){
    // var searchTerm = $("#searchTerm").val();
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+searchTerm+"&format=json&callback=?";
    $.ajax( {
        url: url,
        dataType: 'json',
        type: 'GET',
        headers: { 'Api-User-Agent': 'Example/1.0' },
        success: function(data) {
        console.log('success', data)
        var wikiResults = data[2];
        console.log(wikiResults[0])
        renderWikiDescription(wikiResults, searchTerm);
        }
} );

}


var activityArray = ['Traveling', 'Snow Boarding', 'Surfing', 'Programming', 'Beer Brewing', 'Cooking', 'Cliff Jumping','Shark Diving', 'Hiking', 'Cave Diving','Ice Skating',' Kayaking','Mountaineering',' Bungee Jupming',' Poll Dancing',' Spelunking',' Mountain Biking',' Sailing',' Sandboarding','Learning New Language',' Wine Tasting',' Singing',' Running with the Bulls',' White water rafting',' Wingsuit flight','Swimming',' Dog Sledding',' Ice Climbing','Rock Climbing',' Backpacking',' Skydiving', 'Scuba Diving', 'Dirt Bike Riding', 'Power Lifting', 'Flying a Plane', 'Horseback Riding', 'Gambling', 'Fencing', 'Golfing', 'Weightlifting', 'Archery', 'Ping Pong', 'Dodgeball', 'Skateboarding', 'Wakeboard', 'Quidditch', 'Drifting', 'Curling', 'Yoga', 'Painting', 'Bowling', "Clubbing", "Beer Pong", "Karate", "UFC Fighting", "Paintball", "Arm Wrestling", "Crossfit", "Social Drinking", "Centering Div in Div", "Modding Your Car", "Improv", "Dancing"];

function renderResultsOnDom(){
    for(var i = 0; i < activityArray.length; i++){
        var $resultDiv = $("<div>").addClass("resultDiv");
        var $titleBar = $("<div>").text(activityArray[i]).addClass("titleBar").on("click", handleResultClick);
        $($resultDiv).append($titleBar);
        $(".results-container").append($resultDiv);
    }
};

function renderWikiDescription(wikiResults, searchTerm){
    console.log(searchTerm);
    var wikiDescription = $("<div>").text(wikiResults).addClass("wiki-description");
    var wikiTitle = $("<div>").text(searchTerm).addClass("wiki-title");
    $(".wiki-content").append(wikiDescription);
    $(".wiki-content").append(wikiTitle);
}