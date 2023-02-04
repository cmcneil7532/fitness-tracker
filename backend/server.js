const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT;
const uri = process.env.MONGO_URI;
const { errorHandler } = require("./middleware/errorMiddleware");
//-------------Mongoose--------------
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
mongoose.connect(uri, { useNewUrlParser: true });
//Connect to mongoDB database
const db = mongoose.connection;
//mongoDB is working
db.once("open", () => {
  console.log("Database connected to mongoDb");
});
//mongoDB isnt working
db.on("error", (err) => {
  console.log("Error connecting to mongoDB", err);
});

//-------------Express--------------
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//Create routes
app.use("/fitness/goals", require("./routes/goalsRoutes"));
app.use('/fitness/users', require('./routes/userRoutes'))
app.use(errorHandler);


app.listen(port, () => console.log(`Listening on port ${port}`));
