import "dotenv/config";
import Express from "express";
import cors from "cors";
import user from "./src/user.js";

const app = Express();
app.use(cors());


app.use("/user",user)

const config = JSON.parse(process.env.SERVER);
app.listen(config, () => {
  console.log(`http://${config.hostname}:${config.port}/`);
});