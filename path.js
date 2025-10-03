const path = require("path");

// BaseName
console.log(path.basename(__filename));

//Nome do Diretorio
console.log(path.basename.dirname(__filename));

//ext do arquivo
console.log(path.extname(__filename));

//cria um objeto path
console.log(path.parse(__filename));

//juntar caminhos de arquivos
console.log(path.join(__dirname, "text", "teste.html"));