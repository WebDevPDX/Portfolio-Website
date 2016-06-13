var bg_url = "";

var gallery = function(){
	var holding = '<div class="container galleryHolder" id="container"><div class="row row1"><div class="col-xs-12 col-sm-4 galleryFrame" id="frame1"></div><div class="col-xs-12 col-sm-4 galleryFrame" id="frame2"></div><div class="col-xs-12 col-sm-4 galleryFrame" id="frame3"></div></div><div class="row"><div class="col-xs-12 col-sm-4 galleryFrame" id="frame4"></div><div class="col-xs-12 col-sm-4 galleryFrame" id="frame5"></div><div class="col-xs-12 col-sm-4 galleryFrame" id="frame6"></div></div><div class="row"><div class="col-xs-12 col-sm-4 galleryFrame" id="frame7"></div><div class="col-xs-12 col-sm-4 galleryFrame" id="frame8"></div><div class="col-xs-12 col-sm-4 galleryFrame" id="frame9"></div></div></div>'
	var counter = 0;
	$('#content').append(holding);
	setTimeout(function(){
 		$('.galleryFrame').addClass('is-showing');
	}, 400);
	$(".galleryFrame").click(function() {
    bg_url = $(this).css('background-image');
    bg_url = /^url\((['"]?)(.*)\1\)$/.exec(bg_url);
    bg_url = bg_url ? bg_url[2] : ""; 
    overlay(bg_url);  
	});
};

var faces = function() {
	for (i = 1; i < 10; i++) {
		$('#frame' + (i)).css({'background-image': 'url(img/faces/face' + i + '.jpg)'});
	}
};

var bodyscapes = function() {
	for (i = 1; i < 10; i++) {
		$('#frame' + (i)).css({'background-image': 'url(img/bodyscapes/body' + i + '.jpg)'});
	}
};

var erotica = function() {
	for (i = 1; i < 10; i++) {
		$('#frame' + (i)).css({'background-image': 'url(img/erotica/erotica' + i + '.jpg)'});
	}
};

var fetish = function() {
	for (i = 1; i < 10; i++) {
		$('#frame' + (i)).css({'background-image': 'url(img/fetish/fetish' + i + '.jpg)'});
	}
};

var couples = function() {
	for (i = 1; i < 10; i++) {
		$('#frame' + (i)).css({'background-image': 'url(img/couples/couple' + i + '.jpg)'});
	}
};

var galleryOut = function() {
	setTimeout(function(){
 		$('.galleryFrame').removeClass('is-showing');
	}, 400);
}

var clearContent = function(){
	$('#content').empty();
	console.log('cleared');
}

var changeTextField = function(){
	$('#placeholder2').remove();
	$('#placeholder3').remove();
	$('#placeholder4').remove();
	$('#placeholder5').remove();
	$('#placeholder6').remove();
	$('#placeholder7').remove();
	$('#placeholder8').remove();
	$('#placeholder1').removeClass('col-xs-1 col-xs-offset-2 textFrame');
	$('#placeholder1').addClass('col-xs-12 col-sm-8 col-sm-offset-2 textFrameNew');
}

var visionText = function(){
	var holding = '<div class="container textHolder" id="container"><div class="row" id="row"><div class="col-xs-1 col-xs-offset-2 textFrame" id="placeholder1"></div><div class="col-xs-1 textFrame" id="placeholder2"></div><div class="col-xs-1 textFrame" id="placeholder3"></div><div class="col-xs-1 textFrame" id="placeholder4"></div><div class="col-xs-1 textFrame" id="placeholder5"></div><div class="col-xs-1 textFrame" id="placeholder6"></div><div class="col-xs-1 textFrame" id="placeholder7"></div><div class="col-xs-1 textFrame" id="placeholder8"></div></div></div>'
	$('#content').append(holding);
	setTimeout(function(){
 		$('.textFrame').addClass('is-showing-text');
	}, 400);
	$('#placeholder1').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(e) {
    	changeTextField();
    	$('#textField').append('<h2>The Vision</h2><div class="asideImg"></div><div class="visionParagraph"><p>The overall theme of my work is The Essential Feminine or Shakti…the universal creative force. I explore this thesis within the context of contemporary social taboo, gender issues, personal rituals and more. Each shoot seeks to examine these issues through the commentary unique to that particular individual (subject). The sharing of their personal truth contributes the element of authenticity in our work together. My studio protocol is very improvisational, relying on our combined intuition, spontaneity and candor. Our roles are as creative partners rather than the traditional director/model format. I consider the shoot to be a singular life event during which I seek to find the creative resonance between the subject and myself. I work with both male and females in a collaborative, boundary sensitive and non judgmental process. I shoot, primarily, in-studio but occasionally work on location.</p></div>')
  	});
  	$('#placeholder1').append('<div class="textField" id="textField"></div>');
}

var pastText = function(){
	var holding = '<div class="container textHolder" id="container"><div class="row" id="row"><div class="col-xs-1 col-xs-offset-2 textFrame" id="placeholder1"></div><div class="col-xs-1 textFrame" id="placeholder2"></div><div class="col-xs-1 textFrame" id="placeholder3"></div><div class="col-xs-1 textFrame" id="placeholder4"></div><div class="col-xs-1 textFrame" id="placeholder5"></div><div class="col-xs-1 textFrame" id="placeholder6"></div><div class="col-xs-1 textFrame" id="placeholder7"></div><div class="col-xs-1 textFrame" id="placeholder8"></div></div></div>'
	$('#content').append(holding);
	setTimeout(function(){
 		$('.textFrame').addClass('is-showing-text');
	}, 400);
	$('#placeholder1').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(e) {
    	changeTextField();
    	$('#textField').append('<h2>The Past</h2><div class="pastParagraph"><p>I have been doing fine art photography professionally for over 25 years. I studied art in the California University system and have been a studio artist since 1968. My work is held in both public and private collections in this country and Europe. Today, I continue in the studio tradition, shooting on spec and by commission. Past exhibits include the following:</p><ul><li>Seattle Erotic Arts Festival...juried (2011)</li><li>Seattle Erotic Arts Festival...juried (2010)</li><li>Club Sesso...The New Pan-Eroticism: Invitational/solo (2010)</li><li>The Conservatory...Evolution Of A Vision: solo (2009)</li><li>Lucid Images Gallery...Freedom through the human form: The perspectives of David Rolin and Mark Downey</li></ul><p></p>My photographs have appeared in the following publication:<ul><li>CUPIDO Magazine, Norway (Issues N3/07, N4/07, D3/07, N5/07, N6/07 and NC/08)</li><li>The Oregonian..."Snapshot"</li><li>Bluestocking..."Nudes"</li><li>Bluestocking..."Courage"</li><li>The Oregonian..."Portrait Of The Artist"</li><li>The Oregonian..."Behind The Veil"</li><li>The Oregonian..."Wellwishers Swell First Thursday Crowd"</li><li>The Oregonian..."Artquake Juror Passes Judgement"</li></ul> </div>');
  	});
  	$('#placeholder1').append('<div class="textField" id="textField"></div>');
}

var contactText = function(){
	var holding = '<div class="container textHolder" id="container"><div class="row" id="row"><div class="col-xs-1 col-xs-offset-2 textFrame" id="placeholder1"></div><div class="col-xs-1 textFrame" id="placeholder2"></div><div class="col-xs-1 textFrame" id="placeholder3"></div><div class="col-xs-1 textFrame" id="placeholder4"></div><div class="col-xs-1 textFrame" id="placeholder5"></div><div class="col-xs-1 textFrame" id="placeholder6"></div><div class="col-xs-1 textFrame" id="placeholder7"></div><div class="col-xs-1 textFrame" id="placeholder8"></div></div></div>'
	$('#content').append(holding);
	setTimeout(function(){
 		$('.textFrame').addClass('is-showing-text');
	}, 400);
	$('#placeholder1').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(e) {
    	changeTextField();
    	$('#textField').append('<h2>Contact Me</h2><div class="row contactParagraph"><div class="col-xs-12 col-sm-4 col-sm-offset-1"><p>My images are available in digital format or as signed archival prints. Please contact me personally for prices, sizes and further relevant details. Please indicate wich section and image number.</p></div><div class="col-xs-12 col-sm-6"><form action="submit"><fieldset class="form-group"><input type="text" class="form-control formName" id="name" name="name" placeholder="Name" required><input type="email" class="form-control formEmail" id="email" name="email" placeholder="Email" required><textarea class="form-control formText" id="exampleTextarea" placeholder="Your Message Here" rows="3"></textarea></fieldset><fieldset class="pull-right"><button class="btn resetbtn" type="reset">Reset</button><button type="submit" class="btn submitbtn">Submit</button></fieldset></form></div>');
  	});
  	$('#placeholder1').append('<div class="textField" id="textField"></div>');
}


var overlay = function(bg_url){
	var overlayDiv = '<div class="overlay" id="overlay"><div class="overlayImg"><img id="attachedImg" src="' + bg_url + '"></div><div class="overlayNav navbar-fixed-bottom"><button class="btn btn-default btn-large previousbtn" id="previousbtn" type="previous"><span class="glyphicon glyphicon-backward"> Previous</span></button><button type="close" class="btn btn-default btn-large closebtn" id="closebtn">Close <span class="glyphicon glyphicon-remove"></span></button><button type="next" class="btn btn-default btn-large nextbtn" id="nextbtn">Next <span class="glyphicon glyphicon-forward"></span></button></div></div>';
	$('#content').append(overlayDiv);
	$('#previousbtn').click(function(e) {
		var stringArray = bg_url.split("");
		var currentImgNmbr = stringArray[stringArray.length-5];
		if (currentImgNmbr > 1) {
			currentImgNmbr--;
			stringArray[stringArray.length-5] = currentImgNmbr;
			bg_url = stringArray.join("");
			$('.overlayImg').empty();
			$('.overlayImg').append('<img id="attachedImg" src="' + bg_url + '">');
		}
	});
	$('#nextbtn').click(function(e) {
		var stringArray = bg_url.split("");
		var currentImgNmbr = stringArray[stringArray.length-5];
		if (currentImgNmbr < 9) {
			currentImgNmbr++;
			stringArray[stringArray.length-5] = currentImgNmbr;
			bg_url = stringArray.join("");
			$('.overlayImg').empty();
			$('.overlayImg').append('<img id="attachedImg" src="' + bg_url + '">');
		}
	});
	$('#closebtn').click(function(){
		$('#overlay').empty().remove();
	});
};


$('body').on("contextmenu",function(){
   return false;
}); 


$('#enter').click(function(){
	$('#entry').fadeOut(400, function(){
		$('#beginning').fadeIn(200);
		var i = setInterval(function(){
	        $('#logo').fadeIn(1200);
		}, 1300);
	});
});

$('body').on('click', 'a.faces', function(e) {
	e.preventDefault();
	$('.active').removeClass('active');
	$('a.faces').parent().addClass('active');
	$('a.faces').parent().parent().parent().addClass('active');
	clearContent();
	gallery();
	faces();
});
$('body').on('click', 'a.bodyscapes', function(e) {
	e.preventDefault();
	$('.active').removeClass('active');
	$('a.bodyscapes').parent().addClass('active');
	$('a.bodyscapes').parent().parent().parent().addClass('active');
	clearContent();
	gallery();
	bodyscapes();
});
$('body').on('click', 'a.erotica', function(e) {
	e.preventDefault();
	$('.active').removeClass('active');
	$('a.erotica').parent().addClass('active');
	$('a.erotica').parent().parent().parent().addClass('active');
	clearContent();
	gallery();
	erotica();
});
$('body').on('click', 'a.fetish', function(e) {
	e.preventDefault();
	$('.active').removeClass('active');
	$('a.fetish').parent().addClass('active');
	$('a.fetish').parent().parent().parent().addClass('active');
	clearContent();
	gallery();
	fetish();
});
$('body').on('click', 'a.couples', function(e) {
	e.preventDefault();
	$('.active').removeClass('active');
	$('a.couples').parent().addClass('active');
	$('a.couples').parent().parent().parent().addClass('active');
	clearContent();
	gallery();
	couples();
});
$('body').on('click', 'a.thevision', function(e) {
	e.preventDefault();
	$('.active').removeClass('active');
	$('a.thevision').parent().addClass('active');
	clearContent();
	visionText();
});
$('body').on('click', 'a.thepast', function(e) {
	e.preventDefault();
	$('.active').removeClass('active');
	$('a.thepast').parent().addClass('active');
	clearContent();
	pastText();
});
$('body').on('click', 'a.contact', function(e) {
	e.preventDefault();
	$('.active').removeClass('active');
	$('a.contact').parent().addClass('active');
	clearContent();
	contactText();
});



//.*?([0-9]+)\.[a-zA-Z]+$