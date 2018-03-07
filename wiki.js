function wikiApiCall(){
    console.log("wiki api call");

    var searchTerm = $("#searchTerm").val();
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+searchTerm+"&format=json&callback=?";
    // var image = "http://en.wikipedia.org/w/api.php?action=query&titles="+searchTerm+"&prop=pageimages&format=json&pithumbsize=100"

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

function renderResultsOnDom(wikiResults){
    for(var i = 0; i < wikiResults.length; i++){
        console.log(wikiResults[i])
        var $resultDiv = $("<div>").text(wikiResults[i]).addClass("resultDiv");
        $(".results-container").append($resultDiv);
    }
};