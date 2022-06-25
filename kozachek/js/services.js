$(function () {

  AOS.init();

  // ======= Плавный скролл к якорным ссылкам =======

$(".services__button, .footer__nav-link--services, .footer__bottom-link").on("click", function(e) {
  e.preventDefault()
  var id  = $(this).attr('href'),
  top = $(id).offset().top
  $('body,html').animate({ scrollTop: top }, 1500)
})













})