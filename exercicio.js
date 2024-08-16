
for (let i = 1; i <= 10; i++) {
    console.log(i);
}


// imprimie uma palavra ao contrario



let palavra = "monitor";
let nova = " ";

for (let ini = palavra.length -1; ini>=0; i-=1)
{
    nova += palavra.charAt(ini);
}

console.log (nova);