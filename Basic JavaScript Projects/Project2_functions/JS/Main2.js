var BigBadWolf = "Mr Wolf" // Creating Variable and Assigning string value to variable
var BigBadWolf= BigBadWolf.fontcolor("brown") //Assigning font color Brown
document.write(BigBadWolf);// creating the funtion write to write string value 

window.alert("Hello Mr Wolf!"); //Creating window pop up when page loads

function myFunction() {
    var sentence = "i am learning";
    sentence += " alot from this course!";
    document.getElementById("Concatenate").innerHTML = sentence;// creating function to display Concanated text using +=
}