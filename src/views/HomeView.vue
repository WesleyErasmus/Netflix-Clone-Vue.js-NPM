<template>
  <div class="home">
    <div class="home-page-app-wrapper">
      <!--REMOVED COMMENTED OUT CSS -- Transparent background giving a dark cinema effect -->
      <div class="cinema-dark-room-effect">
        <!-- Home Page Navbar -->

        <!-- Bootstrap Navbar -->
        <div class="home-page-top-menu">
          <nav class="navbar top-navbar fixed-top">
            <div class="container-fluid top-navbar-inner">
              <div class="app-logo-and-menu-flex-container">
                <!-- Home page Netflix logo -->
                <img
                  id="home-page-back-to-top"
                  class="home-gage-app-logo"
                  src="../assets/netflix-logo.png"
                  alt="Netflix Logo"
                />
                <!-- Nav buttons, Home, Watch-list, Coming Soon -->
                <ul class="top-nav-menu-btns">
                  <li
                    id="pagetop"
                    class="top-nav-btn top-nav-home-btn"
                    v-show="scY > 300"
                    @click="toTop"
                  >
                    Home
                  </li>
                  <router-link :to="{ path: '/comingsoon' }">
                    <li class="top-nav-btn top-nav-movies-btn">Coming Soon</li>
                  </router-link>
                </ul>
              </div>
              <!-- Nav buttons, Search, User Account -->
              <div class="top-nav-actions-menu">
                <div class="top-nav-action-item">
                  <!-- Top nav search bar -->
                  <div class="search-container">
                    <form action="/search" method="get">
                      <input
                        class="search expandright"
                        id="searchright"
                        type="search"
                        name="q"
                        placeholder="Search"
                      />
                      <label class="button searchbutton" for="searchright"
                        ><span class="mglass">&#9906;</span></label
                      >
                    </form>
                  </div>
                </div>
                <div class="top-nav-action-item">
                  <!-- Display username -->
                  <div class="top-nav-user-menu display-name"></div>
                  <!-- Sign out dropdown  -->
                </div>
                <div class="dropdown">
                  <span class="sign-out-dropdown"></span>
                  <div class="dropdown-content">
                    <!-- Sign-out link to About Page  -->
                    <router-link :to="{ path: '/about' }">
                      <button class="home-page-sign-out-btn">Sign out</button>
                    </router-link>
                  </div>
                </div>
              </div>

              <!-- Navbar hamburger button -->
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar"
              >
                <!-- Hamburger icon -->
                <span><i class="fa-solid fa-user"></i></span>
                <span class="sign-out-dropdown"></span>
              </button>
              <div
                class="offcanvas offcanvas-end"
                tabindex="-1"
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
              >
                <!-- Username in Offcanvas header -->
                <div class="offcanvas-header">
                  <!-- Display username -->
                  <h5
                    class="offcanvas-title"
                    id="offcanvasNavbarLabel display-name"
                  >
                    Mercedes Erasmus
                  </h5>
                  <button
                    type="button"
                    class="btn-close btn-close-white"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                <!-- Offcanvas body menu-->
                <div class="offcanvas-body">
                  <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li class="nav-item">
                      <router-link :to="{ path: '/' }">
                        <a class="nav-link active" aria-current="page" href="#"
                          >Home</a
                        ></router-link
                      >
                    </li>
                    <li class="nav-item">
                      <router-link :to="{ path: '/watchlist' }">
                        <a class="nav-link active" aria-current="page" href="#"
                          >Watch List</a
                        ></router-link
                      >
                    </li>
                    <li class="nav-item">
                      <router-link :to="{ path: '/comingsoon' }">
                        <a class="nav-link active" aria-current="page" href="#"
                          >Coming Soon</a
                        ></router-link
                      >
                    </li>
                    <li class="nav-item">
                      <router-link :to="{ path: '/about' }">
                        <a class="nav-link active" aria-current="page" href="#"
                          >Sign Out</a
                        ></router-link
                      >
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#"></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <!-- End of Bootstrap Navbar -->

        <!-- Home page hero image carousel -->
        <section class="hero-image-trailer-wrapper">
          <!-- BOOTSTRAP CAROUSEL - fix auto slide -->
          <div
            id="carouselExampleCaptions"
            class="carousel slide"
            data-bs-ride="false"
          >
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="https://occ-0-6161-32.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABQCMBLtcppxXsD6dBXpwWTPLWCmvk89ihfn0kKjhxUVPmcUZdgzeDdzrIAW6UGUYDI61C5Ee8ocx8dsDy6IZ3dqNsnGqnCJ9ImDS.webp?r=763"
                  class="d-block w-100"
                  alt=""
                />
                <div class="carousel-caption d-none d-md-block">
                  <h5>First slide label</h5>
                  <p>
                    Some representative placeholder content for the first slide.
                  </p>
                </div>
              </div>
              <div class="carousel-item">
                <img
                  src="https://occ-0-6161-32.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABRXM8JbVMT0QdVT9zM99-LIKCdYyF68UL6oaeib1PU8CtEHAoreOb_svxhhqlUhifqNUSca0slwMr2wGxUm-xptEKAENYfRXLjWs.webp?r=94a"
                  class="d-block w-100"
                  alt=""
                />
                <div class="carousel-caption d-none d-md-block">
                  <h5>Second slide label</h5>
                  <p>
                    Some representative placeholder content for the second
                    slide.
                  </p>
                </div>
              </div>
              <div class="carousel-item">
                <img
                  src="https://occ-0-6161-32.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABQCMBLtcppxXsD6dBXpwWTPLWCmvk89ihfn0kKjhxUVPmcUZdgzeDdzrIAW6UGUYDI61C5Ee8ocx8dsDy6IZ3dqNsnGqnCJ9ImDS.webp?r=763"
                  class="d-block w-100"
                  alt=""
                />
                <div class="carousel-caption d-none d-md-block">
                  <h5>Third slide label</h5>
                  <p>
                    Some representative placeholder content for the third slide.
                  </p>
                </div>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
            <!-- Coming soon watermark -->

            <span class="coming-soon-watermark"> COMING SOON</span>
          </div>
          <!-- END OF BOOTSTRAP CAROUSEL -->

          <!-- Watch-list heading -->
          <h1 class="my-list-heading">My Watch List</h1>
        </section>
        <!-- Container for movies and page footer - used to simplify screen responsiveness -->
        <div class="movies-and-footer-container">
          <!-- .watch-list-movie-slider-wrapper -->
          <section class="watch-list-movie-slider-wrapper">
            <!-- Watch-list prev button -->
            <button
              class="watch-list-slider-handles sliderHandles watch-list-handle-prev prevHandle"
            >
              <div class="watch-list-handle-prev-icon">
                <i class="fa-solid fa-chevron-left"></i>
              </div>
            </button>
            <div class="watch-list-movie-slider-container sliderContainer">
              <!-- Watch-list movie slider with next and prev button -->
              <div class="watch-list-movie-slider movieSlider">
                <!-- WATCH-LIST PLACEHOLDER IMAGES -->
                <!-- <ul> -->
                <div v-for="(movie, i) in watchList" :key="i">
                  {{ movie }}
                </div>
              </div>

              <!-- Watch-list next button -->
              <button
                class="watch-list-slider-handles sliderHandles watch-list-handle-next nextHandle"
              >
                <div class="watch-list-handle-next-icon">
                  <i class="fa-solid fa-chevron-right"></i>
                </div>
              </button>
            </div>
          </section>
          <!-- Movies container heading -->
          <h1 class="slider-heading">Watch the Latest Movies and TV Shows</h1>
          <!-- Movie Slider container -->
          <section class="movie-slider-wrapper">
            <!-- Movie item -->
            <span
              class="movie-slider-item"
              v-for="item in movies"
              v-bind:key="item.id"
            >
              <img class="slider-img" :src="item.image" alt="Movie Poster" />

              <button
                class="movie-slider-item-btn"
                v-on:click="addToWatchList(item)"
              >
                <i class="fa-solid fa-plus"></i>
              </button>

              <span class="movies-info-container">
                <div class="name"><span>Title: </span> {{ item.name }}</div>
                <div class="duration">
                  <span>Duration: </span> {{ item.duration }}
                </div>
                <div class="date">
                  <span>Release Date: </span> {{ item.release_date }}
                </div>
              </span>
            </span>
          </section>
          <!-- Home page footer -->
          <footer class="home-page-footer">
            <!-- Home page footer links -->
            <ul class="footer-links">
              <li class="footer-link-item">Audio and Subtitles</li>
              <li class="footer-link-item">Audio Description</li>
              <li class="footer-link-item">Help Centre</li>
              <li class="footer-link-item">Gift Cards</li>
              <li class="footer-link-item">Media Center</li>
              <li class="footer-link-item">Investor Relations</li>
              <li class="footer-link-item">Jobs</li>
              <li class="footer-link-item">Terms of Use</li>
              <li class="footer-link-item">Privacy</li>
              <li class="footer-link-item">Legal Notices</li>
              <li class="footer-link-item">Cookie Preferences</li>
              <li class="footer-link-item">Corporate Information</li>
              <li class="footer-link-item">Contact Us</li>
            </ul>
          </footer>
        </div>
        <!-- End of Movies and Footer container -->
      </div>
      <!-- End of Cinema dark room effect container -->
    </div>
    <!-- End of home-page-app-wrapper -->
  </div>
</template>

<script>
// CodeSpace API import
// import axios from "axios";
export default {
  data() {
    return {
      scTimer: 0,
      scY: 0,
      watchList: [],
      movies: [
        {
          id: 1,
          name: "Prof. Ena Kulas Jr.",
          duration: "176",
          image: "https://picsum.photos/200/300",
          description:
            "Consectetur fuga corporis distinctio ea necessitatibus. Hic dolores et voluptatem itaque. Et inventore est quas qui molestias sed ut.",
          release_date: "2013-09-01",
          is_coming_soon: 0,
          rating: 1,
        },
        {
          id: 2,
          name: "Maximo Powlowski V",
          duration: "180",
          image: "https://picsum.photos/200/300",
          description:
            "Corrupti magni velit earum quod in assumenda nostrum ipsum. Eligendi non veniam modi cupiditate aut. Praesentium repudiandae ipsam id porro dolorem facere. Quo laboriosam sit temporibus sit ducimus.",
          release_date: "2023-02-04",
          is_coming_soon: 1,
          rating: 4,
        },
        {
          id: 3,
          name: "Madelyn Schinner",
          duration: "157",
          image: "https://picsum.photos/200/300",
          description:
            "Error aperiam voluptatem sit. Ducimus optio itaque sint iure hic. Autem quas eaque ut laborum rem laborum numquam ut.",
          release_date: "2019-06-01",
          is_coming_soon: 0,
          rating: 10,
        },
        {
          id: 4,
          name: "Easton Sauer",
          duration: "173",
          image: "https://picsum.photos/200/300",
          description:
            "Aliquid officia omnis consequatur rerum eum aut deserunt. Vel dolorem laudantium dolor dolor. Rerum id et esse omnis inventore. Quasi assumenda minima est illum ex id deleniti.",
          release_date: "2019-10-17",
          is_coming_soon: 0,
          rating: 5,
        },
        {
          id: 5,
          name: "Durward Green",
          duration: "203",
          image: "https://picsum.photos/200/300",
          description:
            "Nobis dolores quae distinctio recusandae. Ipsum illo sunt alias occaecati et optio aperiam aut. Maxime voluptatem aspernatur voluptatem. Nihil eveniet possimus est qui quia. Praesentium at quas aperiam aliquid natus aut in.",
          release_date: "2022-01-30",
          is_coming_soon: 1,
          rating: 4,
        },
        {
          id: 6,
          name: "Mrs. Annalise Kuhic V",
          duration: "193",
          image: "https://picsum.photos/200/300",
          description:
            "Dolore consectetur sunt laboriosam odit libero. Qui qui quia dolor deserunt cum omnis vitae. Rem corrupti qui excepturi facilis. Vel blanditiis molestiae minima non magnam aut corrupti.",
          release_date: "2016-02-26",
          is_coming_soon: 0,
          rating: 8,
        },
        {
          id: 7,
          name: "Stefan Lebsack",
          duration: "184",
          image: "https://picsum.photos/200/300",
          description:
            "Doloribus vero consequuntur ab et rem omnis. Quae quasi dolorem architecto. Voluptas labore architecto aut officiis.",
          release_date: "2015-01-14",
          is_coming_soon: 0,
          rating: 6,
        },
        {
          id: 8,
          name: "Sunny Weimann MD",
          duration: "183",
          image: "https://picsum.photos/200/300",
          description:
            "Dolor quas cumque minus amet. Culpa nam molestias qui ex enim velit. Delectus sequi numquam excepturi possimus. Animi similique eveniet quis nulla quia nemo velit. Aliquid odit ipsam consequatur qui.",
          release_date: "2022-03-10",
          is_coming_soon: 1,
          rating: 2,
        },
        {
          id: 9,
          name: "Katelyn Kozey",
          duration: "185",
          image: "https://picsum.photos/200/300",
          description:
            "Qui aspernatur maiores fugiat et aliquam labore maxime. Quis quod consequatur alias laboriosam. Adipisci culpa quo ut voluptatum perferendis qui.",
          release_date: "2019-01-13",
          is_coming_soon: 0,
          rating: 5,
        },
        {
          id: 10,
          name: "Corene Durgan",
          duration: "185",
          image: "https://picsum.photos/200/300",
          description:
            "Earum ipsa velit fugiat saepe nisi ut. Cupiditate id architecto unde et. Temporibus aliquid hic ut odio.",
          release_date: "2016-05-21",
          is_coming_soon: 0,
          rating: 4,
        },
        {
          id: 11,
          name: "Noble Lebsack I",
          duration: "143",
          image: "https://picsum.photos/200/300",
          description:
            "Itaque harum et ratione minima ratione veniam. Consequatur blanditiis nihil quia. Iure autem nihil aspernatur quia ad. Provident dolorum officia enim inventore harum.",
          release_date: "2017-11-27",
          is_coming_soon: 0,
          rating: 2,
        },
        {
          id: 12,
          name: "Simone Mohr",
          duration: "142",
          image: "https://picsum.photos/200/300",
          description:
            "Ut et amet harum saepe. Sunt veritatis consequatur culpa impedit earum officiis. Laborum harum dolores nulla.",
          release_date: "2022-11-20",
          is_coming_soon: 1,
          rating: 4,
        },
        {
          id: 13,
          name: "Braden Lemke",
          duration: "196",
          image: "https://picsum.photos/200/300",
          description:
            "Quis molestiae quia est id. Totam perspiciatis quo ut ut. Excepturi et sed dolor aspernatur amet cupiditate. Eum blanditiis nihil nobis esse molestiae magnam quas. Impedit perspiciatis distinctio autem voluptas aut.",
          release_date: "2017-06-12",
          is_coming_soon: 0,
          rating: 3,
        },
        {
          id: 14,
          name: "Leonard Price",
          duration: "154",
          image: "https://picsum.photos/200/300",
          description:
            "Et et vero numquam ducimus iusto. Id voluptatum recusandae ut odio esse ea accusamus. Dolor odit in saepe laudantium incidunt.",
          release_date: "2013-08-19",
          is_coming_soon: 0,
          rating: 1,
        },
        {
          id: 15,
          name: "Erick Rogahn",
          duration: "192",
          image: "https://picsum.photos/200/300",
          description:
            "Nisi accusantium nostrum rem nisi ad omnis iusto. Repellendus quisquam exercitationem non et ducimus voluptatem. Odit voluptas dolorum sit inventore doloremque rerum aut et.",
          release_date: "2023-02-19",
          is_coming_soon: 1,
          rating: 8,
        },
        {
          id: 16,
          name: "Melyna Ritchie",
          duration: "169",
          image: "https://picsum.photos/200/300",
          description:
            "Qui esse labore qui rerum. Sed atque explicabo veritatis voluptas. Sunt quae reprehenderit quis et.",
          release_date: "2016-01-11",
          is_coming_soon: 0,
          rating: 9,
        },
        {
          id: 17,
          name: "Rupert Vandervort",
          duration: "211",
          image: "https://picsum.photos/200/300",
          description:
            "Sequi consequatur non eaque nesciunt ut nihil. Laudantium doloribus vel sit et maxime labore. Nesciunt et neque qui eum. Dolores ut a nobis molestiae ipsum ducimus.",
          release_date: "2015-01-03",
          is_coming_soon: 0,
          rating: 3,
        },
        {
          id: 18,
          name: "Max Lind II",
          duration: "164",
          image: "https://picsum.photos/200/300",
          description:
            "Qui consequatur sint voluptatem sit quia fuga quaerat. Itaque dolores odio et porro laudantium sunt beatae. Delectus aut aut exercitationem maiores. Tenetur dolores temporibus rem. Sit id ut non quos blanditiis.",
          release_date: "2016-03-09",
          is_coming_soon: 0,
          rating: 4,
        },
        {
          id: 19,
          name: "Kailyn Nolan",
          duration: "186",
          image: "https://picsum.photos/200/300",
          description:
            "Dolor eligendi quos ut et cum ut. Sit temporibus voluptates consectetur asperiores voluptas. Cumque natus sed odit. Molestiae dolorum atque commodi.",
          release_date: "2022-03-27",
          is_coming_soon: 1,
          rating: 4,
        },
        {
          id: 20,
          name: "Dr. Annette Mosciski Sr.",
          duration: "143",
          image: "https://picsum.photos/200/300",
          description:
            "Quod culpa blanditiis cumque quia et in ut voluptatem. Perspiciatis esse assumenda officia quo quia. Qui qui dolor ut iste.",
          release_date: "2023-01-04",
          is_coming_soon: 1,
          rating: 6,
        },
        {
          id: 21,
          name: "Wilmer Feest",
          duration: "210",
          image: "https://picsum.photos/200/300",
          description:
            "Rem amet a quidem quia. Excepturi veniam iure aut libero aperiam dolorum placeat. Dolor facere impedit maiores.",
          release_date: "2023-02-07",
          is_coming_soon: 1,
          rating: 9,
        },
        {
          id: 22,
          name: "Rosalyn Walker",
          duration: "192",
          image: "https://picsum.photos/200/300",
          description:
            "Aut fuga qui sint possimus sit. Dolor fugiat maiores beatae qui ab aut sed.",
          release_date: "2019-01-14",
          is_coming_soon: 0,
          rating: 4,
        },
        {
          id: 23,
          name: "Selina Ortiz II",
          duration: "157",
          image: "https://picsum.photos/200/300",
          description:
            "Et ullam sit et error. Placeat iure ullam fuga blanditiis a quis. Vero iste mollitia corrupti. Numquam nostrum atque fugit eveniet quasi cupiditate voluptatibus ut.",
          release_date: "2020-12-04",
          is_coming_soon: 0,
          rating: 4,
        },
        {
          id: 24,
          name: "Prof. Nash Conroy",
          duration: "192",
          image: "https://picsum.photos/200/300",
          description:
            "Laudantium assumenda blanditiis animi et sed voluptas. Magnam atque aut quo molestias nobis eos itaque sapiente. Et ut similique eos quia sed provident.",
          release_date: "2022-04-14",
          is_coming_soon: 1,
          rating: 2,
        },
        {
          id: 25,
          name: "Miss Claire Prosacco",
          duration: "175",
          image: "https://picsum.photos/200/300",
          description:
            "Iusto aut itaque rerum incidunt similique. Molestiae quibusdam facilis in vero. Veniam fugiat voluptas eaque sit nesciunt at. Sunt consequatur rerum mollitia.",
          release_date: "2017-11-27",
          is_coming_soon: 0,
          rating: 9,
        },
        {
          id: 26,
          name: "Layla Tromp III",
          duration: "173",
          image: "https://picsum.photos/200/300",
          description:
            "Omnis quam soluta dolores. Eum ut autem nihil qui autem sint. Quo vitae voluptatem cum. Tempora sint at voluptatum aut sapiente dicta nostrum.",
          release_date: "2022-12-06",
          is_coming_soon: 1,
          rating: 8,
        },
        {
          id: 27,
          name: "Demarcus Wiegand",
          duration: "192",
          image: "https://picsum.photos/200/300",
          description:
            "Nemo laudantium architecto eveniet deserunt dolores voluptatibus. Quo unde sed molestiae nesciunt nam a. Et dolorem quas non sint fugiat adipisci. Assumenda perferendis omnis nobis sit distinctio ea excepturi.",
          release_date: "2014-11-01",
          is_coming_soon: 0,
          rating: 8,
        },
        {
          id: 28,
          name: "Stevie Hamill",
          duration: "208",
          image: "https://picsum.photos/200/300",
          description:
            "Perferendis dolor tenetur eligendi et. Aut praesentium illo accusamus ut asperiores maxime. Sit et ut nihil dolor. Exercitationem beatae incidunt suscipit. Voluptatibus ut est consequatur qui eos iure eveniet doloribus.",
          release_date: "2013-08-19",
          is_coming_soon: 0,
          rating: 1,
        },
        {
          id: 29,
          name: "Prof. Misael Stiedemann",
          duration: "209",
          image: "https://picsum.photos/200/300",
          description:
            "Animi ab magni quia id. Tempora eum quod amet nulla. Qui omnis maxime consectetur tempore.",
          release_date: "2023-02-14",
          is_coming_soon: 1,
          rating: 3,
        },
        {
          id: 30,
          name: "Darrel Prohaska",
          duration: "145",
          image: "https://picsum.photos/200/300",
          description:
            "Laudantium ut nisi fugit explicabo aperiam repellendus. Vel neque aut corporis. Nihil sed tempore numquam eius nobis repellat.",
          release_date: "2022-12-04",
          is_coming_soon: 1,
          rating: 1,
        },
        {
          id: 31,
          name: "Zachariah Wisoky",
          duration: "191",
          image: "https://picsum.photos/200/300",
          description:
            "Adipisci dolorem adipisci quos illum doloribus praesentium. Odio vel nemo quis corrupti rerum. Vitae nisi provident repudiandae eaque enim et nostrum et.",
          release_date: "2022-05-04",
          is_coming_soon: 1,
          rating: 7,
        },
        {
          id: 32,
          name: "Chasity Zboncak",
          duration: "214",
          image: "https://picsum.photos/200/300",
          description:
            "Quod nobis non minus molestiae maiores. Saepe autem rerum molestiae dolorum labore ex. Magnam ab mollitia nobis. A officia maxime similique nulla officiis voluptatem suscipit incidunt.",
          release_date: "2017-12-18",
          is_coming_soon: 0,
          rating: 10,
        },
        {
          id: 33,
          name: "Mrs. Eulah Sipes Jr.",
          duration: "187",
          image: "https://picsum.photos/200/300",
          description:
            "Ipsum harum fugiat et. Vitae amet alias earum sit incidunt ad ut. Quisquam voluptas quae porro dolore.",
          release_date: "2022-07-30",
          is_coming_soon: 1,
          rating: 8,
        },
        {
          id: 34,
          name: "Providenci Koepp",
          duration: "147",
          image: "https://picsum.photos/200/300",
          description:
            "Non eos ipsam expedita ducimus. Sit et autem eius reprehenderit. Voluptas placeat cupiditate assumenda doloremque. Laborum ut id at.",
          release_date: "2022-12-20",
          is_coming_soon: 1,
          rating: 6,
        },
        {
          id: 35,
          name: "Melvina Dickens",
          duration: "219",
          image: "https://picsum.photos/200/300",
          description:
            "Incidunt ut unde porro facilis ut aut aliquam. Tenetur omnis amet necessitatibus praesentium. Numquam tenetur eos error corporis nobis adipisci.",
          release_date: "2022-12-27",
          is_coming_soon: 1,
          rating: 5,
        },
        {
          id: 36,
          name: "Chester Olson",
          duration: "166",
          image: "https://picsum.photos/200/300",
          description:
            "Ut est reiciendis aspernatur eos qui ea. Quia voluptatem quibusdam reprehenderit nesciunt quia similique architecto optio.",
          release_date: "2022-05-29",
          is_coming_soon: 1,
          rating: 7,
        },
        {
          id: 37,
          name: "Jacinto Effertz II",
          duration: "197",
          image: "https://picsum.photos/200/300",
          description:
            "Beatae eaque ratione commodi. Rerum itaque velit provident explicabo eum aut ut distinctio. Quasi illo nemo beatae sed et sed voluptates. Quaerat aliquam fugit enim cumque aut aspernatur minima.",
          release_date: "2013-12-16",
          is_coming_soon: 0,
          rating: 3,
        },
        {
          id: 38,
          name: "Virginia Effertz",
          duration: "174",
          image: "https://picsum.photos/200/300",
          description:
            "Rerum tempore asperiores quos illum quo quidem quia corporis. Repellendus quidem et totam beatae totam enim nulla. Ut illo fugit animi debitis blanditiis perferendis. Eius eaque et voluptate qui tenetur. Rerum eos maxime qui delectus esse.",
          release_date: "2022-12-29",
          is_coming_soon: 1,
          rating: 10,
        },
        {
          id: 39,
          name: "Dr. Marcelino DuBuque",
          duration: "209",
          image: "https://picsum.photos/200/300",
          description:
            "Itaque deleniti deserunt aliquid. Aspernatur possimus nobis error totam sit. Officiis distinctio incidunt amet quisquam non beatae nulla. Ut eos quibusdam molestiae reiciendis saepe optio qui sequi.",
          release_date: "2022-10-05",
          is_coming_soon: 1,
          rating: 3,
        },
        {
          id: 40,
          name: "Mr. Jayce Osinski DDS",
          duration: "187",
          image: "https://picsum.photos/200/300",
          description:
            "Exercitationem doloremque officiis quia consequatur consequuntur nam officia aut. Voluptatem dicta temporibus ipsum praesentium sint vel doloremque dolores. Modi aut quam aut. Iusto at soluta facilis autem itaque et.",
          release_date: "2018-10-14",
          is_coming_soon: 0,
          rating: 4,
        },
        {
          id: 41,
          name: "Winnifred Bartoletti",
          duration: "183",
          image: "https://picsum.photos/200/300",
          description:
            "Aliquid assumenda cupiditate eos ipsam. Officiis omnis necessitatibus eos et quam ut. Error unde dolor sunt id autem dolore nisi.",
          release_date: "2019-03-21",
          is_coming_soon: 0,
          rating: 7,
        },
        {
          id: 42,
          name: "Helga Becker",
          duration: "207",
          image: "https://picsum.photos/200/300",
          description:
            "Amet voluptatibus placeat fugiat voluptates fugit. Voluptas dolor suscipit ipsa eos in non. Inventore recusandae quas ab asperiores et. Quos nobis velit dolorum dolor a.",
          release_date: "2017-07-28",
          is_coming_soon: 0,
          rating: 3,
        },
        {
          id: 43,
          name: "Prof. Lelia Weimann",
          duration: "200",
          image: "https://picsum.photos/200/300",
          description:
            "Ea et possimus ut est impedit. Explicabo modi dolorum recusandae reiciendis nobis. Nesciunt dolore enim consequatur.",
          release_date: "2022-05-05",
          is_coming_soon: 1,
          rating: 8,
        },
        {
          id: 44,
          name: "Prof. Jermaine Smith",
          duration: "205",
          image: "https://picsum.photos/200/300",
          description:
            "Reprehenderit tempora id excepturi rerum et eligendi. Nihil veritatis qui minima esse qui rerum esse. Mollitia optio et molestias tempora animi.",
          release_date: "2016-04-22",
          is_coming_soon: 0,
          rating: 9,
        },
        {
          id: 45,
          name: "Holly Spinka",
          duration: "208",
          image: "https://picsum.photos/200/300",
          description:
            "Excepturi et harum commodi tenetur aliquam sint est. Sit eligendi excepturi velit autem a dolore.",
          release_date: "2022-04-02",
          is_coming_soon: 1,
          rating: 10,
        },
        {
          id: 46,
          name: "Oscar Hauck",
          duration: "204",
          image: "https://picsum.photos/200/300",
          description:
            "Veritatis dolore est sunt consequatur reprehenderit. Minima quod et aliquam voluptatibus ea maxime quisquam.",
          release_date: "2022-05-13",
          is_coming_soon: 1,
          rating: 10,
        },
        {
          id: 47,
          name: "Malachi Langosh DVM",
          duration: "170",
          image: "https://picsum.photos/200/300",
          description:
            "Est magni magnam qui a quia ea. Et molestiae qui qui rem nobis dolorum. Assumenda omnis rerum eligendi atque inventore exercitationem. Sint inventore explicabo culpa asperiores.",
          release_date: "2020-10-27",
          is_coming_soon: 0,
          rating: 1,
        },
        {
          id: 48,
          name: "Candace Kovacek",
          duration: "188",
          image: "https://picsum.photos/200/300",
          description:
            "Facere amet ipsam dolorum facere aut. Aperiam labore ut pariatur sequi minus repellat cumque. Magni libero fuga esse reiciendis corporis accusantium. Nisi consequatur qui ea dolorem. Maxime qui consequatur consectetur similique ipsum et.",
          release_date: "2022-09-14",
          is_coming_soon: 1,
          rating: 2,
        },
        {
          id: 49,
          name: "Orville Miller",
          duration: "189",
          image: "https://picsum.photos/200/300",
          description:
            "Atque sit aut vitae aut quia ut ad. Fuga veritatis est beatae qui sapiente. Consequatur impedit molestiae harum ea iusto. Quia assumenda eum qui.",
          release_date: "2022-09-29",
          is_coming_soon: 1,
          rating: 9,
        },
        {
          id: 50,
          name: "Marjorie Murphy III",
          duration: "145",
          image: "https://picsum.photos/200/300",
          description:
            "Omnis dicta suscipit deleniti sit eligendi. Necessitatibus tenetur atque quis quas voluptas. Atque ut quia quidem aut ut.",
          release_date: "2016-12-09",
          is_coming_soon: 0,
          rating: 8,
        },
      ],
    };
  },

  methods: {
    // THIS IS ELVIS' EXAMPLE FROM COACHING SESSION
    // Adding movies to localStorage and then to watchlist
    addToWatchList(id) {
      console.log(id);
      let watchListMovie = null;
      this.movies.forEach((element) => {
        if (element.id == id) {
          watchListMovie = element;
        }
      });

      this.watchList.unshift(id);

      console.log(watchListMovie);
      console.log(localStorage.getItem("watchMovie"));
      if (!localStorage.getItem("watchMovie")) {
        let watchListMoviesArray = [];
        watchListMoviesArray.push(watchListMovie);
        localStorage.setItem("watchMovie", watchListMoviesArray);
      } else {
        let localStorageArr = localStorage.getItem("watchMovie");
        localStorageArr.push(watchListMovie);
        localStorage.setItem("watchMovie", localStorageArr);
      }
    },

    // method takes in an argument of a movie object

    // addToWatchList(movie) {
    //   let watchList = null;
    //   watchList = localStorage.getItem("watchListInLocalStorage");

    //   localStorage.setItem("watchListInLocalStorage", watchList);
    //   console.log(watchList);

    //   watchList.unshift(movie);
    // },

    // Scroll to top Home button
    handleScroll: function () {
      if (this.scTimer) return;
      this.scTimer = setTimeout(() => {
        this.scY = window.scrollY;
        clearTimeout(this.scTimer);
        this.scTimer = 0;
      }, 100);
    },
    toTop: function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },

  mounted() {
    // CodeSpace API import using axios
    // axios
    //   .get("https://project-apis.codespace.co.za/api/movies")
    //   .then((response) => {
    //     this.movies = response.data.data;
    //     console.warn(response);
    //   });

    // Scroll to top Home button
    window.addEventListener("scroll", this.handleScroll);
  },
};
</script>

<style lang="scss">
// Test style for Poof - method testing
.vanish {
  visibility: hidden;
}

// Google font import
@import url("https://fonts.googleapis.com/css2?family=Arimo&family=Open+Sans&display=swap");

// CSS root variables
:root {
  --primary-color: #e50914;
  --transparent-black-bg: rgba(0, 0, 0, 0.75);
  // font-size: calc(16px + (24 - 16)*(100vw - 320px)/(1920 - 320));
}

// Universal placeholder styling
::placeholder {
  font-size: 16px;
}

// Universal selector styling
*,
*::after,
*::before {
  box-sizing: border-box;
}

// Universal ul styling
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

// Universal a tag styling
a {
  color: #fff;
  cursor: pointer;
  text-decoration: none;
}

a:hover {
  color: #fff;
}

body {
  margin: 0;
  padding: 0;
  font-family: "Arimo", sans-serif;
  -webkit-font-smoothing: antialiased;
  background: #141414;
  color: #e5e5e5;
  font-size: 16px;
}

// App container
.home-page-app-wrapper {
  position: relative;
  margin: 0;
  padding: 0;
}

// Pseudo element used to cover coming soon carousel images
.home-page-app-wrapper::after {
  content: "";
  position: absolute;
  background: linear-gradient(77deg, rgba(0, 0, 0, 0.6), transparent 85%);
  top: 0;
  left: 0;
  height: 70%;
  opacity: 1;
  right: 26%;
  z-index: 1;
}

/* NAVBAR */
.home-page-top-menu {
  position: relative;
  z-index: 11;
}

// Home page navbar background and styling
.top-navbar {
  background-image: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.7) 10%,
    transparent
  );
  width: 100%;
  height: 68px;
  font-size: 14px;
  color: #fff;
  padding: 0 4%;
  z-index: 2;
}

// Home page flex container
.app-logo-and-menu-flex-container {
  display: flex;
  align-items: center;
}

// Navbar menu font size
.top-navbar-inner {
  font-size: 14px;
}

// Home page Netflix logo
.home-gage-app-logo {
  height: 25px;
  margin-right: 25px;
}

// Top navbar menu buttons
.top-nav-menu-btns {
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
}

// Search icon and user account styling
.top-nav-actions-menu {
  display: flex;
  margin-left: 18px;
  font-size: 14px;
  color: #fff;
}

// Menu button items
.top-nav-btn {
  display: block;
  margin-left: 18px;
}

// Home button font styling
.top-nav-home-btn {
  color: #fff;
  font-weight: 700;
  cursor: pointer;
}

// Styling for Navbar search icon and account holder name
.top-nav-actions-menu {
  display: flex;
  align-items: center;
  height: 100%;
  right: 4%;
  top: 0;
}

// Styling for Navbar search icon and account holder name
.top-nav-action-item {
  display: block;
  margin-left: 25px;
  align-items: center;
}

// Username displaying in top navbar
.display-name {
  min-width: 10px;
}

// Top navbar search bar styling
.button {
  display: inline-block;
  align-items: center;
  margin: 4px 2px;
  background-color: transparent;
  border-radius: 4%;
  font-size: 14px;
  padding-left: 32px;
  padding-right: 32px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: white;
  text-decoration: none;
  cursor: pointer;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.button:hover {
  transition-duration: 0.4s;
  -moz-transition-duration: 0.4s;
  -webkit-transition-duration: 0.4s;
  -o-transition-duration: 0.4s;
  background-color: transparent;
  opacity: 0.6;
}

.search-container {
  position: relative;
  display: inline-block;
  margin: 4px 2px;
  height: 40px;
  width: 50px;
  vertical-align: bottom;
}

.mglass {
  display: inline-block;
  pointer-events: none;
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
}

.searchbutton {
  position: absolute;
  font-size: 22px;
  width: 100%;
  margin: 0;
  padding: 0;
}

.search:focus + .searchbutton {
  transition-duration: 0.4s;
  -moz-transition-duration: 0.4s;
  -webkit-transition-duration: 0.4s;
  -o-transition-duration: 0.4s;
  background-color: white;
  color: black;
}

.search {
  position: absolute;
  left: 49px; /* Button width-1px (Not 50px/100% because that will sometimes show a 1px line between the search box and button) */
  background-color: white;
  outline: none;
  border: none;
  padding: 0;
  width: 0;
  height: 100%;
  z-index: 10;
  transition-duration: 0.4s;
  -moz-transition-duration: 0.4s;
  -webkit-transition-duration: 0.4s;
  -o-transition-duration: 0.4s;
}

.search:focus {
  width: 363px; /* Bar width+1px */
  padding: 0 16px 0 0;
}

.expandright {
  left: auto;
  right: 49px; /* Button width-1px */
}

.expandright:focus {
  padding: 0 0 0 16px;
}
//End of top navbar search bar styling

// Top nav username dropdown
.sign-out-dropdown {
  border-color: #fff transparent transparent;
  border-style: solid;
  border-width: 6px 6px 0;
  margin-left: 6px;
  position: relative;
  top: 0.8vh;
}

.home-page-sign-out-btn {
  background: rgba(0, 0, 0, 0.75);
  color: #e5e5e5;
  min-width: 100px;
  min-height: 50px;
  text-decoration: underline;
  z-index: 1;
  border-radius: 4%;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  position: absolute;
  right: -3vw;
  background: rgba(0, 0, 0, 0.75);
  display: none;
  z-index: 1;
  border-radius: 4%;
  margin-top: 3px;
}

.dropdown:hover .dropdown-content {
  display: block;
}

// Top navbar hamburger button [hidden]
.navbar-toggler {
  display: none;
}

// Top navbar hamburger icon
.fa-user {
  color: #e5e5e5;
}

// Styling to override navbar link font color
.nav-link {
  color: #fff !important;
}

// Offcanvas navbar background
.offcanvas {
  background-color: transparent !important;
  background: rgba(0, 0, 0, 0.75);
  border: none;
  width: 40% !important;
}

.offcanvas-header {
  background-color: rgba(0, 0, 0, 0.75);
}

// Offcanvas body background image
div.offcanvas-body {
  z-index: 20 !important;
  background-color: transparent !important;
  background-image: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.7) 10%,
    transparent
  );
  justify-content: flex-end;
}

// HOME PAGE CAROUSEL STYLING
// Clickable carousel indicators. Indicating number of slides and slide position (located next to watch-list heading)
.carousel-indicators {
  bottom: 14vh;
  z-index: 11;
}

// Carousel buttons [hidden]
.carousel-control-prev,
.carousel-control-next {
  z-index: 11;
  display: none;
}

// Carousel header [hidden]
.carousel-caption h5 {
  display: none;
}

// Carousel description [hidden]
.carousel-caption p {
  display: none;
}

// Coming soon hero image container
.hero-image-trailer-wrapper {
  position: relative;
}

/* PAGE HERO IMAGE */
.hero-static-image {
  position: relative;
  width: 100%;
}

// Coming Soon Watermark
.coming-soon-watermark {
  position: absolute;
  text-align: center;
  padding: 0.6% 0.8%;
  font-size: calc(12px + 2.2vw);
  margin: 0;
  font-weight: bold;
  bottom: 55%;
  left: 4%;
  opacity: 0.8;
  z-index: 11;
  border-radius: 0.15rem;
  text-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

// Container for Movies and footer - used to align all content below the static hero image
.movies-and-footer-container {
  position: relative;
  top: -14vh;
}

/* Watch List Movie Slider */
.watch-list-movie-slider-wrapper {
  position: relative;
  z-index: 3;
  width: 100%;
  margin: 0 auto;
}

/* Netflix background to blend slider with hero image */
.watch-list-movie-slider-container,
.watch-list-movie-slider {
  background-color: transparent;
  background-image: linear-gradient(
    180deg,
    hsla(0, 0%, 8%, 0) 0,
    hsla(0, 0%, 8%, 0.15) 15%,
    hsla(0, 0%, 8%, 0.35) 29%,
    hsla(0, 0%, 8%, 0.58) 44%,
    #141414 68%,
    #141414
  );
  background-position: 0 top;
  background-repeat: repeat-x;
  background-size: 100% 100%;
  bottom: -1px;
  opacity: 1;
  top: auto;
  width: 100%;
}

// Container used to position watch list movies (spacing to the left)
.watch-list-movie-slider-container {
  display: flex;
  overflow: hidden;
  justify-content: center;
  position: relative;
  margin-bottom: 4%;
  padding: 0 4%;
}

// Variables and styling used to measure watch list items sizing and items displayed per screen size (change no. of items displayed according to media queries) [Media queries located at the bottom of styles]
.watch-list-movie-slider {
  display: flex;
  flex-grow: 1;
  margin: 0 0.25rem;
  /* --items-per-screen used with flex and max-width determine how many items display on the screen */
  --items-per-screen: 6;
  --slider-index: 0;
  transform: translateX(calc(var(--slider-index) * -100%));
  transition: transform 250ms ease-in-out;
}

Watch list movie item .watch-list-slider-item {
  aspect-ratio: 16 / 9;
  padding: 0 0.1vw;
  display: flex;
  border-radius: 0.25rem;
  cursor: pointer;
  flex: 0 0 calc(100% / var(--items-per-screen));
  max-width: calc(100% / var(--items-per-screen));
  width: 16.6666667%;
}

// Watch-list next and prev buttons
.watch-list-slider-handles,
.sliderHandles {
  border: none;
  margin: 0 0 0.2vw;
  padding: 0;
  font-size: 2rem;
  color: #fff;
  background: hsla(0, 0%, 8%, 0.5) !important;
  background: transparent;
  flex-grow: 0;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  z-index: 12;
  height: 100%;
}

// Watch-list next and prev buttons [prev]
.watch-list-handle-prev {
  position: absolute;
  width: 4%;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

// Watch-list next and prev buttons [next]
.watch-list-handle-next {
  position: absolute;
  right: 0;
  width: 4%;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

/* Used Netflix background styling to blend watch-list slider with hero image [Adds Shadow Effect] */
.movie-slider-wrapper {
  background-color: transparent;
  background-image: linear-gradient(
    180deg,
    hsla(0, 0%, 8%, 0) 0,
    hsla(0, 0%, 8%, 0.15) 15%,
    hsla(0, 0%, 8%, 0.35) 29%,
    hsla(0, 0%, 8%, 0.58) 44%,
    #141414 68%,
    #141414
  );
  background-position: 0 top;
  background-repeat: repeat-x;
  background-size: 100% 100%;
  bottom: -1px;
  opacity: 1;
  position: relative;
  margin: 0 auto;
  margin-bottom: 4%;
  flex-grow: 1;
  /* --items-per-screen used with flex and max-width determine how many items display on the screen */
  --items-per-screen: 6;
  --slider-index: 0;
  transform: translateX(calc(var(--slider-index) * -100%));
  transition: transform 250ms ease-in-out;
  z-index: 3;
  padding: 0 4%;
  width: 100vw;
}

// Movie images styling
.slider-img {
  aspect-ratio: 16 / 9;
  padding: 0 0.1vw;
  margin: 0.5vw 0;
  cursor: pointer;
  max-width: calc(100% / var(--items-per-screen));
  width: 16.6666667%;
  transition: 0.5s ease-out 0s;
}

.movie-slider-item-btn {
  // display: none;
  color: #fff;
  background: rgb(37, 37, 37);
  position: relative;
}

.fa-plus {
  color: #fff;
}

// .slider-img:hover + .movie-slider-item-btn {
//   display: block;
// }

.slider-img:hover {
  -webkit-transform: scale(1.1);
  -ms-transform: scale(1.1);
  transform: scale(1.1);
  transition: 0.5s ease-out 0.7s;
}

// MOVIES LIST - TEMP STYLING [hidden]
.name,
.duration,
.date {
  display: none;
  z-index: 25;
  padding: 10px;
  background-color: #496583;
}

// Watch list heading
.my-list-heading {
  /* Using calc to dynamically set font size with a min font size of 12px */
  font-size: calc(8px + 1.2vw);
  position: absolute;
  bottom: 14vh;
  padding: 0 4%;
  z-index: 11;
  color: #e5e5e5;
  margin-bottom: 0.6rem;
}

// Movies container Heading
.slider-heading {
  position: relative;
  font-size: calc(8px + 1.2vw);
  z-index: 100;
  color: #e5e5e5;
  margin-bottom: 0.6rem;
  padding: 0 4%;
}

/* Home page footer */
.home-page-footer {
  position: relative;
  max-width: 980px;
  color: grey;
  margin: 0 auto;
  padding: 0 4%;
  z-index: 11;
}

// Home page footer items container
.footer-links {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  margin: 0 0 14px;
  padding: 0;
}

// Home page footer items
.footer-link-item {
  flex-basis: 25%;
  flex: 0 0 33%;
  margin-bottom: 16px;
}

// MEDIA QUERIES
@media screen and (min-width: 1601px) and (max-width: 1920px) {
  .my-list-heading {
    bottom: 10vh;
  }

  .carousel-indicators {
    bottom: 10vh;
  }

  .movies-and-footer-container {
    top: -10vh;
  }
}

@media screen and (min-width: 1281px) and (max-width: 1600px) {
  .home-page-app-wrapper::after {
    height: 58%;
  }

  .top-navbar {
    height: 68px;
    font-size: 14px;
  }

  .watch-list-movie-slider,
  .movie-slider-item {
    --items-per-screen: 5;
  }

  .my-list-heading {
    bottom: 10vh;
  }

  .watch-list-slider-item,
  .slider-img {
    width: 20%;
  }

  .carousel-indicators {
    bottom: 10vh;
  }

  .movies-and-footer-container {
    top: -10vh;
  }
}

@media screen and (min-width: 841px) and (max-width: 1280px) {
  .home-page-app-wrapper::after {
    height: 50.5%;
  }

  .top-navbar {
    height: 68px;
    font-size: 14px;
  }

  .navbar-toggler {
    display: block;
  }

  .top-nav-actions-menu,
  .top-nav-menu-btns {
    display: none;
  }

  .my-list-heading {
    bottom: 9vh;
  }

  .watch-list-movie-slider,
  .movie-slider-item {
    --items-per-screen: 4;
  }

  .watch-list-slider-item,
  .slider-img {
    width: 25%;
  }

  .carousel-indicators {
    bottom: 9vh;
  }

  .movies-and-footer-container {
    top: -9vh;
  }
}

@media screen and (min-width: 481px) and (max-width: 840px) {
  .home-page-app-wrapper::after {
    height: 49%;
  }

  .top-navbar {
    height: 68px;
    font-size: 14px;
  }

  .navbar-toggler {
    display: block;
  }

  .top-nav-menu-btns,
  .top-nav-actions-menu {
    display: none;
  }

  .carousel-indicators {
    bottom: 2vh;
  }

  .my-list-heading {
    bottom: 2vh;
  }

  .watch-list-movie-slider,
  .movie-slider-item {
    --items-per-screen: 3;
  }

  .watch-list-slider-item,
  .slider-img {
    width: 33.33333%;
  }

  .watch-list-my-list-heading {
    font-size: 2vw;
    font-weight: bold;
  }

  .movies-and-footer-container {
    top: -2vh;
  }
}

@media screen and (min-width: 0) and (max-width: 480px) {
  .home-page-app-wrapper::after {
    height: 31.5%;
  }

  .top-navbar {
    height: 68px;
    font-size: 14px;
  }

  .navbar-toggler {
    display: block;
  }

  .top-nav-actions-menu,
  .top-nav-menu-btns {
    display: none;
  }

  .carousel-indicators {
    bottom: 0vh;
  }

  .my-list-heading {
    bottom: 2vh;
  }

  .watch-list-movie-slider,
  .movie-slider-item {
    --items-per-screen: 2;
  }

  .watch-list-slider-item,
  .slider-img {
    width: 50%;
  }

  .movies-and-footer-container {
    top: -2vh;
  }
}
</style>
