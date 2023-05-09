(function () {
    "use strict";

// ---------- create cards -----------
    function createCards(title, director, rating, genre) {
        $('#card-area').append(`
             <div class="card-group m-2" style="width: 15rem;">
               <img src="img/12-angry-men.jpeg" class="card-img-top" alt="...">
             <div class="card-body">
               <h5 class="card-title">${title}</h5>
               <p class="card-text">Director: ${director}</p>
               <p class="card-text">Genre: ${genre}</p>
               <p class="card-text">Rating: ${rating}</p>
               
               <a href="#" class="btn btn-primary">rating</a>
               <a href="#" class="btn btn-primary">edit</a>
               <a href="#" class="btn btn-danger" id="deleteButton">delete</a>
             </div>
             </div>`)
    }

// ----------- fetch data -------------
   function getMovies() {

       fetch('https://lopsided-thrilling-leopon.glitch.me/movies').then(res => res.json()).then(data => data.forEach(data => {
           console.log(data)
           var title = data.title;
           var director = data.director;
           var rating = data.rating;
           var genre = data.genre;

           createCards(title, director, rating, genre);

       }))
    }
    getMovies()

           // ----------- delete data -------------
               $("#deleteButton").click(function () {
                   console.log("button clicked");
                   let idTag = $(this).attr("data-value");
                   console.log(idTag);
                   let deleteMovie = {
                       method: 'DELETE',
                       headers: {
                           'Content-Type': 'application/json',
                       }
                   };

                   fetch(`https://lopsided-thrilling-leopon.glitch.me/movies/`, deleteMovie)
                       .then(getMovies)

               })
        })()
