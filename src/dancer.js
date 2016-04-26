// Creates and returns a new dancer object that can step
var MakeDancer = function(top, left, timeBetweenSteps) {

  this.$node = $('<span class="dancer"></span>');
  this.step();
  this.setPosition(top, left);
  this.timeBetweenSteps = timeBetweenSteps;
};

MakeDancer.prototype.step = function() {
  setTimeout(function() {
    this.step();
  }.bind(this), this.timeBetweenSteps);

  // setTimeout(this.step.bind(this),this.timeBetweenSteps));
};

MakeDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

MakeDancer.prototype.lineUp = function() {
  for(var i=0; i<window.dancers.length; i++){
    this.$node.addClass('lineup');
  }
}


// use jQuery to create an HTML <span> tag
  



  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
