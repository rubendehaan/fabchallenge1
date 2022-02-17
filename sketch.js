var xx0 = 0;
var xx1 = 0;
var xx2 = 0;
var xx3 = 0;
//var x4 = 0;

let div;
let canvas;
let para;

var speed = 0.002;

function setup() {
  div = createDiv('');
  div.addClass('myCircle');
  div.size(windowWidth,windowHeight);
  
  canvas = createCanvas(500, 500);
  canvas.parent(div);
  
  para = createP('Emo Sculpting');
  para.parent(div);
  para.style('font-size', '36px');
  para.style('color', 'white');
  para.style('margin-bottom', '10px');
  
  para2 = createP('Use the sliders to create a sculpture of your true emotion.');
  para2.parent(div);
  para2.style('font-size', '18px');
  para2.style('color', 'white');
  para2.style('margin-bottom', '50px');
  
  stroke('rgba(113, 97, 239, 0.7)');
  strokeWeight(3);
  noFill();

  //createSlider(min, max, [value], [step])
 
  
  sliderfull = createDiv('');
  sliderfull.addClass('sliderfull');
  sliderfull.parent(div);
  
  sliderfull2 = createDiv('');
  sliderfull2.addClass('sliderfull');
  sliderfull2.parent(div);
  
  sliderfull3 = createDiv('');
  sliderfull3.addClass('sliderfull');
  sliderfull3.parent(div);
  
  sliderfull4 = createDiv('');
  sliderfull4.addClass('sliderfull');
  sliderfull4.parent(div);
  
  s0p = createP('Anticipation');
  s0p.parent(sliderfull);
  s0p.addClass('emo-subheading');
  slider0 = createSlider(0, width, 0.5*width);
  slider0.parent(sliderfull);
  s1p = createP('Surprise');
  s1p.parent(sliderfull);
  s1p.addClass('emo-subheading');
  
  s0p = createP('Distrust');
  s0p.parent(sliderfull2);
  s0p.addClass('emo-subheading');
  slider1 = createSlider(0, width, 0.5*width);
  slider1.parent(sliderfull2);
  s1p = createP('Trust');
  s1p.parent(sliderfull2);
  s1p.addClass('emo-subheading');
  
  s0p = createP('Sadness');
  s0p.parent(sliderfull3);
  s0p.addClass('emo-subheading');
  slider2 = createSlider(0, width, 0.5*width);
  slider2.parent(sliderfull3)
  s1p = createP('Joy');
  s1p.parent(sliderfull3);
  s1p.addClass('emo-subheading');
  
  s0p = createP('Fear');
  s0p.parent(sliderfull4);
  s0p.addClass('emo-subheading');
  slider3 = createSlider(0, width, 0.5*width);
  slider3.parent(sliderfull4)
  s1p = createP('Anger');
  s1p.parent(sliderfull4);
  s1p.addClass('emo-subheading');
  
  
  slider0.input(update);
  slider1.input(update);
  slider2.input(update);
  slider3.input(update);
  slider0.addClass("mySliders");
  slider1.addClass("mySliders");
  slider2.addClass("mySliders");
  slider3.addClass("mySliders");
  
  //circle(windowWidth/2, windowHeight/2, windowHeight/2);
  
  }

function update() {
  	// get the value of the slider 0
  	var value = slider0.value();
  	// the x position is set to value
	xx0 = value;
  
  // get the value of the slider 1
  	var value = slider1.value();
  	// the x position is set to value
	xx1 = value;
  
  // get the value of the slider 2
  	var value = slider2.value();
  	// the x position is set to value
	xx2 = value;
  
  // get the value of the slider 3
  	var value = slider3.value();
  	// the x position is set to value
	xx3 = value;
}

function draw() {
  background('rgba(244, 237, 221, 0.01)');
  //beginShape();
  //curveVertex(x0,50);
  //curveVertex(x0,50);
  //curveVertex(x1,200);
  //curveVertex(x2,350);
  //curveVertex(x3,500);
  //curveVertex(x4,650);
  //curveVertex(x4,650);
  //endShape();
  
  var x1 = getNoiseValue(xx0);
  var x2 = getNoiseValue(xx1);
  var x3 = getNoiseValue(xx2);
  var x4 = getNoiseValue(xx3);
  var y1 = 0;
  var y2 = windowHeight*0.3;
  var y3 = windowHeight*0.6;
  var y4 = windowHeight;
  
  bezier(x1, y1, x2, y2, x3, y3, x4, y4);
  
  var x1 = getNoiseValue(width - xx0);
  var x2 = getNoiseValue(width - xx1);
  var x3 = getNoiseValue(width - xx2) ;
  var x4 = getNoiseValue(width - xx3);
  var y1 = 0;
  var y2 = windowHeight*0.3;
  var y3 = windowHeight*0.6;
  var y4 = windowHeight;
  
  fill('rgba(183, 156, 237, 0.01)');
  bezier(x1, y1, x2, y2, x3, y3, x4, y4);

}

function getNoiseValue(val){
    return (val*3) * noise(frameCount * speed + width);
}