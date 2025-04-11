$(".footer-links-wrapper h3").each(function () {
  $(this).on("click", function () {
    let abc = $(this);

    $(".footer-links-wrapper ul")
      .not(abc.next("ul"))
      .slideUp(function () {
        $(".footer-links-wrapper h3").not(abc).removeClass("expanded");
      });

    abc.next("ul").slideToggle(function () {
      abc.toggleClass("expanded");
    });
  });
});
