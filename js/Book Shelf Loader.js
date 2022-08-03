let page = 1;
let c = 0;
let sd;
const shelfElements = [
    document.querySelectorAll(".book_cover"),
    document.querySelectorAll(".book_name"),
    document.querySelectorAll(".author"),
    document.querySelectorAll(".synopsis"),
    document.querySelectorAll(".bs"),
    document.querySelectorAll(".book_card")
]
fetch(`https://api.jikan.moe/v4/top/manga?filter=publishing&type=manhwa&page=${page}`)
    .then(response => response.json())
    .then(shelfdata => {
        sd = shelfdata;
        // console.log(sd)
        shelfLoader(sd);
        // loaderlast(sd);
        // starColorbs();
    })

const rating0 = `<span class="nf"><span class="star">&#9734;</span> <span class="star">&#9734;</span> <span class="star">&#9734;</span> <span class="star">&#9734;</span> <span class="star">&#9734;</span> </span>`
const rating1 = `<span class="f"><span class="star">&#9733;</span> </span><span class="nf"><span class="star">&#9734;</span> <span class="star">&#9734;</span> <span class="star">&#9734;</span> <span class="star">&#9734;</span> </span>`
const rating2 = `<span class="f"><span class="star">&#9733;</span> <span class="star">&#9733;</span> </span><span class="nf"><span class="star">&#9734;</span> <span class="star">&#9734;</span> <span class="star">&#9734;</span> </span>`
const rating3 = `<span class="f"><span class="star">&#9733;</span> <span class="star">&#9733;</span> <span class="star">&#9733;</span> </span><span class="nf"><span class="star">&#9734;</span> <span class="star">&#9734;</span> </span>`
const rating4 = `<span class="f"><span class="star">&#9733;</span> <span class="star">&#9733;</span> <span class="star">&#9733;</span> <span class="star">&#9733;</span> </span><span class="nf"><span class="star">&#9734;</span> </span>`
const rating5 = `<span class="f"><span class="star">&#9733;</span> <span class="star">&#9733;</span> <span class="star">&#9733;</span> <span class="star">&#9733;</span> <span class="star">&#9733;</span> </span>`
const decideRating = (a) => {
    switch (Math.round(a / 2)) {
        case 0: {
            return rating0;
        }
        case 1: {
            return rating1;
        }
        case 2: {
            return rating2;
        }
        case 3: {
            return rating3;
        }
        case 4: {
            return rating4;
        }
        case 5: {
            return rating5;
        }
    }
}
const lastElements = [
    document.querySelectorAll(".last .book_cover"),
    document.querySelectorAll(".last .book_name"),
    document.querySelectorAll(".last .author"),
    document.querySelectorAll(".last .synopsis"),
    document.querySelectorAll(".last .bs"),
]
const loaderlast = (sd)=>{
    lastElements[0][0].src = sd.data[24].images.jpg.large_image_url;
    lastElements[1][0].innerHTML = `${sd.data[24].title}`
    lastElements[2][0].innerHTML = sd.data[24].authors[0].name
    lastElements[3][0].innerHTML = sd.data[24].synopsis;
    lastElements[4][0].innerHTML = decideRating(sd.data[24].score);
}
const loaderFront = (sd, a) => {
    for (let i = 0; i < a * 2; i++) {
        shelfElements[0][i].src = sd.data[c].images.jpg.large_image_url;
        shelfElements[1][i].innerHTML = `${sd.data[c].title}`
        shelfElements[2][i].innerHTML = sd.data[c].authors[0].name
        shelfElements[3][i].innerHTML = sd.data[c].synopsis;
        shelfElements[4][i].innerHTML = decideRating(sd.data[c].score);
        i++
        c++;
    }
}
const loaderBack = (sd, a) => {
    for (let i = 1; i < a * 2; i++) {
        shelfElements[0][i].src = sd.data[c].images.jpg.large_image_url;
        shelfElements[1][i].innerHTML = `${sd.data[c].title}`
        shelfElements[2][i].innerHTML = sd.data[c].authors[0].name
        shelfElements[3][i].innerHTML = sd.data[c].synopsis;
        shelfElements[4][i].innerHTML = decideRating(sd.data[c].score);
        i++
        c++;
    }
}

const hider = () => {
    for (let i = 0; i < 8; i++) {
        shelfElements[5][i].style.opacity = '0'
    }
}
const hiderReset = () => {
    for (let i = 0; i < 8; i++) {
        shelfElements[5][i].style.opacity = '';
    }
}

const shelfLoader = (x) => {
    if (x != undefined) {
        loaderFront(sd, 4)
    }
}
// const starColorbs = () => {
//     // const name = document.querySelectorAll(".c_book_name");
//     // const namefl = document.querySelectorAll("#firstletter")
//     const Ratingsf = document.querySelectorAll(".bs .f");
//     const Ratingsnf = document.querySelectorAll(".bs .nf");
//     RatingsColor = {
//         n: ["#fa960a", "#05c5fa", "#ffb803", "#1e6ffa", "#a5cf36", "rgba(24, 24, 29, 0.811)", "#e05509", "#f74848"],
//         f: ["#ffae3d", "#2dcefa", "#fac02d", "#0850cc", "#b1f005", "rgba(24, 24, 29, 0.811)", "#fc6c1e", "#e83c3c"],
//         nf: ["#ffc370", "#70dbff", "#fae22d", "#5c85cc", "#d0ff4f", "rgba(35, 35, 44, 0.811)", "#f09767", "#b35656"]
//     }
//     for (let i = 0; i < skillRatingsf.length; i++) {
//         // name[i].style.color = RatingsColor["n"][i];
//         // namefl[i].style.color = RatingsColor["nf"][i];
//         Ratingsf[i].style.color = RatingsColor["f"][i];
//         Ratingsnf[i].style.color = RatingsColor["nf"][i];
//     }
// }
let flag = 0;
const bosh = document.querySelector(".bosh")
bosh.addEventListener('click', () => {
    if (c == 24) {
        loaderlast(sd);
        hider();
        document.querySelector(".last").style.opacity = '1'
        document.querySelector(".last").style.zIndex = '10'
        page++;
        fetch(`https://api.jikan.moe/v4/top/manga?filter=publishing&type=manhwa&page=${page}`)
            .then(response => response.json())
            .then(shelfdata => {
                sd = shelfdata;
                // console.log(sd);
            })
        c = 0
    }
    else if (flag == 1) {
        for (let i = 0; i < 8; i++) {
            shelfElements[5][i].classList.toggle('flip')
        }
        flag = 0;
        hiderReset();
        loaderFront(sd, 4);
        document.querySelector(".last").style.opacity = '0'
    }
    else {
        for (let i = 0; i < 8; i++) {
            shelfElements[5][i].classList.toggle('flip')
        }
        flag = 1;
        hiderReset();
        loaderBack(sd, 4);
        document.querySelector(".last").style.opacity = '0'
    }

    // else {
    // }
})
