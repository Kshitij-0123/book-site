// const urlcar = "https://api.jikan.moe/v4/top/manga?filter=favorite";
// const urlcar = 'https://api.jikan.moe/v4/random/manga';
const urlcar = 'https://api.jikan.moe/v4/top/manga?filter=bypopularity&type=manhwa';
let d;
fetch(urlcar)
    .then(response => response.json())
    .then(data => {
        d = data;
        carouselLoader(d);
        starColor();
    })
const carouselLoader = (x) => {
    const rating0 = `<span class="nf"><span class="star">&#9734;</span> <span class="star">&#9734;</span> <span class="star">&#9734;</span> <span class="star">&#9734;</span> <span class="star">&#9734;</span> </span>`
    const rating1 = `<span class="f"><span class="star">&#9733;</span> </span><span class="nf"><span class="star">&#9734;</span> <span class="star">&#9734;</span> <span class="star">&#9734;</span> <span class="star">&#9734;</span> </span>`
    const rating2 = `<span class="f"><span class="star">&#9733;</span> <span class="star">&#9733;</span> </span><span class="nf"><span class="star">&#9734;</span> <span class="star">&#9734;</span> <span class="star">&#9734;</span> </span>`
    const rating3 = `<span class="f"><span class="star">&#9733;</span> <span class="star">&#9733;</span> <span class="star">&#9733;</span> </span><span class="nf"><span class="star">&#9734;</span> <span class="star">&#9734;</span> </span>`
    const rating4 = `<span class="f"><span class="star">&#9733;</span> <span class="star">&#9733;</span> <span class="star">&#9733;</span> <span class="star">&#9733;</span> </span><span class="nf"><span class="star">&#9734;</span> </span>`
    const rating5 = `<span class="f"><span class="star">&#9733;</span> <span class="star">&#9733;</span> <span class="star">&#9733;</span> <span class="star">&#9733;</span> <span class="star">&#9733;</span> </span>`

    // console.log(x.data)

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
    const carouselElements = [
        document.querySelectorAll(".slide"),
        document.querySelectorAll(".carousel_book_cover"),
        document.querySelectorAll(".c_book_name"),
        document.querySelectorAll(".c_author"),
        document.querySelectorAll(".carousel_synopsis"),
        document.querySelectorAll(".car")
    ]
    if (x != undefined) {
        for (let i = 0; i < 3; i++) {
            // carouselElements[0][i].style.backgroundImage = "linear-gradient(to right,rgba(4, 4, 4, 0.7), rgba(36, 36, 36, 0.7))";
            // , url(" + x.data[i].images.jpg.large_image_url + ")
            carouselElements[1][i].src = x.data[i].images.jpg.large_image_url;
            carouselElements[2][i].innerHTML = ` <span id="firstletter">${x.data[i].title[0]}</span>${x.data[i].title.substring(1)}`
            carouselElements[3][i].innerHTML = eraseSpecialChars(x.data[i].authors[0].name)
            carouselElements[4][i].innerHTML = x.data[i].synopsis.substring(0, x.data[i].synopsis.indexOf('['))
            carouselElements[5][i].innerHTML = decideRating(x.data[i].score);
        }
    }
}
const starColor = () => {
    const name = document.querySelectorAll(".c_book_name");
    const namefl = document.querySelectorAll("#firstletter")
    const Ratingsf = document.querySelectorAll(".f");
    const Ratingsnf = document.querySelectorAll(".nf");
    RatingsColor = {
        n: ["#fa960a", "#05c5fa", "#ffb803", "#1e6ffa", "#a5cf36", "rgba(24, 24, 29, 0.811)", "#e05509", "#f74848"],
        f: ["#ffae3d", "#2dcefa", "#fac02d", "#0850cc", "#b1f005", "rgba(24, 24, 29, 0.811)", "#fc6c1e", "#e83c3c"],
        nf: ["#ffc370", "#70dbff", "#fae22d", "#5c85cc", "#d0ff4f", "rgba(35, 35, 44, 0.811)", "#f09767", "#b35656"]
    }
    for (let i = 0; i < skillRatingsf.length; i++) {
        // name[i].style.color = RatingsColor["n"][i];
        // namefl[i].style.color = RatingsColor["nf"][i];
        Ratingsf[i].style.color = RatingsColor["f"][i];
        Ratingsnf[i].style.color = RatingsColor["nf"][i];
    }
}


