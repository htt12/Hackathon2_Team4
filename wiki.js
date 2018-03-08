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

var activityArray = ['Travel', 'Surf', 'Cook', 'Cliff jumping','Shark diving', 'Volcano Trekking', 'Cave diving','Ice Marathon',' Kayaking with whales','Mountaineering',' Bungee jupming',' Portledging',' Spelunking',' Mountain bike',' Sailing',' Sandboarding',' Learn a new language',' Wine tasting',' Sing',' Running of the Bulls',' White water rafting',' Wingsuit flight',' Ice swimming',' Dog sled racing',' Ice climb',' Snow mobiling',' Backpack Europe',' Skydiving', 'Scuba Diving'];

function renderResultsOnDom(){
    for(var i = 0; i < activityArray.length; i++){
        // var image = getImageFromWiki(wikiResults[i]);
        // console.log(image);
        var $resultDiv = $("<div>").text(activityArray[i]).addClass("resultDiv").on("click", handleResultClick);
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