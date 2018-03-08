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