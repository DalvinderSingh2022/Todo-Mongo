const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require("./config/database")

const app = express();

connectDB();

app.use(express.json());
app.use(cors({ origin: "*" }));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));