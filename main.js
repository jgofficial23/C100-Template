var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function messageon() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
    window.alert("Start talking");
  
    recognition.onresult = function (event) {

        console.log(event);

        var Content = event.results[0][0].transcript;

        document.getElementById("textbox").innerHTML = Content;
        console.log(Content);
    
    }
}
