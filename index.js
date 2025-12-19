const express = require("express");
const cors = require("cors");

const app = express();

const userRoutes = require("./Routes/UserRoute");
const eventRoutes = require("./Routes/EventRoute");

app.use(cors());
app.use(express.json());

app.use("/api/user",userRoutes);
app.use("/api/event",eventRoutes);


module.exports = app;