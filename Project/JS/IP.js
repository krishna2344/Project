$(document).ready(function(){
	
	var url = 'http://httpbin.org/get';

	console.log('running!');

		url = encodeURI(url);

		$.ajax({
			url: url,
			type: 'GET',
		}).done(function(theParsedResponseFromTheServer){
			var ip = theParsedResponseFromTheServer.origin;
			var html = $('<div>The IP Address is ' + ip + '</div>');

			$('footer').append(html);
	});
});