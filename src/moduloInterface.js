import userLogin from "./moduloDados.js";
import comunicacaoModal from "./moduloComunicacaoDados.js";

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
        // console.log(infoCheck) //aqui vai mostrar o vetro de dados q foi encontrtado pelo (.find)
            if( user === null || senha === null || user === "" || senha === ""){
                return comunicacaoModal.find((comunicacaoModal)=> comunicacaoModal.idModal === "camposVazios1")
            }
            else if(!infoCheck){
                return comunicacaoModal.find((comunicacaoModal)=> comunicacaoModal.idModal === "usuarioNaoExiste1")
            }
            else if(infoCheck.senha === senha){ //se a senha q foi digitada na tela bate com a do banco de dados
                this.checkLogin()
                    //alert(`logou, você está ${this.status}`)
                return comunicacaoModal.find((comunicacaoModal)=> comunicacaoModal.idModal === "loginExecutado1")
            }
            else
                return comunicacaoModal.find((comunicacaoModal) => comunicacaoModal.idModal === "falhaLogin1")
            
        }
}


//estância da Classe
const controlerUserLogin = new ControlerUserLogin();
export default controlerUserLogin;