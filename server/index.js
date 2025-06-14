const express = require('express');
const connectDB = require('./src/config/db-config');
const { PORT } = require('./src/config/server-config')
const app = express();

app.listen(PORT, async () => {
    console.log("Server started at 3000");
    await connectDB();
    console.log("MongoDB connected");
})