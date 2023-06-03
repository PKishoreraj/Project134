noseX=0;
noseY=0;
difference=0;
rightWrist=0;
leftWrist=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,500);
    canvas.postion(560,150);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log('PoseNet Is Initialized!')
}
function gotPoses(results){
    if(results.length>0){
console.log(results);
noseX=results[0].pose.nose.x;
nosey=results[0].pose.nose.y;
console.log("noseX="+noseX+"noseY="+noseY);
leftWristx=results[0].pose.leftWrist.x;
rightWristx=results[0].pose.rightWrist.x;
difference=floor(leftWrist-rightWristx);
console.log("lefthWrightx="+leftWristx+"rightWrightx="+rightWristx+"difference="+difference);
}
}
function draw(){
    background('#969A97');
    document.getElementById("name_side").innerHTML="width and height of a square will be ="+difference+"px";
    fill('#F90093');
    stroke("#F90093");
    spuare(noseX,noseY,difference);
}