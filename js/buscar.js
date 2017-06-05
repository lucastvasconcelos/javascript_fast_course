let buttonBuscar = document.querySelector("#buscar-paciente")
buttonBuscar.addEventListener("click",function(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET","http://api-pacientes.herokuapp.com/pacientes")
    xhr.addEventListener("load",function(){
    erroAjax = document.querySelector("#erro-ajax")
        if (xhr.status == 200){
        erroAjax.classList.add("invisivel")
        var resposta = xhr.responseText
        var pacientesApi = JSON.parse(resposta)
        for(paciente of pacientesApi){
            adicionarNaTabela(paciente)
        }
    }
    else {
        console.log("status: "  + xhr.status + ", erro: " + xhr.responseText)
        erroAjax.classList.remove("invisivel")    
    }
    })
    xhr.send()
})
