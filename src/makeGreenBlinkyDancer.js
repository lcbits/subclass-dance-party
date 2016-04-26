var makeGreenBlinkyDancer = function(top, left, timeBetweenSteps) {

  MakeDancer.call(this, top, left, timeBetweenSteps);
  $(this.$node).addClass('greenTriangle');
  //$('span.dancer').removeClass('dancer');

};

makeGreenBlinkyDancer.prototype = Object.create(MakeDancer.prototype);

makeGreenBlinkyDancer.prototype.constructor = makeGreenBlinkyDancer;

makeGreenBlinkyDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  // var oldStep = this.step;
  // 
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  //this.$node = $('<span class="redCircle"></span>');
  

  this.$node.hover(function() {
    $( this ).fadeOut( 100 );
    $( this ).fadeIn( 500 );
});

  // mouseover(function(){
  //   this.$node.css("background-color", "yellow");
  // });

  // var styleSettings = {
  //   height: 50px;
  //   width: 50px
  // };
  // this.$node.css(styleSettings);

  // var that = this;

  // $('span.greenTriangle').on('mouseover', function(){
  //   var styleSettings = {
  //   height: 50px;
  //   width: 50px
  //   };
  // });
  // that.$node.css(styleSettings);
};


makeGreenBlinkyDancer.prototype.moveDancers = function() {
  var currentPositionX = this.positionX;
  var currentPositionY = this.positionY;

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
   MakeDancer.prototype.setPosition.call(this, newPositionY, newPositionX);
  }.bind(this), 250);

  var collision = function(){
    if (newPositionX + 20 > $( window ).width() - 20) {
      newPositionX -= Math.random()*10;
    }

    //collision with one another
  }

};