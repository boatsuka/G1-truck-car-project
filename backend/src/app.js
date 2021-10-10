const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config();

const { PORT, MONGODBURL } = process.env;

const indexRouter = require('./routers/index')

const app = express();

const startServe = async () => {
  await mongoose
    .connect(MONGODBURL)
    .then(() => console.log("db connected..."))
    .catch((err) => console.log(err));

  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  app.use(indexRouter);

  app.listen(PORT, () => {
    console.log(`start serve :>> http://localhost:${PORT}`);
  });
};

startServe();
