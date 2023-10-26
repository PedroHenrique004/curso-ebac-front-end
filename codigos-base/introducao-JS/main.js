const form = document.getElementById('form-deposito');
const nomeBeneficiario = document.getElementById('nome-beneficiario');
let formEValido = false;


// essa função valida o nome caso ele tenha mais de 2 palavras

function validaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length >= 2;
}

// Adicionando evento ao form caso o botão seja clicado
form.addEventListener('submit', function(e){ //addEventListenner ( ' ' , )
    
    // pra começar com o form como falso 
    /*let formEValido = false; passei pra global tambem */
   
    //evita que a página recarregue
    e.preventDefault();
 
    /*const nomeBeneficiario = document.getElementById('nome-beneficiario');  tambem era aqui, mas passou para a global para poder reiniciar o site depois da menssagem de erro*/
    // constantes que receberão o valor que for digitado no formulário (a de cima tambem)
    const numeroContaBeneficiario = document.getElementById('numero-conta');
    const valorDeposito = document.getElementById('valor-deposito');
    //cria a mensagem caso esteja tudo certo

    /* const mensagemSucesso = `Montante de: ${valorDeposito.value} depositado para o cliente: ${nomeBeneficiario.value} - conta: ${numeroContaBeneficiario.value}`;*/

    const mensagemSucesso = `Montante de: <b>${valorDeposito.value}</b> depositado para o cliente: <b>${nomeBeneficiario.value}</b> - conta: <b>${numeroContaBeneficiario.value}</b>`;
    // aqui a mensagem ira afetar diretamente no HTML

    //
    formEValido  = validaNome(nomeBeneficiario.value)

    //dando valor de valido ao form se o if for atendido
    if(formEValido){

        const containerMensagemSucesso = document.querySelector('.sucess-message');

        //O codigo de baixo sobreescreveu o html 
        containerMensagemSucesso.innerHTML = mensagemSucesso; /*document.querySelector('.sucess-message') era assim antes de mudar o css com Js*/ 
        containerMensagemSucesso.style.display = 'block'; // Aqui está editando o CSS com style 

        /*alert(mensagemSucesso);  tirar esse alerta da cara do cliente*/ 

        //Aqui limpara os campos caso esteja tudop certo
        nomeBeneficiario.value = '';
        numeroContaBeneficiario.value = '';
        valorDeposito.value = '';
    }
    else {

        // deixando a borda vermelha
        nomeBeneficiario.style.border = '1px solid red';

        //fazendo a mensagem de error aparecer quando der erro
        document.querySelector('.error-message').style.display = 'block';
        /*alert("o nome não está completo"); era assim antes usar o CSS*/   
    }

})

nomeBeneficiario.addEventListener('keyup', function(e) { // keyup pega em tempo real a ação do usuario
    console.log(e.target.value); //target é uma referência ao objeto que enviou o evento, no caso meu target era o value que tinha o nome
    formEValido  = validaNome(e.target.value);// para saber sempre que houver uma mudança no nome


    // Copiei de cima e so foi aproveitado a parte dos estilos e so o else que virou if aqui 
    if(!formEValido){ // não é valido por causa do !formEValido

        nomeBeneficiario.classList.add('error');
    
        // nomeBeneficiario.style.border = '1px solid red'; era assim antes de criar uma classe só pra inputs
        document.querySelector('.error-message').style.display = 'block';
    }
    
    else{
        nomeBeneficiario.classList.remove('error');
        document.querySelector('.error-message').style.display = 'none';
    }

});
