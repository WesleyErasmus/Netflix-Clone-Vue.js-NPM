<template>
  <div class="comingSoon">
    <!-- NAVBAR COMPONENT -->
    <TopNavBarComponent />
    <!-- NAVBAR COMPONENT -->

    <!-- Back arrow link to home page -->
    <router-link :to="{ path: '/' }">
      <i id="back-arrow" class="fa-solid fa-arrow-left"></i>
    </router-link>

    <!-- CAROUSEL COMPONENT -->
    <CarouselComponent />
    <!-- CAROUSEL COMPONENT -->

    <!-- Width and length container for sizing -->
    <div class="wlc">
      <!--Coming soon Movie container -->
      <div class="coming-soon-container">
        <!-- Coming soon page header -->
        <h1 class="coming-soon-movies">Coming Soon</h1>

        <!-- Movies container -->
        <section class="movie-slider-container row">
          <!-- Movie card -->
          <div
            class="card"
            v-for="movie in comingSoonList"
            v-bind:key="movie.id"
          >
            <!-- Card image -->
            <!-- Looping though link using movie id(index) to render a unique images for each movie instance -->
            <img
              class="card-img-top"
              :src="'https://picsum.photos/200/300?' + movie.id"
            />

            <!-- Coming soon banner for movies that are coming soon -->
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
      </div>
      <!-- End of movies section -->

      <!-- Toast component for messages of duplicate movies and max movies in watch list -->
      <ToastComponent />

      <!-- FOOTER COMPONENT -->
      <FooterComponent />
      <!-- FOOTER COMPONENT -->
    </div>
    <!-- End of width and length container -->
  </div>
</template>

<script>
// CodeSpace Movies API import
import axios from "axios";

// Top Navbar component import
import TopNavBarComponent from "../components/TopNavBarComponent.vue";

// Hero carousel component import
import CarouselComponent from "../components/CarouselComponent.vue";

// // Footer component import
import FooterComponent from "../components/FooterComponent.vue";

// Toast import
import ToastComponent from "../components/ToastComponent.vue";

export default {
  components: {
    TopNavBarComponent,
    CarouselComponent,
    FooterComponent,
    ToastComponent,
  },
  data() {
    return {
      watchList: [],
      movies: [],
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

      // Function for saving movies to local storage
      this.saveMovieToLocalStorage();

      console.log(this.watchList);
    },

    // Function for removing movies from the watch-list
    removeMovieFromWatchList(movie) {
      const remove = this.watchList.filter((i) => i != movie);

      this.watchList = remove;

      this.saveMovieToLocalStorage();
    },

    // Function for saving movies to local storage
    saveMovieToLocalStorage() {
      const parsed = JSON.stringify(this.watchList);
      localStorage.setItem("movies-in-watch-list", parsed);
    },
  },
  computed: {
    // Function for filtering out all coming soon 1 movies
    comingSoonList() {
      return this.movies.filter((movie) => movie.is_coming_soon == "1");
    },
  },
  mounted() {
    // FInally display local storage movies in the dom
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
/* Top page back button */
#back-arrow {
  position: absolute;
  z-index: 20;
  top: 4vw;
  margin: 0 4%;
}

/* Used for spacing */
.wlc {
  position: relative;
  top: -9vw;
}

/* Coming soon movies container */
.coming-soon-container {
  position: relative;
  top: -2vw;
}

/* Coming soon heading */
.coming-soon-movies {
  /* Using calc to dynamically set font size with a min font size of 12px */
  font-size: calc(8px + 1vw);
  position: relative;
  padding: 0 4%;
  z-index: 11;
  color: #e5e5e5;
}

// MEDIA QUERIES
@media screen and (min-width: 1601px) and (max-width: 1920px) {
  //#
}

@media screen and (min-width: 1281px) and (max-width: 1600px) {
  /* Top page back button */
  #back-arrow {
    top: 5vw;
    font-size: 2rem;
  }
}

@media screen and (min-width: 841px) and (max-width: 1280px) {
  /* Top page back button */
  #back-arrow {
    top: 7vw;
    font-size: 1.8rem;
  }
}

@media screen and (min-width: 481px) and (max-width: 840px) {
  /* Top page back button */
  #back-arrow {
    top: 11vw;
    font-size: 1.8rem;
  }
}

@media screen and (min-width: 0) and (max-width: 480px) {
  /* Top page back button */
  #back-arrow {
    top: 13vw;
    font-size: 1.5rem;
  }
}
</style>
