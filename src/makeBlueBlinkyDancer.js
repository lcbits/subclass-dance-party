var makeBlueBlinkyDancer = function(top, left, timeBetweenSteps) {

  MakeDancer.call(this, top, left, timeBetweenSteps);
  $('span.dancer').addClass('blueSquare');
  $('span.dancer').removeClass('dancer');
  this.moveDancers();
};

makeBlueBlinkyDancer.prototype = Object.create(MakeDancer.prototype);

makeBlueBlinkyDancer.prototype.constructor = makeBlueBlinkyDancer;

makeBlueBlinkyDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  // var oldStep = this.step;
  // 
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  //this.$node = $('<span class="redCircle"></span>');
  this.$node.fadeToggle(1000);
};

makeBlueBlinkyDancer.prototype.moveDancers = function() {
  //identify the current position 
    //write a function that generates random new position (but would small iteration from current position)
    //invoking the function every 10ms by using setTimeOut

  var currentPositionX = this.positionX;
  var currentPositionY = this.positionY;
  // var currentPositionY = this.setPosition(top);
  console.log(currentPositionX, currentPositionY);

  var newPositionX = currentPositionX;
  var newPositionY = currentPositionY;

  var incrementX = 10;
  var incrementY = 10;

  var moving = function() {

  if ( (newPositionX - 20 < 20) || newPositionX + 20 > $( window ).width() - 20 ) {
    incrementX = -incrementX;
  }
  newPositionX += incrementX;

  if ( (newPositionY - 20 < 20) || newPositionY + 20 > $( window ).height() - 20 ) {
    incrementY = -incrementY;
  }
  
  newPositionY += incrementY;
  };

  setInterval(function() {
    moving();
  // console.log(newPositionX, newPositionY);
  // console.log(this);
   MakeDancer.prototype.setPosition.call(this, newPositionY, newPositionX);
  }.bind(this), 250);

  var collision = function(){
    //collision against the window
    if (newPositionX + 20 > $( window ).width() - 20) {
      newPositionX -= Math.random()*10;
    }

    //collision with one another
  }
    console.log($( window ).width())
};