var playing = false;
var score;
var action;
var timeremaining;
var correctAnswer;
//if we click on the start/reset
for(i=1; i<5; i++){
document.getElementById("box" + i).onclick = function(){
    //check if we are playing
    if(playing){
            if(this.innerHTML == correctAnswer){
                //correct answer
                score++;
document.getElementById("scorevalue").innerHTML = score;
                //show correct box and hide wrong box
                hide("wrong");
                show("correct");
                setTimeout(function(){
                    hide("correct");    
                }, 1000);
                
                //generate new Q&A
                generateQA();
                
            }else{
                //wrong answer
                show("wrong");
                setTimeout(function(){
                    hide("wrong");
                }, 1000)
            }
       }
}
}
document.getElementById("startreset").onclick = function(){
    //if we are playing
    if (playing){
        location.reload();
    } else{

        //change mode to playing
        playing = true;
         
        //set score to 0
        score = 0;
        document.getElementById("scorevalue").innerHTML = score;
       
       //remove gameover screen
        hide("gameover");
       //show countdown box 
        show("timeremaining");
        timeremaining = 60;
        document.getElementById("timeremainingvalue").innerHTML = timeremaining;
        
        //change button to reset
        
        document.getElementById("startreset").innerHTML = "Reset Game";
        
                //start countdown
        startCountdown();
        
         //generate new Q&A
        generateQA();
    }
    
}
//clicking on an answer box
document.getElementById("box1").onclick = function(){
    //check if we are playing
    if(playing){
            if(this.innerHTML == correctAnswer){
                //correct answer
                score++;
document.getElementById("scorevalue").innerHTML = score;
                //show correct box and hide wrong box
                hide("wrong");
                show("correct");
                setTimeout(function(){
                    hide("correct");    
                }, 1000);
                
                //generate new Q&A
                generateQA();
                
            }else{
                //wrong answer
                show("wrong");
                setTimeout(function(){
                    hide("wrong");
                }, 1000)
            }
       }
}
//if we click on answer box
    //if we are playing
        //correct? 
            //yes
                //increase score 
                //show correct box for 1 sec
                //generate new Q&A
            //no 
                //show try again box for 1 sec
//functions
function startCountdown(){
    action = setInterval(function(){
        timeremaining -= 1; document.getElementById("timeremainingvalue").innerHTML = timeremaining;
        if(timeremaining == 0){//game over
           stopCountdown();
           show("gameover");
            document.getElementById("gameover").innerHTML = "<p>Game Over!</p><p>Your score is " + score + "</p>";
            hide("timeremaining");
            hide("correct");
            hide("wrong");
            playing = false;
            document.getElementById("startreset").innerHTML = "Start Game";
        }
    }, 1000);
}
function stopCountdown(){
    clearInterval(action);
}
function hide(Id){
    document.getElementById(Id).style.display = "none";
}
function show(Id){
    document.getElementById(Id).style.display = "block";
}

//generate question and multiple answers

function generateQA(){
    var x = 1 + Math.round(9*Math.random());
    var y = 1 + Math.round(9*Math.random());
    correctAnswer = x*y;
    document.getElementById("question").innerHTML = x + "x" + y;
    var correctPosition = 1 + Math.round(3*Math.random());
    document.getElementById("box" + correctPosition).innerHTML = correctAnswer; //fill one box with the correct answer
    
    //fill other boxes with wrong answers
    
    var answers = [correctAnswer];
    
    for(i = 1; i < 5; i++){
        if (i != correctPosition){
            var wrongAnswer;
do{
wrongAnswer = (1 + Math.round(9*Math.random()))*(1 + Math.round(9*Math.random())); //a wrong answer
}while(answers.indexOf(wrongAnswer) > -1)
           
document.getElementById("box" + i).innerHTML = wrongAnswer;
            answers.push(wrongAnswer);
        }
    }
}