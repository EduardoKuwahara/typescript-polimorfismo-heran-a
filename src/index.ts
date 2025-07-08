import * as readline from 'readline';
import Calculo from './Calculo';
import Soma from './operacoes/Soma';
import Subtracao from './operacoes/Subtracao';
import Multiplicacao from './operacoes/Multiplicacao';
import Divisao from './operacoes/Divisao';
import Potenciacao from './operacoes/Potenciacao';
import Radiciacao from './operacoes/Radiciacao';
import Bhaskara from './operacoes/Bhaskara';


const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function iniciarCalculadora() {
    console.log("\n--- Calculadora Especial ---");
    console.log("Operações disponíveis: Somar, Subtrair, Multiplicar, Dividir, Potencia, Raiz, Bhaskara, Sair");
    console.log("Formato: numero1 numero2 Operacao (ex: 5 3 Somar)");
    console.log("Para Bhaskara: a b c Bhaskara (ex: 1 -5 6 Bhaskara)");

    leitor.question("Digite seu cálculo: ", (input) => {
        if (input.toLowerCase() === 'sair') {
            console.log("Até logo!");
            leitor.close();
            return;
        }

      
        const instrucoes = input.split(' ');
        const operacao = instrucoes[instrucoes.length - 1];
        const numeros = instrucoes.slice(0, -1).map(n => parseFloat(n));
        
        let calculo: Calculo | null = null;
        let resultado: number | string = 0;

        switch (operacao.toLowerCase()) {
            case 'somar':
                calculo = new Soma();
                resultado = calculo.calcular(numeros[0], numeros[1]);
                break;
            case 'subtrair':
                calculo = new Subtracao();
                resultado = calculo.calcular(numeros[0], numeros[1]);
                break;
            case 'multiplicar':
                calculo = new Multiplicacao();
                resultado = calculo.calcular(numeros[0], numeros[1]);
                break;
            case 'dividir':
                calculo = new Divisao();
                resultado = calculo.calcular(numeros[0], numeros[1]);
                break;
            case 'potencia':
                calculo = new Potenciacao();
                resultado = calculo.calcular(numeros[0], numeros[1]);
                break;
            case 'raiz':
                calculo = new Radiciacao();
                resultado = calculo.calcular(numeros[0], numeros[1]);
                break;
            case 'bhaskara':
                calculo = new Bhaskara();
                resultado = calculo.calcular(numeros[0], numeros[1], numeros[2]);
                break;
            default:
                console.log("Operação inválida.");
                iniciarCalculadora(); 
                return;
        }

        console.log(`\n>> O resultado é: ${resultado}`);
        iniciarCalculadora(); 
    });
}


iniciarCalculadora();
