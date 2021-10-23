leftWrist="";
rightWrist="";
difference="";
function setup(){
    video=createCanvas(VIDEO);
    video.size(300,350);

    canvas=createCanvas(300,350);
    canvas.position(350,350);

    poseNet=ml5.poseNet(video,modelLoaded)
    poseNet.on('pose',gotPoses)
}

function modelLoaded(){
    console.log("Model is loaded");
}

function draw(){
    background('#9c9797');
    textSize(difference)
    fill('#5909ed');
    text('Nidhir',50,400);
}

function gotPoses(results,error){
    leftWrist=results[0].pose.leftWrist.x;
    rightWrist=results[0].pose.rightWrist.x;
    difference=floor(leftWrist-rightWrist);

    if(results.length>0)
    {
        console.log(results);
    }
    else{
        console.error(error);
    }
}