AOS.init();

$(function () {

  // ======= Плавный скролл к якорным ссылкам =======

  $(".header__button-link, .services__button, .footer__nav-link--main, .footer__bottom-link").on("click", function(e) {
    e.preventDefault()
    var id  = $(this).attr('href'),
    top = $(id).offset().top
    $('body,html').animate({ scrollTop: top }, 1500)
  })














})