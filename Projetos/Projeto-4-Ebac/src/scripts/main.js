document.addEventListener('DOMContentLoaded', function(){
    const botoes = document.querySelectorAll('[data-tab-button]');
    const headerElement = document.querySelector('[data-tab-header]');

    const secaoHero = document.querySelector('.introducao');
    const alturaHero = secaoHero.clientHeight;

    window.addEventListener('scroll', function(){
        const posicaoDoScroll = window.scrollY;

        if (posicaoDoScroll < alturaHero) {
            headerElement.classList.remove('header--is-hidden');
        }
        else {
            headerElement.classList.add('header--is-hidden');
        }
    })

    for (let i = 0; i < botoes.length; i++){
        botoes[i].addEventListener('click', function(botao){
            const abaAtiva = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAtiva}]`);
            esconderOutrasAbas();
            trocarBotaoAtivo();
            aba.classList.add('sobre-os-filmes__container__content--is-active');
            botao.target.classList.add('sobre-os-filmes__container__nav__div__button--is-active');
        })
    }

    function esconderOutrasAbas(){
        const outrasAbas = document.querySelectorAll('[data-tab-id');

        for (let i = 0; i < outrasAbas.length; i++){
            outrasAbas[i].classList.remove('sobre-os-filmes__container__content--is-active');
        }
    }

    function trocarBotaoAtivo(){
        const botoesExistentes = document.querySelectorAll('[data-tab-button]');

        for (let i = 0; i < botoesExistentes.length; i++){
            botoesExistentes[i].classList.remove('sobre-os-filmes__container__nav__div__button--is-active')
        }
    }
 
})