function flavour_Function() {
    var flavour_Output;
    var flavours = document.getElementbyId("Flavour_Input").value;
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
        default:
            flavour_Output = "Please enter a flavour exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML = flavour_Output;
}
