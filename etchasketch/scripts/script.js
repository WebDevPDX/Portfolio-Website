$(document).ready(function(){
	var $grid = $('#outerBox');						
	
	var boxSize = 600 / 16;							//on startup have a grid of 16x16 squares, I fitted it into a 600x600 square
	var size = 16;									//declaring size to 16 when document is called to create the initial grid, later size will be updated through prompt

	var drawGrid = function () {						//function that draws the grid

		for (i=1; i<=size; i++) {    					//draw the grid	
			var row = '<div>';	   						//creating 16 divs vertically (column 1)
			for (j=1; j<=size; j++) {						
				row += '<div class="box"></div>';		//creating 16 new divs per row (within the column 1 divs)
			}
			row += '</div>';						
			$grid.append(row);					
		}
		$("div.box").css("height", boxSize + "px");		//assigning height and width to the div.boxes so they fill the 600x600 square
		console.log(boxSize);
		$("div.box").css("width", boxSize + "px");
		console.log(boxSize);
	}

	var promptAndDraw = function () {						//prompt user for new size and calculate the size of the div.boxes
		size = prompt ("How many squares per side do you want to make the new grid?");
		boxSize = 600 / size;
		drawGrid();
	}

	drawGrid();

	$("div.box").on("mouseover", function(){		//assigning a class to the div.boxes to color them (css defined in the stylesheet)
		$(this).addClass("colored");
	});
	
	$("div#clear").on("click", function resetAndChoose(){ 	//reset the current grid and just chose a custom size
		$("div.box").remove();
		promptAndDraw();
		$("div.box").on("mouseover", function(){		//assigning a class to the div.boxes to color them (css defined in the stylesheet)
			$(this).addClass("colored");
		});
	});

	$("div#random").on("click", function colorful (){ 		//reset the current grid, chose custom size and add random coloring to it
		$("div.box").remove();
		promptAndDraw();
		$("div.box").on("mouseover", function(){
			var randomColor = Math.floor(Math.random()*16777216).toString(16);
			$(this).css("background-color", "#" + randomColor); 
		});
	});																								

	$("div#gradient").on("click", function opacity(){ 		//reset the current grid, chose custom size and add 10% opacity drawing
		$("div.box").remove();
		promptAndDraw();
		$("div.box").on("mouseover", function(){			//function to remove 10% opacity to the div.boxes on mouseover
			var percentage = $(this).css("opacity");		//on mouseover check the current opacity of the div.box
			$(this).css("opacity", percentage - 0.15);
		});												
	});													

	$("div#trail").on("click", function trailing(){ 		//reset the current grid, chose custom size and add opacity mousetrail to it
		$("div.box").remove();
		promptAndDraw();
		$("div.box").on("mouseover", function(){			//function to add the actual mouse trail
			$(this).css("opacity",0);						//on mouseover set the opacity to 0 on mouseover
			$(this).fadeTo("0.5", 1);						//over half a second fade opacity to 1 again
		});												
	});													

});															//closing document.ready function
