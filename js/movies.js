(function () {
    "use strict";

// ---------- create cards -----------
    function createCards(title, director, rating, genre) {
        $('#card-area').html(`
             <div class="card-group m-2" style="width: 15rem;">
               <img src="img/12-angry-men.jpeg" class="card-img-top" alt="...">
             <div class="card-body">
               <h5 class="card-title">${title}</h5>
               <p class="card-text">${director}</p>
               <p class="card-text">${rating}</p>
               <p class="card-text">${genre}</p>
               <a href="#" class="btn btn-primary">rating</a>
             </div>
             </div>`)
    };


// ----------- fetch data -------------
    fetch('https://lopsided-thrilling-leopon.glitch.me/movies').then(res => res.json()).then(data => data.forEach(data => {
        console.log(data)
        $('#card-area').append("<div class='movie_card'><p class='title'>" + data.title.substring(0, 10))
    }));


})();