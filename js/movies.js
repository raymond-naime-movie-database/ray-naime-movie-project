
fetch('https://lopsided-thrilling-leopon.glitch.me/movies').then(res => res.json()).then(data => data.forEach(title => console.log(title)));

// for (let i = 0; i < 40; i ++) {
//     console.log(data.list[i])
//     $('card_area').append("<div class='single_card'><h3 class='title'>(`${data.title}
//
//     )
//
// }))
    // $('.card_area').append("<div class='single_card'><p class='date'>" + data.list[i].dt_txt.substring(0, 10) + "</p>" +