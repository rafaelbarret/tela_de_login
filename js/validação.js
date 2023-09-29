function logar(){

    var login = document.getElementById('login-principal').value
    var senha = document.getElementById('password-principal').value

    if(login == "admin@gmail.com" && senha == 'admin' ){
        alert('Sucesso')
        location.href = "principal.html"
    }else{
        alert('Usuário ou senha incorretos')
    }
}