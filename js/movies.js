(function () {
    "use strict";

    const urlMovies = 'https://lopsided-thrilling-leopon.glitch.me/movies';

    let moviesObj = [];

// -------- loading animation -------
    function hideLoader() {
        $('#loading').hide();
    };

    function showLoader() {
        $('#loading').show();
    };

// ---------- add poster -----------
    function addPoster(poster, id) {
        let imgID = '#poster-' + id.toString();
        $(`${imgID}`).attr('src', poster);
    };

    function getPoster(title, id) {
        fetch(`http://www.omdbapi.com/?t=${title}&apikey=${OMDb_API}`)
            .then(res => res.json())
            .then(data => {
                if (typeof data.Poster === "string") {
                    addPoster(data.Poster, id)
                }
            })
    };

// ---------- create cards -----------
    function createCards(movie) {
        $('#card-area').append(`
             <div id="movie-${movie.id}" class="movie-cards card-group m-2" style="width: 15rem;">
               <img id="poster-${movie.id}" src="img/poster-placeholder.jpg" class="card-img-top" style="height: 326px;" " alt="...">
             <div class="card-body d-flex row" style="height: 250px">
             <div id="movie-info${movie.id}" class="align-items-start">
               <h5 class="card-title">${movie.title}</h5>
               <p class="card-text m-1">Director: ${movie.director}</p>
               <p class="card-text m-1">Genre: ${movie.genre}</p>
               <p class="card-text m-1">Rating: ${movie.rating}</p>
               </div>
               
<!--               edit button-->
                <div class="dropdown d-grid align-items-end">
                  <button class="btn btn-danger btn-sm" type="button" id="edit-movie${movie.id}" data-bs-toggle="dropdown" aria-expanded="false">
                    Edit Movie
                  </button>
                  <ul class="dropdown-menu" style="width: 400px;" aria-labelledby="edit-movie${movie.id}">
                    <li class="dropdown-item"><input type="text" class="form-control" value="${movie.title}" id="edit-title${movie.id}"></li>
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
        getPoster(movie.title, movie.id);
// hide loading animation
        hideLoader();
    };

// ----------- fetch data -------------
    function getMovies() {
        $('#card-area').html('');
        showLoader();
        moviesObj.length = 0;
        setTimeout(() => {
            fetch(urlMovies)
                .then(res => res.json())
                .then(data => data.forEach(movie => {
                    moviesObj.push(movie);
                    // console.log(movie);

                }))
                .then(() => {
                    moviesObj.forEach(createCards);
                })
        }, 1000);
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
            "genre": $('#input-genre').val()
        }
        addMovie(movieAdded);
    });

// ----------- delete movie -------------
    function deleteMovie(id) {
        const optionsDelete = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        };
        fetch(urlMovies + `/${id}`, optionsDelete)
            .then(response => console.log(response))
            .catch(error => console.error(error))
    };

    $('body').on('click', '.deleteButton', function (e) {
        e.preventDefault();
        let id = $(this).attr('value');
        let remove = `#movie-` + id.toString()
        $(`${remove}`).remove();
        let movIndex = moviesObj.findIndex((mov => mov.id == id));
        moviesObj.splice(movIndex, 1);
        deleteMovie(id);
    });

// ----------- edit movie -------------
    function updateMovie(movie) {
        let id = '#movie-info' + movie.id;
        $(`${id}`).html(`
        <h5 class="card-title">${movie.title}</h5>
        <p class="card-text m-1">Director: ${movie.director}</p>
        <p class="card-text m-1">Genre: ${movie.genre}</p>
        <p class="card-text m-1">Rating: ${movie.rating}</p>
        `)
        let movIndex = moviesObj.findIndex((mov => mov.id == movie.id));
        moviesObj[movIndex] = movie;
    };

    function editMovie(movieData) {
        const optionsEdit = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(movieData)
        };
        fetch(urlMovies + `/${movieData.id}`, optionsEdit)
            .then(response => console.log(response))
            .catch(error => console.error(error))
    };

    $('body').on('click', '.saveButton', function (e) {
        e.preventDefault();
        var id = $(this).attr('value');
        let movieEdit = {
            "title": $(`#edit-title${id}`).val(),
            "director": $(`#edit-director${id}`).val(),
            "rating": $(`#edit-rating${id}`).val(),
            "genre": $(`#edit-genre${id}`).val(),
            "id": id
        }
        updateMovie(movieEdit);
        editMovie(movieEdit);
    });

// ----------- sort movies -------------
    $('#sort-title').click(function (e) {
        e.preventDefault();
        moviesObj.sort((a, b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0));
        $('#card-area').html('');
        moviesObj.forEach(createCards);
    });

    $('#sort-director').click(function (e) {
        e.preventDefault();
        moviesObj.sort((a, b) => (a.director > b.director) ? 1 : ((b.director > a.director) ? -1 : 0));
        $('#card-area').html('');
        moviesObj.forEach(createCards);
    });

    $('#sort-genre').click(function (e) {
        e.preventDefault();
        moviesObj.sort((a, b) => (a.genre > b.genre) ? 1 : ((b.genre > a.genre) ? -1 : 0));
        $('#card-area').html('');
        moviesObj.forEach(createCards);
    });

// ----------- search movie -------------
    $('#searchBar').keyup(function (e) {
        e.preventDefault();
        let searchString = searchBar.value.toLowerCase();
        let filteredMovies = [];
        for(let i=0; i<moviesObj.length; i++) {
            if (moviesObj[i].title.toLowerCase().includes(searchString) || moviesObj[i].genre.toLowerCase().includes(searchString) || moviesObj[i].rating.toString().includes(searchString)) {
                filteredMovies.push(moviesObj[i]);
            }
        };
        $('#card-area').html('');
        filteredMovies.forEach(createCards);
    });

// ---------- first call ----------
    getMovies();


})();