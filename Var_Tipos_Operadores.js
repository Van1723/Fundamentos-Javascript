// quiz simples
const { createElement } = require('react');
const readline = require('readline-sync'); 
let nome = readline.question('Qual o seu nome? ');
console.log('Olá ' + nome + ',' +' Como vai ?');


// Calculadora

 let operadores = readline.question('Qual operacao deseja fazer ? (1. Soma,   2. subtraçao)');
 let firstNumber = readline.question('Qual o primeiro numero ?');
 let secondNumber = readline.question('Qual o segundo numero ?');
 let resultado = 0

 if( operadores === '1'){
   let resultado = Number(firstNumber) + Number(secondNumber);
    console.log('O resultado da soma foi :' + resultado);

 }
 else(operadores === '2')
 {
    let resultado = firstNumber - secondNumber;
    console.log('O resultado da subtracao foi :' + resultado);
 }

function conversa()
{
    let nome = prompt('Qual seu nome ?');
        alert('Prazer'+ ' ' + nome + ' ' +',  Eu sou Javascript em ação');
    let idade = prompt('Qual sua idade ?');
        alert('Que legal '+ ' ' + nome +' '+ 'de' + ' ' +idade + ' ' + 'Anos');
};


// conversor de fahrenheit para celsius
function conversor()
{
    let fahrenheitt = document.getElementById('fahrenheit').value;
    
    let celsius  = (parseFloat(fahrenheitt) - 32)  / 1.8 
    document.getElementsByClassName('Resultado')[0].innerHTML = "Temperatura: " +  ' ' + celsius.toFixed(2)
}