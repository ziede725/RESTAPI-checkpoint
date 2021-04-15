const express = require("express");
const mongoose = require("mongoose");
const connection = require("dotenv/config");
const user = require("./models/User");
const userRoute = require("./routes/router");
const cors = require("cors");
const app = express();
const port = 5000;
app.use(cors());
app.use(express.json());
app.use("/user", userRoute);
mongoose.connect(
  `mongodb+srv://zied:${process.env.DB_PSSWRD}@cluster0.x7ki2.mongodb.net/RESTAPI?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("we are connected")
);

app.listen(port, () => console.log("we are  listening to port"));
