const fs = require ("fs");

fs.readFile("json.js" ,"utf-8", function( erro,dados){

    console.log(erro);
    console.log(dados);

})