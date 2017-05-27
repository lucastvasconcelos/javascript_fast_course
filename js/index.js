let pacientes = document.querySelectorAll(".paciente")

function calcularImc (peso,altura)  {
    let imc = (peso/(altura**2)).toFixed(2)
    return imc    
}

function preencherimc (paciente){
    let tdNome = paciente.querySelector(".info-nome")
    let tdPeso = paciente.querySelector(".info-peso")
    let tdAltura = paciente.querySelector(".info-altura")
    let tdImc = paciente.querySelector(".info-imc")
    let peso = (tdPeso.textContent)
    let altura = (tdAltura.textContent)
    
    pesoValido = validaPeso(peso)
    alturaValida = validaAltura(altura)
    if (!pesoValido){
        tdImc.textContent = ("Peso Invalido")
        paciente.classList.add("paciente-invalido")    
    }
    else if (!alturaValida){
        tdImc.textContent = ("Altura Invalida")        
        paciente.classList.add("paciente-invalido")    
    }
    else{
        tdImc.textContent =  calcularImc(peso,altura)
    }
}

for (paciente of pacientes){
    preencherimc(paciente)
}

