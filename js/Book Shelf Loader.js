// const urlShelf = "https://api.jikan.moe/v4/top/manga?filter=favorite";
// const urlShelf = 'https://api.jikan.moe/v4/random/manga';
const urlShelf = 'https://api.jikan.moe/v4/top/manga?filter=publishing&type=manhwa';
let sd;
fetch(urlShelf)
    .then(response => response.json())
    .then(shelfdata => {
        console.log(shelfdata);
        sd = shelfdata;
        shelfLoader(sd);
        // starColor();
    })
    console.log(sd)
const shelfLoader = (x) => {
    const rating0 = `<span class="nf"><span class="star">&#9734;</span> <span class="star">&#9734;</span> <span class="star">&#9734;</span> <span class="star">&#9734;</span> <span class="star">&#9734;</span> </span>`
    const rating1 = `<span class="f"><span class="star">&#9733;</span> </span><span class="nf"><span class="star">&#9734;</span> <span class="star">&#9734;</span> <span class="star">&#9734;</span> <span class="star">&#9734;</span> </span>`
    const rating2 = `<span class="f"><span class="star">&#9733;</span> <span class="star">&#9733;</span> </span><span class="nf"><span class="star">&#9734;</span> <span class="star">&#9734;</span> <span class="star">&#9734;</span> </span>`
    const rating3 = `<span class="f"><span class="star">&#9733;</span> <span class="star">&#9733;</span> <span class="star">&#9733;</span> </span><span class="nf"><span class="star">&#9734;</span> <span class="star">&#9734;</span> </span>`
    const rating4 = `<span class="f"><span class="star">&#9733;</span> <span class="star">&#9733;</span> <span class="star">&#9733;</span> <span class="star">&#9733;</span> </span><span class="nf"><span class="star">&#9734;</span> </span>`
    const rating5 = `<span class="f"><span class="star">&#9733;</span> <span class="star">&#9733;</span> <span class="star">&#9733;</span> <span class="star">&#9733;</span> <span class="star">&#9733;</span> </span>`

    const eraseSpecialChars = (str) => {
        str = str.replace(
            /[_^$,]/g,
            charactersToReplace => ({ '^': '', '_': '', '$': '', ',': '' })[charactersToReplace]
        )
        return str
    }

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
    const shelfElements = [
        document.querySelectorAll(".book_cover"),
        document.querySelectorAll(".book_name"),
        document.querySelectorAll(".author"),
        document.querySelectorAll(".synopsis"),
        document.querySelectorAll(".bs")
    ]
    if (x != undefined) {
        for (let i = 0; i < shelfElements[0].length; i++) {
            shelfElements[0][i].src = x.data[i].images.jpg.large_image_url;
            shelfElements[1][i].innerHTML = `${x.data[i].title}`
            shelfElements[2][i].innerHTML = eraseSpecialChars(x.data[i].authors[0].name)
            shelfElements[3][i].innerHTML = x.data[i].synopsis;
            shelfElements[4][i].innerHTML = decideRating(x.data[i].score);
        }
    }
}
// const starColor = () => {
//     const name = document.querySelectorAll(".c_book_name");
//     const namefl = document.querySelectorAll("#firstletter")
//     const Ratingsf = document.querySelectorAll(".f");
//     const Ratingsnf = document.querySelectorAll(".nf");
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


