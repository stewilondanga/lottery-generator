var navigate = (function() {
  $('.dd').toggle();
  $('.dd_btn').click(function() {
    var dataName = $(this).attr('data-name');
    $('.dd').hide();
    $('.' + dataName).toggle();
  });
})();

$(document).ready(function() {

      var numberOfBalls = 6; // Number of balls to come out

      $('.container').fadeIn(1000); //fade in container
      $('.container button').hide().delay(1000).fadeIn(2000);
      $('.container button').click(function() { // wait for clicked 'GO' button
        for (i = 0; i < numberOfBalls; i++) { // add animation to balls
          $('.ball' + i).addClass('addanimation');
        };
        $('.container button').hide(500); // hide button when clicked
        $('.goodluck').delay(3000).fadeIn(1000); // display good luck msg
      });
      // UK Lottery numbers are 1 - 59 - edit highestNum to change the range of numbers available

      var highestNum = 59; // highest numbered ball available
      var balls = []; // Array for all balls available (1 - 59)

      // add all available balls to the bag //

      for (i = 0; i < highestNum; i++) {
        balls[i] = i + 1;
      };
      /*
                  	// pick out a ball from the bag and remove that ball number from the remaining bag of balls / avoid any possibility of duplicates //

                  	var myResults = [];
                  	for (j = 0; j < numberOfBalls; j++) {
                  		var selector = (Math.floor(Math.random() * balls.length));
                  		myResults[j] = balls[selector];
                  		balls.splice(selector, 1);
                  };
                  	// sort ball numbers into ascending order //

                    for (j = 0; j < numberOfBalls; j++) {
                  	for (i = 0; i < numberOfBalls; i++) {
                  		var cbone = myResults[i];
                  		var cbtwo = myResults[i + 1];
                  		if (cbone > cbtwo) {myResults[i+1] = cbone; myResults[i] = cbtwo;}
                  };};

                    /* Add the picked out numbers to the DIV balls */
      /*
      for (i = 0; i < numberOfBalls; i++) {
        var lottonum = myResults[i];
        $('div.ball' + i).text(lottonum);
      };
      });
