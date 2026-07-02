/* Funcionalidade 1: menu mobile (usado em todas as páginas) */

$(function () {
  $("#btn-menu").on("click", function () {
    $("#menu-mobile").toggleClass("aberto");
  });
});
