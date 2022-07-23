const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 4000;
const {MONGOURI} = require('./env')


const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(MONGOURI, { useNewUrlParser: true });
const connection = mongoose.connection;

// Once the connection is established, callback
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

app.use(express.json())
app.use(require('./routes/crud'));

app.listen( PORT, () => {
    console.log("Server is running on port " + PORT);
});
