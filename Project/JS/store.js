		$(document).ready(function() {
		localStorage.setItem('name', 'Aws Yousif Fida ELDin');
		localStorage.setItem('course', 'ICT4510');
			function display()
			{
			// document.getElementById('button');
			var span1 = document.createElement('span');
			span1.textContent = "Name: " + "(" + localStorage.getItem('name') + ")" + "#---------#";
			// var body1 = document.getElementById('body')
			document.body.appendChild(span1);

			var span2 = document.createElement('span');
			span2.textContent = "Course: " + "(" +localStorage.getItem('course') + ")";
			// var body2 = document.getElementById('body')
			document.body.appendChild(span2);
		}
			$('button').on('click',display);
		});
