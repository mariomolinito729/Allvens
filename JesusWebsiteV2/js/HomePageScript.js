$(document).ready(function() {
    $(window).scroll(function() {
      if($(this).scrollTop() > 200) { 
          $('.navbar').addClass('solid');
          $(".nav-item").addClass("text-white");
          $(".nav-item").removeClass("text-dark");
      } else {
          $('.navbar').removeClass('solid');
          $(".nav-item").removeClass("text-white");
          $(".nav-item").addClass("text-dark");
      }
    });
});