function setup() {
  // put setup code here
  createCanvas(300, 200);
  drawData();
  console.log('running');

  var button = select('#submit');
  button.mousePressed(submitWord);

}
function drawData(){
  loadJSON('/all', gotData);
}

// Submit Word via the input
function submitWord(){
  var word = select('#word').value();
  var score = select('#score').value();
  console.log(word, score);

  loadJSON('add/' + word + '/' + score, finished);
  // Collects JSON Using Get request
  function finished(data){
    console.log(data, 'Request is complete');
    // When info is added display data
    drawData();
  }
}

function draw() {
  // put drawing code here
}

let gotData = (data) => {
  background(51);
  console.log(data);
  var keys = Object.keys(data);
  // Collect objects and store as array;
  for(var i =0;i< keys.length;i++){
    var word = keys[i];
    // Current Object key
    var score = data[word];
    var x = random(width);
    var y = random(height);
    fill(355);
    textSize(20);
    text(word, x, y);
  }
}