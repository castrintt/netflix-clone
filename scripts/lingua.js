const selectElement = document.querySelector("#selecao")

const documento_ingles = document.querySelector("#lingua_inglesa")
const documento_pt = document.querySelector("#lingua_pt")

const utterance = new SpeechSynthesisUtterance()

 const setVoice = event => {
     console.log("oi")
     console.log(event.target)
     //utterance.voice =
     if(event.target.value == "en"){
         documento_ingles.style.display = "block"
         documento_pt.style.display = "none"
     }else if(event.target.value == "pt"){
         documento_ingles.style.display = "none"
         documento_pt.style.display = "block"
    }

 }

selectElement.addEventListener("change", setVoice)


