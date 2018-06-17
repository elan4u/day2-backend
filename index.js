const express = require('express');
const app = express();

app.set('port',process.env.PORT || 3000);

app.get('/',((req,res)=>{
    console.log("backend is Called.");
    res.json({message:"backend for App is requested"});
}));
app.listen(app.get('port'), () => {
	console.log('Server Started at ' + app.get("port"));
});