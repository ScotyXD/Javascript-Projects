function Flavour_Function() {
    var flavour_Output;
    var flavours = document.getElementById("Flavour_Input").value;
    var flavour_String = " is a great flavour!";
    switch (flavours) {
        case "Caramel":
            flavour_Output = "Caramel" + flavour_String;
            break;
        case "Bananna":
            flavour_Output = "Bananna" + flavour_String;
            break;
        case "Strawberry":
            flavour_Output = "Strawberry" + flavour_String;
            break;
        case "Coffee":
            flavour_Output = "Coffee" + flavour_String;
            break;
        case "Mint":
            flavour_Output = "Mint" + flavour_String;
            break;
        case "Chocolate":
            flavour_Output = "Chocolate" + flavour_String;
        default:
            flavour_Output = "Please enter a flavour exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML = flavour_Output;
}

function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!";
}

function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}