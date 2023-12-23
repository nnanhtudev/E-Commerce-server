import http from "http";
import app from "./src/app";
import "dotenv/config";
import config from "./src/config/index";

const server = http.createServer(app);

server.listen(config.PORT, () => {
  console.log(`Server listening on http://localhost:${config.PORT}`);
});
