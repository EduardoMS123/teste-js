  
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
        
        //condição para definir se peso ou altura são inválidos
            if(peso <= 0 || peso >= 1000 ){
                var pesoValido = false;
                alert("Peso Inválido");
            }
        
            if(altura <= 0 || altura >= 4.00){
                var alturaValida = false;
                alert("Altura Inválida");
            }
        
            if(pesoValido && alturaValida){
                var tdIMC = paciente.querySelector(".info-imc")
                tdIMC.textContent = IMC.toFixed(2);
        
            }
}




























