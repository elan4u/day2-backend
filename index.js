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

app.get('/',((req,res)=>{
    console.log("backend is Called.");
    res.json({message:"backend for App is requested"});
}));
app.listen(app.get('port'), () => {
	console.log('Server Started at ' + app.get("port"));
});