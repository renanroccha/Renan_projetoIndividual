var database = require("../database/config"); 

function resultadoQuiz(acertos, fkUsuario) {

    var instrucao = `
        INSERT INTO pontuacao (pontuacao, fkUsuario) VALUES (${acertos}, ${fkUsuario});
    `;

    return database.executar(instrucao);

}

async function pegarDadosQuiz(idUsuario) {
    var pegarDadosQuiz = `
    SELECT regiao, SUM(pontuacao.pontuacao) AS soma_pontuacao
    FROM usuario
    JOIN pontuacao ON usuario.idUsuario = pontuacao.fkUsuario
    GROUP BY regiao; = ${idUsuario};`;
    
    var pegarDadosQuiz = await database.executar(pegarDadosQuiz);
    
    
    
    console.log(pegarDadosQuiz)
    
    return {
        dadosQuizHtml: pegarDadosQuiz,
        
    }
}
module.exports = { resultadoQuiz ,
                pegarDadosQuiz}