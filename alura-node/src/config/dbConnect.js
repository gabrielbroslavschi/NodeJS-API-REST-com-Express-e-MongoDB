import mongoose from "mongoose";

mongoose.connect("mongodb+srv://DDev:russinho!1@gabrielbroslavschi.i1xsmqf.mongodb.net/LivrosDev");

let db = mongoose.connection;

export default db;