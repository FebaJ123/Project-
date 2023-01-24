leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function preload(){
    song = loadSound("music.mp3");
    song = loadSound("music2.mp3");
}

function setup(){
    canvas = createCanvas(560, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(0, 0, 560, 500);
}