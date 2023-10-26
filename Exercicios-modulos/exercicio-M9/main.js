$(document).ready(function(){
    
    $('form').on('submit', function(e){

        e.preventDefault();

        const nomeAtividade = $('#atividade').val();
        const novoItem =  $(`<li>${nomeAtividade}</li>`)

        $(novoItem).appendTo('ul');
        $('#atividade').val('');

        $('ul').on('click','li',function(){
            $(this).css('text-decoration', 'line-through');
        })

        
    })

})
