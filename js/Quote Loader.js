let quote = {};
fetch('https://animechan.vercel.app/api/quotes')
    .then(response => response.json())
    .then(quotes => {
        // quotechecker(quotes, quote);
        quote = quotes;
        // console.log(quote)
        quoteLoaderf(quote);
        quoteLoaderb(quote);
    })

// const quotechecker = (q, quote) => {
//     let c = 0;
//     for (let i = 0; i < q.length; i++) {
//         if (c == 40) {
//             break;
//         }
//         else {
//             if (q[i].quote.length < 150 && q[i].anime.length < 40 && q[i].character.length < 40) {
//                 quote[c] = q[i];
//                 c++;
//             }
//         }
//     }
// }

let cnt = 0;
const isQuoteDiv = [
    document.querySelectorAll(".quote"),
    document.querySelectorAll(".quote_ref"),
    document.querySelectorAll(".quote_ref_char")
];
const quoteLoaderf = (q) => {
    for (let i = 0; i < 3; i++) {
        if (cnt < 10) {
            isQuoteDiv[0][i].innerHTML = `"${q[cnt].quote}"`
            isQuoteDiv[1][i].innerHTML = `${q[cnt].anime}`
            isQuoteDiv[2][i].innerHTML = `${q[cnt].character}`
            cnt++;
            i++;
        }
        // else {
        //     cnt = 0;
        //     fetch('https://animechan.vercel.app/api/quotes')
        //         .then(response => response.json())
        //         .then(quotes => {
        //             quote = quotes;
        //             quoteLoader(quote)
        //         })
        // }
    }
}
const quoteLoaderb = (q) => {
    for (let i = 1; i < 4; i++) {
        if (cnt < 10) {
            isQuoteDiv[0][i].innerHTML = `"${q[cnt].quote}"`
            isQuoteDiv[1][i].innerHTML = `${q[cnt].anime}`
            isQuoteDiv[2][i].innerHTML = `${q[cnt].character}`
            cnt++;
            i++;
        }
        // else {
        //     cnt = 0;
        //     fetch('https://animechan.vercel.app/api/quotes')
        //         .then(response => response.json())
        //         .then(quotes => {
        //             quote = quotes;
        //             quoteLoader(quote)
        //         })
        // }
    }
}
const quoteLoader = (q) => {

    for (let i = 0; i < 2; i++) {
        if (cnt < 10) {
            isQuoteDiv[0][i].innerHTML = `"${q[cnt].quote}"`
            isQuoteDiv[1][i].innerHTML = `${q[cnt].anime}`
            isQuoteDiv[2][i].innerHTML = `${q[cnt].character}`
            cnt++;
        }
        // else {
        //     cnt = 0;
        //     fetch('https://animechan.vercel.app/api/quotes')
        //         .then(response => response.json())
        //         .then(quotes => {
        //             quote = quotes;
        //             quoteLoader(quote)
        //         })
        // }
    }
}
const qbody = document.querySelectorAll('.quote_body')
const btn = document.querySelector(".qols");
let x=0
btn.addEventListener('click', () => {
    for (let i = 0; i < 4; i++) {
        qbody[i].classList.toggle('flip')
    }
    if(x%2==0){
        quoteLoaderb(quote);
    }
    else{
        quoteLoaderf(quote);
    }
})