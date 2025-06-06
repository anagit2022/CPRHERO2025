let playImg;
let winImg;
let aedImg;
let ambImg;
let endImg;
let elapsedTime = 0;
let now = 0;
let s1, s2,s2A, s3A, s3B, s3C, s3D, s4, s5, s6, s7, s7A;
let dial;
let ring;
let playStartTime = 0;
let cprStartTime = 0;
let interval = 0;
let lastTouchTime = 0;
let timeleft = 0;
let arrowimg;
let meterimg;
let heartimg;
let angle = 0;
let bpm = 0;
let bpm_circle_color = "#D9D9D9";
let slow_interval = 0.8;
let compression_count = 0;
let good_compression = 0;
let numberToDisplay;
let decayRate = 10;
let decay_normal = 0.5;
let goodfillRate = 100;
let badfillRate = 10;
let progress = 0;
let maxTotalCompressions = 0;
let diffGoal = 0;
let currentState = "s1";
let press_music;
let task_time;
let pressed_time = 0 ;
let cheekOpacity = 40;
let lipOpacity = 120;
// time elapsed since play started
let playElapsed = 0;
let lastTouchElapsed =0;
// nexts1
let nextx = 118;
let nexty = 533;
let nextw = 142;
let nexth = 47;
// nextG
let nextGx = 298;
let nextGy = 577;
let nextGw = 50;
let nextGh = 50;

// nexts3A
let next3Ax = 255;
let next3Ay = 437;
let next3Aw = 60;
let next3Ah = 60;
// nexts3B
let next3Bx = 255;
let nextBy = 437;
let next3Bw = 60;
let next3Bh = 60;
// nexts3C
let next3Cx = 172;
let next3Cy = 365;
let next3Cw = 60;
let next3Ch = 60;
// nexts3D
let next3Dx = 172;
let next3Dy = 579;
let next3Dw = 60;
let next3Dh = 60;
// next 7A
let next7Ax = 343;
let next7Ay = 283;
let next7Aw = 45;
let next7Ah = 111;
// startplay
let startx = 152;
let starty = 288;
let startw = 236;
let starth = 102;
// restart
let restartx = 308; // X for start button clickable area (if specific region needed)
let restarty = 21; // Y for start button clickable area
let restartw = 66; // Width for start button clickable area
let restarth = 66; // Height for start button clickable area

function preload() {
  playImg = loadImage(
    "eyes+ (2).png"
  );
  winImg = loadImage(
    "giffycanvas (82).gif"
  );
  
  press_music = loadSound(
    "mixkit-message-pop-alert-2354.mp3"
  );
  win_music = loadSound(
    "mixkit-fairy-arcade-sparkle-866.wav"
  );
  endImg = loadImage(
    "end (2).png"
  );
  ambImg = loadImage("giffycanvas (85).gif");
  s1 = loadImage(
    "s1 (7).png"
  );
  s2 = loadImage(
    "onboard2.png"
  );
  s2A = loadImage(
    "s2 (6).png"
  );
  
  s3A = loadImage(
    "s3A (1).png"
  );
  s3B = loadImage(
    "s3B (1).png"
  );
  s3C = loadImage(
    "s3C (1).png"
  );
  s3D = loadImage(
    "s3Dscdf.png"
  );
  s4 = loadImage(
    "s3E.png"
  );
  s5 = loadImage(
    "s4 (3).png"
  );
  s6 = loadImage(
    "giffycanvas (83).gif"
  );
  s7 = loadImage(
    "s6 (3).png"
  );
  s7A = loadImage(
    "s7 (2).png"
  );
  arrowimg = loadImage("arrow2.png");
  meterimg = loadImage("bpm meter86.png");
  heartimg = loadImage("heart.png");
  aedImg = loadImage("giffycanvas (84).gif");
 dial = loadSound("9aud.mp3");
 ring = loadSound("mixkit-office-telephone-ring-1350.wav");
}
function setup() {
  //createCanvas(392, 680);
  // for github
  createCanvas(windowWidth, windowHeight);
  maxTotalCompressions = floor(random(30, 50));
  task_time = 600 * maxTotalCompressions+3000;
  // static blood flow level
  const staticRectX = 92;
  const staticRectY = 44;
  const staticRectWidth = 254;
  const staticRectHeight = 11;
  const staticRectRadius = 11; // Assuming rounded corners for both
}

function draw() {
  cprStartTime = millis();
  

  if (currentState === "s1") {
    image(s1, 0, 0);
  } else if (currentState === "s2") {
    image(s2, 0, 0);
  } else if (currentState === "s2A") {
    image(s2A, 0, 0);
  } else if (currentState === "s3A") {
    image(s3A, 0, 0);
  } else if (currentState === "s3B") {
    image(s3B, 0, 0);
  } else if (currentState === "s3C") {
    image(s3C, 0, 0);
  } else if (currentState === "s3D") {
    image(s3D, 0, 0);
  } else if (currentState === "s4") {
    image(s4, 0, 0);
  } else if (currentState === "s5") {
    image(s5, 0, 0);
  } else if (currentState === "s6") {
    image(s6, 0, 0);
  } else if (currentState === "s7") {
    image(s7, 0, 0);
  }else if (currentState === "s7A") {
    image(s7A, 0, 0);
  } else if (currentState === "play") {
    playScreen();
  }else if (currentState === "win") {
    winScreen();
  }else if (currentState === "late") {
    lateScreen();
  }else if (currentState === "aed") {
    aedScreen();
  }else if (currentState === "amb") {
    ambScreen();
  }
}
function playScreen() {
  
  elapsedTime = millis() - playStartTime;

  progress -= decay_normal;
  progress = constrain(progress, 6, 254);
  cheekOpacity = map(progress, 6, 254, 40, 255);
  lipOpacity = map(progress, 6, 254, 120, 255);
  background("#FFC5B7");
  image(playImg, 86,110);
  image(heartimg,340,40);
  
  // cheek circle1
  push();
  noStroke();
  fill(253, 175, 179, cheekOpacity);
  circle(220, 122, 132);
  pop();
  // cheek circle1
  push();
  noStroke();
  fill(253, 175, 179, cheekOpacity);
  circle(220, 542, 132);
  pop();
  progress = constrain(progress,6,210);
  // static rect
  push();
  noStroke();
  fill("#EEEEEE");
  rect(122, 44, 210, 11, 11);
  pop();
  push();
  imageMode(CENTER);
  image(meterimg,78,48);
  pop();
  // show BPM text
  push();
  translate(20, 48);
  rotate(-HALF_PI);
  textAlign(CENTER, TOP);
  textSize(23);
  // control the colour of bpm text
  fill(bpm_circle_color);
  text(round(bpm), 0, 0);
  pop();
  // live arrow
  push();
  translate(83,47);
  imageMode(CENTER);
  angleMode(DEGREES);
  //angle = map(bpm,10,600,-60,60);
  rotate(angle);
  image(arrowimg,0,0);
  pop();
  //live rect
  push();
  noStroke();
  fill("#FF5058");
  rect(332, 44, -progress, 11, 11);
  pop();
  
  if (bpm > 99 && bpm < 121) {
    bpm_circle_color = "#038660";

    //progress += fillRate;
  } else {
    bpm_circle_color = "#FF3C46";
    //progress -= decayRate;
  }
  
  // DRAW MOUTH
  push();
  noStroke();
  fill(255, 124, 130, lipOpacity);
  ellipse(310,330,42,120);

  // pop();
  //show compression count
  push();
  angleMode(RADIANS);
  translate(30,335);
  rotate(-HALF_PI);
  textAlign(CENTER, TOP);
  textSize(23);
  fill(0);
  let numberToDisplay;
  if (compression_count === 0) numberToDisplay = 0;
  else if (compression_count % 5 === 0) numberToDisplay = compression_count;
  else numberToDisplay = compression_count % 5;
  text(numberToDisplay + " AND", 0, 0);
  console.log("good_compression = " + good_compression);
  // difference between max and good compressions
 console.log("diff goal = " + (maxTotalCompressions - good_compression));
diffGoal = maxTotalCompressions - good_compression;
  pop();
  // learning about time passed since play started
  playElapsed = millis()-playStartTime 
  //text("time passed since play started : "+playElapsed ,100,600);
  //text("max compressions :"+ maxTotalCompressions,100,500);
  //text("task time :"+ task_time,100,400);
  // learning about time elapsed since last touch
  lastTouchElapsed = ((millis()-pressed_time ));
  //text("lastTouch time elapsed :"+ lastTouchElapsed,100,300);
  //text("play start time"+ playStartTime,100,600 )
  //console.log(playStartTime);
  //console.log(lastTouchTime);
  //console.log( lastTouchElapsed);
  // game win/late logic
  handle_performance();
  handle_inactivity();
  // display time left 
  push();
  angleMode(RADIANS);
  translate(30,600);
  rotate(-HALF_PI);
  textAlign(CENTER, TOP);
  textSize(20);
  fill(0)
  timeleft = task_time - playElapsed;
  if(timeleft <0 )
    {
      timeleft = 0;
    }
  text(round((timeleft/1000),0)+"s",0,0);
  pop();
  push();
  angleMode(RADIANS);
  translate(52,600);
  rotate(-HALF_PI);
  textAlign(CENTER, TOP);
  textSize(18);
  fill(0)
  text("Time left",0,0);
  pop();
}
function lateScreen() {
  image(endImg, 0, 0);
}
function winScreen() {
  image(winImg, 0, 0);
}
function aedScreen() {
  image(aedImg, 0, 0);
}
function ambScreen() {
  image(ambImg, 0, 0);
}
function mousePressed() {
  pressed_time = millis();
  if (currentState === "s1") {
    if (
      mouseX > nextx &&
      mouseX < nextx + nextw &&
      mouseY > nexty &&
      mouseY < nexty + nexth
    ) {
      currentState = "s2";
      console.log(currentState);
    }
  } else if (currentState === "s2") {
    if (
      mouseX > nextGx &&
      mouseX < nextGx + nextGw &&
      mouseY > nextGy &&
      mouseY < nextGy + nextGh
    ) {
      currentState = "s2A";
    }
  } else if (currentState === "s2A") {
    if (
      mouseX > nextGx &&
      mouseX < nextGx + nextGw &&
      mouseY > nextGy &&
      mouseY < nextGy + nextGh
    ) {
      currentState = "s3A";
    }
  }else if (currentState === "s3A") {
    
    if (
      mouseX > next3Ax &&
      mouseX < next3Ax + next3Aw &&
      mouseY > next3Ay &&
      mouseY < next3Ay + next3Ah
    ) {
      currentState = "s3B";
      dial.play();
    }
  }else if (currentState === "s3B") {
    if (
      mouseX > next3Ax &&
      mouseX < next3Ax + next3Aw &&
      mouseY > next3Ay &&
      mouseY < next3Ay + next3Ah
    ) {
      currentState = "s3C";
      dial.play();
    }
  } else if (currentState === "s3C") {
    if (
      mouseX > next3Cx &&
      mouseX < next3Cx + next3Cw &&
      mouseY > next3Cy &&
      mouseY < next3Cy + next3Ch
    ) {
      currentState = "s3D";
      dial.play();
    }
  }else if (currentState === "s3D") {
    if (
      mouseX > next3Dx &&
      mouseX < next3Dx + next3Dw &&
      mouseY > next3Dy &&
      mouseY < next3Dy + next3Dh
    ) {
      ring.play();
      currentState = "s4";
    }
  }  else if (currentState === "s4") {
    if (
      mouseX > nextGx &&
      mouseX < nextGx + nextGw &&
      mouseY > nextGy &&
      mouseY < nextGy + nextGh
    ) {
      currentState = "s5";
    }
  } else if (currentState === "s5") {
    if (
      mouseX > nextGx &&
      mouseX < nextGx + nextGw &&
      mouseY > nextGy &&
      mouseY < nextGy + nextGh
    ) {
      currentState = "s6";
    }
  } else if (currentState === "s6") {
    if (
      mouseX > nextGx &&
      mouseX < nextGx + nextGw &&
      mouseY > nextGy &&
      mouseY < nextGy + nextGh
    ) {
      currentState = "s7";
    }
  } else if (currentState === "s7") {
    if (
      mouseX > nextGx &&
      mouseX < nextGx + nextGw &&
      mouseY > nextGy &&
      mouseY < nextGy + nextGh
    ) {
      currentState = "s7A";
      
    }
  }else if (currentState === "s7A") {
    if (
      mouseX > next7Ax &&
      mouseX < next7Ax + next7Aw &&
      mouseY > next7Ay &&
      mouseY < next7Ay + next7Ah
    ) {
      currentState = "play";
      playStartTime = millis();
    }
  } else if (currentState === "play") {
    compression_count += 1;
    press_music.play();
    now = millis();
    if (lastTouchTime !== 0) {
      interval = now - lastTouchTime;
      let calculatedBPM = 60000 / interval;
      bpm = calculatedBPM;
    } 
    
    lastTouchTime = now;
    handle_live()
  } else if (currentState === "win")
{   win_music.play();
  if (
      mouseX > restartx &&
      mouseX < restartx + restartw &&
      mouseY > restarty &&
      mouseY < restarty + restarth
    )
    {
      currentState = "play";
      reset();
    }
  
  
}else if (currentState === "late")
  {
     if (
      mouseX > restartx &&
      mouseX < restartx + restartw &&
      mouseY > restarty &&
      mouseY < restarty + restarth
    )
    {
      currentState = "play";
      reset();
    }
  }else if (currentState === "aed")
  {
     if (
      mouseX > restartx &&
      mouseX < restartx + restartw &&
      mouseY > restarty &&
      mouseY < restarty + restarth
    )
    {
      currentState = "play";
      reset();
    }
  }else if (currentState === "amb")
  {
     if (
      mouseX > restartx &&
      mouseX < restartx + restartw &&
      mouseY > restarty &&
      mouseY < restarty + restarth
    )
    {
      currentState = "play";
      reset();
    }
  }
  
}
function handle_inactivity(){
 if( lastTouchElapsed >4000)
   {
     currentState = "late";
   }
}
function handle_performance(){
  if(playElapsed >= task_time)
    {
      /*if(good_compression >= maxTotalCompressions){
        currentState = "win";
      }else
        currentState = "late";
    }*/
      if(diffGoal <= 5){
        currentState = "win";
      }else if(diffGoal <= 10){
        currentState = "aed";
      }else if(diffGoal <= 18){
        currentState = "amb";
      }else if (diffGoal >= 20){
        currentState = "late";
      }
    }
}
function reset(){
  playStartTime = millis();
  good_compression = 0;
  compression_count =0;
  progress = 0;
  angle = 0;
  bpm = 0;
  lastTouchTime = 0;
  interval =0;
}
function handle_live()
{
  if(bpm<=120 && bpm>= 100){
    progress += goodfillRate;
    good_compression = good_compression+1;
    angle = 0;
  }else if(bpm>120){
    angle = 60;
    progress +=badfillRate;
  }else if(bpm<100){
    angle = -60;
    progress +=badfillRate;
  }
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function touchStarted() {
  mousePressed(); // Use the same logic
  return false; // Prevent default browser touch behavior
}
