import http from "http";
import app from "./src/app";
import "dotenv/config";
import config from "./src/config/index";
import connectDB from "./src/config/connectDB";

const server = http.createServer(app);

//connectDB
connectDB();

server.listen(config.PORT, () => {
  console.log(`Server listening on http://localhost:${config.PORT}`);
});
