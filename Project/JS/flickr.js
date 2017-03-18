$(document).ready(function() {

$('button').on('click', function (evt) {
	
		getimage();
	
});

function getimage() {

	// var url = "http://api.flickr.com/services/feeds/photos_public.gne?tags=nature&format=json&jsoncallback";
	var baseurl = "https://api.flickr.com/services/rest/?";
	// var baseurl = "http://api.flickr.com/services/feeds/photos_public.gne?tags=nature&format=json&jsoncallback";
	var method = "&method=flickr.people.getPublicPhotos";
	var apikey = "&api_key=503c51c8f302ba8fa3878e1940340b2e";
	// var userid = "&user_id=29096781@N02";
	// var userid =  "&user_id=48928949@N02";
	var userid =  "&user_id=136689506@N04";
	var dataJason = "&format=json";
	var page = "&per_page=8";


	url = baseurl + method + apikey + userid + dataJason + page;
	// https://api.flickr.com/services/rest/?&method=flickr.people.getPublicPhotos&api_key=503c51c8f302ba8fa3878e1940340b2e&user_id=29096781@N02&format=json&per_page=8

	// URL has been constructed, we need to encode it for a URI.

	url = encodeURI(url);

	$.ajax({
		type:'GET',
		url: url,
		
		dataType: 'jsonp', jsonp: 'jsoncallback'
		// response, responseString, jqXHR
	}).done(function(response, responseString, jqXHR){
		console.log(response);
  		render(response.photos.photo);
	});
}

function render(images) {
	var results = $('#results');
	results.empty();
	 $.each(images, function(index,image){
	    results.append(createImagesHTML(image));
	});
}

function createImagesHTML(image) {
	var imageString = '<div class="image">' +'<div class="title">' + image.title + '</div>' + '<div class="secret">' + image.secret + '</div>' + '<div class="id">' + image.id + '</div>';

	return $('imageString');
}


});