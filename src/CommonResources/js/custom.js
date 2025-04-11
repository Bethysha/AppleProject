
// $(".footer-links-wrapper h3").on("click", function () {
//     $(this).next("ul").slideToggle();
//     $(this).toggleClass("expanded");
//   });



  $(document).on("click", ".footer-links-wrapper h3", function () {
    $(this).next("ul").slideToggle();
    $(this).toggleClass("expanded");
  });
  
  
  
  
  function togglerActiveClass() {
      $(window).on('resize', function () {
        if ($(window).width() <= 768) {
            $(".footer-links-wrapper h3").removeClass("expanded");
      }
      else {
        $('.footer-links-wrapper ul').show()
      }
    })
  }
  $(function () {
    togglerActiveClass();
  });