let botao = document.querySelector("#adicionar-paciente")
botao.addEventListener("click", function(event) {
    
    let acesso_tabela = document.querySelector("#tabela-pacientes")
    
    event.preventDefault()
    
    let form = document.querySelector("#form-adiciona")
    
    paciente = receberDados(form)
    
    let erros = validaPaciente(paciente)
    console.log(erros)

    if (erros.length > 0){
        mostrarTodosErros(erros)
    }
    else{
        let newTr = montarTr(paciente)
        acesso_tabela.appendChild(newTr)
        mensagemErro = document.querySelector("#mensagem-erro")
        mensagemErro.innerHTML = ""
    }
form.reset()
      
})

function mostrarTodosErros(erros){
    ul = document.querySelector("#mensagem-erro")
    ul.innerHTML = ""
    for (erro of erros){
        var li = document.createElement("li")
        li.textContent = erro
        li.classList.add("aviso")
        ul.appendChild(li)
    }
}

function receberDados(form){
    var paciente = {
        nome : form.nome.value,
        peso : form.peso.value,
        altura : form.altura.value,
        gordura: form.gordura.value,
        imc : calcularImc(form.peso.value,form.altura.value)
    }
   return paciente
}

function montarTd(dado,classe){
   var td = document.createElement("td")
   td.textContent = dado
   td.classList.add(classe)
   return td
}   

function montarTr(paciente){
    let newTr = document.createElement("tr")
    
    newTr.appendChild(montarTd(paciente.nome,"info-nome"))
    newTr.appendChild(montarTd(paciente.peso,"info-peso"))
    newTr.appendChild(montarTd(paciente.altura,"info-altura"))
    newTr.appendChild(montarTd(paciente.gordura,"info-gordura"))
    newTr.appendChild(montarTd(paciente.imc,"info-imc"))
    
    return newTr
}


function validaPeso(peso){
    if (peso >= 0 && peso <= 300 ){
        return true
    }
    else {
        return false
    }   
 }

function validaAltura(altura){
    if(altura >= 0 && altura <= 4.0){
        return true
    }
    else {
        return false
    }
}

function validaPaciente(paciente){
    erros = []
    console.log(paciente.peso)
    console.log(paciente.altura)
    if (!validaPeso(paciente.peso)){
        erros.push("Peso invalido")
    }
    if(paciente.peso.length ==0){
        erros.push("Peso não pode ser vazio")
    }
    if(!validaAltura(paciente.altura)){
        erros.push("Altura invalida")
    }
    if(paciente.altura.length == 0){
        erros.push("Altura não pode ser vazia")
    }
    if(paciente.nome.length == 0){
        erros.push("Campo nome não pode ser vazio")
    }
    if(paciente.gordura.length == 0){
        erros.push("Campo gordura não pode ser vazio")
    }

    return erros
}
