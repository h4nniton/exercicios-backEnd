/************************************************************************
 * Objetivo: Um consultório de Nutrição solicitou a você que criasse um sistema 
 *           que faça o cálculo do IMC de uma pessoa
 * Data: 15/09/2023
 * Autor: Emily Crepaldi
 * Versão: 1.0
 ************************************************************************/
var calcular = require('./model/calcular.js');

var readline = require ('readline');

var entradaDeDados = readline.createInterface ({

    input: process.stdin,
    output: process.stdout

});

console.log('----------------- CALCULADORA IMC ----------------');
console.log('');
console.log('--------------------------------------------------');
console.log('- IMC --------------------- CLASSIFICAÇÃO --------');
console.log('- Menor do que 18,5 ------- Abaixo do peso -------');
console.log('- Entre 18,5 e 24,9 ------- Peso normal ----------');
console.log('- Entre 25 e 29,9 --------- Acima do peso --------');
console.log('- Entre 30 e 34,9 --------- Obesidade I ----------');
console.log('- Entre 35 e 39,9 --------- Obesidde II ----------');
console.log('- Maior do que 40 --------- Obesidade III --------');
console.log('--------------------------------------------------');
console.log('');


entradaDeDados.question('Olá! Digite o seu peso: ', function (valorPeso){
    let peso = valorPeso;

    entradaDeDados.question('Digite sua altura: ', function (valorAltura){
        let altura = valorAltura;

        // Chama a função que vai gerar a tabuada, enviando os dados digitados pelo usuário
        calcular.calcularImc(valorPeso, valorAltura);

    });

})