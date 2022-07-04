song1="";
song2="";
leftWristX =0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
scoreLeftWrist=0;
scoreRightWrist=0;

function setup(){
    canvas = createCanvas(600,530);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('poseNet Is Initialized');
}

function preload(){
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}

function draw(){
    image(video,0,0,600,530);
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        scoreLeftWrist =results[0].pose.keypoints[9].score;
        scoreRightWrist =results[0].pose.keypoints[10].score;
        console.log("scoreLeftWrist= "+ scoreLeftWrist + "scoreRightWrist="+ scoreRightWrist);

        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;

        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;

        console.log("leftWristX= "+ leftWristX+" , leftWristY= "+leftWristY);
        console.log("rightWristX= "+ rightWristX+" , rightWristY= "+rightWristY);
    }
}