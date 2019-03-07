// console.log(1);
var words = {
    "rainbow":5,
    "unicorn": 3,
    "doom": -1,
    "gloom": 2
};


var express = require('express');
var app = express();

var server = app.listen(3000, listening);

function listening(){
    console.log('Server is starting');
}

// Use this default file / folder
app.use(express.static('public'));

// Get request gets something from the server
app.get('/add/:word/:score?', addWord);

// Goes to the flower folder

function addWord(req, res){
    var data = req.params;
    var word = data.word;
    var score = Number(data.score);
    var reply;
    if(!score){
        // If there is no score
         reply = {
            msg: 'Score is required Please'
        }
    } else {
        words[word] = score;
        reply = {
           msg: 'THank you for your word'
       }
    }

    
    // for(var i = 0;i < num;i++){
    //     reply += ' I love Flowers ' + data.flower + ' to ';
    // }
    res.send(reply);
}


// second route
app.get('/all', sendAll);

function sendAll(req,res){
    res.send(words);
}


app.get('/search/:word/', searchWord);

function searchWord(req,res){
    var word = req.params.word;
    var reply;
    if(words[word]){
        reply = {
            staus: 'found',
            word: word,
            score: words[word]
            // check if word is part of database
        }
    }else {
        reply = {
            staus: 'not found',
            word: word
        }
    }
    res.send(reply);
}