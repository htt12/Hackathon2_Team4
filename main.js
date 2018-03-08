
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
				// url: 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=30430025f066499dcebfbb48f6a50fc4&in_gallery=skydiving&per_page=25&format=json&nojsoncallback=1&auth_token=72157688566829550-7a7c65c7016432fe&api_sig=fdea63066cfa32f18aee22159b2d6a3b',
				dataType: 'json',
				success: function(response) {
					console.log('Was it a sucess', response);
					console.log(response);
					var imagedata = response;
					var imageArray = imageData.photos.photo;
					rendorFlickrData(imageArray);
					console.log(imageArray);
				},
				 error: function(response) {
				 	console.log('err- ', response);
				}
			})


function rendorFlickrData(imageArray) {
    console.log('1) flickr Get Data');
    var ajaxConfig = {
        // dataType: 'json',
        // url: 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=30430025f066499dcebfbb48f6a50fc4&in_gallery=skydiving&per_page=25&format=json&nojsoncallback=1&auth_token=72157688566829550-7a7c65c7016432fe&api_sig=fdea63066cfa32f18aee22159b2d6a3b',
        success: function(result) {
        console.log('2 ajax success function called with the following', result); 


        var div = $('<div>');
                var img = $('<img src='+ eachThirdImage + '/>');
                var figcaption = $('<figcaption>'+ 'Title: ' + title + "<br />" + 'Director: ' + author + '</figcaption>');
                div.attr('style', 'display:inline-block; margin: 3% 3%; text-align: center').append(img, figcaption);
                $('.searchButton').append(div);
            
        }
        }
        
    }

}

