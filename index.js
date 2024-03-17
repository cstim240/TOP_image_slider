let slideIndex = 1;
showSlides(slideIndex);

let next = document.querySelector(".next");
next.addEventListener("click", function plusSlides(){
    showSlides(slideIndex += 1);
});

let prev = document.querySelector(".prev");
prev.addEventListener("click", function minusSlides(){
    showSlides(slideIndex -= 1);
});

function showSlides(n){
    let i;
    let slides = document.querySelectorAll(".mySlides");
    let dots = document.querySelectorAll(".dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}

    for (i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }

    for (i = 0; i < slides.length; i++){
        dots[i].className = dots[i].className.replace("active", "");
    }

    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

