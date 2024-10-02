import mongoose from "mongoose";

const artistaSchema = mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    name: {type: String, required: true}
})

 const lixo=mongoose.model('Artistas', artistaSchema)

 export default lixo