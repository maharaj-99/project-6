var icon = document.querySelector(".icons");
var navLinks = document.querySelector(".nav-links");
var bars = document.querySelector(".fa-bars");
var xMark = document.querySelector(".fa-xmark");


function clickNow() {

    navLinks.classList.toggle("show");

    if(navLinks.classList.contains("show")){
        
        bars.style.display = "none";
        xMark.style.display = "block";
    }
    else {
        bars.style.display = "block";
        xMark.style.display = "none";
    }
};
