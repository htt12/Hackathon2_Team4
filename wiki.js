function wikiApiCall(){
    var searchTerm = $("#searchTerm").val();
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+searchTerm+"&format=json&callback=?";
    $.ajax( {
        url: url,
        dataType: 'json',
        type: 'GET',
        headers: { 'Api-User-Agent': 'Example/1.0' },
        success: function(data) {
        console.log('success', data)
        var wikiResults = data[1];
        console.log(searchTerm)
        flickrGetData(searchTerm);
        renderResultsOnDom(wikiResults);
        }
} );

}


function renderResultsOnDom(wikiResults){
    for(var i = 0; i < wikiResults.length; i++){
        console.log(wikiResults[i]);
        // var image = getImageFromWiki(wikiResults[i]);
        // console.log(image);
        var $resultDiv = $("<div>").text(wikiResults[i]).addClass("resultDiv");
        $(".results-container").append($resultDiv);
    }
};
