function wikiApiCall(){
    // var searchTerm = $("#searchTerm").val();
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=skydiving&format=json&callback=?";
    $.ajax( {
        url: url,
        dataType: 'json',
        type: 'GET',
        headers: { 'Api-User-Agent': 'Example/1.0' },
        success: function(data) {
        console.log('success', data)
        var wikiResults = data[1];
        renderResultsOnDom(wikiResults);
        }
} );

}

var activityArray = ['Travel', 'Surf', 'Cook', 'Cliff Jumping','Shark Diving', 'Volcano Trekking', 'Cave Diving','Ice Marathon',' Kayaking With Whales','Mountaineering',' Bungee jupming',' Portledging',' Spelunking',' Mountain bike',' Sailing',' Sandboarding',' Learn a New Language',' Wine Tasting',' Sing',' Running of the Bulls',' White Water Rafting',' Wingsuit Flight',' Ice Swimming',' Dog Sled Racing',' Ice Climb',' Snow Mobiling',' Backpack Europe',' Skydiving', 'Scuba Diving'];

function renderResultsOnDom(){
    for(var i = 0; i < activityArray.length; i++){
        // var image = getImageFromWiki(wikiResults[i]);
        // console.log(image);
        // var $resultDiv = $("<div>").text(activityArray[i]).addClass("resultDiv").on("click", handleResultClick);
        // $(".results-container").append($resultDiv);
        
        var $resultDiv = $("<div>").addClass("resultDiv");
        var $titleBar = $("<div>").text(activityArray[i]).addClass("titleBar").on("click", handleResultClick);
        $($resultDiv).append($titleBar);
        $(".results-container").append($resultDiv);
       
    }
};
