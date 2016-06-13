//declaring the variables
var numberOfFaces = 5;
var level = 1;
var theLeftSide = document.getElementById('leftSide');
var theRightSide = document.getElementById('rightSide');
var theBody = document.getElementsByTagName("body")[0];
var theLevel = document.getElementById('level');
//generate the faces
var generateFaces = function() {
    theLevel.innerHTML += 'Level: ' + level;
    //generate numberOfFaces amount
    for (i = 0; i < numberOfFaces; i++) {
      //create img element
      var image = document.createElement('img');
      //set source attribute
      image.setAttribute('src', 'http://home.cse.ust.hk/~rossiter/mooc/matching_game/smile.png');
      //set top and left offset
      image.style.top = Math.floor(Math.random() * 370) + 'px';
      image.style.left = Math.floor(Math.random() * 370) + 'px';
      //append the created img to the DOM
      theLeftSide.appendChild(image);
    }
    //clone the generated leftSide
    var clone = theLeftSide.cloneNode(true);
    //remove attributes so styling doesn't interfere, add clone class
    clone.classList.remove('container', 'leftSide');
    clone.classList.add('clone');
    //on the clone remove the last img element generated to create a difference
    clone.removeChild(clone.lastChild);
    theRightSide.appendChild(clone);
    //adding a click event to the extra face
    theLeftSide.lastChild.onclick = function nextLevel(event) {
      event.stopPropagation();
      //clearing both container elements
      theLeftSide.innerHTML = '';
      theRightSide.innerHTML = '';
      theLevel.innerHTML='';
      //increasing the number of generated images 
      numberOfFaces += 5;
      level += 1;
      //calling the generation function again
      generateFaces();
    };

  }
  //when the window is fully loaded start the generateFaces function
window.onload = function() {
  generateFaces();
};
//if a click anywhere in the body (outside of target area) is made then alert Game Over
theBody.onclick = function gameOver() {
  document.getElementById('gameOver').className = "gameOver";
  theBody.onclick = null;
  theLeftSide.lastChild.onclick = null;
};
//restart or redirect
document.getElementById('again').onclick = function restart() {
  theLeftSide.innerHTML = '';
  theRightSide.innerHTML = '';
  theLevel.innerHTML='';
  numberOfFaces = 5;
  level = 1;
  document.getElementById('gameOver').className = "gameOver hidden";
  generateFaces();
}

document.getElementById('enough').onclick = function redirect() {
  window.location = "http://www.google.com";
}