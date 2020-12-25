$(function(){

  
    $(".gallery__btn").on('click',function () {
      $(".gallery__img-link--no-active").toggleClass("gallery__img-link");
      return false;
    });
  

  $('.tabs__btn').on('click', function(e){
    e.preventDefault();
    $('.tabs__btn').removeClass('tabs__btn--active');
    $(this).addClass('tabs__btn--active');

    $('.tabs__content-items').removeClass('tabs__content-items--active');
    $($(this).attr('href')).addClass('tabs__content-items--active');

  });

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

  
  $('[data-toggle="datepicker"]').datepicker({
    language: 'ru-RU',
    format: 'dd.mm.yyyy',
    days: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг','пятница', 'суббота'],
    daysShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
    daysMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль','Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    monthsShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг','Сен', 'Окт', 'Ноя', 'Дек'],
    autoHide: true,
  });

});