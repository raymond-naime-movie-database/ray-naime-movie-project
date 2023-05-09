(function () {
    "use strict";

    const urlMovies = 'https://lopsided-thrilling-leopon.glitch.me/movies';

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
               
               <button id="deleteButton" type="submit" class="btn btn-danger">Delete Movie</button>
               
               
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
    function deleteMovie() {
        const optionsDelete = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        };



// ------------ add movie -----------------

        function addMovie(movieData) {
            const optionsPOST = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(movieData)
            };
            fetch(urlMovies, optionsPOST)
                .then(response => console.log(response))
                .catch(error => console.error(error));
        };


        $('#create-movie-btn').click(function (e) {
            e.preventDefault();
            let movieAdded = {
                "title": $('#input-title').val(),
                "director": $('#input-director').val(),
                "rating": $('#input-rating').val(),
                "genre": $('#input-genre').val(),
                "id": 9 // how to generate new id?
            }
            console.log(movieAdded);
            addMovie(movieAdded);
        });

    }
})();