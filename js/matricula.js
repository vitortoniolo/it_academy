/* validação do formulário de matrícula */

$(function () {

  // limpa as marcações de erro
  function limparErros() {
    $(".campo").removeClass("erro");
    $(".msg-erro").text("");
  }

  // marca um campo com erro e escreve a mensagem
  function marcarErro(campo, mensagem) {
    $('[name="' + campo + '"]').addClass("erro");
    $('[data-erro="' + campo + '"]').text(mensagem);
  }

  // validação quando o aluno envia o formulário
  $("#form-matricula").on("submit", function (e) {
    e.preventDefault();
    limparErros();

    var nome = $("#nome").val().trim();
    var email = $("#email").val().trim();
    var telefone = $("#telefone").val().trim();
    var curso = $("#curso").val();
    var turno = $('input[name="turno"]:checked').val();
    var dataInicio = $("#dataInicio").val();
    var aceitouTermos = $('input[name="termos"]').is(":checked");

    var erros = {};

    if (nome.length < 3) {
      erros.nome = "Informe seu nome completo (mín. 3 letras).";
    }
    if (!email) {
      erros.email = "O e-mail é obrigatório.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      erros.email = "Digite um e-mail válido.";
    }
    if (!telefone) {
      erros.telefone = "O telefone é obrigatório.";
    } else if (telefone.replace(/\D/g, "").length < 10) {
      erros.telefone = "Telefone incompleto (com DDD).";
    }
    if (!curso) erros.curso = "Escolha um curso.";
    if (!turno) erros.turno = "Selecione um turno.";
    if (!dataInicio) erros.dataInicio = "Escolha uma data de início.";
    if (!aceitouTermos) erros.termos = "Você precisa aceitar os termos.";

    var camposComErro = Object.keys(erros);
    if (camposComErro.length > 0) {
      $.each(erros, function (campo, mensagem) {
        marcarErro(campo, mensagem);
      });
      // leva o foco pro primeiro campo com problema
      $('[name="' + camposComErro[0] + '"]').first().focus();
      return;
    }

    // deu tudo certo: esconde o formulário e mostra a confirmação
    var primeiroNome = nome.split(" ")[0];
    $("#texto-confirmacao").text("Recebemos seus dados, " + primeiroNome +
      ". Em breve nossa equipe entrará em contato pelo e-mail informado.");
    $("#form-matricula").hide();
    $("#confirmacao").show();
    $("html, body").animate({ scrollTop: 0 }, 250);
  });
});
