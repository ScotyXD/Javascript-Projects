// The countdown function
function countdown() {
    // Get the number of seconds from the input field
    let seconds = document.getElementById("seconds").value;

    // The tick function, which updates the countdown and sets a timeout for the next tick
    function tick() {
        seconds--; // decrement the seconds by 1
        let timer = document.getElementById("timer"); // retrieve the timer element
        timer.innerHTML = seconds; // update the timer display
        setTimeout(tick, 1000); // run the tick function again in 1000 milliseconds (1 second)
        if (seconds === -1) { // when the countdown reaches -1
            alert("Time's Up!"); // show an alert
        }
    }

    tick(); // start the tick function
}

let slideIndex = 1; // current slide
showSlides(slideIndex); // display the current slide

// Move to the next/previous slide
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Go to a specific slide
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Show the slides
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides"); // get the slides
    let dots = document.getElementsByClassName("dot"); // get the dots (navigation indicators)

    // Check if the current slide is outside the range of available slides
    if (n > slides.length) {
        slideIndex = 1; // set the current slide to the first slide
    }
    if (n < 1) {
        slideIndex = slides.length; // set the current slide to the last slide
    }

    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Remove the "active" class from all dots
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Show the current slide and add the "active" class to the current dot
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
