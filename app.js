const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(cors());

const url = `mongodb+srv://deekshith:deekshith@cluster0.5i6yuaa.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(url, { useNewUrlParser: true });

const con = mongoose.connection;

con.on("open", () => console.log("connected..."));
con.on("error", () => console.error("Error occurred..."));

const userRouter = require("./routes/users");

app.use("/users", userRouter);

app.listen(process.env.PORT || 3000, () => console.log("server started"));
