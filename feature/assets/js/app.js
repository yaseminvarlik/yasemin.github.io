  $(document).ready(function () {
 	var filterVal = 'blur(5px)';
 	var filterN= 'blur(0)';
  var filterTitle= 'blur(10px)';
  var distance = $('.img_fc').offset().top,
    $window = $(window);
  var distanceTwo = $('.pull_four').offset().top;
  var distanceThree = $('.pull_one').offset().top;

  // ISSUES PAGE
	$('.one').mouseover(function () {
 	$('.img_one').css('filter',filterVal)
  	.css('-webkitFilter',filterVal);
  	$('.one').mouseleave(function () {
 	$('.img_one').css('filter', filterN)
 		.css('-webkitFilter',filterN);
 	});
 });
	$('.two').mouseover(function () {
 	$('.img_two').css('filter',filterVal)
  	.css('-webkitFilter',filterVal);
  	$('.two').mouseleave(function () {
 	$('.img_two').css('filter', filterN)
 		.css('-webkitFilter',filterN);
  	});
  });
	$('.three').mouseover(function () {
 	$('.img_three').css('filter',filterVal)
  	.css('-webkitFilter',filterVal);
  	$('.three').mouseleave(function () {
 	$('.img_three').css('filter', filterN)
 		.css('-webkitFilter',filterN);
  	});
  });
  $('.bull, .author_name, .pull_two, .pull_three, .statue, .author_s_name, .urinal, .author_m_name').addClass("filt");
  $(window).scroll(function(){
  $('.pull_one, .pull_two, .pull_three').removeClass("filt");

});
  
  $('.pull_one').addClass("filt_one");
  //  $(window).scroll(function(){
  // $('.pull_one').removeClass("filt_one");
  // });
 
 $('.pull_three').addClass("filt_two");
  //  $(window).scroll(function(){
  // $('.pull_three').removeClass("filt_two");
  // });
  $('.img_b').addClass("filt_three");
   $('.pull_four').addClass("filt_four");
  //  $(window).scroll(function(){
  // $('.pull_four').removeClass("filt_three");
  // });
  $('.pull_two').addClass("filt_five");
  $('.pull_five').addClass("filt_six");
  $('.img_f').addClass("filt_seven");

  $window.scroll(function() {
    if ( $window.scrollTop() >= distance ) {
        $(".img_fc").css('opacity', 0);
    }
    if ( $window.scrollTop() < distance ) {
        $(".img_fc").css('opacity', 1);
    }
});
   $window.scroll(function() {
    if ( $window.scrollTop() >= distanceThree ) {
        $(".pull_one").css('opacity', 0);
    }
    if ( $window.scrollTop() < distanceThree ) {
        $(".pull_one").css('opacity', 1);
    }
});
  $window.scroll(function() {
    if ( $window.scrollTop() >= distanceTwo) {
        $(".pull_four").css('opacity', 0);
    }
    if ( $window.scrollTop() < distanceTwo ) {
        $(".pull_four").css('opacity', 1);
    }
});
    

  $(window).on("scroll", function() {
  var scrollHeight = $(document).height();
  var scrollPosition = $(window).height() + $(window).scrollTop();
  if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
      // when scroll to bottom of the page
       
      $('.bull, .author_name').removeClass("filt");
      $('.pull_one').removeClass("filt_one");
      $('.pull_two').removeClass("filt_five");
      $('.pull_three').removeClass("filt_two");
      $('.pull_four').removeClass("filt_four");
      $('.pull_five').removeClass("filt_six");
      $('.img_b').removeClass("filt_three");
      $('.img_f').removeClass("filt_seven");
      $('.par').css('opacity', 0);
      $('.end_note').removeClass("opac");

      $('.img_f').mouseover(function() {
      $(".reveal_01").css('opacity', 1);
      $('.img_f').mouseleave(function(){
      $(".reveal_01").css('opacity',0);
      });
      });
      $('.pull_five').mouseover(function() {
      $(".reveal_02").css('opacity', 1);
      $('.pull_five').mouseleave(function(){
      $(".reveal_02").css('opacity',0);
      });
      });
      $('.pull_two').mouseover(function() {
      $(".reveal_03").css('opacity', 1);
      $('.pull_two').mouseleave(function(){
      $(".reveal_03").css('opacity',0);
      });
      });
      $('.pull_four').mouseover(function() {
      $(".reveal_05").css('opacity', 1);
      $('.pull_four').mouseleave(function(){
      $(".reveal_05").css('opacity',0);
      });
      });
      $('.img_b').mouseover(function() {
      $(".reveal_04").css('opacity', 1);
      $('.img_b').mouseleave(function(){
      $(".reveal_04").css('opacity',0);
      });
      });
  };
});
      });
      


