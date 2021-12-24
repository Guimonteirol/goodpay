import controlerUserLogin from "./moduloInterface.js";
//Elementos de Aviisos para uso do Bootstrap: Modal, Toast, Alert
var myModal = new bootstrap.Modal(document.getElementById('myModal'));

//trazendo os botões da DOM em HTML.
const entrarUsuario = document.getElementById("btnEntrar");
entrarUsuario.addEventListener("click", (event)=>{
    let user = document.getElementById('usuario').value, 
    senha = document.getElementById('senha').value;

    if(!user || user===null || user === "" || !senha || senha === null || senha ===""){
        alert("usuário não cadastrado");
        document.getElementById("titleModal").innerHTML = "Campos Vazios"
        document.getElementById("bodyModal").innerHTML = "Os Campos Vazios não podem estar vazios"
        document.getElementById("btnModalClose").innerHTML = "Fechar"
        document.getElementById("btnModalSave").innerHTML = "Salvar"
        myModal.show()
    }
    else(
        controlerUserLogin.loginInfo(user,senha)
    )


});