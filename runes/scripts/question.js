var pastDescription = "";
var presentDescription = "";
var futureDescription = "";

//generating the answers for the personal question - 3 random throws
//in the right column the answer will have 3 columns and 3 rows
//create a pseudo table for easier formating by assigning the divs row (row1, etc.) and column (title, etc) names
var imageGeneration = function () {
	
	//PAST = FIRST ANSWER
	//append a div that contains the title of the row (past)
	$('#resultRow1').append('<div class="title row1">Past:</div>');

	//random roll and pick image according to random roll
	var pastRoll = Math.round(Math.random()*(theRunes.length-1));
	var past = theRunes[pastRoll].image;

	//append the image to the resultRow div
	$('#resultRow1').append('<div class="image row1"><img class="rune" src="img/RuneImg/' + past + '"></div>');

	//get the name of the rune and append it to the resultRow
	var pastName = theRunes[pastRoll].name;
	$('#resultRow1').append('<div class="name row1">' + pastName + '</div>');

	//generate the description (hidden in hideResult function) based on the roll and append it as left column to the wrapper
	pastDescription = ('<section id="pastInfo" class= "left">' + theRunes[pastRoll].descriptions + '</section>');
	$('#wrapper').append(pastDescription);

	//PRESENT = SECOND ANSWER (see above for detailed functionality)
	$('#resultRow2').append('<div class="title row2">Present:</div>');
	var presentRoll = Math.round(Math.random()*(theRunes.length-1));
	var present = theRunes[presentRoll].image;
	$('#resultRow2').append('<div class="image row2"><img class="rune" src="img/RuneImg/' + present + '"></div>');
	var presentName = theRunes[presentRoll].name;
	$('#resultRow2').append('<div class="name row2">' + presentName + '</div>');
	presentDescription = ('<section id="presentInfo" class= "left">' + theRunes[presentRoll].descriptions + '</section>');
	$('#wrapper').append(presentDescription);

	//FUTURE = THIRD ANSWER (see above for detailed functionality)
	$('#resultRow3').append('<div class="title row3">Future:</div>');
	var futureRoll = Math.round(Math.random()*(theRunes.length-1));
	var future = theRunes[futureRoll].image;
	$('#resultRow3').append('<div class="image row3"><img class="rune" src="img/RuneImg/' + future + '"></div>');
	var futureName = theRunes[futureRoll].name;
	$('#resultRow3').append('<div class="name row3">' + futureName + '</div>');
	futureDescription = ('<section id="futureInfo" class= "left">' + theRunes[futureRoll].descriptions + '</section>');
	$('#wrapper').append(futureDescription);
}

//hide the description of the runes
var hideResult = function(){
	if (!$('.left').hasClass('active')) {
		$('.left').css({'display': 'none'});
	}
}

//on click of the question button
$("#throwButton").click(function(){

	//empty the resultRows to allow for new population and remove the previous descriptions in left column
	$('#resultRow1').empty();
	$('#pastInfo').remove();
	$('#resultRow2').empty();
	$('#presentInfo').remove();
	$('#resultRow3').empty();
	$('#futureInfo').remove();
	
	//add class active to the instructions section to create initial state
	$('#instructions').addClass('active');

	//run imageGeneration (right column) and hideresult (left column) 
	imageGeneration();
	hideResult();

	//silde the result of the row into the right column
	$('#result').slideDown(1000);
});

//on click on the past result row
$('#resultRow1').click(function(){
	
	// slide the active section up 
	$('.active').slideUp(1000, function(){
		
		//remove the active class from that section
		$('.active').removeClass('active');

		//add class active to the past info section and then unhide it (left column)
		$('#pastInfo').addClass('active').slideDown(1000);
	});
});


//on click on the present result row (see above for detailed functionality)
$('#resultRow2').click(function(){
	$('.active').slideUp(1000, function(){
		$('.active').removeClass('active');
		$('#presentInfo').addClass('active').slideDown(1000);
	});
});

//on click on the future result row (see above for detailed functionality)
$('#resultRow3').click(function(){
	$('.active').slideUp(1000, function(){
		$('.active').removeClass('active');
		$('#futureInfo').addClass('active').slideDown(1000);
	});
});