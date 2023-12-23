// config/index.js
import "dotenv/config";
import devConfig from "./dev";
import prodConfig from "./prod";

const environment = process.env.NODE_ENV || "production";
const config = environment === "development" ? devConfig : prodConfig;
console.log("Environment: " + environment);

export default config;
