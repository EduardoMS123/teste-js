const input = document.getElementById("pontos");
const form = document.getElementById("form");
const botao = document.getElementById("botao");

botao.addEventListener('click', function(event){
event.preventDefault();

let valorDigitado = obtemValorDigitado(form);

if(valorDigitado > 500){
    alert("Parabéns! Sua pontuação foi suficiente");
}else if(valorDigitado == 500){
    alert("Parabéns! Sua pontuação foi suficiente.");
}else{
    alert("Infelizmente sua pontuação não foi suficiente.");
}

})

function obtemValorDigitado(form){
    let valorDigitado = form.pontos.value;

    return valorDigitado
}