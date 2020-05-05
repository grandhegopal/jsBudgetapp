var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({'extended':'false'}));

app.use(express.static(path.join(__dirname, 'dist/e-commerce')));
app.use('/',(req,res)=>{
res.sendFile((path.join(__dirname, 'dist/e-commerce/index.html')))
    
})

app.listen(8080,()=>{console.log("running on port 8080")})
