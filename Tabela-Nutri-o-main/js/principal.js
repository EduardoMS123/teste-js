  
    // alterar título e subtítulo, busca os elementos a partir da classe e atribui novo valor
  var tSecundario = document.querySelector(".titulo-secundario");
    var titulo = document.querySelector(".titulo");
    
    tSecundario.textContent = "Meus clienbinhos";
    titulo.textContent = "TEMM Nutrição";

    // PACIENTE PAULO, cria a variavel paciente, busca o elemento a partir da classe e altera seu conteudo   
    var pacientes = document.querySelectorAll(".paciente");
   
    for(var i = 0; i < pacientes.length; i++){
    var paciente = pacientes[i]

            var tdPeso = paciente.querySelector(".info-peso");
            var peso = tdPeso.textContent;
    
        // busca o elemento da altura e altera seu conteudo
            var tdAltura = paciente.querySelector(".info-altura");
            var altura = tdAltura.textContent;
    
        // busca o elemento do IMC e altera seu conteudo
            var IMC = peso / (altura * altura);
        
        //valores booleanos
            var pesoValido = true;
            var alturaValida = true;
        
            if(pesoValido && alturaValida){
                var tdIMC = paciente.querySelector(".info-imc")
                tdIMC.textContent = IMC.toFixed(2);
            }

        //condição para definir se peso ou altura são inválidos
            if(peso <= 0 || peso >= 1000 ){
                console.log("Peso Inválido");
                var pesoValido = false;
                tdIMC.textContent = "Peso Inválido"
                paciente.classList.add("paciente-invalido");
            }
        
            if(altura <= 0 || altura >= 4.00){
                console.log("Altura Inválida");
                var alturaValida = false;
                tdIMC.textContent = "Altura Inválida"
                paciente.classList.add("paciente-invalido");
            }
                 
}

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener('click', 
            function(event){
                event.preventDefault();
                console.log("ME CLIKO");
            }   
)




