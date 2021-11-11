Webcam.set({
    height: 300,
    width:300,
    image_format: "png",
    png_quality: 90
});
camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_pic(){
    Webcam.snap(function(data){
        document.getElementById("result").innerHTML = '<img id = "final" src = "'+data+'"/>';
    });
}

console.log(ml5.version);

identify1 = ml5.imageClassifier("https://storage.googleapis.com/tm-model/8o0AuvZni/model.json", modalworking);

function modalworking(){
    console.log("modalworking");
}

function identify(){
    ima = document.getElementById("final");
    identify1.classify(ima, gotResult);
}

function gotResult(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("person").innerHTML = results[0].label;
        document.getElementById("accuracy").innerHTML = results[0].confidence.toFixed(2);
    }
}
