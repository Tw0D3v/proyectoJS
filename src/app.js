import express from "express";
import morgan from "morgan";
import path from "path";
import Routes from "./routes/index.routes"
import dotenv from 'dotenv';
dotenv.config()

const app = express();

app.set("views", path.join(__dirname, "views"));

app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json())
app.use(morgan("dev"));
app.use(Routes);

export default app; 