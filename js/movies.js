(function () {
    "use strict";

    const urlMovies = 'https://lopsided-thrilling-leopon.glitch.me/movies';

// ---------- create cards -----------
    function createCards(movie) {
        $('#card-area').append(`
             <div class="card-group m-2" style="width: 15rem;">
               <img src="img/poster-placeholder.jpg" class="card-img-top" style="height: 220px" alt="...">
             <div class="card-body d-flex row" style="height: 250px">
             <div class="align-items-start">
               <h5 class="card-title">${movie.title}</h5>
               <p class="card-text m-1">Director: ${movie.director}</p>
               <p class="card-text m-1">Genre: ${movie.genre}</p>
               <p class="card-text m-1">Rating: ${movie.rating}</p>
               </div>
               
<!--               edit button-->
                <div class="dropdown d-grid align-items-end">
                  <button class="btn btn-danger" type="button" id="edit-movie${movie.id}" data-bs-toggle="dropdown" aria-expanded="false">
                    Edit Movie
                  </button>
                  <ul class="dropdown-menu" style="width: 400px;" aria-labelledby="edit-movie${movie.id}">
                    <li class="dropdown-item"><input type="text" class="form-control" value="${movie.title}" id="edit-title"></li>
                    <li class="dropdown-item"><input type="text" class="form-control" id="edit-director${movie.id}" value="${movie.director}"></li>
                    <li class="dropdown-item"><select id="edit-genre${movie.id}" class="form-select">
                      <option selected>${movie.genre}</option>
                      <option>adventure</option>
                      <option>action</option>
                      <option>comedy</option>
                      <option>crime</option>
                      <option>drama</option>
                      <option>horror</option>
                    </select></li>
                    <li class="dropdown-item"><select id="edit-rating${movie.id}" class="form-select">
                      <option selected>${movie.rating}</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select></li>
                    <div class="d-grid gap-2 m-2">
                      <button id="save-btn${movie.id}" type="submit" class="saveButton btn btn-primary" value="${movie.id}">Save Changes</button>
<!--                delete button-->
               <button id="delete-btn${movie.id}" type="submit" class="deleteButton btn btn-danger" value="${movie.id}">Delete Movie</button>
                    </div>
                  </ul>
                </div>
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

    $('body').on('click', '.deleteButton', function (e) {
        e.preventDefault();
        var id = $(this).attr('value');
        console.log(id);
    });


// ----------- edit movie -------------

    function editMovie(movieData) {
        const optionsEdit = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(movieData)
        };
        fetch(urlMovies, optionsEdit)
            .then(response => console.log(response))
            .catch(error => console.error(error))
            .then(() => getMovies())
    };

    $('body').on('click', '.saveButton', function (e) {
        e.preventDefault();
        var id = $(this).attr('value');
        console.log(id);
    });

// ---------- first call ----------
    function hideLoader() {
        $('#loading').hide();
        getMovies();
    }
    setTimeout(hideLoader, 1000); //change to hide after fetch data comes back

})();