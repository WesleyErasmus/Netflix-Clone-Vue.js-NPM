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
                  class="home-gage-app-logo"
                  src="../assets/netflix-logo.png"
                  alt="Netflix Logo"
                />
                <!-- Nav buttons, Home, Watch-list, Coming Soon -->
                <ul class="top-nav-menu-btns">
                  <li class="top-nav-btn top-nav-home-btn">Home</li>
                  <li class="top-nav-btn top-nav-tv-shows-btn">Watch List</li>
                  <li class="top-nav-btn top-nav-movies-btn">Coming Soon</li>
                </ul>
              </div>
              <!-- Nav buttons, Search, User Account -->
              <div class="top-nav-actions-menu">
                <div class="top-nav-action-item">
                  <div class="-top-search-bar">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="search-icon"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M13 11C13 13.7614 10.7614 16 8 16C5.23858 16 3 13.7614 3 11C3 8.23858 5.23858 6 8 6C10.7614 6 13 8.23858 13 11ZM14.0425 16.2431C12.5758 17.932 10.4126 19 8 19C3.58172 19 0 15.4183 0 11C0 6.58172 3.58172 3 8 3C12.4183 3 16 6.58172 16 11C16 11.9287 15.8417 12.8205 15.5507 13.6497L24.2533 18.7028L22.7468 21.2972L14.0425 16.2431Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div class="top-nav-action-item">
                  <!-- Display username -->
                  <div class="top-nav-user-menu display-name"></div>
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
                      <a class="nav-link active" aria-current="page" href="#"
                        >Home</a
                      >
                    </li>
                    <li class="nav-item">
                      <a class="nav-link active" aria-current="page" href="#"
                        >Watch List</a
                      >
                    </li>
                    <li class="nav-item">
                      <a class="nav-link active" aria-current="page" href="#"
                        >Coming Soon</a
                      >
                    </li>
                    <li class="nav-item">
                      <a class="nav-link active" aria-current="page" href="#"
                        >Sign Out</a
                      >
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#"></a>
                    </li>
                  </ul>
                  <!-- Offcanvas search bar -->
                  <form class="d-flex" role="search">
                    <input
                      class="form-control me-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <button class="btn btn-outline-success" type="submit">
                      Search
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <!-- End of Bootstrap Navbar -->

        <!-- Home page hero image carousel -->
        <section class="hero-image-trailer-wrapper">
          <!-- BOOTSTRAP CAROUSEL -->
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
                <!-- Attempt to push movies to the watch-list array -->
                <!-- <div class="output" v-for="item in movies" v-bind:key="item.id">
                  {{ watchList }}
                </div> -->

                <!-- WATCH-LIST PLACEHOLDER IMAGES -->
                <img
                  class="watch-list-slider-item movie-thumbnail-placeholder"
                  src="https://occ-0-6161-32.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVIROzcqdItj5G9tBvl7dEXkUHGYaKBTLREXzIXnZtTu61dvtMyQkwtbLHvmZ3krX8El84GfXZmIRIg5ybGIk4ydFbmEMYPNstvhsO0Nr4GX6i73RSZ6YpyFz85GWztIqNFkSBs8ozAFgG-7REV0ufj2ebVxYCH9k6oc5fx1p3CPYLzVl6CPrvkc0OK1mY7bc4pR.jpg?r=8ba"
                  alt=""
                />

                <img
                  class="watch-list-slider-item movie-thumbnail-placeholder"
                  src="https://occ-0-6161-32.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYzuBN13d-AEr2ErlKQygn1XCWhalBpWW7DFTXwufS1rbaiqcwZOBQMQ86J8YOGb1JiNoBAYBq9Tcce1c0m_57XSGACsoP2Y2XNvXHbr6Sx9_GLhgH7_UdFe-wW070q8kcuWCB-4Vb9hwKHkCK8ZbNY-j-oSYEWttUMSZ_S3GzQcQzeaK8jwIIoAaErV1Vx0NPgh.jpg?r=87e"
                  alt=""
                />

                <img
                  class="watch-list-slider-item movie-thumbnail-placeholder"
                  src="https://occ-0-6161-32.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbg2X9OnoZpNQHEZDQaQLRCdzvM1cuhy2a2FyiCJfp3Q_dcmHjqpG37rOUoLn3DvZ0KmA7mAyaMQCKotn6TLwYxAn-njKYPFaAKtzVJ3ewVl2OwULk8Pje4fmn4Ty2q09OT045TraKrmgw7Mr4kWYcmiM7wC71p132Vd7sgYl0eZfdmbWj0jnhD57aEH2uwsLYVLKXoxfZtcE34bouxwxWkCYmM8Nni-.jpg?r=07c"
                  alt=""
                />

                <img
                  class="watch-list-slider-item movie-thumbnail-placeholder"
                  src="https://occ-0-6161-32.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABapf4sMxWAFKjSdpJ8SdCVxHOz5IbPTqpOeK-5DXQUHzWxh54dqr5OVSkMFSR7z5b_vFVl3eXpGgKgDSRdR_35tPw2YL-JOtRJz1-Y9pC9V1AiyftmFnEcW1PAqMwc7Mw_lR.jpg?r=6db"
                  alt=""
                />

                <img
                  class="watch-list-slider-item movie-thumbnail-placeholder"
                  src="https://occ-0-6161-32.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABepImuVeAbB-2OS9z4N_twdJuQJDZsmPJCexriArdIexrMw72WzF8nPEHj--38DJZ6j4q_wDmtPPitZLsGwNHovQwMWWbXRc9RA.jpg?r=425"
                  alt=""
                />

                <img
                  class="watch-list-slider-item movie-thumbnail-placeholder"
                  src="https://occ-0-6161-32.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXYDVLRSk4BcB4OLG79HPC1CvCBMC_voQnycPJeYjIZnoXsxtJRDk3S3VH1tDJhtcKYwuyc9Hunz_5P15IAJfFn3Cqdwt_6ER3E.jpg?r=69f"
                  alt=""
                />

                <img
                  class="watch-list-slider-item movie-thumbnail-placeholder"
                  src="https://occ-0-6161-32.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXJPS7-_hglizkr4cnA8Cu4hvF548cm8Jxr_rrPnKr0UYFjgPWE3sIcRGo2oIfcsa8kmHKi1TNY7pFK5UDkahBRy4fJSqaEMl6jVLs2xoiVqWocloJAkFeGeucYBN8aRflzWpgxq-A.jpg?r=460"
                  alt=""
                />

                <img
                  class="watch-list-slider-item movie-thumbnail-placeholder"
                  src="https://occ-0-6161-32.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZfLMIaq3bipZe5d17IyLZ8qwQ78xgg3MuAIvDNSm2ndWj54Ho-6iUX175_MW-VrcSDGxtnpPQLmcCeLc2fhkUx4D_8uKgZ9JUXD4g3T_dDJDE-N9RQKahlBL2qxC8zNmQJE.jpg?r=ef3"
                  alt=""
                />

                <img
                  class="watch-list-slider-item movie-thumbnail-placeholder"
                  src="https://occ-0-6161-32.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZg50S25g0OT8aPkNFc9AhRTP5Sw4KlHxavfsZuaihLV_1HorGinhZ6UncJLq2WXDRAhNZ1wrHes7EquI2EK6U-UHd1qkOO9r0oRs0p5_jJ1ret2EyLgaq8nVI92RZ76QUpoSVhIWNlo9F2kcsUyWK54hFf1K-0ONsM.jpg?r=044"
                  alt=""
                />

                <img
                  class="watch-list-slider-item movie-thumbnail-placeholder"
                  src="https://occ-0-6161-32.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRq9BeDgg3rr9r8BdqEITzau5wqoS9mdGqXdmQBqIovv0_BQjsP5SQP3GaL6HICugU3UIjd2rzZO3ZTPwvSdGU-K5ZLSm60_gn7FVQADK85mSMCxaR6sjfzb1lu0wSmo0xdy.jpg?r=a37"
                  alt=""
                />

                <img
                  class="watch-list-slider-item movie-thumbnail-placeholder"
                  src="https://occ-0-6161-32.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdvhaK3Zv1B4kxZrbCS4RPKqeZcv06rch2vCn_8H9D2j_kKoZQi6hiIrEZf4gfcgQYWm2vV5XstsmDQSxSfHl9yRdt2gQVOi31p5Ro4lwW49Y9s62Cf-gPwUuf_IC0wr8YRO.jpg?r=b4e"
                  alt=""
                />
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
              <!-- Movie img -->
              <img
                class="slider-img"
                :class="{ watchListSliderItem: poof }"
                :src="item.image"
                alt="Movie Poster"
              />
              <!-- Add to watch-list button -->
              <button v-on:click="(poof = !poof), addToWatchList">Add</button>
              <!-- Movie title -->
              <div class="name">Title: {{ item.name }}</div>
              <!-- Movie description -->
              <div class="desc">Description: {{ item.description }}</div>
              <!-- Movie release date -->
              <div class="date">Release Date: {{ item.release_date }}</div>
            </span>

            <!-- <span class="movie-slider-item"  v-for="item in movies"
              v-bind:key="item.id">
              
              <img :src="item.image" class="slider-img" alt="Movie Poster" />

              <div >
                <button href="#" class="btn btn-primary">Add to Watch List</button>
                <h5 >{{ item.name }}</h5>
                <div >
                  Duration: 
                  {{ item.duration }}
                </div>
                <div class="card-text">
                  Released: 
                  {{ item.release_date }}
                </div>
                
              </div>
            </span> -->
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
      watchList: [],
      // Poof used to test functions
      poof: false,
      movies: [
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
          watchList: true,
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
          watchList: true,
        },
        {
          id: 82,
          name: "Dr. Deontae Feeney MD",
          duration: "145",
          image: "https://picsum.photos/200/300",
          description:
            "Illum debitis consequatur enim expedita non neque ea. Ut soluta vel doloremque nisi. Tenetur saepe iure vero voluptatibus illo quis modi. Velit minima ea sed dolorem. Saepe ducimus in quas sit assumenda odio qui.",
          release_date: "2023-02-16",
          is_coming_soon: 1,
          rating: 5,
          watchList: true,
        },
        {
          id: 89,
          name: "Ms. Era Davis",
          duration: "186",
          image: "https://picsum.photos/200/300",
          description:
            "Ullam repellendus vero assumenda nulla sit est. Incidunt odio eaque adipisci ut beatae. Eaque minima ut ut id.",
          release_date: "2022-03-16",
          is_coming_soon: 1,
          rating: 7,
          watchList: true,
        },
      ],
    };
  },

  // methods: {
  // IN PROGRESS -- Method to push movies to watch-list-array
  // addToWatchList() {
  //   this.$set(this.item.image);
  //   // this.watchList.push(item);
  // },
  // },
  // CodeSpace API import using axios
  // mounted() {
  //   axios
  //     .get("https://project-apis.codespace.co.za/api/movies")
  //     .then((response) => {
  //       this.movies = response.data.data;
  //       console.warn(response);
  //     });
  // },
};
</script>

<style lang="scss">
// Test style for Poof - method testing
.vanish {
  visibility: hidden;
}

// Google font import
@import url("https://fonts.googleapis.com/css2?family=Arimo&family=Open+Sans&display=swap");
// Font-families
/* font-family: 'Arimo', sans-serif;
font-family: 'Open Sans', sans-serif; */

.home {
  // ???
}

// CSS root variables
:root {
  --primary-color: #e50914;
  --transparent-black-bg: rgba(0, 0, 0, 0.75);
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
}

// Styling for Navbar search icon and account holder name
.top-nav-actions-menu {
  height: 100%;
  right: 4%;
  top: 0;
}

// Styling for Navbar search icon and account holder name
.top-nav-action-item {
  display: block;
  margin-left: 15px;
}

// Top nav username dropdown
.sign-out-dropdown {
  border-color: #fff transparent transparent;
  border-style: solid;
  border-width: 6px 6px 0;
  margin-left: 6px;
  position: relative;
  top: 6px;
}

.home-page-sign-out-btn {
  background: rgba(0, 0, 0, 0.75);
  color: #e5e5e5;
  width: 70px;
  text-decoration: underline;
  z-index: 1;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  position: absolute;
  right: -3vw;
  background: rgba(0, 0, 0, 0.75);
  padding: 1vw 2vw;
  display: none;
  z-index: 1;
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
}

// Offcanvas search button styling
.btn-outline-success {
  color: #fff;
  border-color: #fff;
}

// HOME PAGE CAROUSEL STYLING
// Clickable carousel indicators. Indicating number of slides and slide position (located next to watch-list heading)
// #carouselExampleCaptions {
//   z-index: 100;
// }

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
  background: #e50914d1;
  position: absolute;
  text-align: center;
  padding: 0.6% 0.8%;
  font-size: calc(12px + 3.2vw);
  margin: 0;
  font-weight: bold;
  bottom: 51%;
  left: 4%;
  opacity: 0.75;
  z-index: 11;
  border-radius: 0.15rem;
}

// Container for Movies and footer - used to align all content below the static hero image
.movies-and-footer-container {
  position: relative;
  top: -14vh;
}

// MOVIES LIST - TEMP STYLING [hidden]
.name,
.desc,
.date {
  display: none;
  padding: 10px;
  // background-color: #496583;
}

// MOVIES LIST - TEMP STYLING [hidden]
.date {
  margin-bottom: 15px;
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

// Watch list movie item
.watch-list-slider-item,
// watchListSliderItem class used to test methods
.watchListSliderItem {
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
