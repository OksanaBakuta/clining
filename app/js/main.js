$(function(){

  var show = true;
  $(window).on("scroll load resize", function () {
    if (!show) return false;
    var w_top = $(window).scrollTop();
    if (w_top >= 100) {
      $('.info__item-num').each(function () {
        $(this).prop('Counter', 0).animate({
          Counter: $(this).text()
        },
          {
            duration: 2000,
            easing: 'swing',
            step: function (now) {
              $(this).text(Math.ceil(now));
            }
          });
      });
      show = false;
    }
  });

});