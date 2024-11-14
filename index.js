import express from "express";
// import { Data } from "./Data.js";
import { dbconnect } from "./config/config.js";
import router from "./router/router.js";
const app = express();

// app.use(cors());
app.use("/",router);



dbconnect();
// app.get("/", (req, res) => {
//   res.send("hello world");
// });
// app.get("/api/data", (req, res) => {
//   res.json(Data);
// });

app.listen(4000, () => {
  console.log("server running successfully http://localhost:4000");
});