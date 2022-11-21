function preload(){
    song1=loadSound("coffin.mp3")
    song2=loadSound("Pablo.mp3")
}
function setup(){
    canvas=createCanvas(300,300)
    canvas.position(500,125)
    webcam=createCapture(VIDEO)
    webcam.hide()
    webcam.size(300,300)
}
function draw(){
    image(webcam,0,0,300,300)
}
