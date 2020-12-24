$(function(){

  var show = true;
  var countbox = ".info__items";
  $(window).on("scroll load resize", function () {
    if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
    var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
    var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
    var w_height = $(window).height(); // Высота окна браузера
    var d_height = $(document).height(); // Высота всего документа
    var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
    if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
      $('.info__item-num').css('opacity', '1');
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