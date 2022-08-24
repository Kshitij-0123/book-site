const themebutton = document.querySelectorAll("nav > img");
const bookCard = document.querySelectorAll(".book_card");
const quoteBody = document.querySelectorAll(".quote_body");
const color = {
  l: {
    bhc: [
      "linear-gradient(to top, #f46b45, #eea849)",
      "linear-gradient(to right, #f78ca0 0%, #f9748f 19%, #fd868c 60%, #fe9a8b 100%)",
      "linear-gradient(-80deg, #45ca20, #10b410)",
      "linear-gradient(-225deg, #6ec6db 0%, #a4a1d0 100%)",
    ],
    ahc: [
      "linear-gradient(to top, #e88865, #ed3535)",
      "linear-gradient(to left, #b06ab3, #4568dc)",
      "linear-gradient(30deg, #3eb51d, #0c910c)",
      "linear-gradient(-125deg, #4556b7, #269ad0)",
    ],
  },
  d: {
    bhc: [
      "linear-gradient(320deg, #8830a6cf, #8f0d36)",
      "linear-gradient(to top, #4568dc, #b06ab3)",
      "linear-gradient(-92deg, #b06ed0, #6161b8)",
      "linear-gradient(to bottom, #37314f, #928dab)",
    ],
    ahc: [
      "linear-gradient(-120deg, #8b009b, #d50144e6)",
      "linear-gradient(to left, #b06ab3, #4568dc)",
      "linear-gradient(220deg, #b45be0, #5151cc)",
      "linear-gradient(320deg, #928dab, #37314f)",
    ],
  },
};

themebutton[1].addEventListener("click", () => {
  for (let i = 0; i < 2; i++) {
    themebutton[i].classList.toggle("disabled-theme");
    document.querySelector("nav").style.setProperty("--navBackground", "linear-gradient(to right, #290188, #001a6e)");
    document.querySelector("body").style.setProperty("--bodBackground", "linear-gradient(to top, #1c005d, #000142)");
    document.querySelector("#dp").style.setProperty("--dpbgc", "rgb(255, 144, 74)");
    document.querySelector("#dp").style.setProperty("--dpbdc", "1px rgb(255, 157, 45) solid");
    document.querySelector(".auser").style.setProperty("--upbgc", "rgb(224 226 255)");
    document.querySelector(".auser").style.setProperty("--upbdc", "1px solid #b8bbe6");
    document.querySelector(".slide").style.setProperty("--csbgc", "#84afdc47");
    document.querySelector(".carousel_card").style.setProperty("--cstcl", "#c9e7ffe0");
    for (let i = 0; i < bookCard.length; i++) {
      bookCard[i].style.setProperty("--bcbgc", "#a88aff66");
      bookCard[i].style.setProperty("--bctcl", "rgb(202 202 255)");
    }
    for (let i = 0; i < quoteBody.length; i++) {
      quoteBody[i].style.setProperty("--bhc", color["d"]["bhc"][i]);
      quoteBody[i].style.setProperty("--ahc", color["d"]["ahc"][i]);
    }
  }
});
themebutton[0].addEventListener("click", () => {
  for (let i = 0; i < 2; i++) {
    themebutton[i].classList.toggle("disabled-theme");
    document.querySelector("nav").style.setProperty("--navBackground", "linear-gradient(to right, #FC575E, #ff9b28)");
    document.querySelector("body").style.setProperty("--bodBackground", "linear-gradient(to top,#fbe5d2 ,rgb(255, 156, 89))");
    document.querySelector("#dp").style.setProperty("--dpbgc", "rgb(2, 196, 255)");
    document.querySelector("#dp").style.setProperty("--dpbdc", "1px rgb(2, 168, 201) solid");
    document.querySelector(".auser").style.setProperty("--upbgc", "#fff3e9");
    document.querySelector(".auser").style.setProperty("--upbdc", "1px solid #ffe7d4");
    document.querySelector(".slide").style.setProperty("--csbgc", "#5839208c");
    document.querySelector(".carousel_card").style.setProperty("--cstcl", "#ffc2c2e0");
    for (let i = 0; i < bookCard.length; i++) {
      bookCard[i].style.setProperty("--bcbgc", "#fb9d50ba");
      bookCard[i].style.setProperty("--bctcl", "rgb(195 0 0 / 92%)");
    }
    for (let i = 0; i < quoteBody.length; i++) {
      quoteBody[i].style.setProperty("--bhc", color["l"]["bhc"][i]);
      quoteBody[i].style.setProperty("--ahc", color["l"]["ahc"][i]);
    }
  }
});

document.querySelector("nav").style.setProperty("--navBackground", "linear-gradient(to right, #FC575E, #f3df0b)");
document.querySelector("body").style.setProperty("--bodBackground", "linear-gradient(to top,#fbe5d2 ,rgb(255, 156, 89))");
document.querySelector("#dp").style.setProperty("--dpbgc", "rgb(2, 196, 255)");
document.querySelector("#dp").style.setProperty("--dpbdc", "1px rgb(2, 168, 201) solid");
document.querySelector(".auser").style.setProperty("--upbgc", "#fff3e9");
document.querySelector(".auser").style.setProperty("--upbdc", "1px solid #ffe7d4");
document.querySelector(".slide").style.setProperty("--csbgc", "#5839208c");
document.querySelector(".carousel_card").style.setProperty("--cstcl", "#ffc2c2e0");
for (let i = 0; i < bookCard.length; i++) {
  bookCard[i].style.setProperty("--bcbgc", "#fb9d50ba");
  bookCard[i].style.setProperty("--bctcl", "rgb(195 0 0 / 92%)");
}

for (let i = 0; i < quoteBody.length; i++) {
  quoteBody[i].style.setProperty("--bhc", color["l"]["bhc"][i]);
  quoteBody[i].style.setProperty("--ahc", color["l"]["ahc"][i]);
}
