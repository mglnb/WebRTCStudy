var pessoas = [
    {
        nome: "Miguel",
        idade: 21,
        pais: "Brasil"
    },
    {
        nome: "John",
        idade: 25,
        pais: "EUA"
    },
    {
        nome: "Carla",
        idade: 20,
        pais: "Canadá"
    },
    {
        nome: "Roger",
        idade: 23,
        pais: "Brasil"
    },
    {
        nome: "William",
        idade: 21,
        pais: "Brazil"
    },
]

while (true) {
    let nome = prompt('Digite um nome ou "sair" para fechar');
    var pessoa = buscarPessoa(nome);
    if(nome === ""){
        alert("Digite um nome válido") 
    } else if(nome.toLowerCase() === "sair") {
        document.write("<h2>Você saiu</h2>")
        break;
    } else if(pessoa === null){
        alert("Esta pessoa não existe na nossa base de dados")
    } else {
        break;
    }
}

 if (pessoa !== null){
     document.write("<h2>Dados do Estudante: </h2>")
    document.write("<p>Nome: " + pessoa.nome + "</p>");
    document.write("<p>Idade: " + pessoa.idade + "</p>");
    document.write("<p>País: " + pessoa.pais + "</p>");
}


function buscarPessoa(nome) {
    let pessoa;
    for(let key in pessoas) {
        if(pessoas[key].nome.toLowerCase() == nome.toLowerCase()) {
            pessoa = pessoas[key];
            return pessoa;
        }
    }
    return null;
}

