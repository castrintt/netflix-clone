"use strict"

const idioma = document.querySelector(".selecao_idioma")

const linguaSpinnerEn = document.querySelector(".posicao__spinner")
linguaSpinnerEn.style.position = "absolute"
linguaSpinnerEn.style.left = "40%"
linguaSpinnerEn.style.top = "20%"
linguaSpinnerEn.style.width = "50px"
linguaSpinnerEn.style.height = "50px"
linguaSpinnerEn.style.color = "red"
linguaSpinnerEn.style.display = "none"
linguaSpinnerEn.style.zIndex  = "1"


 //evento mudar idioma

 
idioma.addEventListener("change", (event) => {
    //console.log(event.target.value)
    let valor = event.target.value
    if(valor == "en"){
        linguaSpinnerEn.style.display = "block"
        setTimeout(() => {
            linguaSpinnerEn.style.display = "none"
        }, 1400);
        setTimeout(() => {
            window.location = "login.html"
        }, 1500);
    }else if(valor == "pt"){
        linguaSpinnerEn.style.display = "block"
        setTimeout(() => {
            linguaSpinnerEn.style.display = "none"
        }, 1400);
        setTimeout(() => {
            window.location = "login_br.html"
        }, 1500);
    }
})

