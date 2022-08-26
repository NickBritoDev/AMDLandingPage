//seleciona a checkbox
const changeButton = document.querySelector("#change-theme")

//responsavel por alternar os modos
function toogleMode() {
    //busca o body dentro do documento e adiciona a classe "dark"
    document.body.classList.toggle("dark")
}

//carrega o modo de preferencia do usuario
function loadTime(){
    const darkMode = localStorage.getItem("dark")

    if(darkMode){
        toogleMode()
    }
}
loadTime()

//função resposanvel criar a preferencia do ususario pelo modo "dark"
changeButton.addEventListener("change", function() {
    toogleMode()

    //remove o dark mode do local storage
    localStorage.removeItem("dark")

    //salva ou remove o mode
    if(document.body.classList.contains("dark")) {
        localStorage.setItem("dark", 1)
    }
})