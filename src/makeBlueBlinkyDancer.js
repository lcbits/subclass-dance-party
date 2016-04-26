var makeBlueBlinkyDancer = function(top, left, timeBetweenSteps) {

  MakeDancer.call(this, top, left, timeBetweenSteps);
  $('span.dancer').addClass('blueSquare');
  $('span.dancer').removeClass('dancer');

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
