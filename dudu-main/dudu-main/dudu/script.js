document.addEventlistener('DOMCONTENTLOADED',function(){

const botaodeAcessibilidade=document.getElementById('botao-acessibilidade');   
const opcoesDeAcessibilidade=document.getElementById('opcoes-acessibilidade');

botaodeAcessibilidade.addEventListener('click',function(){
    botaodeAcessibilidade.classList.toggle('rotacao-botao')
    opcoesDeAcessibilidade.classList.toggle('apresenta-lista');
 
const botaoSelecionado=botaodeAcessibilidade.getAttribute('aria-expanded')=== 'true';
})






})
const aumentaFontebotao = document.getElementById('aumentar -fonte');
const diminuiFonteBotao = document.getElementById('diminuir-fonte');

const alternaContraste = document.getElementById('alterna-contraste')

let tamanhoAtualFonte = 1;

aumentaFontebotao.addEventListener('click', function(){
  tamanhoAtualFonte -=0.1;
  document.body.style.fontSize = `${tamanhoAtualFonte}rem`

})  
diminuiFonteBotao .addEventListener('click', function(){ 
   tamanhoAtualFonte -=0.1;
   document.body.style.fontSize =`${tamanhoAtualFonte}rem`

})
 
alternaContraste.addEventListener('click', function(){
  document.body.classList.toggle('alto-contraste')

})
 


SrcrollReveal1() .reveal('#inicio', { deley: 500});
SrcrollReveal1() .reveal('#tropicalia',{ deley:500});
SrcrollReveal1() .reveal('#galeria',{delay:500 });
SrcrollReveal1() .reveal('contato', {deley:500 }); 
