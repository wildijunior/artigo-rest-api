import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

const conexao = mongoose.connect(
  `mongodb+srv://${process.env.USER_NAME}:${process.env.USER_PASS}@${process.env.USER_HOST}`
);

export default conexao;
