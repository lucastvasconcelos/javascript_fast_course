let botao = document.querySelector("#adicionar-paciente")
botao.addEventListener("click", function(event) {
    let acesso_tabela = document.querySelector("#tabela-pacientes")
    event.preventDefault()
    let form = document.querySelector("#form-adiciona")
    paciente = receberDados(form)
    let newTr = montarTr(paciente)
    acesso_tabela.appendChild(newTr)
    form.reset()
  })

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
