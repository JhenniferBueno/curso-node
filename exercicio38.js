//Exercicio 038
 
 
/*Faça um Programa para uma caixa eletrônica.
O programa deverá perguntar ao usuário o valor do saque e depois informar quantas notas de cada valor serão fornecidas.
As notas disponíveis serão de 1, 5, 10, 50 e 100 reais. O valor mínimo é de 10 reais e o máximo de 600 reais.
O programa não deve se preocupar com a quantidade de notas existentes na máquina.
Exemplo 1: Para sacar a quantia de 256 reais, o programa fornece duas notas de 100,
uma nota de 50, uma nota de 5 e uma nota de 1;
Exemplo 2: Para sacar a quantia de 399 reais, o programa fornece notas três de 100,
uma nota de 50, quatro notas de 10, uma nota de 5 e quatro notas de 1.
*/
 
 
 
function caixaeletronico()
{
    let valor = "Digite o valor do saque"("mínimo R$10 e máximo R$600");
    if (valor < 10 || valor > 600) {
        alert("Valor inválido! O saque deve ser entre R$10 e R$600.");
        return;
    }
}
 
    let notas100 = parseInt (0);
    let notas50 = parseInt (0);
    let notas10 = parseInt (0);
    let notas5 = parseInt (0);
    let notas1 = parseInt (0);
 
    notas100 = parseInt (valor / 100);
    valor==100;
 
    notas50 = parseInt (valor / 50);
    valor==50;
 
    notas100 =parseInt(valor / 10);
    valor==10;
 
    notas5 = parseInt (valor / 5);
    valor==5;
 
    notas1 = parseInt (valor / 1);
    valor==1;