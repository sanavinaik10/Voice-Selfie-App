var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function  mystart(){
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}
recognition.onresult = function(event){
    console.log(event);
    var Content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
    if(Content=="take my selfie"||Content=="click my picture"||Content=="click my selfie"||Content=="take my picture"){
        speak();
        console.log(Content);
    }
}
function speak(){
    var synth = window.speechSynthesis;
    speak_data = "Taking your selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis); 
    Webcam.attach(camera);
    setTimeout(function(){
        takeSnapshot();
        save();
    },5000);
}
camera = document.getElementById("camera");
Webcam.set({
    width:360,
    height:360,
    image_format:'png',
    png_quality:90
});
function takeSnapshot(){
    Webcam.snap(function (data_uri){
        document.getElementById("result").innerHTML = "<img id='selfie_image' src='"+data_uri+"'>";
    });
}
function save(){
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src;
    link.href = image;
    link.click();
}
