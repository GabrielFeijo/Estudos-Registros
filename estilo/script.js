let localNome = document.getElementById("localNome");

function nome(){
    
    let nome = window.prompt('Informe seu nome:');
    if (nome.length != 0 || nome != null){
        localNome.innerHTML = `Olá, Bem vindo(a) ${nome}!`
    }
}