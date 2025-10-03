const {Person} = require("./person");

const path = require('path');

const person = new Person("Alunos");
console.log(person.sayMyName());

// index.js

// 1. Importa o módulo 'fs'
const fs = require('fs');

// 2. Define o nome do arquivo e o conteúdo
const nomeDoArquivo = 'log_data.txt';
const conteudo = 'Esta linha foi escrita usando o módulo FS do Node.js.\n';

// 3. Usa a função assíncrona fs.writeFile() para escrever no arquivo
// 'utf8' é a codificação
// (err) => { ... } é a função de callback que será executada ao terminar
fs.writeFile(nomeDoArquivo, conteudo, 'utf8', (err) => {
    if (err) {
        // Se houver um erro, ele será exibido
        console.error("Erro ao escrever no arquivo:", err);
        return;
    }
    // Mensagem de sucesso
    console.log(`Sucesso! O arquivo ${nomeDoArquivo} foi criado e o conteúdo foi salvo.`);
});

// Nota: Por ser assíncrona, esta linha pode ser exibida antes da mensagem de sucesso
console.log("Tentativa de escrita iniciada.");