const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require("./config/database");
const routes = require('./routes');

const app = express();

connectDB();

app.use(express.json());
app.use(cors({ origin: "*" }));
app.use("/api", routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));