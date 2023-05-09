(function () {
    "use strict";

// -------- hides loading div ---------------
    function hideLoader() {
        $('#loading').hide();
        $('.hidden').hide();
        // carouselPlaceholder();//adds placeholder carousel
        // cardsPlaceholder();//adds placeholder cards
    }

    setTimeout(hideLoader, 1000); //change to hide after fetch data comes back


// -------- cards placeholder ---------------
//     function cardsPlaceholder() {
//         $('#card-placeholder').html(`
//     <div class="card-group m-2" style="width: 15rem;">
//   <img src="img/12-angry-men.jpeg" class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">Title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>
// <div class="card-group m-2" style="width: 15rem;">
//   <img src="img/fight-club.jpeg" class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">Title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>
// <div class="card-group m-2" style="width: 15rem;">
//   <img src="img/pulp-fiction.jpeg" class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">Title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>
// <div class="card-group m-2" style="width: 15rem;">
//   <img src="img/schindlers-list.jpeg" class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">Title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>
// <div class="card-group m-2" style="width: 15rem;">
//   <img src="img/the-dark-knight.jpeg" class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">Title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>
// <div class="card-group m-2" style="width: 15rem;">
//   <img src="img/the-godfather.jpeg" class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">Title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>
// <div class="card-group m-2" style="width: 15rem;">
//   <img src="img/the-lord-of-the-rings-the-return-of-the-king.jpeg" class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">Title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>
// <div class="card-group m-2" style="width: 15rem;">
//   <img src="img/the-shawshank-redemption.jpeg" class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">Title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>
//     `)
//     }
//
//
// // ------------ nav bar placeholder --------------

    $('#n-a-v').html(`<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>`)


// ------------- footer placeholder -------------

    $('#footer').html(`<footer class="py-3 my-4">
        <ul class="nav justify-content-center border-bottom pb-3 mb-3">
            <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Home</a></li>
            <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Features</a></li>
            <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Pricing</a></li>
            <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">FAQs</a></li>
            <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">About</a></li>
        </ul>
        <p class="text-center text-muted">&copy; 2021 Company, Inc</p>
    </footer>`)


// ------------- carousel placeholder  ----------------
//     function carouselPlaceholder() {
//         $('#carousel').html(`<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
//   <div class="carousel-inner">
//     <div class="carousel-item active">
//       <img src="img/carousel-the-dark-knight.jpeg" class="d-block w-100" alt="...">
//     </div>
//     <div class="carousel-item">
//       <img src="img/carousel-the-godfather.jpg" class="d-block w-100" alt="...">
//     </div>
//   </div>
//   <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
//     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span class="visually-hidden">Previous</span>
//   </button>
//   <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
//     <span class="carousel-control-next-icon" aria-hidden="true"></span>
//     <span class="visually-hidden">Next</span>
//   </button>
// </div>`)
//     }


})();