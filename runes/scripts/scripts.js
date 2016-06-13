
var $pseudo = $('<div id="pseudo"></div>');
var $descriptionBox = $('<div id="descriptionBox"></div>');
var tooltipResult = 0;

//creating the alphabet section on the right 
var alphabetCreation = function() {
	
	//loop through the array and create a div that contains the image (.alphabetImage)
	for (i=0; i<theRunes.length; i++) {
		var alphabet = ('<div class="alphabetImage">');
		alphabet += ('<img class="alphabetRune" src="img/RuneImg/' + theRunes[i].image + '">')
		alphabet += ('</div>')

		//append the div to the Alphabet <section> 
		$('#theAlphabet').append(alphabet);
	}
	$('#theAlphabet').append('<a href="alphabet.html"><p>Learn More...</p></a>')
}

//let the alphabet section populate when document is ready
var alphabetAnimation = function () {

	//delay everything by 2 sec until html is fully loaded
	setTimeout(function(){

		//when ready
		$(document).ready(function(){

			//for every image do
			$('.alphabetImage').each(function(i){

				//give it time between images (100ms)
				setTimeout(function(){

					//add class .is-showing (CSS contains the transition)
					$('.alphabetImage').eq(i).addClass('is-showing');
				}, 100 * (i + 1));
			});
		})
	}, 2000);
}

//creating the tooltip for the alphabet section

var alphabetTooltip = function(){

	//on mouse enter display the tooltip of the image next to the mouse pointer
	$('.alphabetRune').mouseenter(function() {

		//find the rune image that is hovered over and recreate the value used in the object array

		var imgString = $(this).get(0).outerHTML;
		imgString = imgString.substr(43, 48);
		imgString = imgString.substring(0, 9);

		//find the value in the object array

		for (tooltipResult = 0; tooltipResult < theRunes.length; tooltipResult++) {
			if (theRunes[tooltipResult].image === imgString) {
				break;
			}
		}

		//create the tooltip content

		var tooltipText = ('<div class= "tooltip">' + theRunes[tooltipResult].tooltip + '</div>' );
		
		//append the tooltip to the mouse position

		$('body').append(tooltipText);
		$(document).mousemove(function(event){

			//splitting screen in 2 tooltip areas (top / bot to make sure the tooltip stays within the window - tooltip disabled in CSS on mobile)
			var halfWidth = $(window).width() - ($(window).width() / 2);
			var halfHeight = $(window).height() - ($(window).height() / 2);

			//top
			if ((event.clientX > halfWidth)  && (event.clientY < halfHeight)) {
				$('.tooltip').css({'left' : (event.pageX -335) + 'px'});
				$('.tooltip').css({'top' : (event.pageY) + 'px'});  

			//bot
			} else {
				$('.tooltip').css({'left' : (event.pageX -335) + 'px'});
				$('.tooltip').css({'top' : (event.pageY - $('.tooltip').height()) - 15 + 'px'});  
	    	}

		});
	});

	//remove tooltip when mouse leaves thes image
	$('.alphabetRune').mouseleave(function() {
		$('.tooltip').remove();
	});
}

alphabetCreation();
alphabetAnimation();
alphabetTooltip();