// Declare a global variable X with the value of 10
var X = 10;

// function that adds 20 and the global variable X and writes the result 
function Add_numbers_1() {
    document.write(20 + X + "<br>");
}

// function that adds the global variable X and 100 and writes the result  
function Add_numbers_2() {
    document.write(X + 100);
}

// first function 
Add_numbers_1();

// second function 
Add_numbers_2();


// function that declares a local variable Y with the value of 10 and adds 20 and Y and writes the result
function Add_numbers_1() {
    var Y = 10;
    document.write(20 + Y + "<br>");
}

// function that adds the local variable Y and 100 and writes the result 
function Add_numbers_2() {
    document.write(Y + 100);
}

//  first function 
Add_numbers_1();

// second function 
Add_numbers_2();

// function that checks the current hour 
function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

// function that checks the current hour
function get_time() {
    if (new Date().getHours() < 19) {
        document.getElementById("GoodPM").innerHTML = "Good afternoon";
    }
}
function Sleep_Function() {
    // Getvalue of an element with the id Sleep
    var sleep = document.getElementById("Sleep").value;

    // check if sleep is greater or equal to 7 hours
    if (sleep >= 7) {
        var message = "You have had enough hours sleep!";
    }
    else {
        var message = "You have not had enough hours sleep!";
    }

    // Set the text of an element with the id How_much_sleep? to the value of the message variable
    document.getElementById("How_much_sleep?").innerHTML = message;
}

// function that gets the current hour and sets the text of an element with the id Time_of_day
//based on the current hour
function Time_function() {
    
    var currentHour = new Date().getHours();

    // variable to store the message
    var message;

    // Check the current hour and set the message accordingly
    if (currentHour > 0 && currentHour < 12) {
        message = "It's the morning!";
    }
    else if (currentHour >= 12 && currentHour < 18) {
        message = "It's the afternoon.";
    }
    else {
        message = "It's the evening.";
    }

    // Sets the text of element with the id Time_of_day to the value of the message variable
    document.getElementById("Time_of_day").innerHTML = message;
}
