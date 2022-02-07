$(function () {

  $('.banner_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: '<i class="fas fa-chevron-right nxt_arr"></i>',
    prevArrow: '<i class="fas fa-chevron-left prev_arr"></i>',
    dots: true,
    fade: false,
  });
  // ========================================================
  $('.banner_big').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    asNavFor: '.banner_small',
    speed: 2000,
  });
  $('.banner_small').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.banner_big',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    arrows: false,
    speed: 2000,
    autoplay: true,
  });
  // ============================================================
  $('.banner_text_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: '<i class="fas fa-chevron-right nxt_arr"></i>',
    prevArrow: '<i class="fas fa-chevron-left prev_arr"></i>',
    
    fade: false,
  });








});