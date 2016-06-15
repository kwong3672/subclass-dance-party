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
      if (startLeft > $('body').width() * 0.8) {
        startTop += 200;
        startLeft = 50;
      }
      arr[i].style.top = startTop + 'px';
      arr[i].style.left = startLeft + 'px';
      // console.log(arr[i]);
      startLeft += 100;
    }
  });

  $('.changeBackground').on('change', function() {
    $('body').css('background-image',  'url(./src/images/' + this.value + ')');
  });


  $('.interact').on('click', function() {
    var dancerArr = $('.dancer'); 
    for (var i = 0; i < dancerArr.length; i++) {
      for (var j = 0; j < dancerArr.length; j++) {
        var top1 = dancerArr[i].style.top.slice(0, dancerArr[i].style.top.length - 2);
        var top2 = dancerArr[j].style.top.slice(0, dancerArr[j].style.top.length - 2);
        var left1 = dancerArr[i].style.left.slice(0, dancerArr[i].style.left.length - 2);
        var left2 = dancerArr[j].style.left.slice(0, dancerArr[j].style.left.length - 2);
        debugger;
        var squareTop = (top1 - top2) * (top1 - top2);
        var squareLeft = (left1 - left2) * (left1 - left2);
        var distance = Math.sqrt(squareTop + squareLeft);
        // var distance = Math.sqrt(Math.abs(Math.pow((top1 - top2), 2)) + Math.abs(Math.pow((left1 - left2), 2)));
        if (distance !== 0 && distance < 150) {
          // dancerArr[j].style.top = top1 + 'px';
          // dancerArr[i].style.top = top2 + 'px';
          // dancerArr[j].style.left = left1 + 'px';
          // dancerArr[i].style.left = left2 + 'px';

          dancerArr[i].classList.add('tooClose');
          dancerArr[j].classList.add('tooClose');
          // dancerArr.toggle();
          // dancerArr[j].fadeTo("slow", 0.2);
        }
      }
    }
  });
});

// $('document').on('click')

$(document).on('mouseover', '.slothDancer', function() {
  var that = this;
  $(this).fadeToggle(1000);
  setTimeout(function() { that.style.display = 'inline'; }, 1200 );
});

// this will drag an item when you mousedown
// $(document).on('mousedown', '.dancer', function() {
  // var that = this;
// 
// });

// $(document).on('mouseover', '.catDancer', function() {
//   $(this).style.left 

// });
$(document).on('mouseover', '.catDancer', function() {
  $(this).animate({left: '+=50px'}, 1000);
});

$(document).on('click', '.tooClose', function() {
  $(this).removeClass('tooClose');
});





