const express = require('express');
const connectDB = require('./config/db-config');
const { PORT } = require('./config/server-config')
const app = express();

app.listen(PORT, async () => {
    console.log("Server started at 3000");
    await connectDB();
    console.log("MongoDB connected");
})