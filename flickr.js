
function flickrGetData(searchTerm) {
	var dataObject = {
		API_Key: 'c7e4ee0c9678f51208abad8748d3d47d',
		secret: 'fd33ae9aad5ae660'
	}

	$.ajax({
		url: "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key="+dataObject.API_Key+"&tags="+searchTerm+"&per_page=25&format=json&nojsoncallback=1",
		dataType: 'json',		
		success: function(response) {
			var flickrURL = constructImgUrls(response);
			var img = $('<img>').addClass('flickr-image').attr('src', flickrURL);
			var activitiesDiv = $("<div>").addClass("resultDiv");
			var activitiesTitleBar = $("<div>").text(searchTerm).addClass("titleBar").on("click", handleResultClick);
			
			$(activitiesDiv).append(activitiesTitleBar, img);
			$(".results-container").append(activitiesDiv);
		}		
	});
}


function constructImgUrls(response){
	var imageData = response;
	var imageArray = imageData.photos.photo;
	var randomNumber = Math.floor((Math.random()*24));
	var randomImage = imageArray[randomNumber];
	var farm = randomImage.farm;
	var id = randomImage.id;
	var secret = randomImage.secret;
	var server_id = randomImage.server;
	
	return "https://farm"+farm+".staticflickr.com/"+server_id+"/"+id+"_"+secret+"_c.jpg";
}	
		
// Authentication
// This method requires authentication with 'write' permission.

// For details of how to obtain authentication tokens and how to sign calls, see the authentication api spec. Note that the 'photo' parameter should not be included in the signature. All other POST parameters should be included when generating the signature.

// Arguments
// photo
// The file to upload.
// photo_id
// The ID of the photo to replace.
// async (optional)
// Photos may be replaced in async mode, for applications that don't want to wait around for an upload to complete, leaving a socket connection open the whole time. Processing photos asynchronously is recommended. Please consult the documentation for details. -->
// <!-- Asynchronous Uploading
// Flickr can process photos in async mode, for applications that need to post multiple photos and don't want to wait around for each one to complete, leaving a socket connection open the whole time.
// Removed token and auth keys to get access to dynamically changing flickr api url