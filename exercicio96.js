//Exercicio e 096
 
//Faça um Programa que leia 20 números inteiros e
// armazene-os num vetor. Armazene os números pares no vetor PAR e/
// os números IMPARES no vetor impar. Imprima os três vetores.
 
//push -- Adiciona novos elementos ao final de um array e retorna o novo comprimento
 
let numInt = [];
let pares = [];
let impares = [];
 
 
function lerNum()
{
    for (let i = 1; i<=20; i++)
    {
        console.log("imprimir todos os numeros:", numInt);
        if (numInt % 2===0)
        {
            PAR.push(pares);
            console.log("imprimir todos os numeros:", pares);
        }else
        {
            impar.push(impares);
            console.log("imprimir todos os numeros:", impares);
        }
 
 
    }
 
}
lerNum();