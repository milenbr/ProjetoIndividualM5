const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin, //entrada
  output: process.stdout //saída
});

let PropriedadeCSS = []; // armazena as propriedades digitadas

function ListaPropriedadeCSS() {
  rl.question('Escreva uma ou mais propriedades CSS (separadas por vírgulas) ou escreva a palavra "sair" para encerrar: ', (answer) => {
    // sair da aplicação
    if (answer === 'sair') {
      console.log('Encerrando...');
      console.log('Propriedades CSS inseridas:');
      console.log(PropriedadeCSS);
      console.log('Até mais!');

      rl.close();
    } else {
      // junção das propriedades
      let Propriedades = answer.split(',');
      Propriedades.forEach(property => PropriedadeCSS.push(property));
      ListaPropriedadeCSS();
      PropriedadeCSS.sort(); // colocar em ordem alfabética
      console.log(PropriedadeCSS);
    }
  });
}
ListaPropriedadeCSS();