function Call_Loop() { /*Call_Loop function created */
    var Digit = "";   /* variable Digit created with empty string that the numbers will be placed*/
    var X = 1; /*Variable X assigned = 1 */
    while (X < 11) { /* While loop created, while x is less than 11 perform function */
        Digit += "<br>" + X; 
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit; // Digits from the function get placed where id Loop is in the html

}

var instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute",]; //Array of musical instruments 
var Content = ""; //Empty string to store concatenated strings 
var y; /*Counters in the For loop */
function for_Loop() { /* Function created */
    for (y = 0; y < instruments.length; y++) { // For each iteration the current element of the "instruments" array is added to the "content" string, separated by a line break
        Content += instruments[y] + "<br>";
    }
    document.getElementById("List_of_instruments").innerHTML = Content;
}

function array_Function() { //Array function created
    var Skipping_Skill = [];// variable skipping skill creted with empty string
    Skipping_Skill[0] = "Double Under"; //Array of numbered skipping skills 
    Skipping_Skill[1] = "Triple Under";
    Skipping_Skill[2] = "Single Cross";
    Skipping_Skill[3] = "Double Cross";
    document.getElementById("Array").innerHTML = " This Skipping skill is called, " + Skipping_Skill[2] + " which is a great skill to learn.";

} 

function constant_function() {
    const Rope = { type:"vynal", length:"9ft", Price:"£20" }; //constant keyword with various constants (cannot Change)
    Rope.color = "Candy Cane";
    Rope.thickness = "3mm";
    Rope.seller = "Chris";
    document.getElementById("Constant").innerHTML = "The cost of the " + Rope.type + " rope was " + Rope.Price;

}

var ex= 15;
document.write(ex);// global scope //
{
    let be = 12;
    document.write("<br>" + ex); //Block scope 
}
document.write("<br>" + ex);// document write will not write let because it cannot be accessed



let car = {
    make: "Dodge",
    model: "Viper",
    year: "2021",
    body: "red",
    description: function () {
        return "The car is a " + this.year + " " + this.body + " " + this.make + " " + this.model;
    }
};
document.getElementById("Car_Object").innerHTML = car.description();


