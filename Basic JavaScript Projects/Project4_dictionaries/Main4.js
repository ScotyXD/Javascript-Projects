function my_Dictionary() { /*Function created called my_Dictionary */
    var Rope = { /*Variable assigned Rope */
        Type: "PVC", /* Keys and values created (Type:) Value created "PVC" ("KVP") for Dicitonary*/ 
        Color: "Orange",
        Handles: "White",
        Length: "9ft",
        Beaded: "None",
        
    };
    document.getElementById("Dictionary").innerHTML = Rope.Type; /*Function to change inner html to call KVP Rope & Type */

    delete Rope.Beaded; /* operator created as words to delete Value Beadec from dcitionary */
    document.getElementById("Dictionary").innerHTML = Rope.Beaded;
}
