$(function() {
  $(window).on("scroll", function() {
      if($(window).scrollTop() > 50) {
          $(".header-container").addClass("active");
      } else {
          //remove the background property so it comes transparent again (defined in your css)
         $(".header-container").removeClass("active");
      }
  });
});