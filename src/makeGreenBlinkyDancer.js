var makeGreenBlinkyDancer = function(top, left, timeBetweenSteps) {

  MakeDancer.call(this, top, left, timeBetweenSteps);
  $('span.dancer').addClass('greenTriangle');
  $('span.dancer').removeClass('dancer');

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
  this.$node.toggle();
  $(document).ready(function(){
    $(document).click(function() {
      $('span.greenTriangle').toggle('explode', {pieces: 16}, 2000);
    });
  });
};
