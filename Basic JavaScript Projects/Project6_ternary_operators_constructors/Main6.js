

//This function takes the height entered in an HTML input field 
//with the ID "Height"  checks if it's less than 52 inches
//then assigns a message to a variable "Can_ride" and displays it in an HTML element
function Ride_Function() {
    var Height, Can_ride;
    //get the value entered in the input field
    Height = document.getElementById("Height").value;
    //use a ternary operator to check if the height is less than 52 inches
    Can_ride = (Height < 52) ? "You are too short" : "You are tall enough";
    //display the message in the HTML element
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

//This function defines a constructor function for creating skipping rope objects
function Rope(Make, Model, Handle, Color) {
    this.Rope_Make = Make;
    this.Rope_Model = Model;
    this.Rope_Handle = Handle;
    this.Rope_Color = Color;
}

//Creating three skipping rope objects using the constructor function
var Jack = new Rope("Beaded", "Chord", "Short", "Red");
var Emily = new Rope("Vinal", "Plastic", "Long", "white and Black");
var Erik = new Rope("Beaded", "Chord", "Long", "Mustard");

//This function displays information about  "Erik" in an HTML element
function myFunction() {
    document.getElementById("New_and_This").innerHTML = " Erik skips with a " + Erik.Rope_Color + "-colored " + Erik.Rope_Model + " type " + Erik.Rope_Handle + " Handled Skipping Rope";
}

//This function is used to call a nested function and display the result in an HTML element
function Nested_Function() {
    document.getElementById("Nesting").innerHTML = Nest();

    //This is the nested function that increments a variable by 1
    function Nest() {
        var Starting_point = 0;
        function Plus_one() { Starting_point += 1; }
        Plus_one();
        return Starting_point;
    }
}

