"use strict";

let username = prompt("Howdy Partner! What's your name?");
alert("Well, welcome " + username + "!");

function question1(){
    let q1 = prompt("Did I graduate High School in 2007?");

     if (q1[0] == "y" || q1[0] == "Y"){
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
        alert("Thanks for rubbing it in.");
    }
    }

function question3(){
    let q3 = prompt("Was I correct in leaving UPS?")
    
    if (q3[0] == "y" || q3[0] == "Y"){
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
            alert("What does that mean?");
        }
        }

function question5(){
     let q5 = prompt("Did I like doing this project for you?")
            
        if (q5[0] == "y" || q5[0] == "Y"){
                alert ("Quite right.");
        } else {
                alert("How dare you. I liked it well enough.");
        }
        }

question1();
question2();
question3();
question4();
question5();

alert("Thanks for reading, " + username + ".");