function flickrGetData() {
	var dataObject = {
			API_Key: 'c7e4ee0c9678f51208abad8748d3d47d',
			secret: 'fd33ae9aad5ae660'
			}

			$.ajax({
				url: 'https://api.flickr.com/services/rest/?&method=flickr.people.getPublicPhotos&api_key=c7e4ee0c9678f51208abad8748d3d47d&user_id=29096781@N02&per_page=12&page=4&format=json&jsoncallback=?', 
				data: 'json',
				method: 'get',
				success: function(data) {
					console.log('Was it a sucess', data);
					var imgData = data;
					var imageArray = imgData.photos;
					console.log(imageArray);
					var photoURL = 'http://farm' + data.photos.photo.farm + '.static.flickr.com/' + response.photos.server + '/' + response.photos.id + '_' + response.photos.secret + '_m.jpg';
					console.log(photoURL)
				},
			})
			}

function rendorFlickrData() {
	// div.append(videoFrame);
    // $('.video-container').append(div);
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