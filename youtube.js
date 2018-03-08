
var youtube_apikey = "AIzaSyADtzYRgD6yRSIuqnOJtCmsnZ5nEd7x6i0";


function youtubeApiCall(searchTerm){
    var url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q='+searchTerm+'&type=video&videoCaption=closedCaption&key='+youtube_apikey;
    $.ajax({
        dataType: 'json',
        type: 'GET',
        url: url,
        //maxResults: 5, This is set by default
        success: function(data){
            console.log('success for youtube', data)
            displayVideo(data);
        }
    })}

function displayVideo(data){
    var randomNumber = Math.floor((Math.random()*25));
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
