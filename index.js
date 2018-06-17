const express = require('express');
const app = express();
app.set('port',process.env.PORT || 3000);
app.get('/',(req,res)=>{
    console.log("backend is Called.");
    res.send("backend is called");
})
app.listen(app.get('port'), () => {
	console.log('Server Started at ' + app.get("port"));
});