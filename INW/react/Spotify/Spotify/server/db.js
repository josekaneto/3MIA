import mongoose from "mongoose";

export default async function conectDb(){
    mongoose.connect("mongodb+srv://josekaneto0828:Pedroca05@cluster0.wk08q.mongodb.net/Spotify?retryWrites=true&w=majority&appName=Cluster0")
    return mongoose.connection;
}