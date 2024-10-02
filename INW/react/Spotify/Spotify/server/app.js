import express from 'express'
import conectDb from './db.js'
import cors from 'cors'
import lixo from './Models/Artista.js'

const app = express()
app.use(cors())
const conexao = await conectDb()

conexao.on('error', (erro) => {
    console.error("Erro ao conectar no MongoDB", erro)
})

conexao.once('open', ()=>{
    console.log("Conectado ao MongoDB")
})

 app.get("/artistas", async (req, res) =>{
    const listaArtistas = await lixo.find({})
    res.status(200).json(listaArtistas)
})

app.listen(3000, () => {
    console.log("Servidor Conectado")
})