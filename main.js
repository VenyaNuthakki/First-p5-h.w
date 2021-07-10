function preload(){

}

function setup(){
    canvas=createCanvas(500,500);
    canvas.position(300,200);
    video=createCapture(VIDEO);
    video.hide();
}

function draw(){
   image(video,100,100,300,300);
}

function take_snapshot(){
    save('filter_picture.png')
}