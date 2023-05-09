(function () {
    "use strict";

    const urlMovies = 'https://lopsided-thrilling-leopon.glitch.me/movies';

// ---------- create cards -----------
    function createCards(movie) {
        $('#card-area').append(`
             <div class="card-group m-2" style="width: 15rem;">
               <img src="img/12-angry-men.jpeg" class="card-img-top" alt="...">
             <div class="card-body">
               <h5 class="card-title">${movie.title}</h5>
               <p class="card-text">Director: ${movie.director}</p>
               <p class="card-text">Genre: ${movie.genre}</p>
               <p class="card-text">Rating: ${movie.rating}</p>
               <p class="card-text hidden">ID: ${movie.id}</p>
               
               <button id="delete-btn-${movie.id}" type="submit" class="deleteButton btn btn-danger">Delete Movie</button>
               
               
             </div>
             </div>`)
    }

// ----------- fetch data -------------
    function getMovies() {
        $('#card-area').html('');
        fetch('https://lopsided-thrilling-leopon.glitch.me/movies').then(res => res.json()).then(data => data.forEach(movie => {
            console.log(movie)

            createCards(movie);

        }))
    }

    getMovies()

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
            .catch(error => console.error(error))
            .then(() => getMovies())
    };


    $('#create-movie-btn').click(function (e) {
        e.preventDefault();
        let movieAdded = {
            "title": $('#input-title').val(),
            "director": $('#input-director').val(),
            "rating": $('#input-rating').val(),
            "genre": $('#input-genre').val(),
        }
        console.log(movieAdded);
        addMovie(movieAdded);
    });

    // ----------- delete data -------------

    function deleteMovie() {
        const optionsDelete = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            // body: JSON.(${id})
        };
        fetch(urlMovies, optionsDelete)
            .then(response => console.log(response))
            .catch(error => console.error(error))
            .then(() => getMovies())
    };

    $('.deleteButton').click(function (e) {
        e.preventDefault();

        var btn = $(this).parent('h5').val();


        console.log(btn)
        // let movieDeleted = {
        //     id: ${}
        // }
        // console.log(movieDeleted);
        // deleteMovie(movieDeleted);
    });


})();