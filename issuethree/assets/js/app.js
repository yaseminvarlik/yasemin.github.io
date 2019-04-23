
// $(document).ready(function () {
//     $(".java").click(function () {
//     	$(this).text('Scroll Right');
//     });
//     });

$(document).ready(function () {
    $('a').click(function () {
    	$(this).css('text-decoration','none');
    });

 $('.java').click(function() {
    var left = $(document).outerWidth() - $(window).width();
	$('body, html').animate({ scrollLeft: '+=1100'}, 500);
    console.log("hello");
});

 $('.image').mouseover(function () {
 	$(this).css('opacity', '0.5');
 $('.image').mouseleave(function(){
 	$(this).css('opacity', '1');
 });
 });

    });