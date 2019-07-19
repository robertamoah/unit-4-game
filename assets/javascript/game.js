$(document).ready(function(){


var wins = 0;
var lose = 0;
var collection = [];
var current = "";
var valuel1 = 0;
var random = "1";
var total =0;



random = Math.floor(Math.random()* 50 )
$(".button5").html(random)

// guesed number
$(".start").on("click", function(){


    value1 = Math.floor(Math.random()* 2)+1 
    value2 = Math.floor(Math.random()* 2) +1
    value3 = Math.floor(Math.random()* 2) +1
    value4 = Math.floor(Math.random()* 2) +1

$("#info-number").html(current)
    $(".button5").html(random)

})







// first picture button
$(".button1").on("click", function(){


total = total + value1

    $("#info-number").html(total)

    
})


// second picture button
$(".button2").on("click", function(){

    total = total + value2
    // current = value1
    $("#info-number").html(total)
 })
 

// third picture button

$(".button3").on("click", function(){
    // current = value1

    total = total + value3
    $("#info-number").html(total)
 })

 
//fourth picture button
$(".button4").on("click", function(){
    // current = value1

    total = total + value4
    $("#info-number").html(total)
 })
 

function isWinner(){
if (total == random){
    wins = wins+1
    alert("You won!!")


} else if(total > random){
    lose = lose + 1
    alert("You lose!!!")

}
}

isWinner()



});


