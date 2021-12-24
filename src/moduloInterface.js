import userLogin from "./moduloDados.js";

//CONTROLAR TODOS OS MÉTODOS DE LOGIN
class ControlerUserLogin{
    constructor(status){
        this.status = status; //p saber se está em uso ou n
    }
    checkLogin(){
        this.status = true;
    }

    loginInfo(user, senha){
        var infoCheck = userLogin.find(userLogin => userLogin.username === user ) //retorna um vetor com os objetos - procurar dentro dos dados
        console.log(infoCheck)
        if(!infoCheck){
            alert("Não existe o usuário")
        }
        else{
            if(infoCheck.senha === senha){ //se a senha q foi digitada na tela bate com a do banco de dados
                this.checkLogin()
                //alert(`logou, você está ${this.status}`)
            }
            else{
                alert("nn logou")
                }
            }
    }
}

//estância da Classe
const controlerUserLogin = new ControlerUserLogin();
export default controlerUserLogin;