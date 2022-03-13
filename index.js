"use strict"

const botao  = document.getElementById("botao")

const janela = document.createElement("div")
janela.setAttribute("class","drop")
janela.style.width = "200px"
janela.style.height = "30px"
janela.style.color = "red"
janela.style.backgroundColor = "rgba(0, 0, 0, 0.596)"
janela.style.display = "none"
janela.style.position = "absolute"
janela.style.zIndex = "1"
janela.style.top = "-160%"
janela.style.textAlign = "center"
const resposta = document.querySelector('.res')
resposta.appendChild(janela)

function verifica_email(valor){
    const regex_email = /\w+\@\w+\.com|.com.br/
    if(regex_email.test(valor) == true){
        return true
    }else{
        return false
    }
}
botao.addEventListener("click", function(e) {
    e.preventDefault()
    const email = document.getElementById("email")
    let valor_email = email.value 
    if(verifica_email(valor_email) == true){
        janela.style.display = "block"
        janela.innerText = "Email valido!"
        janela.textAlign = "center"
    }else{
        janela.style.display = "block"
        janela.innerText = "Email invalido"
        janela.textAlign = "center"
    }
})
