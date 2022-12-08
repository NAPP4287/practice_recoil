const express = require("express");
const cors = require("cors");
const app = express();
const dbConfig = require(__dirname + "/config/db.js");
const conn = dbConfig.init();
const port = 4000;

const { User } = require("./models");

dbConfig.connect(conn);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  }),
);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({
    message: "Internal Server Error",
    stacktrace: err.toString(),
  });
});

app.use((req, res, next) => {
  res.status(404).send("Not Found!");
});

app.post("/user", function (req, res) {
  const userInfo = req.body;
  const { name } = userInfo;

  User.create({
    name,
  });

  res.status(200).json({ message: "ok" });
});

app.listen(port, function () {
  console.log(`start! express server on ${port}`);
});
