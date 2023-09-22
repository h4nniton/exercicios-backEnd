/************************************************************************
 * Objetivo: Criar um sistema que gerencie as médias escolares de uma 
*            universidade, conforme os requisitos solicitados
 * Data: 22/09/2023
 * Autor: Emily Crepaldi
 * Versão: 1.0
 ************************************************************************/

var calcular = require('./model/calcular.js');

var readline = require ('readline');

var entradaDeDados = readline.createInterface ({

    input: process.stdin,
    output: process.stdout

});