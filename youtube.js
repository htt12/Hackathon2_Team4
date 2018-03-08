
var youtube_apikey = "AIzaSyADtzYRgD6yRSIuqnOJtCmsnZ5nEd7x6i0";

function youtubeApiCall(){
    var qSearchTerm = $("#searchTerm").val();
    var url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q='+qSearchTerm+'&type=video&videoCaption=closedCaption&key='+youtube_apikey;
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
    var randomNumber = Math.floor((Math.random()*5))
    var videoURL = 'https://www.youtube.com/embed/' + data.items[randomNumber]['id'].videoId;
    var div = $('<div>');
    var videoFrame = $('<iframe></iframe>').attr({
        'src': videoURL,
        'width': '700',
        'height': '450',
        'frameborder': '0',
        'allowfullscreen':''
    });

    div.append(videoFrame);
    $('.youtube-video').append(div);
}
