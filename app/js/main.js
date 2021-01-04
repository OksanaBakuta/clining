$(function(){

  $(window).on('load resize', function (){
    if ($(window).width() < 765){
      $('.menu__item--no-active').addClass('menu__item');
      $('.services__img-text').addClass('services__img-text--media');
    } else{
      $('.menu__item--no-active').removeClass('menu__item');
      $('.services__img-text').removeClass('services__img-text--media');
    }
  });

  $('.menu-btn').on('click', function(){
    $('.header-top__inner').toggleClass('header-top__inner--active');
    $('.menu-btn').toggleClass('menu-btn--active');
  });

  $('.menu__item-link').click(function (e) {
    e.preventDefault();
    var target = $($(this).attr('href'));
    if (target.length) {
      var scrollTo = target.offset().top;
      $('body, html').animate({ scrollTop: scrollTo + 'px' }, 500);
    }
  });

  /* var hh = $('.header').height();
  $(window).scroll(function(){
    if($(document).scrollTop() > hh){
      $('.header-top__inner').addClass('header-top__inner--fixed');
      $('.arrow-fixed').addClass('arrow-fixed--active');
    }else{
      $('.header-top__inner').removeClass('header-top__inner--fixed');
      $('.arrow-fixed').removeClass('arrow-fixed--active');
    }
  }); */

  $('.tabs__btn').on('click', function(e){
    e.preventDefault();
    $('.tabs__btn').removeClass('tabs__btn--active');
    $(this).addClass('tabs__btn--active');

    $('.tabs__content-items').removeClass('tabs__content-items--active');
    $($(this).attr('href')).addClass('tabs__content-items--active');

  });

  function start_count() {
    $('.info__item-num').each(function () {
      $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
      }, {
        duration: 2000,
        easing: 'swing',
        step: function (now) {
          $(this).text(Math.ceil(now));
        }
      });
      
    });
  }
  
  var blockStatus = true;
  var wh = $(window).height();
  var et = $('.info').offset().top;
  var eh = $('.info').outerHeight();
  
  $(window).on('load resize', function () {
    if (wh >= et + 20&&blockStatus){
      blockStatus = false;
      start_count();
    }
  });

  $(window).on('scroll', function () {
    if ($(this).scrollTop() > (et - wh)&&blockStatus) {
      blockStatus = false;
      start_count();
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