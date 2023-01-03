document.write(typeof 3);

function my_Function() {
    document.getElementById("Test").innerHTML = 0 / 0;

    document.getElementById("Test2").innerHTML = isNaN('This is a string');

    document.getElementById("Test3").innerHTML = isNaN('117')
    
    document.getElementById("infinity").innerHTML = (2E310);

    document.getElementById("Ninfinity").innerHTML = (-3E310);
}

document.write(10 < 15); /*boleen logic (true, false)*/
document.write(10 > 14);

console.log(2 + 2); /* this will display in the console log in the browser*/

document.write("15" + 5); /* coercion, these numbers will be placed togther (155)*/

console.log(5 < 4);

document.write(10 == 10); /* double equals will check one number to the other to make sure they are of equal value */

A = "Rope"
B = "Rope"
document.write(A === B); /* check whether the data on the left side of the symbol is equal to the data on the right side and that it is the same type of data as that on the right, this would display true*/

C = "One"
see = "C"
document.write(C === see); /*display false*/

X = y
two = "y"
document.write(X === two); 

four = too
thor = "too"
document.write(four === thor); 

document.write(5 > 2 && 10 > 4); /* && AND statement checking that both values are true or false, 5 being greater than 2 and 10 being greater than 4*/

document.write(5 > 10 || 10 > 4);  /* || OR Statement will check either values to check if they are true, this would be true necuse 10 is greater than 4 */

document.write(5 > 10 || 10 > 20);

function not_Function() {
    document.getElementById("Not").innerHTML = !(5 > 10); /* ! NOT statement making a decion about the value to get a true or false, 5 is NOT greater than 10, this would be true */
}

function nnot_Function() {
    document.getElementById("NNot").innerHTML = !(5 > 2);
}