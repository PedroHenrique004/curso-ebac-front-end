const form = document.getElementById('form-numeros');
const numeroA = document.getElementById('numero-a');
const numeroB = document.getElementById('numero-b');
const mensagemSucesso = 'O numero B é maior que o numero A';
const mensagemErro = 'O numero A não pode ser igual ou menor ao numero B';



form.addEventListener('submit', function(e){
    e.preventDefault();

    if (numeroB.value >= numeroA.value){
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';


        const containerMensagemFracasso= document.querySelector('.error-message');
        containerMensagemFracasso.innerHTML = mensagemErro;
        containerMensagemFracasso.style.display = 'none';

        numeroA.value='';
        numeroB.value='';
    }
    else {
        const containerMensagemFracasso= document.querySelector('.error-message');
        containerMensagemFracasso.innerHTML = mensagemErro;
        containerMensagemFracasso.style.display = 'block';

        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'none';
    }
})