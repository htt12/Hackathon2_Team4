
var youtube_apikey = "AIzaSyADtzYRgD6yRSIuqnOJtCmsnZ5nEd7x6i0";


function youtubeApiCall(searchTerm){
    var url = 'https://www.googleapis.com/youtube/v3/search'; //?part=snippet&maxResults=25&q='+searchTerm+'&type=video&videoCaption=closedCaption&key='+youtube_apikey;
    $.ajax({
        data: $.extend({
            key: youtube_apikey,
            q: searchTerm,
            part: 'snippet',
        }, {
            maxResults: 25,
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

/*
List of activities:
-Travel (certain countries? ie., how to i travel to Tokyo?)
-Surf
-Cook
-Cliff jumping
-Shark diving
-Volcano Trekking
-Cave diving
-Ice Marathon
-Kayaking with whales
-Mountaineering
-Bungee jupming
-Portledging
-Spelunking
-Mountain bike
-Sailing
-Sandboarding
-Learn a new language
-Wine/beer/whisky tasting
-Sing
-Running of the Bulls (Spain)
-White water rafting
-Wingsuit flight
-Ice swimming
-Dog sled racing
-Ice climb
-Snow mobiling
-Backpack (Europe, Asian, etc)
-Swim
-Skydiving
-Scuba dive
-Write a novel
-Rap
-Hike Yosemite
-Camp
-Grow vegetables
-Hot balloon
-Fish, deep sea fishing, 
-Appreciate art
-Sports: Basketball, Soccer, Tennis, Baseball, Golf,
-Dance: ballet, hiphop, tango, ballroom, 
-Off-road bicycle
-Motorbike
-Start acting career
-Become a model
-Fly helicopter, flying lessons,
-Decorate (ie., room, crafts,)
-Build (ie., desktop, bike, )
-Paddleboard
-Use a DSLR
-Learn photoshop (or other programs)
-Stargazing
-Use moviepass
-Play guitar, drum, etc
-Join a bookclub
-Making bread
-Start ecommerce store
-Draw/illustrate
-Paint
-Start a blog
-Creative writing
-Volunteer
-Audition for a play
-Fix a car
-
*/