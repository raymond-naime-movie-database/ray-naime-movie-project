(function () {
    "use strict";

    const urlMovies = 'https://lopsided-thrilling-leopon.glitch.me/movies';
// --------- add event listener
    function addEventListener() {
        $('.deleteButton').click(function (e) {
            e.preventDefault();
            var id = $(this).attr('value'); //this gives you the movie ID
            console.log(id);
        });

        $('.editButton').click(function (e) {
            e.preventDefault();
            var id = $(this).attr('value'); //this gives you the movie ID
            console.log(id);
        });
    }

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

               <button id="edit-btn${movie.id}" type="submit" class="editButton btn btn-danger" value="${movie.id}">Edit Movie</button>
               <button id="delete-btn${movie.id}" type="submit" class="deleteButton btn btn-danger" value="${movie.id}">Delete Movie</button>

             </div>
             </div>`)
    };

// ----------- fetch data -------------
    function getMovies() {
        $('#card-area').html('');
        fetch(urlMovies)
            .then(res => res.json())
            .then(data => data.forEach(movie => {
            console.log(movie)
            createCards(movie);
            }))
            .then(() => addEventListener())
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

// ----------- delete movie -------------

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


// ----------- edit movie -------------

    // function editMovie() {
    //     const optionsEdit = {
    //         method: 'PUT',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         // body: JSON.(${id})
    //     };
    //     fetch(urlMovies, optionsEdit)
    //         .then(response => console.log(response))
    //         .catch(error => console.error(error))
    //         .then(() => getMovies())
    // };

// ---------- first call ----------
    getMovies()

})();