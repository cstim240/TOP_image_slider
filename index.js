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
    let slides = document.querySelector(".mySlides");
    let dots = document.querySelector(".dot");
}

