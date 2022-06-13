
"use strict";

let username = prompt("Howdy Partner! What's your name?");
alert("Well, welcome " + username + "!");
let bigCount = 0;

function question1(){
    let q1 = prompt("Did I graduate High School in 2007?");

     if (q1[0] == "y" || q1[0] == "Y"){
       bigCount++
        alert ("You're a good little reader");
        } else {
        alert("I totally graduated High School in 2007.");
        }
}

function question2(){
    let q2 = prompt("Did I ever graduate college")
    
    if (q2[0] == "y" || q2[0] == "Y"){
        alert ("You have too much faith in me. I did not.");
    } else {
      bigCount++
        alert("Thanks for rubbing it in.");
    }
    }

function question3(){
    let q3 = prompt("Was I correct in leaving UPS?")
    
    if (q3[0] == "y" || q3[0] == "Y"){
      bigCount++
        alert ("You're right. But also too honest.");
    } else {
            alert("Thanks Mom");
    }
    }

function question4(){
    let q4 = prompt("Is my biography big?")
        
        if (q4[0] == "y" || q4[0] == "Y"){
            alert ("Wrong. I rarely do anything.");
        } else {
          bigCount++
            alert("What does that mean?");
        }
        }

function question5(){
     let q5 = prompt("Did I like doing this project for you?")
            
        if (q5[0] == "y" || q5[0] == "Y"){
          bigCount++
                alert ("Quite right.");
        } else {
                alert("How dare you. I liked it well enough.");
        }
        }

function question6(){
    let i;
    for (i = 4; i > 0; i--){
    let q6 = prompt("Guess a number. You have " + i + " tries left.");
  if (q6 > 7){
    alert("Too High");
    continue;
  }else if (q6 < 7){
    alert("Too Low");
    continue;
  }else if (q6 == 7){
    bigCount++
    alert("That's the right answer!");
        break;}
 }

if (i == 0){
  alert("Sorry. The correct answer was 7.");
}
}

function question7(){
    // allow the user to select from an array 
let i;
let count = 0;
const food = ["pizza", "steak", "sushi"];
for (i = 6; i > 0; i--){

if (count == 3){
  bigCount++ 
  alert("You got them all. We're best friends.")
  break;
}
let answer = prompt("Try to name one of my favorite foods: ");

if (answer == food[0]){
  count++;
  alert("Pizza. Score: " + count);
  
}else if (answer == food[1]){
  count++
  alert ("Steak. Score : " + count);
}else if (answer == food[2]){
  count++
  alert("Sushi. Score: " + count);
}else {
  alert("I might like that. But it isn't in this array.");
}
}

if (i == 0){
  alert("Ok, It was steak, pizza, and sushi.")
}else{}


}

question1();
question2();
question3();
question4();
question5();
question6();
question7();

if (bigCount <= 4){
    alert("Thanks for reading, " + username + ". Your score is " + bigCount + ". You could know me better. Try again.");
}else if (bigCount >= 5){
    alert("Thanks for reading, " + username + ". Your score is " + bigCount + ". You know me really well. Good job.");
}else{
alert("Thanks for reading, " + username + ". Your score is " + bigCount + ".");}


// document.getElementById("button") = 

