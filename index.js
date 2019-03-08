// console.log(1);

// importing the file system 
var fs = require('fs');
// read data from json
var data = fs.readFileSync('words.json');
// Collect Json text and displays it 
var words = JSON.parse(data);
console.log(words);

// When you have a json object you need to convert to text file that is readable
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
        // When user adds something display thank you message
        reply = {
            word: word,
            score: score,
            status: 'success'
        }
        // If Number is added to the Directory Add the content to JSON
        words[word] = score;
        var data = JSON.stringify(words, null , 2);
        fs.writeFile('words.json', data, finished);

        function finished(){
            console.log('all set');  
        }
    }

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