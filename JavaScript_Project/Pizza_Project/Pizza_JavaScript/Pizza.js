//////////////////////////Function Get Receipt////////////////////////////////
//getReceipt() initializes a string variable text1 that will be used to build the receipt HTML code.
function getReceipt() {

    var text1 = "<h3>You Ordered:</h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size"); //loops through all elements with the class name size
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {     //checks which one is checked
            var selectedSize = sizeArray[i].value;
            text1 = text1 + selectedSize + "<br>";  //adds the selected size to text1
        }
    }
////////////////////////Size Value/////////////////////
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {        //Sizes of pizza with their Assigned value/Price
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    } else if (selectedSize === "Double XL Pizza") {
        sizeTotal = 18;
    }
    runningTotal = sizeTotal;
    console.log(selectedSize + "= £" + sizeTotal + ".00");      //Pizza Value Added WITH £.00 for Price to be added with topping for Runing total
    console.log("size text1:" + text1);
    console.log("subtotal: £" + runningTotal + ".00");
    //these variables will get passed on to each funtion 
    getTopping(runningTotal, text1);
};
////////////////////////////Size Value/ Reciept End/////////////////////////

///////////////////////Function Get Topping///////////////////////////////////
function getTopping(runningTotal, text1) {
    var toppingTotal = 0;
    var selectedTopping = [];
    var toppingArray = document.getElementsByClassName("toppings");
    for (var j = 0; j < toppingArray.length; j++){              
        if (toppingArray[j].checked) {
            selectedTopping.push(toppingArray[j].value);
            console.log("selected topping item: (" + toppingArray[j].value + ")");
            text1 = text1 + toppingArray[j].value + "<br>";
        }
    }

    var toppingCount = selectedTopping.length;  //If there is more than one topping selected,
        toppingTotal = (toppingCount - 1);   //the cost of the free topping is deducted from the toppingTotal 
    if (toppingCount > 1) {
    } else {
        toppingTotal = 0; //Otherwise, toppingTotal remains zero.
    }

    runningTotal = (runningTotal + toppingTotal);
    console.log("total selected topping items: " + toppingCount);
    console.log(toppingCount + " topping - 1 free topping =" + "£" + toppingTotal + ".00");
    console.log("topping text1: " + text1);
    console.log("Purchase Total: " + "£" + runningTotal + ".00");
    document.getElementById("showText").innerHTML = text1 ;
    document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>£" +
        runningTotal + ".00" + "</strong></h3>";
};

///////////////////Get Topping ENd///////////////////////////
