var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener('click', 
            function(event){
                event.preventDefault();

                //pega o id do formulario
                var formulario = document.querySelector("#form-adiciona");

               

                //cria o elemento <tr>
                var paciente = dadosPacientesFormulario(formulario);
                var pacienteTr = criaTr(paciente);

                if(!validarPaciente(paciente)){
                    console.log("paciente TA ERRADO")
                    return;
                }

                

                //tabela
                var tabela = document.querySelector("#tabela-pacientes");
                tabela.appendChild(pacienteTr);
                formulario.reset();
               

            }   
)

    function dadosPacientesFormulario(formulario){

        var paciente = {
            nome: formulario.nome.value,
            peso: formulario.peso.value,
            altura: formulario.altura.value,
            gordura: formulario.gordura.value,
            IMC: calculaIMC(formulario.peso.value, formulario.altura.value)
        }
        console.log(paciente)
return paciente;
        
    }

    function criaTr(paciente){
        var pacienteTr = document.createElement("tr");
        pacienteTr.classList.add("paciente");
    
        pacienteTr.appendChild(criaTd(paciente.nome, "info-nome"));
        pacienteTr.appendChild(criaTd(paciente.peso, "info-peso"));
        pacienteTr.appendChild(criaTd(paciente.altura, "info-altura"));
        pacienteTr.appendChild(criaTd(paciente.gordura, "info-gordura"));
        pacienteTr.appendChild(criaTd(paciente.IMC, "info-imc"));
    
        return pacienteTr;
    }
    
    function criaTd(dado, classes){
        var td = document.createElement("td");
        td.textContent = dado;
        td.classList.add(classes);
    
        return td;
    }

function validarPaciente(paciente){
    if(validarPeso(paciente.peso)){
        return true;
    }else{
        return false;
    }
}


