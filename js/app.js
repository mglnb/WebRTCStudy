var app = {
  /**
   * Faz a busca de uma pessoa no array pessoas
   * @param {*} nome 
   */
  buscarPessoa: function(nome) {
    for (let key in pessoas) {
      if (pessoas[key].nome.toLowerCase() == nome.toLowerCase()) {
        pessoa = pessoas[key];
        return pessoa;
      }
    }
    return null;
  },
  printPessoa : function(pessoa) {
    document.write("<div>")
    document.write("<h2>Dados do Estudante: </h2>");
    document.write("<p>Nome: " + pessoa.nome + "</p>");
    document.write("<p>Idade: " + pessoa.idade + "</p>");
    document.write("<p>País: " + pessoa.pais + "</p>");
    document.write("</div>")
  },
  /**
   * Inicializa a aplicação
   */
  init: function () {
    var nome;
    var pessoa;
    var flag = true;
    do {
      nome = prompt('Digite um nome ou "sair" para fechar').toLowerCase();
      pessoa = app.buscarPessoa(nome);
      if (nome === "sair") {
        document.write("<h2>Você saiu</h2>");
        flag = false;
      } else if (nome === "") {
        alert("Digite um nome válido");
      } else if (pessoa === null) {
        alert("Esta pessoa não existe na nossa base de dados");
        flag = true;
      } else {
        app.printPessoa(pessoa);
        flag = false;
      }
    } while (flag)
  }
}

var pessoas = [{
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
  }
];

app.init();