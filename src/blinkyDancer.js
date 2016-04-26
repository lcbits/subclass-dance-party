var makeRedBlinkyDancer = function(top, left, timeBetweenSteps) {

  MakeDancer.call(this, top, left, timeBetweenSteps);
  $('span.dancer').addClass('redCircle');
  $('span.dancer').removeClass('dancer');

};

makeRedBlinkyDancer.prototype = Object.create(MakeDancer.prototype);

makeRedBlinkyDancer.prototype.constructor = makeRedBlinkyDancer;

makeRedBlinkyDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  // var oldStep = this.step;
  // 
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  //this.$node = $('<span class="redCircle"></span>');
  this.$node;
};

makeRedBlinkyDancer.prototype.setPosition = function(top, left) {
  var centreX = $( 'body' ).width() / 2;
  var centreY = $( 'body' ).height() / 2;

  MakeDancer.prototype.setPosition.call(this, centreY, centreX);  
}

 $(document).ready(function() {
        var audioElement = document.createElement('audio');
        audioElement.setAttribute('src', 'David Guetta - Titanium ft. Sia.mp3');
       // audioElement.setAttribute('autoplay', 'autoplay');
        //audioElement.load()

        $.get();

        audioElement.addEventListener("load", function() {
            audioElement.play();
        }, true);

        $('#play').click(function() {
            audioElement.play();
        });

        $('#play').click(function() {
          $('body').addClass('newBody');
        });



    });


      //    <audio class='djMusic'>
      //   <source src='David Guetta - Titanium ft. Sia.mp3' type="audio/mpeg">
      // </audio>