const express = require('express');
//const bodyParser = require('body-parser');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));
//app.use(express.static(path.join(__dirname, 'event-handler', 'build')));
app.get('/ping', (req,res) => {
    
    res.send({monitor:'pong'});
});



app.listen(process.env.PORT || 8080);
