
$(document).ready(function() {

	$('button').on('click', function (event) {
		var url = 'https://httpbin.org/post';
		var serializedData = $('#postform').serialize();
		console.log(serializedData);
				
		$.ajax({
			url: url,
			type: 'POST',
			data: serializedData,
				}).done(function(serverPostResponse){
					
			$('footer').append($('<div></div>').text('Server Sending back:' + serverPostResponse.form.name + '----' + serverPostResponse.form.phone + '----' + serverPostResponse.form.email));
			});

	});
		
});











