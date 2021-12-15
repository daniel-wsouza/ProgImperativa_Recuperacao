//desafio 02
//importar o arquivo do desafio 01, listar e exibir aparelhos prontos, listar e exibir aparelhos não prontos

const consertos = require('./consertos');

let Pronto = consertos.filter(status => status.pronto);
let nPronto = consertos.filter(status => !status.pronto);

function Status() {
    console.log(`________________________________`);
    console.log("Aparelhos prontos");
    Pronto.forEach(status => {console.log(`. ${status.aparelho}`);
    }
    );
    console.log(`________________________________`);
    console.log("Aparelhos não prontos");
    nPronto.forEach(status => {console.log(`. ${status.aparelho}`);
    }
    );
    console.log(`________________________________`);
}
Status();

//desafio 03
//Listar nome dos aparelhos com o que foi consertado, somar o valor do conserto e exibir apenas os prontos.
console.log("Valor a pagar por aparelho consertado");
Pronto.forEach(status => {console.log(`. ${status.aparelho} | reparo em ${status.itensConsertados.map(item2 => item2)} | Custo final R$ ${status.valores.reduce((a, b) => a + b)} reais`);
})