import dotenv from "dotenv";
dotenv.config();

import path from 'path';
import express from "express";
import Conexao from "../database/conexao.js";
import mongoose from "mongoose";
import GetAll from '../routes/fetchAll.js';

Conexao.catch((err)=>{
  if (err) return console.error(err);
})

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('CONECTADO');
  
});

const app = express();

export default () => {
  app.set("view engine", "ejs");
  app.use(express.static(path.resolve("src/public")));
  app.use(express.json())
  
  
  app.use(GetAll);

  return app;
};
