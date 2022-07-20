const track = document.querySelector(".carousel_track");
const slides = document.querySelectorAll(".slide")
const rtB = document.querySelector(".rt");
const ltB = document.querySelector(".lt");
const slideWidth = track.getBoundingClientRect().right+slides[0].getBoundingClientRect().left;


slides[0].style.left = `${slideWidth*0}px`;
slides[1].style.left = `${slideWidth*1}px`;
slides[2].style.left = `${slideWidth*2}px`;

let i=0;
let position=0;
rtB.addEventListener("click",()=>{
    if(i===2){
        position=0;
        i=0;
        track.style.transform = `translateX(-${position}px)`;
        return;
    }
    position=position+slideWidth;
    track.style.transform = `translateX(-${position}px)`;
    i++
});
ltB.addEventListener("click",()=>{
    if(i===0){
        position=slideWidth*2;
        i=2;
        track.style.transform = `translateX(-${position}px)`;
        return;
    }
    position=position-slideWidth;
    track.style.transform = `translateX(-${position}px)`;
    i--;
});