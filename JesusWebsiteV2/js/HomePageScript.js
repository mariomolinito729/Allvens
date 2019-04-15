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

    if ($(this).scrollTop() > 1000 && appCardsAnimated == false) {
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

$('.navbar-nav').localScroll({duration:800});

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
