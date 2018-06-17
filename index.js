const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(cors());
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(process.env.db);
require('dotenv').config();
app.set('port',process.env.PORT || 3000);
const { Movie } = require ('./models/movie');
app.get('/',(req,res)=>{
    console.log("backend is Called.");
    res.json({message:"backend for App is requested"});
});

app.get('/get-all-movies',(req,res)=>{
    Movie.find()
    .then((movies)=>{
        res.json(movies);
    },(err)=>{
        console.log(err);
    });
});

app.get('/get-movies',(req,res)=>{
    Movie.find()
    .then((movies)=>{
        res.json(movies);
    },(err)=>{
        console.log(err);
    });
});

app.listen(app.get('port'), () => {
	console.log('Server Started at ' + app.get("port"));
});