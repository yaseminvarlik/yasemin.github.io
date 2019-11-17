var clicks = true;

$(document).ready(function(){

$(".circle").mouseenter(function() {
      $("#information").css("opacity",1);
});

$(".circle").mouseleave(function() {
      $("#information").css("opacity",0);
	});
$(".up").click(function() {
     alert("You are uploading your redrawn letter.");
	});

$(".down").click(function() {
     alert("You are now downloading the redrawn font library.");
	});

$("#01").click(function(){
	$(".nov_01").toggle();
	$(".reveal").toggle();
});

$("#02").click(function(){
	$(".nov_02").toggle();
	$(".reveal").toggle();
});

$("#03").click(function(){
	$(".nov_03").toggle();
	$(".reveal").toggle();
});

$("#04").click(function(){
	$(".nov_01_h").toggle();
	$(".reveal").toggle();
});
$("#05").click(function(){
	$(".nov_02_h").toggle();
	$(".reveal").toggle();
});
$("#06").click(function(){
	$(".nov_03_h").toggle();
	$(".reveal").toggle();
});
$("#07").click(function(){
	$(".nov_04_h").toggle();
	$(".reveal").toggle();
});
$("#08").click(function(){
	$(".nov_01_b").toggle();
	$(".reveal").toggle();
});
$("#09").click(function(){
	$(".nov_02_b").toggle();
	$(".reveal").toggle();
});
$("#10").click(function(){
	$(".nov_03_b").toggle();
	$(".reveal").toggle();
});
$("#11").click(function(){
	$(".nov_04_b").toggle();
	$(".reveal").toggle();
});
$("#12").click(function(){
	$(".nov_05_b").toggle();
	$(".reveal").toggle();
});

$('.switch_lc').click(function() {
  if (clicks) {
    clicks = false;
    $(".helvetica_lc").show();
    $(".helvetica").hide();
  } else {
    clicks = true;
    $(".helvetica").show();
    $(".helvetica_lc").hide();
  }


});

$('.switch').click(function() {
  if (clicks) {
    clicks = false;
    $(".helvetica").show();
    $(".helvetica_lc").hide();
  } else {
    clicks = true;
    $(".helvetica_lc").show();
    $(".helvetica").hide();
  }

 
});

$('.switch_serif').click(function() {
  if (clicks) {
    clicks = false;
    $(".helvetica").show();
    $(".helvetica_lc").hide();
  } else {
    clicks = true;
    $(".helvetica_lc").show();
    $(".helvetica").hide();
  }

 
});
$('.switch_script').click(function() {
  if (clicks) {
    clicks = false;
    $(".helvetica").show();
    $(".helvetica_lc").hide();
  } else {
    clicks = true;
    $(".helvetica_lc").show();
    $(".helvetica").hide();
  }

 
});


});





















