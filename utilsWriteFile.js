const {promisify} = require('util')
const writeFile = promisify(require('fs').writeFile);

const conteudo = ` criando um arquivoutilizando promisify do modulolo nativo util  `
writeFile('utilArquivo.txt', conteudo)
    .then(()=>{
console.log('Arquivo utilArquivo criado com sucesso')
})
    .catch((err)=>{
console.log( `Deu Erro: ${err}`)
})

 // treinar sempre node

