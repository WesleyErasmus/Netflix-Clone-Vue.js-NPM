<template>
  <div class="home">
    <!-- Home page wrapper -->
    <div class="home-page-app-wrapper">
      <!-- NAVBAR COMPONENT -->
      <TopNavBarComponent />
      <!-- NAVBAR COMPONENT -->

      <!-- HERO IMAGE COMPONENT -->
      <HeroImageComponent />
      <!-- HERO IMAGE COMPONENT -->

      <!-- Used to simplify screen responsiveness -->
      <div class="movies-and-footer-container">
        <!-- Watch-list section heading -->
        <h1 class="my-list-heading">My Watch List</h1>

        <!-- Watch list section wrapper -->
        <section id="watchList" class="movie-slider-container row">
          <!-- Movie slider nesting all "looped-over" slider items -->
          <!-- Slider card items -->
          <div class="card" v-for="(movie, id) in watchList" :key="id">
            <!-- Looping though link using movie id(index) to render a unique images for each movie instance -->
            <img
              class="card-img-top"
              :src="'https://picsum.photos/200/300?' + movie.id"
            />

            <!-- Adding coming soon banner conditionally to all "coming soon movies"  -->
            <div
              v-if="movie.is_coming_soon == 1"
              :class="{
                comingSoonThumbnailBanner: movie.is_coming_soon == 1,
              }"
            >
              COMING SOON
            </div>

            <!-- Watch-list card body -->
            <div class="card-body">
              <!-- Btn used to remove movies from the watch-list -->
              <button
                class="watch-list-add-btn"
                v-on:click="removeMovieFromWatchList(movie)"
              >
                <!-- FA tick icon -->
                <i class="fa-solid fa-check"></i>
              </button>

              <div class="card-inner-body">
                <!-- Movie card title -->
                <div class="card-title">{{ movie.name }}</div>

                <div v-show="movie.showHide">
                  <!-- Movie duration and release date -->
                  <div class="card-duration-and-release-date">
                    <div>{{ movie.duration }}m</div>
                    <div>{{ movie.release_date }}</div>
                  </div>

                  <div class="rating">Rating: {{ movie.rating }} / 10</div>
                  <!-- Movie description -->
                  <div class="card-description">{{ movie.description }}</div>

                  <!-- Movie actors -->
                  <h6 class="actor-heading">Cast:</h6>
                  <!-- V-for to loop through the actors nested array -->
                  <div v-for="actor in movie.actors" :key="actor.id">
                    <!-- Actor names -->
                    <div class="actor-name">
                      {{ actor.first_name }} {{ actor.last_name }}
                    </div>
                  </div>
                </div>
                <!-- End of v-show -->
                <button
                  class="card-show-more-btn"
                  v-on:click="movie.showHide = !movie.showHide"
                >
                  <i class="fa-solid fa-chevron-down"></i>
                </button>
              </div>
              <!-- end of inner body -->
            </div>
          </div>
          <!-- End of movie slider container -->
        </section>
        <!-- End of watch-list section -->

        <!-- MOVIES CONTAINER -->
        <!-- Movies container heading -->
        <h1 class="slider-heading">Watch the Latest Movies and TV Shows</h1>
        <!-- Movie Slider container -->
        <section class="movie-slider-container row">
          <!-- Movie item -->
          <div class="card" v-for="movie in movies" v-bind:key="movie.id">
            <!-- Looping though link using movie id(index) to render a unique images for each movie instance -->
            <img
              class="card-img-top"
              :src="'https://picsum.photos/200/300?' + movie.id"
            />

            <!-- Coming soon banner -->
            <div
              v-if="movie.is_coming_soon == 1"
              :class="{
                comingSoonThumbnailBanner: movie.is_coming_soon == 1,
              }"
            >
              COMING SOON
            </div>

            <!-- Movie card body -->
            <div class="card-body">
              <!-- Btn to add movies to the watch-list -->
              <button
                class="watch-list-add-btn"
                v-on:click="addMovieToWatchList(movie)"
              >
                <i class="fa-solid fa-plus"></i>
              </button>
              <div class="card-inner-body">
                <!-- Movie card title -->
                <div class="card-title">{{ movie.name }}</div>

                <div v-show="movie.showHide">
                  <!-- Movie duration and release date -->
                  <div class="card-duration-and-release-date">
                    <div>{{ movie.duration }}m</div>
                    <div>{{ movie.release_date }}</div>
                  </div>

                  <div class="rating">Rating: {{ movie.rating }} / 10</div>
                  <!-- Movie description -->
                  <div class="card-description">{{ movie.description }}</div>
                  <!-- Movie actors -->
                  <h6 class="actor-heading">Cast:</h6>
                  <!-- V-for to loop through the actors nested array -->
                  <div v-for="actor in movie.actors" :key="actor.id">
                    <!-- Actor names -->
                    <div class="actor-name">
                      {{ actor.first_name }} {{ actor.last_name }}
                    </div>
                  </div>
                </div>

                <!-- End of v-show -->
                <button
                  class="card-show-more-btn"
                  v-on:click="movie.showHide = !movie.showHide"
                >
                  <i class="fa-solid fa-chevron-down"></i>
                </button>
              </div>
              <!-- end of inner body -->
            </div>
          </div>
          <!-- End of movie card -->
        </section>
        <!-- End of movies section -->

        <!-- Toast component for messages of duplicate movies and max movies in watch list -->
        <ToastComponent />

        <!-- FOOTER COMPONENT -->
        <FooterComponent />
        <!-- FOOTER COMPONENT -->
      </div>
      <!-- End of Movies and Footer container -->
    </div>
    <!-- End of home-page-app-wrapper -->
  </div>
</template>

<script>
// CodeSpace Movies API import
import axios from "axios";
// IMPORTED COMPONENTS

// Top Navbar component import
import TopNavBarComponent from "../components/TopNavBarComponent.vue";

// Hero Image component import
import HeroImageComponent from "../components/HeroImageComponent.vue";

// Footer component import
import FooterComponent from "../components/FooterComponent.vue";

// Toast import
import ToastComponent from "../components/ToastComponent.vue";

export default {
  components: {
    TopNavBarComponent,
    HeroImageComponent,
    FooterComponent,
    ToastComponent,
  },
  data() {
    return {
      showHide: true,
      watchList: [],
      movies: "null",
      actors: [],
    };
  },
  methods: {
    // Duplicate movie in watch list toast
    duplicateMovieAlert() {
      var x = document.getElementById("snackbar");
      x.className = "show";
      setTimeout(function () {
        x.className = x.className.replace("show", "");
      }, 3000);
    },

    // Watch list movie limit toast
    watchListFullAlert() {
      var x = document.getElementById("snackbar2");
      x.className = "show";
      setTimeout(function () {
        x.className = x.className.replace("show", "");
      }, 3000);
    },

    // Add movies to watch-list function
    addMovieToWatchList(movie) {
      // Ensure that the watch-list array is not empty
      if (!this.watchList) {
        return;
      }

      // Prevents duplicate movies in the watchList
      if (this.watchList.some((e) => e == movie)) {
        this.duplicateMovieAlert();
        return;
      }

      // Prevents more than 20 movies from being added to the watch-list array
      if (this.watchList.length >= 20) {
        this.watchListFullAlert();
        return;
      }

      // Adding movies to the front of the watchList
      this.watchList.unshift(movie);

      // Save to local storage function
      this.saveMovieToLocalStorage();

      console.log(this.watchList);
    },

    // Remove movies from watch-list function
    removeMovieFromWatchList(movie) {
      const remove = this.watchList.filter((i) => i != movie);

      this.watchList = remove;

      this.saveMovieToLocalStorage();
    },

    // Save movies to watch-list function
    saveMovieToLocalStorage() {
      const parsed = JSON.stringify(this.watchList);
      localStorage.setItem("movies-in-watch-list", parsed);
    },
  },

  mounted() {
    // Finally display local storage movies in the DOM
    if (localStorage.getItem("movies-in-watch-list")) {
      try {
        this.watchList = JSON.parse(
          localStorage.getItem("movies-in-watch-list")
        );
      } catch (e) {
        localStorage.removeItem("movies-in-watch-list");
      }
    }
    // CodeSpace API import using axios
    axios
      .get("https://project-apis.codespace.co.za/api/movies")
      .then((response) => {
        this.movies = response.data.data;
        console.warn(response);
      });
  },
};
</script>

<style lang="scss">
// Google font import
@import url("https://fonts.googleapis.com/css2?family=Arimo&family=Open+Sans&display=swap");
// font-family: 'Arimo', sans-serif;
// font-family: 'Open Sans', sans-serif;

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

// Universal link hover styling
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

// Pseudo element used to cover image
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

// Watch list and movies heading heading
.my-list-heading,
.slider-heading {
  /* Using calc to dynamically set font size with a min font size of 12px */
  font-size: calc(9px + 0.6vw);
  position: relative;
  bottom: 0vw !important;
  padding: 0 4%;
  z-index: 11;
  color: #e5e5e5;
  margin-bottom: 0rem;
  padding-bottom: 0;
  text-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
}

// Watch-list remove btn
.fa-check {
  font-size: calc(12px + 0.6vw);
  color: #e5e5e5;
  text-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
}
.fa-check:hover {
  opacity: 0.75;
}

// Container for Movies and footer - used to align all content below the static hero image
.movies-and-footer-container {
  position: relative;
  top: -20vh;
}

// Styling and layout of looped through movies
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
  bottom: 6px;
  opacity: 1;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  position: relative;
  margin: 0 4.2%;
  margin-bottom: 3%;
  z-index: 3;
}

// Movies card
.card {
  margin-top: 2%;
  background: #141414;
  border-left: 1px transparent #141414;
  border-right: 1px transparent #141414;
  border-top: none;
  border-bottom: none;
  border-radius: 2px;
  padding: 0 0.1vw;
  width: 16.6666667%;
  margin-bottom: 0;

}

.card:hover {
  position: relative;
  -webkit-transform: scale(1.01);
  -ms-transform: scale(1.01);
  transform: scale(1.01);
 
}

// Movies card image
.card-img-top {
  aspect-ratio: 16 / 9;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  cursor: pointer;
}

// Banner added to all movies that are coming soon
.comingSoonThumbnailBanner {
  position: absolute;
  font-size: calc(7px + 0.2vw);
  font-weight: bold;
  color: #e5e5e5f4;
  background: #e50914df;
  padding: 0.2vw 0.75vw;
  min-width: 10%;
}

.card-show-more-btn {
  margin: 3px;
  margin-bottom: 5px;
  background-color: transparent;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid grey;
}

.card-show-more-btn:hover {
  border: 1px solid #fff;
}

.fa-chevron-down {
  z-index: 25;
  font-size: calc(9px + 0.2vw);
  color: #fff;
}

.card-show-more-btn :hover {
  opacity: 0.75;
  transform: scale(1.1);
}

// Movie card body
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
  padding: 0.3vw;
  margin: 2px;
  position: relative;
}

.card-inner-body {
  // position:unset;
  width: 100%;
  z-index: 20;
  background: #141414;
  padding: 0.45vw;
}

// Movie card title
.card-title {
  color: rgba(255, 255, 255, 0.799);
  font-size: calc(8px + 0.4vw);
  margin: 0;
  margin-bottom: 0;
  text-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
}

// Movie card body text size
.card-text {
  font-size: calc(8px + 0.3vw);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: rgba(244, 244, 244, 0.87);
  margin-bottom: 0.35vw;
}

// Movie card rating
.rating {
  font-size: calc(8px + 0.3vw);
  color: grey;
}

.card-duration-and-release-date {
  font-size: calc(8px + 0.3vw);
  color: rgba(199, 199, 199, 0.87);
  display: flex;
  justify-content: space-between;
}

// Movie card description
.card-description {
  font-size: calc(8px + 0.4vw);
  overflow: hidden;
  color: rgb(211, 211, 211);
  transition: all 0.3s ease-out 0.1s;
  // padding: 0.35vw;
}

// Movie card actor heading
.actor-heading {
  font-size: calc(10px + 0.3vw);
  color: rgba(239, 237, 237, 0.649);
  margin-bottom: 0;
  padding-bottom: 0;
  padding-top: 0.25vw;
  margin-top: 0.5vw;
  border-top: 1px solid rgba(239, 237, 237, 0.649);
}

// Movie card actor names
.actor-name {
  font-size: calc(9px + 0.2vw);
  color: #575757;
  color: rgba(108, 108, 255, 0.881);
}

// Add to watch list btn
.watch-list-add-btn {
  position: relative;
  float: right;
  color: rgb(199, 199, 199);
  background: none;
  border: none;
  z-index: 25;
}
// Watch list plus icon
.fa-plus {
  margin-top: 3px;
  font-size: calc(22px + 0.5vw);
  // font-size: calc(9px + 0.2vw);
  text-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  font-weight: 500;
}
.fa-plus:hover {
  opacity: 0.75;
}

// MEDIA QUERIES
@media screen and (min-width: 1601px) and (max-width: 1920px) {
  .my-list-heading {
    bottom: 10vh;
  }

  .movies-and-footer-container {
    top: -23vh;
  }

  .card {
    width: 16.666666667%;
  }

  .coming-soon-thumbnail-banner {
    font-size: calc(5px + 0.3vw);
  }
}

@media screen and (min-width: 1281px) and (max-width: 1600px) {
  .home-page-app-wrapper::after {
    height: 58%;
  }

  .card {
    width: 20%;
  }

  .coming-soon-thumbnail-banner {
    font-size: calc(6px + 0.3vw);
    bottom: 39%;
  }

  .my-list-heading {
    bottom: 10vh;
  }

  .watch-list-slider-item,
  .slider-img {
    width: 20%;
  }

  .movies-and-footer-container {
    top: -10vh;
  }
}

@media screen and (min-width: 841px) and (max-width: 1280px) {
  .home-page-app-wrapper::after {
    height: 50.5%;
  }

  .my-list-heading {
    bottom: 9vh;
  }

  .card {
    width: 25%;
  }

  .coming-soon-thumbnail-banner {
    font-size: calc(6px + 0.33vw);
    bottom: 38%;
  }

  .watch-list-slider-item,
  .slider-img {
    width: 25%;
  }

  .movies-and-footer-container {
    top: -9vh;
  }
}

@media screen and (min-width: 481px) and (max-width: 840px) {
  .home-page-app-wrapper::after {
    height: 49%;
  }

  .my-list-heading {
    bottom: 2vh;
  }

  .card {
    width: 33.333333%;
  }

  .coming-soon-thumbnail-banner {
    font-size: calc(5px + 0.4vw);
    bottom: 38%;
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

  .my-list-heading {
    bottom: 2vh;
  }

  .coming-soon-thumbnail-banner {
    font-size: calc(5px + 0.1vw);
    bottom: 42%;
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
