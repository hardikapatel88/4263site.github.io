 

var WIDTH_SCREEN = 1270; //Change this by your value
var HEIGHT_SCREEN = 5080; //Change this by your value

var square = [];
const SIZE_RECT = 60; //You can tweek the result by change the number of line / column / space
const SPACE_BETWEEN = 10
const NUMBER_LINE = 6;
const NUMBER_COLUMN = 6;

const colors = [
  {
      backgroundColor:"#338275",
      circlesColors:["#1B515E", "#88B990", "#ABCD9E"]
  },
  {
      backgroundColor:"#456672",
      circlesColors:["#314357", "#E3B587", "#C98C70"]
  },
  {
      backgroundColor:"#584F84",
      circlesColors:["#38486F", "#876A96", "#D7C1E0"]
  },

]
var backgroundColor = "#C4C4C4"

function windowResized() {
    resizeCanvas(WIDTH_SCREEN, HEIGHT_SCREEN);
}

function setup() {
  var canvas;
  canvas = createCanvas(WIDTH_SCREEN, HEIGHT_SCREEN);
  canvas.position(0,0);
  canvas.style('z-index', '-1');
  var allWidth = (width - (NUMBER_COLUMN * SIZE_RECT)) / 2;
  var allHeight = (height - ((NUMBER_LINE * SIZE_RECT) + (NUMBER_LINE * SPACE_BETWEEN)-SPACE_BETWEEN)) /2;

  var offset = SIZE_RECT/2;
  var randomColor = colors[Math.floor(random(0, colors.length))];

  backgroundColor = randomColor.backgroundColor;
  for(var i = 0; i < NUMBER_LINE; i++){
    for(var j = 0; j < NUMBER_COLUMN; j++){
      var spaceB = j < NUMBER_LINE ? SPACE_BETWEEN*i : 0;
      var randomColorCircle = randomColor.circlesColors[Math.floor(random(0, randomColor.circlesColors.length))]
      if(j%2 == 0){
        var temp = new Vehicle(allWidth + SIZE_RECT/2 + j*SIZE_RECT, allHeight +i*SIZE_RECT + (SIZE_RECT/2)+offset/2+spaceB, randomColorCircle)
      } else {
        var temp = new Vehicle(allWidth + SIZE_RECT/2 + j*SIZE_RECT, allHeight +i*SIZE_RECT + (SIZE_RECT/2)-(offset/2)+spaceB, randomColorCircle)
      }
      square.push(temp)
    }
  }
}

function draw(){
  background(backgroundColor);
  square.forEach((c)=>{
    c.display();
  })
}

function Vehicle(x, y, color){
  this.pos = createVector(x, y);
  this.color = color;

  this.display = function(){
    fill(this.color);
    noStroke();
    rect(this.pos.x, this.pos.y, SIZE_RECT, SIZE_RECT);
  }
}

