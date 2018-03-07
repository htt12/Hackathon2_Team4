$('document').ready();



var youtube_apikey = "AIzaSyADtzYRgD6yRSIuqnOJtCmsnZ5nEd7x6i0";

// //Function to display results of response onto HTML page
// function showResponse(response) {
//     var responseString = JSON.stringify(response, '', 2);
//     $('#response').html = responseString;
//
// }
//
// //Called automatically once the JS client library is loaded
// function onClientLoad(){
//     gapi.client.load('youtube', 'v3', onYoutubeApiLoad);
// }
//
// //Called automatically once YOUTUBE interface is loaded
// function onYoutubeApiLoad(){
//     //API key passed into the request for access
//     gapi.client.setApiKey(youtube_apikey);
//
//     //Calls teh search function to ask for particular data
//     search();
// }
//
// function search(){
//     //Uses the JS client library to create a search.list() API call.
//     var request = gapi.client.request({
//         method: 'GET',
//         path: '/youtube/v3/search',
//         data: {
//
//         //Specifies a comma-separated list of one or more search resource properties that the API response will include
//         part: 'snippet',
//
//         //Specifies the query term to search for
//         q: 'puppies',
//
//         //Restricts a search query to only retrieve a particular type of resource. Defaulted/Accepted values: video, channel, playlist
//         type: '',
//         //Specifies the max number of items that should be returned in the result set
//         maxResult: 5,
//         },
//
//
//     });
//
//
//    request.execute(function(response) {
//        console.log(response);
//    });;
// }

function youtubeApiCall(){
    $.ajax({
        dataType: 'json',
        type: 'GET',
        timeout: 5000,
        url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=puppies&type=video&videoCaption=closedCaption&key=AIzaSyADtzYRgD6yRSIuqnOJtCmsnZ5nEd7x6i0',
        success: function(data){
            console.log('success', data)
            playVideo(data);
        }
    })}

function playVideo(data){
       var videoURL = 'https://www.youtube.com/watch?v=' + data.items['1']['id'].videoId;
       console.log(videoURL);
}

// function onSearchResponse(response){
//     showResponse(response);
// }

// cache: false,
//         data: $.extend({
//             key: youtube_apikey,
//             q: 'puppies',
//             part: 'snippet'
//         }, {maxResults:20}),