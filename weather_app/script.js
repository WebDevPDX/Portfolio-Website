//creating a global variable to export the ajax call result into to enable manual parsing
//this is mainly for error checking in case the api changes and certain fields can't be populated
var result = {};

//geolocation response functions
var exportPosition = function(position) {
    // Get the geolocation properties and set them as variables
    var latitude = position.coords.latitude;
    var longitude  = position.coords.longitude;
    ajaxCallLocation(latitude, longitude);
};

//if geolocation does not work
var errorPosition = function() {
    alert('Sorry couldn\'t find your location. Please use the zip input field at the bottom.');
};

//called by exportPosition if the geolocation was successful
//added both general error function (error: function) as well as an api specific one as 
//this api will return a data object containing an error message thus not triggering the 
//ajax error function yet not returning data to populate the view
var ajaxCallLocation = function(latitude, longitude) {
	$.ajax ({
		type: "GET",
		url: "http://api.wunderground.com/api/8c1a8ef70cc596b2/geolookup/conditions/forecast/q/" + latitude + "," + longitude + ".json",
		dataType: "jsonp",
		success: function(data) {
			result = data;
			if (result.response.error) {
				alert('An error occurred... or you simply have no weather at your location. :)');
				console.log(result.response.error.description + '   ' + result.response.error.type);
			} else {
			buildUI(data);
			}
		},
		error: function(textStatus, errorThrown) {
			alert('An error occurred... or you simply have no weather at your location. :)');
			console.log('textstatus: ' + textstatus);
			console.log('errorThrown: ' + errorThrown);
		}
	});
};

//called by zipCheck function when zip code is validated
//added both general error function (error: function) as well as an api specific one as 
//this api will return a data object containing an error message thus not triggering the 
//ajax error function yet not returning data to populate the view
var ajaxCallZip = function(zipSearch) {
	$.ajax ({
		type: "GET",
		url: "http://api.wunderground.com/api/8c1a8ef70cc596b2/geolookup/conditions/forecast/q/" + zipSearch +".json",
		dataType: "jsonp",
		success: function(data) {
			result = data;
			if (result.response.error) {
				alert('An error occurred... or you simply have no weather at your location. :)');
				console.log(result.response.error.description + '   ' + result.response.error.type);
			} else {
			buildUI(data);
			}
		},
		error: function(textStatus, errorThrown) {
			alert('An error occurred... or you simply have no weather at your location. :)');
			console.log('textstatus: ' + textstatus);
			console.log('errorThrown: ' + errorThrown);
		}	
	});
};

//updating the static view with the data received
//buildNow function updates the top of the page (current observation)
//I considered adding a logic statement here in case the api document changes
var buildNow = function() {
	
	//removing the currently displayed information from the view
	//if no information is currently displayed nothin happens
	$('#city').empty();
	$('#now>.row>#icon').empty();
	$('#now>div>div>#temp').empty();
	$('#now>div>div>#weather').empty();
	//assigning the results from the received data object to variables
	//this is only done for readability of the code as the append statements become very long very fast
	var locationCity = result.current_observation.display_location.city;
	var locationState = result.current_observation.display_location.state;
	var now = result.current_observation.temp_f;
	var img = result.current_observation.icon_url;
	var weather = result.current_observation.weather;
	//appending newly available information from variables
	$('#city').append(locationCity + ', ' + locationState);
	$('#now>.row>#icon').append('<img src="' + img + '" alt="icon of current weather">');
	$('#now>div>div>#temp').append(now + '&deg;');
	$('#now>div>div>#weather').append(weather);
};

//buildForecast function updates the 3 forecast fields by looping through the results array and 
//appending the data to the appropriate elements
var buildForecast = function() {
	var forecastArray = result.forecast.simpleforecast.forecastday;
	for(var i = 1; i < forecastArray.length; i++) {
		//removing the currently displayed information from the view
		//if no information is currently displayed nothin happens
		$('#day'+ i +'-icon').empty();
		$('#day'+ i +'-temp').empty();
		$('#day'+ i +'-weekday').empty();
		//appending newly available information
		$('#day'+ i +'-icon').append('<img src="' + forecastArray[i].icon_url + '" alt="icon of current weather">');
		$('#day'+ i +'-temp').append(forecastArray[i].high.fahrenheit + '&deg;');
		$('#day'+ i +'-weekday').append(forecastArray[i].date.weekday);
	}
};

//leaving console.log command for received data commented out for easy error checking
var buildUI = function() {
	//console.log(result);
	buildNow();
	buildForecast();
};

//simple zip check - only checks for 5 digits and anything that isn't a number
//if zip is valid ajax call (ajaxCallZip) gets performed, if it is invalid an error message will show
var zipCheck = function(zipSearch) {
	if (zipSearch.length != 5 || isNaN(zipSearch)) {
		$('.alert').remove();
		$('#zipForm').append('<div class="alert">This is not a valid zip code.</div>')
	} else {
		ajaxCallZip(zipSearch);
	}
};

//no document.ready function included because the script tag is at the bottom of the html body and won't get
//execute before the html is loaded.
//on page load the geolocation engages and conducts the first ajax call
//export exportPosition and errorPosition functions at the top of the file
if (navigator.geolocation) {
	navigator.geolocation.getCurrentPosition(exportPosition, errorPosition);
} else {
	alert('Sorry, your browser doesn\'t support the Geolocation functionality. Please at the zip code input field at the bottom.');
};

//zip input form - on input calls zipcheck function
$('#zipForm').submit(function (e) {
	e.preventDefault();
	var zipSearch = ($('#zipCodeInput').val());
	zipCheck(zipSearch);
});	