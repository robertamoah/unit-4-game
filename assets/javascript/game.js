$(document).ready(function(){


var wins = 0;
var lose = 0;
var collection = [];
var current = "";
var valuel1 = 0;
var random = " ";
var total = 0;
console.log(total)




random = Math.floor(Math.random()* 50) + 1
$(".button5").html(random)










// guesed number

$(".start").on("click", function (){
random = Math.floor(Math.random()* 40 ) + 1
wins = 0
lose = 0
current =""
$("#info-number").html(current)
$(".button5").html(random)
$("#info-wins").html(wins)
$("#info-loses").html(lose)

})




    $(".reset").on("click", function (){

        wins = 0
        lose = 0
        current =""
        $("#info-number").html(current)
        $(".button5").html(random)
        $("#info-wins").html(wins)
        $("#info-loses").html(lose)

        })









// first picture button
$(".button1").on("click", function(){
    value1 = Math.floor(Math.random()* 3)+2 
total = total + value1
$("#info-number").html(total)
keepScores() })


// second picture button
$(".button2").on("click", function(){
    value2 = Math.floor(Math.random()* 4) +1
total = total + value2
    // current = value1
$("#info-number").html(total)
keepScores() })
 

// third picture button

$(".button3").on("click", function(){
    // current = value1
value3 = Math.floor(Math.random()* 5) +3
total = total + value3
$("#info-number").html(total)
keepScores()
})

 




//fourth picture button
$(".button4").on("click", function(){
// current = value1
value4 = Math.floor(Math.random()* 6) +4
total = total + value4
$("#info-number").html(total)
console.log(total)
keepScores()

 })
 



//  working on the buttons *****************



 function keepScores(){


if(total === random){
wins = wins+1
$("#info-wins").html(wins)
current = "";
total = 0
random = Math.floor(Math.random()* 40 ) + 1
$("#info-number").html(current)
$(".button5").html(random)




}

else if(total > random){
lose = lose + 1
$("#info-loses").html(lose)
total = 0
current = "";
$("#info-number").html(current)
random = Math.floor(Math.random()* 50 )
$(".button5").html(random)
$("#info-wins").html(wins)
$("#info-loses").html(lose)



}else if(wins == 5){
    alert("winner")
    wins = 0
        lose = 0
        current =""
        $("#info-number").html(current)
        random = Math.floor(Math.random()* 50 )
        $(".button5").html(random)
        $("#info-wins").html(wins)
        $("#info-loses").html(lose)
}

else if (lose == 5){
    // $("#info-number").html("you won")
 
alert("loser")

wins = 0
        lose = 0
        current =""
        $("#info-number").html(current)
        random = Math.floor(Math.random()* 50)
        $(".button5").html(random)
        $("#info-wins").html(wins)
        $("#info-loses").html(lose)

}
 
}});







