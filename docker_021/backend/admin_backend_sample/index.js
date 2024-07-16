const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();

dotenv.config();

app.use(express.json());
app.use(cors());

// get api
app.get("/", (req, res) => {
  res.send("hello from the admin_backend");
});

//get api 
app.get("/admin", async (req, res) => {
 res.send(`${process.env.ACCESS_TOKEN_KEY}`)
});

app.listen(process.env.PORT || 7001, () => {
  console.log("listen port 7001");
});
