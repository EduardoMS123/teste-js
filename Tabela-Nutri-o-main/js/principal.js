  
    // alterar título e subtítulo, busca os elementos a partir da classe e atribui novo valor
  var pacientes = document.querySelector(".titulo-secundario");
    var titulo = document.querySelector(".titulo");
    
    pacientes.textContent = "Meus clienbinhos";
    titulo.textContent = "TEMM Nutrição";


    // PACIENTE PAULO, cria a variavel paciente, busca o elemento a partir da classe e altera seu conteudo   
var paciente = document.querySelector("#primeiro-paciente");
var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

    // busca o elemento da altura e altera seu conteudo
var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

    // busca o elemento do IMC e altera seu conteudo
var IMC = peso / (altura * altura);
var tdIMC = paciente.querySelector(".info-imc")
tdIMC.textContent = IMC;

console.log(IMC);


























