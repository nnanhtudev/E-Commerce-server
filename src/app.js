import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
const app = express();

// config bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//config cookies parser
app.use(cookieParser());

// config routes

export default app;
