
nosex=0
nosey=0


function preload(){
clown= loadImage("https://i.postimg.cc/zv3YncR4/download-1-removebg-preview.png")
}

function setup(){
    canvas=createCanvas(300,300)
    canvas.center()
    video=createCapture(VIDEO)
    video.size(300,300)
    video.hide()
    posenet=ml5.poseNet(video,modelLoaded)
    posenet.on("pose",gotResult)
}

function gotResult(result){
    if (result.length>0){
        console.log(result)
        nosex=result[0].pose.nose.x-67.5;
        nosey=result[0].pose.nose.y-50;
        console.log("nosex = " +nosex)
        console.log("nosey = " +nosey)
    }
}

function modelLoaded(){
    console.log("modelLoaded")
}


function takeSnapshot(){
    save("pic.png")
}

function draw(){
    image(video,0,0,300,300)
    value=document.getElementById("ddown").value
    filterValue=eval(value)
    filter(filterValue)

   image(clown,nosex,nosey,135,100)
}