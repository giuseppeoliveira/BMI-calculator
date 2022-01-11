// IMC = Peso / (Altura²)

$(function(){
    $('button').bind('click', function(){
        var altura = $('#altura').val();
        var peso = $('#peso').val();

        altura = altura.replace(',','.');
        peso = peso.replace(',','.');

        var imcA = peso/(altura*altura);
        var imc = +parseFloat((imcA).toFixed(2));


        if(imc <16) {
            var traducao = 'Desnutrido';
        } else if(imc >=16 && imc <16.99){
            var traducao = 'Semi-desnutrição';
        } else if(imc >=17 && imc <18.49){
            var traducao = 'Baixo peso';
        } else if(imc >=18.50 && imc <24.99){
            var traducao = 'Peso normal';
        } else if(imc >=25 && imc <29.99){
            var traducao = 'Sobrepeso';
        } else if(imc >=30 && imc <34.99){ 
            var traducao = 'Obesidade grau I';
        } else if(imc >=35 && imc <39.99){
            var traducao = 'Obesidade grau II';
        } else if(imc >=40){
            var traducao = 'Obesidade grau III';
        }

        $('#resultado').css("display", "block").html("Seu IMC é "+imc+" kg/m² e seu status é: "+traducao);
        $('.button, input, h1, h2').css("display", "none");
        $('.button2').css("display", "block");
        

    });
});

