//efeito do botão voltar ao Topo

function topo(){
    window.scrollTo(
        {
            left:0,
            top:0,
            behavior:"smooth"
        }
    )

}

//Validação de Login

function login(){
    var logado = 0;
    var usuario = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;

    if (usuario == 'admin' && senha == 'admin'){
        window.location = 'index.html';
        logado = 1;
    }else{
        alert("Senha ou login incorreto !!!")
        logado = 0
    }
    

}

//Ativar alert no botão cadastrar

function cadastro(){
    alert('Cadastrado');
    window.location = "index.html"
}

//Validação de login
function loginValidation(){
    var usuario = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;

    if (usuario == '' || senha == ''){
        
        valor = Math.floor(Math.random() * 10)
        document.getElementById('bt-login').value = 'Hey, vou fugir até você digitar o login e a senha!!!'
        document.getElementById('bt-login').style.backgroundColor = 'red'
        if (valor < 5){
            document.getElementById('bt-login').style.left = Math.floor(Math.random() * 300)+250;
        }else{
            document.getElementById('bt-login').style.left = (Math.floor(Math.random() * 300)+250)*-1;
        }
        
    }else{
        document.getElementById('bt-login').value = 'Ufaa! finalmente você entendeu!!! Já pode fazer seu login. \n CLIQUE AQUI!!!'
        document.getElementById('bt-login').style.backgroundColor = 'blue'
        document.getElementById('bt-login').style.left = 0
        document.getElementById('bt-login').style.right = 0
    }
}