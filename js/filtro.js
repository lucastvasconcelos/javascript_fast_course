receberFiltro = document.querySelector("#filtrar-tabela");
receberFiltro.addEventListener("input",function() {
    var pacientes = document.querySelectorAll(".paciente")
    for (paciente of pacientes){
    var tdNome =  paciente.querySelector(".info-nome")
    var nome = tdNome.textContent
    if(nome != receberFiltro.value){
        paciente.classList.add("invisivel")
    }
    else{
        paciente.classList.remove("invisivel")
    }
}})