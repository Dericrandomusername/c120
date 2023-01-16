/*https://teachablemachine.withgoogle.com/models/oqtVtkNKj/*/
Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
    });
    camera=document.getElementById("camera");
    Webcam.attach("#camera");
    function take_snapshot(){
        Webcam.snap(function(data_uri){
            document.getElementById("result").innerHTML="<img id='capture_image' src='"+data_uri+"' >";
        })
    }
    console.log("ml5 version",ml5.version);
    var classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/oqtVtkNKj/model.json",modelLoaded);
    function modelLoaded(){
        console.log("model has been loaded");
    }
    function speak(){
        var synth=window.speechSynthesis;
        speakData1="first prediction is "+prediction_1;
        speakData2="second prediction is "+ prediction_2;
        var utterThis=new SpeechSynthesisUtterance(speakData1+ speakData2)
        synth.speak(utterThis);}