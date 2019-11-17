
			$(document).ready(function() {


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
		 	$('.link_eight').click(function(){
		 		changeCSS('.eight')
		 	});
		 	$('.link_nine').click(function(){
		 		changeCSS('.nine')
		 	});
		 	$('.link_ten').click(function(){
		 		changeCSS('.ten')
		 	});
		 	$('.more').click(function(){
		 		changeCSS('.issue_two')
		 	});
		 	$('.more_two').click(function(){
		 		changeCSS('.issue_three')
		 	});

			function changeCSS(el) {
				if (!applied) {
				$(el).css({"display": "block"
						});
				applied = true;

				} else {
				$(el).css("display", "none");
				applied = false;
				};
			}
			$('.link_one').click(function(){
				$('html,body').animate({
        		scrollTop: $('.link_one').offset().top},'slow');
			
		});
			$('.more').click(function(){
				$('html,body').animate({
        		scrollTop: $('.more').offset().top},'slow');
			
		});
			$('.more_two').click(function(){
				$('html,body').animate({
        		scrollTop: $('.more_two').offset().top},'slow');
			
		});
			$('.link_two').click(function(){
				$('html,body').animate({
        		scrollTop: $('.link_two').offset().top},'slow');
			
		});
			$('.link_three').click(function(){
				$('html,body').animate({
        		scrollTop: $('.link_three').offset().top},'slow');
			
		});
			$('.link_four').click(function(){
				$('html,body').animate({
        		scrollTop: $('.link_four').offset().top},'slow');
			
		});
			$('.link_five').click(function(){
				$('html,body').animate({
        		scrollTop: $('.link_five').offset().top},'slow');
			
		});
			$('.link_eight').click(function(){
				$('html,body').animate({
        		scrollTop: $('.link_eight').offset().top},'slow');
			
		});
			$('.link_six').click(function(){
				$('html,body').animate({
        		scrollTop: $('.link_six').offset().top},'slow');
			
		});
			$('.link_seven').click(function(){
				$('html,body').animate({
        		scrollTop: $('.link_seven').offset().top},'slow');
			
		});
			
			});





			