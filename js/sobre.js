/* acordeão das perguntas frequentes */

$(function () {

  // abre/fecha a pergunta clicada (e fecha as outras)
  $(".pergunta").on("click", function () {
    var $resposta = $(this).next(".resposta");
    var $seta = $(this).find(".seta");
    var vaiAbrir = !$resposta.hasClass("aberto");

    $(".resposta").removeClass("aberto");
    $(".seta").removeClass("aberto");

    if (vaiAbrir) {
      $resposta.addClass("aberto");
      $seta.addClass("aberto");
    }
  });
});
