const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());

const userFormRouter = require("./Routes/Routes");

app.use(userFormRouter);

//server
app.listen(3001, () => {
  console.log("server is up, good to go");
});
