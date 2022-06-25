$(function () {

  AOS.init();

  // ======= Плавный скролл к якорным ссылкам =======

$(".button, .footer__nav-link--autopark, .footer__bottom-link").on("click", function(e) {
  e.preventDefault()
  var id  = $(this).attr('href'),
  top = $(id).offset().top
  $('body,html').animate({ scrollTop: top }, 1500)
})













})