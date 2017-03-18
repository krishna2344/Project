$(document).ready(function() {

var ajaxURL = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";

var searchInfo = {
	id : "136689506@N04",
	format : "json"
};

$.getJSON(ajaxURL, searchInfo, function(data){
	$('h2').text(data.title);
	var photoHTML = '';
	$.each(data.items,function(i,photo)
	{
		photoHTML += '<span class="image">';
		photoHTML += '<a href="' + photo.link + '">';
		photoHTML += '<img src ="' + photo.media.m + '"> </a></span>';
	});
		$('#photos').append(photoHTML);

});


});
