function addition_Function() { /*Function name created*/
    var addition = 5 + 5; /* variable created and assigned value (math equation) */
    document.getElementById("ADD").innerHTML = "5 + 5 =" + addition; /* function created when clicked will change html, operate 5+5 and display the result*/
}

function sub_Function() {
    var subtraction = 7 - 2;
    document.getElementById("SUB").innerHTML = "7 - 2 =" + subtraction;/* function created when clicked will operate 7 - 2 and display the result*/
}

function multiplication() {
    var multiplication = 6 * 8;
    document.getElementById("MULTI").innerHTML = "6 x 8 =" + multiplication; /* function created when clicked will operate 6x8 and display the result*/
}

function division() {
    var division = 48 / 6;
    document.getElementById("DIV").innerHTML = "48 / 6 =" + division;/* function created when clicked will operate 48 divided by 6 and display the result*/
}
function more_Math() {
    var simple_Math = (1 + 2) * 10 / 2 - 5;
    document.getElementById("Math").innerHTML = "1 plus 2, multiplied by 10,divide in half and then subtracted by 5 equals" + simple_Math  /* function created when clicked will operate 1 + 2 x 10 / 2 -5 and display the result*/
}

function modulus_Operator() {
    var simple_Remainder= 25 % 6;
    document.getElementById("Remainder").innerHTML = "When you divide 25 by 6 you have a remainder of:" + simple_Remainder;/* function created when clicked will operate 25/6 and display the result*/
    
}
function negation_Operator() {
    var x = 10;
    document.getElementById("Unary").innerHTML = -x; /* function created when clicked will operate an negation and display the result*/

}

function Increment() {
    var x = 5;
    x++;
    document.getElementById("Increment").innerHTML = x; /* function created when clicked will operate an increment on 5, plus 1 and display the result*/
}

function Decrement() {
    var y = 5.25
    y--;
    document.getElementById("Decrement").innerHTML = y; /* function created when clicked will operate an decrement on 5.25, - 1 and display the result*/
}
window.alert(Math.random() * 100); /* window alert created when page is loaded will pop up a window with a random number from 1- 100 displayed*/