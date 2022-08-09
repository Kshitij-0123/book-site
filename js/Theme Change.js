const themebutton = document.querySelectorAll("nav > img");
themebutton[1].addEventListener('click',()=>{
  for(let i=0;i<2;i++){
    themebutton[i].classList.toggle('disabled-theme')
    document.querySelector("nav").style.setProperty("--navBackground", "linear-gradient(to right, #290188, #001a6e)");
    document.querySelector("body").style.setProperty("--bodBackground", "linear-gradient(to top, #1c005d, #000142)");
    document.querySelector("#dp").style.setProperty("--dpbgc", "rgb(255, 144, 74)");
    document.querySelector("#dp").style.setProperty("--dpbdc", "1px rgb(255, 157, 45) solid");
    document.querySelector(".auser").style.setProperty("--upbgc", "rgb(224 226 255)");
    document.querySelector(".auser").style.setProperty("--upbdc", "1px solid #b8bbe6");
  }
})
themebutton[0].addEventListener('click',()=>{
  for(let i=0;i<2;i++){
    themebutton[i].classList.toggle('disabled-theme')
    document.querySelector("nav").style.setProperty("--navBackground", "linear-gradient(to right, #FC575E, #ff9b28)");
    document.querySelector("body").style.setProperty("--bodBackground", "linear-gradient(to top,#fbe5d2 ,rgb(255, 156, 89))");
    document.querySelector("#dp").style.setProperty("--dpbgc", "rgb(2, 196, 255)");
    document.querySelector("#dp").style.setProperty("--dpbdc", "1px rgb(2, 168, 201) solid");
    document.querySelector(".auser").style.setProperty("--upbgc", "#fff3e9");
    document.querySelector(".auser").style.setProperty("--upbdc", "1px solid #ffe7d4");
  }
})

document.querySelector("nav").style.setProperty("--navBackground", "linear-gradient(to right, #FC575E, #f3df0b)");
document.querySelector("body").style.setProperty("--bodBackground", "linear-gradient(to top,#fbe5d2 ,rgb(255, 156, 89))");
document.querySelector("#dp").style.setProperty("--dpbgc", "rgb(2, 196, 255)");
document.querySelector("#dp").style.setProperty("--dpbdc", "1px rgb(2, 168, 201) solid");
document.querySelector(".auser").style.setProperty("--upbgc", "#fff3e9");
document.querySelector(".auser").style.setProperty("--upbdc", "1px solid #ffe7d4");
