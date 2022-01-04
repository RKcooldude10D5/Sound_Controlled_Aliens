function startclassification(){
navigator.mediaDevices.getUserMedia({audio: true});
classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/ATYlJTnr0/model.json", modelReady);
}
function modelReady(){
    classifier.classify(gotResult);
}
function gotResult(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        random_no_r=Math.floor(Math.random() * 255) +1;
        random_no_g=Math.floor(Math.random() * 255) +1;
        random_no_b=Math.floor(Math.random() * 255) +1;
        document.getElementById("result_label").innerHTML='I Can Hear - ' + results[0].label;
        document.getElementById("result_confidence").innerHTML='Accuracy Of What I Hear - ' + (results[0].confidence * 100).toFixed(2) + '%';
        document.getElementById("result_label").style.color="rgb("+random_no_r+", "+random_no_g+", "+random_no_b+")";
        document.getElementById("result_confidence").style.color="rgb("+random_no_r+", "+random_no_g+", "+random_no_b+")";
        alien_1=document.getElementById("alien_1");
        alien_2=document.getElementById("alien_2");
        alien_3=document.getElementById("alien_3");
        alien_4=document.getElementById("alien_4");
        if(results[0].label=="Clap"){
            alien_1.src="aliens-01.gif";
            alien_2.src="aliens-02.png";
            alien_3.src="aliens-03.png";
            alien_4.src="aliens-04.png";
        }
        else if(results[0].label=="Whistling"){
            alien_1.src="aliens-01.png";
            alien_2.src="aliens-02.gif";
            alien_3.src="aliens-03.png";
            alien_4.src="aliens-04.png";
        }
        else if(results[0].label=="DaBaDee"){
            alien_1.src="aliens-01.png";
            alien_2.src="aliens-02.png";
            alien_3.src="aliens-03.gif";
            alien_4.src="aliens-04.png";
        }
        else{
            alien_1.src="aliens-01.png";
            alien_2.src="aliens-02.png";
            alien_3.src="aliens-03.png";
            alien_4.src="aliens-04.gif";
        }
    }
}