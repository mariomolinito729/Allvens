var appCardsAnimated = false;
// to keep track if the user has scrolled passed the icons

$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
      $(".navbar").addClass("solid");
      $(".nav-item").addClass("text-white");
      $(".nav-item").removeClass("text-dark");
    } else {
      $(".navbar").removeClass("solid");
    }

    if ($(this).scrollTop() > 900 && appCardsAnimated == false) {
      appCardsAnimated = true;
      $(function() {
        animate("#appCard", "zoomIn");
        animate("#appCard2", "zoomIn");
        animate("#appCard3", "zoomIn");
        animate("#appCard4", "zoomIn");
        animate("#appCard5", "zoomIn");
        animate("#appCard6", "zoomIn");
        animate("#appCard7", "zoomIn");
        animate("#appCard8", "zoomIn");

        function animate(element, animation) {
          $(element).addClass("revealAppCard");
          $(element).addClass("animated " + animation);
          var wait = setTimeout(function() {
            $("#appCard").removeClass("hideAppCard");
            $(element).removeClass("animated " + animation);
          }, 1000);
        }
      });
    }
  });
});

// $(".checkOutHolder").hover(function() {
//     $(this).addClass("animated shake");
//     var wait = setTimeout(function() {
//         $(".checkOutHolder").removeClass("animated shake");
//     }, 1000);
//     console.log("lkadjsf");
// });

$(function() {
  $("#animateButton").click(function() {
    animate("#animateHead", "bounce");
    console.log("button clicked");
    return false;
  });

  function animate(element, animation) {
    $(element).addClass("animated " + animation);
    var wait = setTimeout(function() {
      $(element).removeClass("animated " + animation);
    }, 1000);
  }
});

var footerCanvas = document.querySelector("#footerCanvas");

var footerCanvasWidth = window.innerWidth;
var footerCanvasHeight = 200;

footerCanvas.width = footerCanvasWidth;
footerCanvas.height = footerCanvasHeight;

var footerC = footerCanvas.getContext("2d");

function Circle(x, xv, y, yv, radius) {
  this.x = x;
  this.xVelocity = xv;
  this.y = y;
  this.yVelocity = yv;
  this.radius = radius;

  this.draw = function() {
    footerC.beginPath();
    footerC.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    footerC.fillStyle = "rgba(255, 255, 255, 0.514)";
    footerC.fill();
  };

  this.update = function() {
    console.log("This ran");
    // update the circle to move
    if (
      this.x + this.radius > footerCanvasWidth - 10 ||
      this.x - this.radius < 0
    ) {
      this.xVelocity = -this.xVelocity;
    }
    if (this.y + this.radius > footerCanvasHeight || this.y - this.radius < 0) {
      // make it the opposite to make it go the opposite
      //// direction
      this.yVelocity = -this.yVelocity;
    }

    this.x += this.xVelocity;

    this.y += this.yVelocity;

    // after upadting the circle we are going to want
    //// to show the changes on canvas
    this.draw();
  };
}

var circlesOnCanvas = [];

for (var i = 0; i < 100; i++) {
  var randCircleRadius = Math.random() * 20;

  var randXCoord =
    Math.random() * (window.innerWidth - randCircleRadius * 2) +
    randCircleRadius;

  var randXVelocity = (Math.random() - 0.5) * 8;

  var randYCoord =
    Math.random() * (window.innerHeight - randCircleRadius * 2) +
    randCircleRadius;

  var randYVelocity =(Math.random() - 0.5) * 8;

  circlesOnCanvas.push(
    new Circle(
      randXCoord,
      randYVelocity,
      randYCoord,
      randYVelocity,
      randCircleRadius
    )
  );
}

function animate() {
  requestAnimationFrame(animate);

  footerC.clearRect(0, 0, footerCanvasWidth, footerCanvasHeight);

  for (var item in circlesOnCanvas) {
    circlesOnCanvas[item].update();
  }
}

animate();
