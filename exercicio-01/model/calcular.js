/************************************************************************
 * Objetivo: Calcular IMC
 * Data: 15/09/2023
 * Autor: Emily Crepaldi
 * Versão: 1.0
 ************************************************************************/

// Função para gerar uma tabuada
const calcularImc = function (valorPeso, valorAltura){

// Entradas de dados que vieram pelos argumentos da função

let peso = valorPeso;
let altura = valorAltura;
let calculo;
let resultado;

calculo = valorPeso / ( valorAltura * valorAltura);

if(contInicial == '' || contFinal == '' || tabuada == '')
        console.log('ERRO: É obrigatório fornecer todos os valores.');
    else if(isNaN(contInicial) || isNaN(contFinal) || isNaN(tabuada))
        console.log('ERRO: É obrigatório a entrada somente de números.')
    else {

if (calculo < 18.5) {
    resultado = "Abaixo do peso normal";
} else if (calculo < 25.0) {
    resultado = "Peso normal";
} else if (calculo < 30.0) {
    resultado = "Sobrepeso";
} else if (calculo < 35.0) {
    resultado = "Obesidade nível I";
} else if (calculo < 40.0) {
    resultado = "Obesidade nível II";
} else {
    resultado = "Obesidade nível III";
}

    }
};