// console.log(1);

var express = require('express');
var app = express();

var server = app.listen(3000, listening);

function listening(){
    console.log('Server is starting');
}

// Use this default file / folder
app.use(express.static('public'));

// Get request gets something from the server
app.get('/search/:flower/:num', sendFlower);

// Goes to the flower folder

function sendFlower(req,res){
    var data = req.params;
    var num = data.num;
    var reply = '';
    for(var i = 0;i < num;i++){
        reply += ' I love Flowers ' + data.flower + ' to ';
    }
    res.send(reply);
}