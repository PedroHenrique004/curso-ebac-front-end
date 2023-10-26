$('#telefone').mask('(00) 00000-0000', {
    placeholder: '(DDD) 12345-6789'
})

$('#cpf').mask('00.000.000-00', {
    placeholder: 'Seu CPF'
})

$('#cep').mask('00-000-000', {
    placeholder: 'Seu CEP'
})

$('#botao').click('submit', function(e){
    alert('Funcionou')
})