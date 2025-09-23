//server.js
const { Pool } = pkg; // Obtém o construtor Pool do pacote pg para gerenciar conexões com o banco de dados PostgreSQL
//server.js
let pool = null; // Variável para armazenar o pool de conexões com o banco de dados
//server.js
// Função para obter uma conexão com o banco de dados
function conectarBD() {
  if (!pool) {
    pool = new Pool({
      connectionString: process.env.URL_BD,
    });
  }
  return pool;
}
//server.js
const db = conectarBD(); // Cria uma nova instância do Pool para gerenciar conexões com o banco de dados
import pkg from "pg";
import dotenv from "dotenv";
dotenv.config();         // Carrega e processa o arquivo .env
const { Pool } = pkg;    // Utiliza a Classe Pool do Postgres
import express from "express";      // Requisição do pacote do express
const app = express();              // Instancia o Express
const port = 3000;                  // Define a porta

app.get("/", async (req, res) => {        // Cria a rota da raiz do projeto
  const db = new Pool({  
  connectionString: process.env.URL_BD,
});

//server.js
app.get("/questoes", async (req, res) => {
  //server.js
try {
    const resultado = await db.query("SELECT * FROM questoes"); // Executa uma consulta SQL para selecionar todas as questões
    const dados = resultado.rows; // Obtém as linhas retornadas pela consulta
    res.json(dados); // Retorna o resultado da consulta como JSON
  } catch (e) {
    console.error("Erro ao buscar questões:", e); // Log do erro no servidor
    res.status(500).json({
      erro: "Erro interno do servidor",
      mensagem: "Não foi possível buscar as questões",
    });
  }
  //server.js
const { Pool } = pkg; // Obtém o construtor Pool do pacote pg para gerenciar conexões com o banco de dados PostgreSQL

const db = new Pool({
  // Cria uma nova instância do Pool para gerenciar conexões com o banco de dados
  connectionString: process.env.URL_BD, // Usa a variável de ambiente do arquivo .env DATABASE_URL para a string de conexão
});
	console.log("Rota GET /questoes solicitada"); // Log no terminal para indicar que a rota foi acessada
	
});

let dbStatus = "ok";
try {
  await db.query("SELECT 1");
} catch (e) {
  dbStatus = e.message;
}
  console.log("Rota GET / solicitada");
  res.json({
		message: "API para _____",      // Substitua pelo conteúdo da sua API
    author: "Lunan Paulino Oliveira",    // Substitua pelo seu nome
    statusBD: dbStatus              // Acrescente esta linha
  });
});

app.listen(port, () => {            // Um socket para "escutar" as requisições
  console.log(`Serviço rodando na porta:  ${port}`);
});