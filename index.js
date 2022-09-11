require("dotenv").config();
const express = require("express");
const app = express();
const DBURL = process.env.DBURL;
const cors = require("cors");
const employeeroute = require("./routes/employeeroute");
const connectdb = require("./config/db");

app.use(express.json());

app.use(cors());

const port =process.env.PORT || 8800;

//loading routes
app.use("/", employeeroute);


//heroku
if(process.env.NODE_ENV=="production"){
  app.use(express.static("front/build"));

}


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
  connectdb();
});
