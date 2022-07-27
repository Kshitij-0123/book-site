let quote;
fetch('https://animechan.vercel.app/api/quotes')
    .then(response => response.json())
    .then(quotes => {
        let quote = {};
        quotechecker(quotes, quote);
        console.log(quote)
        quoteLoader(quote);
    })

const quotechecker = (q, quote) => {
    let c = 0;
    for (let i = 0; i < q.length; i++) {
        if (c == 4) {
            break;
        }
        else {
            if (q[i].quote.length < 102 && q[i].anime.length < 25 && q[i].character.length < 25) {
                quote[c] = q[i];
                c++;
            }
        }
    }
}

const a = document.querySelectorAll(".quote_body");
const color = {
    "bhc": [
        "linear-gradient(to top, #f46b45, #eea849)",
        "linear-gradient(to top, #4568dc, #b06ab3)",
        "linear-gradient(90deg, #52c234, #54c77a)",
        "linear-gradient(to bottom, #37314f, #928dab)"
    ],
    "ahc": [
        "linear-gradient(to right, #eea849, #f46b45",
        "linear-gradient(to right, #b06ab3, #4568dc)",
        "linear-gradient(360deg, #54c77a, #52c234)",
        "linear-gradient(320deg, #928dab, #37314f)"
    ]
}

for (let i = 0; i < a.length; i++) {
    a[i].style.setProperty("--bhc", color["bhc"][i]);
    a[i].style.setProperty("--ahc", color["ahc"][i]);
}

const quoteLoader = (q) => {
    const isQuoteDiv = [
        document.querySelectorAll(".quote"),
        document.querySelectorAll(".quote_ref"),
        document.querySelectorAll(".quote_ref_char")
    ];
    for (let i = 0; i < 2; i++) {
        isQuoteDiv[0][i].innerHTML = `"${q[i].quote}"`
        isQuoteDiv[1][i].innerHTML = `${q[i].anime}`
        isQuoteDiv[2][i].innerHTML = `${q[i].character}`
    }
}