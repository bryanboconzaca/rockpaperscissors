// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
var userChoice =""
var computerChoice =""
var winner =""
var randomNumber = 0;

// DOCUMENT READY FUNCTION BELOW
$("button").click(function() {
 userChoice = $("#input").val();
$("#userChoice").text(userChoice);
    randomNumber= Math.random();
    if(randomNumber<0.333){
    computerChoice="rock";    
    }
    else if(randomNumber<0.666){
        computerChoice="paper";
    }
    else{
        computerChoice="scissors";
        }

$("#computerChoice").text(computerChoice);
    
});

