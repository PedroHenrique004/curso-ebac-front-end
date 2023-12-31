$(document).ready(function(){
    $('#carousel-imagens').slick({
        autoplay:true
    });


$('.menu-hamburguer').click(function(){
    $('nav').slideToggle();
})

// se fosse uma plca de carro por exemplo 
//$('#placa-do-carro').mask('SSS-0000', {
//placeholder: 'ABC-1234'
//})



$('#telefone').mask('(00) 00000-0000', {
    placeholder: '(DDD) 12345-6789'
})

$('form').validate({
    rules: {
        nome: {
            required:true
        },
        email: {
            required:true,
            email: true
        },
        telefone: {
            required:true
        },
        mensagem: {
            required:true
        },
        veiculoInteresse: {
            required:false
        }

    },

    messages: {
        nome: 'Por favor insira o seu nome',
    },
    submitHandler: function(form){
            console.log(form)
    },
    invalidHandler: function(evento, validador){
        let camposIncorretos = validador.numberOfInvalids();
        console.log(camposIncorretos)
        if (camposIncorretos) {
            alert(`Existem ${camposIncorretos} campos incorretos`)
        }
    }

})

    $('.lista-veiculos button').click(function(){
        const destino = $('#contato');

        const nomeVeiculo = $(this).parent().find('h3').text();

        $('#veiculoInteresse').val(nomeVeiculo);
    
        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })

})