function full_sentence() { /*full sentence function created, variables 1-4 created and assigned text to form sentence in parts*/
    var part_1 = "This is "
    var part_2 = "a full Sentence "
    var part_3 = "i made with"
    var part_4 = " Concatenate methood"
    var whole_sentence = part_1.concat(part_2, part_3, part_4);/* whole sentence concatenated together with all variable parts */
    document.getElementById("Concatenate").innerHTML = whole_sentence; /*innerHTML property set to the value of the variable whole_sentence. This means inner HTML content of the element with the id "Concatenate" will be replaced with the value of whole_sentence.*/
    
}

function slice_Method() { /* function slice created and variable sentence assigned*/
    var Sentence = "All work and no play makes johnny a dull boy.";
    var Section = Sentence.slice(27, 33); /* slices a portion of string and returns value*/
    document.getElementById("Slice").innerHTML = Section;

}


    
function string_Method() { /** string method function established */
    var X = 182; /** Variable X assigned 182 value */
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}
    

function precision_Method() { /*The toPrecision() method formats a number to a specified length*/
    var x = 12938.3012987376112; /*value of x */
    document.getElementById("Precision").innerHTML = x.toPrecision(10);/* 10 decimal places will be returned to Precision element in html document*/
}

   

    