//HIDE AND DISPLAY EACH SECTION OF THE HISTORY SEPERATELY BY SLIDING IT UP AND DOWN

//on click on the first list item (introduction in the right column)
$('#introOne').click(function(){
	//slide up the currently active section and hide it
	$('.active').slideUp(1000, function(){
		//remove the class active from it
		$(this).removeClass('active');
		//slide the new section down and add the class active to it
		$('#introduction').slideDown(1000).addClass('active');
	});
});

//on click on history 1 in the right column (see details above)
$('#runesOne').click(function(){
	$('.active').slideUp(1000, function(){
		$(this).removeClass('active');
		$('#historyOne').slideDown(1000).addClass('active');
	});
});

//on click on history 2 in the right column (see details above)
$('#runesTwo').click(function(){
	$('.active').slideUp(1000, function(){
		$(this).removeClass('active');
		$('#historyTwo').slideDown(1000).addClass('active');
	});
});

//on click on history 3 in the right column (see details above)
$('#runesThree').click(function(){
	$('.active').slideUp(1000, function(){
		$(this).removeClass('active');
		$('#historyThree').slideDown(1000).addClass('active');
	});
});

//on click on history 4 in the right column (see details above)
$('#runesFour').click(function(){
	$('.active').slideUp(1000, function(){
		$(this).removeClass('active');
		$('#historyFour').slideDown(1000).addClass('active');
	});
});

//on click on history 5 in the right column (see details above)
$('#runesFive').click(function(){
	$('.active').slideUp(1000, function(){
		$(this).removeClass('active');
		$('#historyFive').slideDown(1000).addClass('active');
	});
});