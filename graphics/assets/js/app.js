
var size = [window.width,window.height];

$(window).resize(function(){
    window.resizeTo(size[0],size[1]);
});

var size = [window.width,window.height];


$(".square").mouseover(function(){
	$(".back").css("opacity",1);
});