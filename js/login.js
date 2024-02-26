function login(){
    const login = document.getElementById('inputLogin').value;
    const senha = document.getElementById('inputSenha').value;

    if (login == '123' && senha == '123') {
        alert('Login Confirmado!,Bem Vindo!');
        location.href = "./pages/home.html";
    } else {
        alert('Usúario ou senha incorreto')
    }
}