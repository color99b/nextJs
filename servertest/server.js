const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/getdata", (req, res) => {
  return res.send("Responding from server!");
});
console.log("8000오픈");

app.listen(8000);
