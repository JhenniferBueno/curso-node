// CRUD -> manipulação de banco de dados
// Create -> cadastrar
// Read -> listar
// Update -> atualização
// Delete -> apagar

const { MongoClient ,ObjectId} = require("mongodb");

constfs = require("fs");

const urlcon = "mongodb+srv://aula-back:aula123456@turma-agosto.mam4s.mongodb.net/"

const conexao = new MongoClient(urlcon);

async function lerDados()
{
    let db = await conexao.connect();
    let pasta = db.db("jhennifer").collection("contatos");
    let dados = await pasta.find({}).toArray();
    await db.close();

    return dados;

}
async function cadastrar(nome, email, cidade)
{
    let db = await conexao.connect();
    let pasta = db.db("jhennifer").collection("contatos");

    let pessoa = 
    {
        nome: nome,
        email: email,
        cidade: cidade,

    };
    let retorno = await pasta.insertOne (pessoa)
    await db.close();

    console.log(retorno);

}

async function atualizar()
{
    let db = await conexao .connect();
    let pasta = db.db("jhennifer").collection("contatos");
    let pessoa = {_id: new ObjectId('66c685a3018b31579dd848cd')};
    let valor = {email: "tereza.ferrer@gmail.com"};
    let retorno = await pasta.updateOne (pessoa, {$set: valor});
    db.close();

    console.log(retorno);
   
};

async function deletar()
{
    let db = await conexao .connect();
    let pasta = db.db("jhennifer").collection("contatos");

    let pessoa = {_id: new ObjectId('66c685a3018b31579dd848cd')};
    let retorno = await pasta.deleteOne (pessoa);

    db.close();

    console.log (retorno);

}
module.exports = 
{

    deletar,
    atualizar,
    cadastrar,
    lerDados,
}
