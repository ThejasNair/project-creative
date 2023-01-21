function sadness() {
    document.getElementById("ihadtomakeanid:(").style.backgroundImage = "https://tse1.mm.bing.net/th?id=OIP.ZMDbBapCNgeJTaswCvCDLAHaFj&pid=Api&P=0";
    document.getElementById("thesadmusic").play();
}

<img id="ok" src=""></img>

x = document.getElementById("ok").getXPosition;



  
Webcam.attach(" #camera ");
camera = document.getElementById("camera");
Webcam.set ({
 width: 350,
 height: 350,
 image_type: 'png',
 png_quality: 90
});

function take_snapshot() {
    Webcam.snap(function(data_url) {
        document.getElementById("result").innerHTML = '<img id="thing" src="'+data_url+'"/>';
    });
}
console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/pey0xy8Hv/", modelLoaded);

function modelLoaded() {
console.log("ModelLoaded!");
}


function check() {
    img = document.getElementById("thing");
    classifier.classify(img, gotResult);
     function error() {
        console.log("lots of error dude");
     }
     function gotResult(error, result) {
      document.getElementById("result_object_name").innerHTML = result[0].label;
      document.getElementById("result_object_accuracy").innerHTML = result[0].confidence.toFixed[3];
     }
}

/*bruh = document.getElementById("ihadtomakeanid:(")

function bruhh() {
randomnumber = Math.floor(Math.random() *  17721).toString(16);

document.body.style.backgroundColor = "#" + randomnumber;
setTimeout( bruhhh, 250);
}


function bruhhh() {
setTimeout(bruhh, 250);
}*/

