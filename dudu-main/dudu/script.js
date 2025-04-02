document.addEventlistener('DOMCONTENTLOADED',function(){

const botaodeAcessibilidade=document.getElementById('botao-acessibilidade');   
const opcoesDeAcessibilidade=document.getElementById('opcoes-acessibilidade');

botaodeAcessibilidade.addEventListener('click',function(){
    botaodeAcessibilidade.classList.toggle('rotacao-botao')
    opcoesDeAcessibilidade.classList.toggle('apresenta-lista');
 
const botaoSelecionado=botaodeAcessibilidade.getAttribute('aria-expanded')=== 'true';
})






})