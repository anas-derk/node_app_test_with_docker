const express = require("express");

const app = express();

const mongoose = require("mongoose");

mongoose.connect(`mongodb://anas:1234@mongo:27017/`)
.then(() => console.log(`mongoose is connected`))
.catch((err) => console.log(`failed in connection !!`));

mongoose.set('strictQuery', true);

app.get("/", (req, res) => res.send("<h1>Welcome To You In Node.js With Docker !!"));

app.listen(3000, () => console.log(`The Server Is Running On: http://localhost:3000`));