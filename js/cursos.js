/* busca e filtro por categoria no catálogo.
   Os cards estão escritos no HTML; o JavaScript só mostra e esconde. */

$(function () {

  var categoriaAtiva = "Todos";

  // passa por todos os cards decidindo quais ficam visíveis
  function filtrarCursos() {
    var busca = $("#campo-busca").val().trim().toLowerCase();
    var visiveis = 0;

    $("#lista-cursos .card-curso").each(function () {
      var $card = $(this);
      var mesmaCategoria = categoriaAtiva === "Todos" || $card.data("categoria") === categoriaAtiva;
      var contemBusca = !busca || $card.text().toLowerCase().indexOf(busca) !== -1;
      var mostrar = mesmaCategoria && contemBusca;

      $card.toggle(mostrar);
      if (mostrar) visiveis++;
    });

    $("#contagem").text(visiveis + " curso(s) encontrado(s)");
    $("#sem-resultados").toggle(visiveis === 0);
  }

  // clique nos botões de categoria
  $(".filtro").on("click", function () {
    categoriaAtiva = $(this).data("categoria");
    $(".filtro").removeClass("ativo");
    $(this).addClass("ativo");
    filtrarCursos();
  });

  // busca conforme digita
  $("#campo-busca").on("input", filtrarCursos);

  filtrarCursos();
});
