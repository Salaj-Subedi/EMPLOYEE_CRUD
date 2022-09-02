const bodyParser = require("body-parser");
// const path = require("path");
const express = require("express");
const app = express();

//*************************************************
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse requests of content-type - application/json
app.use(bodyParser.json());
//********************************************************

const dbConfig = require("./config/database.config.js");
const mongoose = require("mongoose");
mongoose
  .connect(dbConfig.url, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch((err) => {
    console.log("Could not connect to the database. Exiting now...", err);
    process.exit();
  });

app.get("/", (req, res) => {
  res.send("Hello cruds");
  // res.sendFile(path.join(__dirname,'./index.html'));
});

require("./app/routes/emp.routes")(app);
const port = 8848;
app.listen(port, () => {
  console.log(
    `Server is listening on port ${port} through http://localhost:${port}`
  );
});
