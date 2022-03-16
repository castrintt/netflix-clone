"use strict"

//criando um elemento de div com texto para que o usuario verifica se email ou senha/ email e senha estão corretos

const janela_verificacao = document.createElement("div")
janela_verificacao.setAttribute("class","drop")
janela_verificacao.style.width = "250px"
janela_verificacao.style.height = "30px"
janela_verificacao.style.color = "red"
janela_verificacao.style.backgroundColor = "rgba(0, 0, 0, 0.596)"
janela_verificacao.style.display = "none"
janela_verificacao.style.position = "absolute"
janela_verificacao.style.zIndex = "1"
janela_verificacao.style.top = "-90px"
janela_verificacao.style.left = "50%"
janela_verificacao.style.transform = "translate(-50%)"
janela_verificacao.style.textAlign = "center"


const resposta = document.querySelector('.res')
resposta.appendChild(janela_verificacao)

//SPINNER

const spin = document.querySelector(".posicao__spinner")
spin.style.position = "absolute"
spin.style.left = "40%"
spin.style.top = "20%"
spin.style.width = "50px"
spin.style.height = "50px"
spin.style.color = "red"
spin.style.display = "none"
spin.style.zIndex  = "1"


const botao  = document.getElementById("botao")

//funcao para verificar email com base em uma expressao regular

function verifica_email(valor){
    const regex_email = /\w+\@\w+\.com|.com.br/
    if(regex_email.test(valor) == true){
        return true
    }else{
        return false
    }
}

//funcao para verificar senha com base em uma expressao regular


function verifica_senha(valor){
    const regex_senha = /\w{4,12}/
    if(regex_senha.test(valor) == true){
        return true
    }else {
        return false
    }
}

//botao sign in formulario

botao.addEventListener("click", function(e) {
    e.preventDefault()
    const email = document.getElementById("email")
    const senha = document.getElementById("senha")
    let valor_senha = senha.value
    let valor_email = email.value 
    if(verifica_email(valor_email) == true && verifica_senha(valor_senha) == true){
        janela_verificacao.style.display = "block"
        janela_verificacao.innerText = "Login"
        spin.style.display = "block"
        setTimeout(() => {
            spin.style.display = "none"
        }, 1400);
        setTimeout(() => {
            janela_verificacao.style.display = "none"
           
        }, 1500);
        setTimeout(() => {
            window.location = "home.html"
        }, 2000);
    }else if(verifica_email(valor_email) == true && verifica_senha(valor_senha) == false){
        janela_verificacao.style.display = "block"
        janela_verificacao.innerText = "Invalid Password"
        spin.style.display = "block"
        setTimeout(() => {
            spin.style.display = "none"
        }, 1400);
        setTimeout(() => {
            janela_verificacao.style.display = "none"
        }, 1500);
        setTimeout(() => {
            window.location = "login.html"
        }, 2000);
    }else if(verifica_email(valor_email) == false && verifica_senha(valor_senha) == true){
        janela_verificacao.style.display = "block"
        janela_verificacao.innerText = "Invalid Email"
        spin.style.display = "block"
        setTimeout(() => {
            spin.style.display = "none"
        }, 1400);
        setTimeout(() => {
            janela_verificacao.style.display = "none"
        }, 1500);
        setTimeout(() => {
            window.location = "login.html"
        }, 2000);
    }else if(verifica_email(valor_email) == false && verifica_senha(valor_senha) == false){
        janela_verificacao.style.display = "block"
        janela_verificacao.innerText = "Email or Password invalid!"
        spin.style.display = "block"
        setTimeout(() => {
            spin.style.display = "none"
        }, 1400);
        setTimeout(() => {
            janela_verificacao.style.display = "none"
        }, 1500);
        setTimeout(() => {
            window.location = "login.html"
        }, 2000);
    }
    
})

//botao topo sign in


const botao_top = document.getElementById("submit__top--button")

botao_top.addEventListener("click", function(e) {
    e.preventDefault()
    const email = document.getElementById("email")
    const senha = document.getElementById("senha")
    let valor_senha = senha.value
    let valor_email = email.value 
    if(verifica_email(valor_email) == true && verifica_senha(valor_senha) == true){
        janela_verificacao.style.display = "block"
        janela_verificacao.innerText = "Login!"
        setTimeout(() => {
            janela_verificacao.style.display = "none"
            window.location = "home.html"
        }, 2000);
    }else if(verifica_email(valor_email) == true && verifica_senha(valor_senha) == false){
        janela_verificacao.style.display = "block"
        janela_verificacao.innerText = "Password Invalid"
        setTimeout(() => {
            janela_verificacao.style.display = "none"
        }, 2000);
    }else if(verifica_email(valor_email) == false && verifica_senha(valor_senha) == true){
        janela_verificacao.style.display = "block"
        janela_verificacao.innerText = "Invalid Email"
        setTimeout(() => {
            janela_verificacao.style.display = "none"
        }, 2000);
    }else if(verifica_email(valor_email) == false && verifica_senha(valor_senha) == false){
        janela_verificacao.style.display = "block"
        janela_verificacao.innerText = "Email or Password Invalid"
        setTimeout(() => {
            janela_verificacao.style.display = "none"
        }, 2000);
    }
    
})



