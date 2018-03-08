function flickrGetData(searchTerm) {
	console.log(searchTerm);
	var dataObject = {
			API_Key: 'c7e4ee0c9678f51208abad8748d3d47d',
			secret: 'fd33ae9aad5ae660'
			}

			$.ajax({
				url: "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=30430025f066499dcebfbb48f6a50fc4&tags="+searchTerm+"&per_page=25&format=json&nojsoncallback=1",
				dataType: 'json',
				// method: 'get',
				success: function(response) {
					console.log('Was it a sucess', response);
					console.log(response);
					var imageData = response;
					var imageArray = imageData.photos.photo;
					constructImgUrls(imageArray)
					console.log(imageArray)
				},
				 error: function(response) {
				 	console.log('err- ', response);
				}
			})
}

function constructImgUrls(imageArray){
	for (var i = 0; i<imageArray.length; i++){
		var farm = imageArray[i].farm;
		var id = imageArray[i].id;
		var secret = imageArray[i].secret;
		var server_id = imageArray[i].server;
		var url = "https://farm"+farm+".staticflickr.com/"+server_id+"/"+id+"_"+secret+"_c.jpg"
		console.log(url);
		$(".results-container").prepend($('<img>',{id:'theImg',src: url}))
	}

}


// https://farm5.staticflickr.com/4784/25809291047_74492fac4d_m.jpg

// https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{o-secret}_o.(jpg|gif|png)

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