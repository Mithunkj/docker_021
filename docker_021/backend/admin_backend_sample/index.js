const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();

app.use(express.json());
app.use(cors());

// get api
app.get("/", (req, res) => {
  res.send("hello from the admin_backend");
});

//get api 
app.get("/admin", async (req, res) => {
  const result = await axios.get("http://localhost:7002/user");
  res.json({ title: "hello admin_backend", data: result.data });
});

app.listen(process.env.PORT || 7001, () => {
  console.log("listen port 7001");
});
