require("dotenv").config();
const express = require("express");
const mangoose = require("mangoose");
const app = express();

const PORT = Number(process.env.PORT) || 8000;
const indexRouter = require("./routes");

mangoose.connect(process.env.DB_URL).then(() => {
  console.log("Database is connected");
});
app.use(express.json());

app.use("/", indexRouter);

app.use((err, req, res, next) => {
  const errMsg = err.toString() || "Something went wrong";
  res.status(500).json({ msg: errMsg });
});

app.listen(PORT, () => {
  console.log(`database is connected in url ${PORT}`);
});
