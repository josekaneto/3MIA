import express from 'express';
import conectaNaDb from './db.js';
import cors from 'cors';
import artista from './Models/Artista.js';

const app = express();

app.use(cors(
    {
        origin: "*",
        credentials: true
    }
), express.json());

app.get('/', (req, res) => {
    res.send('Olá API!');
    console.log('API rodando na porta 3000');
});

const conexao = await conectaNaDb();
 
conexao.on('error', (erro) =>{
    console.error('Erro ao conectar no MongoDb', erro)
})
 
conexao.once('open',() => {
    console.log('Conectado ao MongoDb')
})
 
 
app.get("/artistas", async (req,res)=>{
    const listaArtistas = await artista.find({});
    res.status(200).json(listaArtistas);
})

app.get("/artistas/:id", async (req, res) => {
    const artistas = await artista.findById(req.params.id);
    res.status(200).json(artistas)
})


 
app.listen(3000, ()=> {
    console.log('Servidor Conectado')
})