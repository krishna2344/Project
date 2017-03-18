
$(document).ready(function() {
//Function to validate Name and Address.
function validateName()
	{
		var name = $('#name').val();
		if ( name === "" )
		{

			//add red border
			$('#name').addClass('invalid');
			$('#name').removeClass('valid');
		}
		else
		{
			//add green border
			$('#name').addClass('valid');
			$('#name').removeClass('invalid');
		}
		

	}

$('button').on('click',validateName);



//Function to validate Phone Number.
function validatePhone()
	{
		var phone = $('#phone').val();
		
		if(phone.length < 10) {
			$('#phone').addClass('invalid');
		} else if(phone.length > 10) {
			$('#phone').addClass('invalid');
		} else {
			$('#phone').addClass('valid');
		}
	}

$('#phone').on('keyup',validatePhone);



//Function to validate Email.
function validateEmail()
	{
		var email = $('#email').val();
		
		var n = email.indexOf("@");

		if(n === -1) {
			$('#email').addClass('invalid');
		} else {
			$('#email').addClass('valid');
		}
	
}

$('button').on('click',validateEmail);



});

