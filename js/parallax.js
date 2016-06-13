$(window).scroll(function(){

	var windowPosition = $(window).scrollTop();
	//console.log(windowPosition);

	$('.logo').css({
		'transform' : 'translate(0px, '+ windowPosition / 3.7 +'%)'
	})
	
	//hide the scroll overlap on the logo
	if (windowPosition >= 500) {
		$('.headerContainer').css({'z-index': '10'});
	} else if (windowPosition < 500) {
		$('.headerContainer').css({'z-index': '1'});
	}

	//first row of portfolio
	if(windowPosition > $('.portfolio').offset().top - $(window).height() / 2.5){
	    var floating = (Math.min(0, windowPosition - $('.portfolio').offset().top +$(window).height() - 950)).toFixed();
	    //flying in from left
	    $('#work-1').css({'transform': 'translateX('+ floating +'px'});
	    //flying in from right
	    $('#work-3').css({'transform': 'translateX('+ Math.abs(floating) +'px'});
	}

	//second row of portfolio
	if((windowPosition + 390) > $('.portfolio').offset().top + $(window).height() / 2.5){
		var floating = (Math.min(0, windowPosition - $('.portfolio').offset().top +$(window).height() - 1340)).toFixed();
	   	$('#work-4').css({'transform': 'translateX('+ floating +'px'});
	    $('#work-6').css({'transform': 'translateX('+ Math.abs(floating) +'px'});
	}

	//third row of portfolio
	if((windowPosition + 780) > $('.portfolio').offset().top + $(window).height() / 2.5){
		var floating = (Math.min(0, windowPosition - $('.portfolio').offset().top +$(window).height() - 1730)).toFixed();
	   	$('#work-7').css({'transform': 'translateX('+ floating +'px'});
	    $('#work-9').css({'transform': 'translateX('+ Math.abs(floating) +'px'});
	}

});

//mouseover effect to display oferlay in portfolio
//work-1
$('#work-1').mouseenter(function(){
	$('#work-1-Overlay').removeClass('hidden');
});
$('#work-1').mouseleave(function(){
	$('#work-1-Overlay').addClass('hidden');
});
//work-2
$('#work-2').mouseenter(function(){
	$('#work-2-Overlay').removeClass('hidden');
});
$('#work-2').mouseleave(function(){
	$('#work-2-Overlay').addClass('hidden');
});
//work-3
$('#work-3').mouseenter(function(){
	$('#work-3-Overlay').removeClass('hidden');
});
$('#work-3').mouseleave(function(){
	$('#work-3-Overlay').addClass('hidden');
});
//work-4
$('#work-4').mouseenter(function(){
	$('#work-4-Overlay').removeClass('hidden');
});
$('#work-4').mouseleave(function(){
	$('#work-4-Overlay').addClass('hidden');
});
//work-5
$('#work-5').mouseenter(function(){
	$('#work-5-Overlay').removeClass('hidden');
});
$('#work-5').mouseleave(function(){
	$('#work-5-Overlay').addClass('hidden');
});
//work-6
$('#work-6').mouseenter(function(){
	$('#work-6-Overlay').removeClass('hidden');
});
$('#work-6').mouseleave(function(){
	$('#work-6-Overlay').addClass('hidden');
});
$('#work-7').mouseenter(function(){
	$('#work-7-Overlay').removeClass('hidden');
});
$('#work-7').mouseleave(function(){
	$('#work-7-Overlay').addClass('hidden');
});
$('#work-9').mouseenter(function(){
	$('#work-9-Overlay').removeClass('hidden');
});
$('#work-9').mouseleave(function(){
	$('#work-9-Overlay').addClass('hidden');
});
