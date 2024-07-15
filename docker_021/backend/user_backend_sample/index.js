const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

// get api
app.get("/", (req, res) => {
  res.send("hello from the user_backend");
});

//get api
app.get("/user", (req, res) => {
  res.send("hello user_backend");
});

app.listen(process.env.PORT || 7002, () => {
  console.log("listen port 7002");
});
