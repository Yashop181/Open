const express = require('express');
const app = express()
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require("cors");
app.use(cors());
dotenv.config();
const PORT = process.env.PORT;

app.use(express.json());
const dbUrl = process.env.MONGO_URL
const routes = require('./routes/myRotes')

mongoose.connect(dbUrl);

app.use('/bottle',routes)


app.listen(PORT ,()=>{
    console.log(`Server is  running on port : ${PORT}`)
    
})

