"use strict"

const idioma = document.querySelector(".selecao_idioma")
const linguaSpinnerPt = document.querySelector(".posicao__spinner")
linguaSpinnerPt.style.position = "absolute"
linguaSpinnerPt.style.left = "40%"
linguaSpinnerPt.style.top = "20%"
linguaSpinnerPt.style.width = "50px"
linguaSpinnerPt.style.height = "50px"
linguaSpinnerPt.style.color = "red"
linguaSpinnerPt.style.display = "none"
linguaSpinnerPt.style.zIndex  = "1"



//evento de mudança de idioma

idioma.addEventListener("change", (event) => {
    //console.log(event.target.value)
    let valor = event.target.value

    if(valor == "pt"){
        linguaSpinnerPt.style.display = "block"
        setTimeout(() => {
            linguaSpinnerPt.style.display = "none"
        }, 1400);
        setTimeout(() => {
            window.location = "login_br.html"
        }, 1500);
    }else if(valor == "en"){
        linguaSpinnerPt.style.display = "block"
        setTimeout(() => {
            linguaSpinnerPt.style.display = "none"
        }, 1400);
        setTimeout(() => {
            window.location = "login.html"
        }, 1500);
    }
})

