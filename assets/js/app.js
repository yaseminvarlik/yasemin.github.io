
			$(document).ready(function() {

			// function checkTime () {
			// var dt = new Date();
			// var hour = dt.getHours();
			// var min = dt.getMinutes();
			// var sec = dt.getSeconds();

			// if(sec<10){
			// 	sec = '0' + sec
			// }

			// if(min<10){
			// 	min = '0' +min
			// }

			// var time = hour + ":" + min + ":" + sec;
			

			// $(".clock").html(time);
			// setInterval(checkTime, 1000);
			// };

			// checkTime();

			var applied = false;


		 	$('.link_one').click(function(){
		 		changeCSS('.one')
		 	});
		 	$('.link_two').click(function(){
		 		changeCSS('.two')
		 	});
		 	$('.link_three').click(function(){
		 		changeCSS('.three')
		 	});
		 	$('.link_four').click(function(){
		 		changeCSS('.four')
		 	});
		 	$('.link_five').click(function(){
		 		changeCSS('.five')
		 	});
		 	$('.link_six').click(function(){
		 		changeCSS('.six')
		 	});
		 	$('.link_seven').click(function(){
		 		changeCSS('.seven')
		 	});
		 	$('.more').click(function(){
		 		changeCSS('.issue_two')
		 	});
				

			function changeCSS(el) {
				if (!applied) {
				$(el).css("display", "block");
				applied = true;

				} else {
				$(el).css("display", "none");
				applied = false;
				};
			}
		});




			