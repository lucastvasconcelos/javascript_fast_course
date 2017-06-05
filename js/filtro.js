receberFiltro = document.querySelector("#filtrar-tabela");
receberFiltro.addEventListener("input",function() {
    var pacientes = document.querySelectorAll(".paciente")

    for (paciente of pacientes){
        var tdNome =  paciente.querySelector(".info-nome")
        var nome = tdNome.textContent
        var expressao = new RegExp(this.value,"i")
        if(!expressao.test(nome)){
            paciente.classList.add("invisivel")
        }
        else{
            paciente.classList.remove("invisivel")
        }
    }
    if(receberFiltro.value.length == 0){
        for (paciente of pacientes){
        paciente.classList.remove("invisivel")
        }    
    }
})