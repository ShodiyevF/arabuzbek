var from = document.querySelector(".from")
let about = document.querySelector(".about")
let textt = document.querySelector("h1")
let result = document.querySelector(".result")
let error = document.querySelector(".error")
let button = document.querySelector("button")
let aboutUzbToArb = document.querySelector(".aboutUzbToArb")
let aboutArbToUzb = document.querySelector(".aboutArbToUzb")

// let switcher = 'uzar'


// aboutArbToUzb.addEventListener('click', (e) => {
//     console.log(switcher);
//     if(switcher !== 'uzar'){
//         from.classList.remove('uzar')
//         from.classList.add('aruz')
//         textt.textContent = 'Arab dan Uzbek'
//     } else {
//         switcher = 'uzar'
//     }
// })

// aboutUzbToArb.addEventListener('click', (e) => {
//     console.log(switcher);
//     if(switcher === 'aruz'){
//         from.classList.remove('aruz')
//         from.classList.add('uzar')
//         textt.textContent = 'Uzbek dan arab '
//     } else {
//         switcher = 'aruz'
//     }
// })

button.addEventListener('click', (e) => {
    if (from.value === ''){
        error.textContent = `So'zda hatolik bor`
    } else {
        error.textContent = ``
    }
    
    (async () => {
        const txt = from.value.replace(' ', '%20')
        const res = await fetch(`https://nlp-translation.p.rapidapi.com/v1/translate?text=${txt}&to=ar&from=uz`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "nlp-translation.p.rapidapi.com",
            "x-rapidapi-key": "3381f49baemsh38e287ef3ee9129p1b1a43jsn9e1a5c9fb367"
        }
    })
    
    const data = await res.json()
    console.log(data);
    result.textContent = data.translated_text.ar
})()
})