var btn_red;
var btn_green;

var r = 0;
var g = 0;
var b = 0;

function setup() {
  createCanvas(1600, 800);
  
  btn_red = createButton("RED");
  btn_red.position(100,100);
  btn_red.mousePressed(red_bg);

  btn_green = createButton("GREEN");
  btn_green.position(1400 ,100);
  btn_green.mousePressed(green_bg);

}

function draw() {
  background(r,g,b);
}


function red_bg()
{
  r = 255
  g = 0
  b = 0
}
function green_bg()
{
  r = 0
  g = 255
  b = 0
}

