<template>
  <div class="home">
    <div class="home-page-app-wrapper">
      <!--REMOVED COMMENTED OUT CSS -- Transparent background giving a dark cinema effect -->
      <!-- <div class="cinema-dark-room-effect"> -->
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
                ></h5>
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
                  Some representative placeholder content for the second slide.
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
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
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
              <div
                class="watch-list-slider-item"
                v-for="(movie, i) in watchList"
                :key="i"
              >
                <!-- {{ movie }} -->
                <img
                  :src="movie.image"
                  class="card-img-top"
                  alt="Movie Poster"
                />
                <div class="card-body">
                  <button
                    class="watch-list-add-btn"
                    v-on:click="removeFromWatchList()"
                  >
                    <i class="fa-solid fa-ban"></i>
                  </button>
                  <div class="card-title watch-list-card-title">
                    {{ movie.name }}
                  </div>
                  <div class="card-text">
                    <div>{{ movie.duration }} min</div>
                  </div>
                </div>
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
        <section class="movie-slider-container row">
          <!-- Movie item -->

          <div class="card" v-for="item in movies" v-bind:key="item.id">
            <img :src="item.image" class="card-img-top" alt="Movie Poster" />

            <div class="card-body">
              <button
                class="watch-list-add-btn"
                v-on:click="addToWatchList(item), maxLength(movie)"
              >
                <i class="fa-solid fa-plus"></i>
              </button>
              <div class="card-title">{{ item.name }}</div>
              <div class="rating">Rating: {{ item.rating }} / 10</div>
              <div class="card-text">
                <div>{{ item.duration }} min</div>

                <div>{{ item.release_date }}</div>
              </div>
              <div class="card-description">{{ item.description }}</div>
            </div>
          </div>
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
      <!-- </div> -->
      <!-- End of Cinema dark room effect container -->
    </div>
    <!-- End of home-page-app-wrapper -->
  </div>
  <!-- <About /> -->
</template>

<script>
// CodeSpace API import
import axios from "axios";
// import About from "./AboutView.vue";
export default {
  components: {
    // About,
  },
  data() {
    return {
      scTimer: 0,
      scY: 0,
      watchList: [],
    };
  },

  methods: {
    watchListExists() {
      if (localStorage.getItem("watch-key")) {
        return true;
      } else {
        return false;
      }
    },

    // method takes in an argument of a movie object
    addToWatchList(movie) {
      if (this.watchListExists()) {
        let jsonWatchList = localStorage.getItem("watch-key");
        this.watchList = JSON.parse(jsonWatchList);

        // push new array on to watchList array
        this.watchList.push(movie);

        console.log(this.watchList);

        // convert all data inside watchList variable to JSON
        jsonWatchList = JSON.stringify(this.watchList);

        localStorage.setItem("watch-key", jsonWatchList);
      } else {
        this.watchList.push(movie);

        console.log(this.watchList);

        // convert all data inside watchList variable to JSON
        let jsonWatchList = JSON.stringify(this.watchList);

        localStorage.setItem("watch-key", jsonWatchList);
      }

      // if (this.watchList.length > 20) {
      //   this.watchList.unshift(movie);
      // }
    },

    // maxLength(movie) {
    //   if (this.watchList.length > 20) {
    //     this.watchList.unshift(movie);
    //   }
    // },

    removeFromWatchList(movie) {
      // this.watchList.splice(this.movie);

      //   // Removes from end
      //   // this.watchList.splice(this.watchList.indexOf(movie), 1);

      //   // Removes from start
      this.watchList.splice(movie, 1);

      console.log(this.watchList);

      localStorage.setItem("watch-key", JSON.stringify(this.watchList));
    },

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
    if (this.watchListExists()) {
      let jsonWatchList = localStorage.getItem("watch-key");
      this.watchList = JSON.parse(jsonWatchList);
    }
    // CodeSpace API import using axios
    axios
      .get("https://project-apis.codespace.co.za/api/movies")
      .then((response) => {
        this.movies = response.data.data;
        console.warn(response);
      });

    // Scroll to top Home button
    window.addEventListener("scroll", this.handleScroll);
  },
};
</script>

<style lang="scss">
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
  border: none;
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
  transition: transform 450ms ease-in-out;
}

// Watch list movie item
.watch-list-slider-item {
  background: rgba(0, 0, 0, 0.75);
  aspect-ratio: 16 / 9;
  padding: 0 0.1vw;
  display: flex;
  flex-direction: column;
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

.movie-slider-container {
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
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  flex-wrap: wrap;
  position: relative;
  margin: 0 3.5%;
  margin-bottom: 4%;
  z-index: 3;
}

.card {
  background: hsla(0, 0%, 0%, 0.5);
  border-radius: 0.15rem;
  padding: 0 0.1vw;
  margin: 0.25vw 0.25vw;
  width: 16.6666667%;
  margin: 0 -0.25vw;
  margin-bottom: 2%;
  transition: all 0.3s ease-out 0.1s;
}

.card-img-top {
  aspect-ratio: 16 / 9;
  padding: 0 0.1vw;
  border-radius: 0.15rem;
  cursor: pointer;
}

.card-body {
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
  padding: 0.1vw 0.2vw;
  padding: 0.75vw;
  // display: none;
}

.card:hover {
  z-index: 20;
  -webkit-transform: scale(1.1);
  -ms-transform: scale(1.1);
  transform: scale(1.1);
  transition: all 0.5s ease-out 0.6s;
}

// .card:hover .card-description {
//   z-index: 20;
//   display: block;
//   transition: all 0.5s ease-out 0.6s;
// }

.watch-list-add-btn {
  position: relative;
  float: right;
  color: #fff;
  background: none;
  border: none;
}

// <i class="fa-solid fa-ban"></i>
.fa-plus,
.fa-ban {
  font-size: calc(14px + 0.6vw);
}

.card-title {
  color: #fff;
  font-size: calc(8px + 0.5vw);
  font-weight: 600;
  margin-bottom: 0;
}

.card-text {
  font-size: calc(8px + 0.3vw);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #fff;
  margin-bottom: 0.35vw;
}

.rating {
  font-size: calc(8px + 0.3vw);
  color: grey;
}

.card-description {
  font-size: calc(9px + 0.4vw);
  overflow: hidden;
  color: grey;
  display: none;
  transition: all 0.3s ease-out 0.1s;
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

  .card {
    width: 16.666666667%;
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

  .card {
    width: 20%;
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

  .card {
    width: 25%;
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

  .card {
    width: 33.333333%;
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
    --items-per-screen: 3;
  }

  .card {
    width: 33.333333%;
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
