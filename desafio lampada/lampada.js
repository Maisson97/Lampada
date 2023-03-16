var lamp = window.document.getElementById('lampada1')
var cor = window.document.getElementById('cor')
function estaQuebrada(){
    return lamp.src.indexOf('quebrada') > -1
}


function liga(){
    if(!estaQuebrada()){
    lamp.src = "/img/acesa.png";
    cor.style.background="rgba(230, 230, 25, 0.781)";}
}


function desliga(){
    if(!estaQuebrada()){
    lamp.src = "/img/apagada.png";
    cor.style.background="black";}
}


lamp.addEventListener('click',quebrar)
function quebrar(){
    lamp.src="/img/quebrada.png"
    cor.style.background="rgb(239,235,228)";
}