$(function() {
    $('button').on('click', function() {
      var altura = parseFloat($('#altura').val().replace(',', '.')).toFixed(2);
      var peso = parseFloat($('#peso').val().replace(',', '.')).toFixed(2);
      var imc = (peso / (altura * altura)).toFixed(2);
      var traducao;
  
      if (imc < 16) {
        traducao = 'Desnutrido';
      } else if (imc < 17) {
        traducao = 'Semi-desnutrição';
      } else if (imc < 18.5) {
        traducao = 'Baixo peso';
      } else if (imc < 25) {
        traducao = 'Peso normal';
      } else if (imc < 30) {
        traducao = 'Sobrepeso';
      } else if (imc < 35) {
        traducao = 'Obesidade grau I';
      } else if (imc < 40) {
        traducao = 'Obesidade grau II';
      } else {
        traducao = 'Obesidade grau III';
      }
  
      $('#resultado').css('display', 'block').html('Seu IMC é ' + imc + ' kg/m² e seu status é: ' + traducao);
      $('.button, input, h1, h2').css('display', 'none');
      $('.button2').css('display', 'block');
    });
  });
  