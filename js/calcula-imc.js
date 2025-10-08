  
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
            var IMC = calculaIMC(peso, altura);
        
        //valores booleanos
            var pesoValido = validarPeso(peso);
            var alturaValida = validarAltura(altura);
            var tdIMC = paciente.querySelector(".info-imc")
        
            if(pesoValido && alturaValida){
                tdIMC.textContent = IMC;
            }

        //condição para definir se peso ou altura são inválidos
            if(!validarPeso(peso)){
                console.log("Peso Inválido");
                var pesoValido = false;
                tdIMC.textContent = "Peso Inválido"
                paciente.classList.add("paciente-invalido");
            }
        
            if(!validarAltura(altura)){
                console.log("Altura Inválida");
                var alturaValida = false;
                tdIMC.textContent = "Altura Inválida"
                paciente.classList.add("paciente-invalido");
            }
                 
}

function calculaIMC(peso, altura){
    var imc = peso / (altura * altura);
    return imc.toFixed(2);
}

function validarPeso(peso){
    if(peso > 0 && peso < 1000){
        return true;
    }else{
        return false;
    }
}

function validarAltura(altura){
    if(altura >=0 && altura < 4.00){
        return true;
    }else{
        return false;
    }
}





