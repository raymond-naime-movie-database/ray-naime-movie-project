// fetch("https://lopsided-thrilling-leopon.glitch.me/movies").then(res => res.json()).then(data => {
//         console.log(data);
//     });

fetch('https://lopsided-thrilling-leopon.glitch.me/movies').then(res => res.json()).then(data => data.forEach(data => {console.log(data)
    $('#card-area').append("<div class='movie_card'><p class='title'>" + data.title.substring(0, 10))
}));


