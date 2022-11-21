https://teachablemachine.withgoogle.com/models/d_pfeyYu9/
dog = 0;
cat = 0;
cow = 0;
lion = 0;


function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/d_pfeyYu9/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        r = Math.floor(Math.random() * 255) + 1;
        g = Math.floor(Math.random() * 255) + 1;
        b = Math.floor(Math.random() * 255) + 1;
        document.getElementById("result_label").innerHTML = 'I can hear -' + results[0].label;
        document.getElementById("result_count").innerHTML = "dogs detected -" + dog + " cats detected -" + cat + "cows_detected - " + cow + "lions_detected - " + lion;
        document.getElementById("result_label").style.color ="rgb(" + r + "," + g + "," + b +")";

        img = document.getElementById("ear");
        if(results[0].label == "barking"){
            img.src = "dog.png";
            dog = dog + 1;
                }

         else if(results[0].label =="meow"){
            img.src ="cat.gif";
            cat = cat +  1;
        }
        else if(results[0].label =="moo"){
            img.src = "cow.jpg"
            cow = cow + 1;
        }
        else if(results[0].label =="roar"){
            img.src = "lion roar.jpg"
            lion = lion + 1;
        }
        else{
            img.src = "ear.png"
        }
    }

}

