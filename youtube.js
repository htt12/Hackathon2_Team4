
var youtube_apikey = "AIzaSyADtzYRgD6yRSIuqnOJtCmsnZ5nEd7x6i0";


function youtubeApiCall(searchTerm){
    var url = 'https://www.googleapis.com/youtube/v3/search'; //?part=snippet&maxResults=25&q='+searchTerm+'&type=video&videoCaption=closedCaption&key='+youtube_apikey;
    $.ajax({
        data: $.extend({
            key: youtube_apikey,
            q:  searchTerm + " Tutorial",
            part: 'snippet',
        }, {
            maxResults: 5,
            order: 'relevance'}),
        dataType: 'json',
        type: 'GET',
        url: url,
        success: function(data){
            console.log('success for youtube', data)
            displayVideo(data);
        }
    })}

function displayVideo(data){
    var randomNumber = Math.floor((Math.random()*5));
    var videoURL = 'https://www.youtube.com/embed/' + data.items[randomNumber]['id'].videoId +'?autoplay=1';
    var div = $('<div>').attr('class', 'videoWrapper');
    var videoFrame = $('<iframe></iframe>').attr({
        'src': videoURL,
        'width': '700',
        'height': '400',
        'frameborder': '0',
        'allowfullscreen':'',
        'class': 'youtubeIframe'
    });

    div.append(videoFrame);
    $('.youtube-video').append(div);

    console.log(videoURL);
}
