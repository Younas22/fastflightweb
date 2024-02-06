
// bottom button
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("#scrollToTopBtn").fadeIn();
    } else {
      $("#scrollToTopBtn").fadeOut();
    }
  });
  $("#scrollToTopBtn").click(function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
  });
});


