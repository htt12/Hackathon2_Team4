
$(document).ready(intializeApp);
console.log( 'have loaded', intializeApp);




function intializeApp(){
	console.log('button was clicked', flickrGetData);
	attachButtonHandler();
}

function attachButtonHandler() {
console.log('i was clicked', attachButtonHandler);
$('input').on('click', event);


}

function flickrGetData() {
	var dataObject = {
			API_Key: 'c7e4ee0c9678f51208abad8748d3d47d',
			secret: 'fd33ae9aad5ae660'
			}

			$.ajax({
				url: 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=de5b41195f5a819dbb4c302754acc09e&in_gallery=skydiving&per_page=25&format=json&nojsoncallback=1&auth_token=72157693478317314-d23e0f5d420d477f&api_sig=9d14fd4ae7a5dc9df24f7e634b20663d',
				data: 'json',
				method: 'get',
				success: function(response) {
					console.log('Was it a sucess', response);
					console.log(response);
					console.log(response.data)
					
				},
				 error: function(response) {
				 	console.log('err- ', response);
				}
			})
			}

function rendorFlickrData() {
    console.log('1) flickr Get Data');
    var ajaxConfig = {
        dataType: 'json',
        url:   ''
        success: function(result) {
            
        
        }
    }

}

$(document).ready(initializeApp)
var firstGame = null;

function initializeApp(){
    applyClickHandlers();
}

function applyClickHandlers(){
    $("#search").on("click", wikiApiCall);
}

