$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage
    file:///Users/student/Documents/2016-06-subclass-dance-party/dancefloor.html# */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    //this.$node = $('<p>test</p>');

    var dancer = new dancerMakerFunction(
      $('body').height() * 0.85 * Math.random(),
      $('body').width() * 0.85 * Math.random(),
      Math.random() * 1000
    );

    // dancer.$node = $('<span class='+ dancerMakerFunctionName + '>test</span>');
    // dancer.setPosition($("body").height() * Math.random(),
    //   $("body").width() * Math.random(),
    //   Math.random() * 1000);

    //$("body").append( "<p>Test</p>" );
    $('body').append(dancer.$node);
  });

  $('.lineUp').on('click', function() {
    var arr = $('.dancer');
    var startLeft = 50;
    var startTop = 50;
    for (var i = 0; i < arr.length; i++) {
      // debugger;
      arr[i].style.top = startTop + 'px';
      arr[i].style.left = startLeft + 'px';
      // console.log(arr[i]);
      startLeft += 100;
    }
  });

  $('.changeBackground').on('change', function() {
    $('body').css('background-image',  'url(./src/images/' + this.value + ')');
  });
});

// $('document').on('click')

$(document).on('mouseover', '.dancer', function() {
  var that = this;
  // $
  setTimeout(function() { that.style.display = 'inline'; }, 1000);
});

$(document).on('mousedown', '.dancer', function() {
  var that = this;

});

