var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT idUsuario, nome, email, regiao FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(nome, email, regiao, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, regiao, senha);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO usuario (nome, email, regiao, senha) VALUES ('${nome}', '${email}', '${regiao}', '${senha}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrarPontuacao(idUsuario,pontuacao) {
    var instrucao = `INSERT INTO pontuacao (fkUsuario, pontuacao) VALUES ('${idUsuario}', '${pontuacao}');`;


    return database.executar(instrucao);
}

   /*function adicionarFotoPerfil(caminho, idUsuario) {
    const instrucao = `INSERT INTO foto (caminho, fkUsuario) VALUES ('${caminho}', '${idUsuario}')`;
      
    return database.executar(instrucao);
}*/

module.exports = {
    autenticar,
    cadastrar,
    cadastrarPontuacao
    //adicionarFotoPerfil
};