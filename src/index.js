import controlerUserLogin from "./moduloControlerLogin.js";
import controleRotasApp from "./moduloControleRotas.js";

//Elementos de Aviisos para uso do Bootstrap: Modal, Toast, Alert
var myModal = new bootstrap.Modal(document.getElementById('myModal'));

//trazendo os botões da DOM em HTML.
//Ordem para executar e validar o Login.
const entrarUsuario = document.getElementById("btnEntrar");
entrarUsuario.addEventListener("click", (event)=>{
    let user = document.getElementById('usuario').value, 
    senha = document.getElementById('senha').value;
    let alertModal = controlerUserLogin.loginInfo(user,senha);

    document.getElementById("titleModal").innerHTML=alertModal.title;
    document.getElementById("bodyModal").innerHTML=alertModal.bodyModal;
    document.getElementById("btnModalClose").innerHTML=alertModal.b1;
    document.getElementById("btnModalSave").innerHTML=alertModal.b2;

    myModal.show();
    setTimeout(carregarPagina, 2500)
    function carregarPagina(){
        window.location.href = controleRotasApp.validaRota(localStorage.status, alertModal.idModal)
    }
});

//Ordem para criar um novo usuário.
const novoUsuario = document.getElementById("btnNovoUsuario");
novoUsuario.addEventListener("click", (event)=>{
    window.location.href = controleRotasApp.validaRota("false", "usuarioNaoExiste1")
});