<template>
  <div class="search-page">
    <!-- NAVBAR COMPONENT -->
    <TopNavBarComponent />
    <!-- NAVBAR COMPONENT -->

    <!-- Header back btn -->
    <div class="back-btn-and-header-container">
      <router-link :to="{ path: '/' }">
        <i class="fa-solid fa-arrow-left"></i>
      </router-link>
      <h1 class="search-page-header">Search for Movies and Actors</h1>
    </div>

    <!-- Searchbar container -->
    <div class="search-container">
      <!-- Searchbar form -->
      <form class="searchbar-form" action="/search" method="get">
        <!-- Searchbar input -->
        <input
          v-model="search"
          class="search"
          type="search"
          name="q"
          placeholder="Search..."
        />
        <!-- Searchbar icon -->
        <label class="button searchbutton" for="searchright"
          ><span class="mglass">&#9906;</span></label
        >
      </form>
    </div>

    <!-- Movies Container -->
    <section class="movie-slider-container row">
      <div class="card" v-for="movie in filteredMovies" :key="movie.id">
        <img :src="movie.image" class="card-img-top" alt="Movie Poster" />

        <!-- Movie banner added to all movies that are coming soon -->
        <div
          class="-static-coming-soon-banner-class"
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
    <!-- End of movie section -->

    <!-- Toast component for messages of duplicate movies and max movies in watch list -->
    <ToastComponent />

    <!-- FOOTER COMPONENT -->
    <FooterComponent />
    <!-- FOOTER COMPONENT -->
  </div>
</template>

<script>
// CodeSpace API import
import axios from "axios";

// Top Navbar component import
import TopNavBarComponent from "../components/TopNavBarComponent.vue";

// Footer component import
import FooterComponent from "../components/FooterComponent.vue";

// Toast import
import ToastComponent from "../components/ToastComponent.vue";

export default {
  components: {
    TopNavBarComponent,
    FooterComponent,
    ToastComponent,
  },
  data() {
    return {
      watchList: [],
      movies: [],
      search: "",
      actors: [],
    };
  },
  computed: {
    // Search function to filter movies
    filteredMovies() {
      // return this.movies.filter((movie) =>
      // this.movies.length
      //     ? Object.keys(this.movies[0])
      //         .some(key => ('' + movie[key]).toLowerCase().includes(this.search))
      //     : true
      // );

      return this.movies.filter((movie) => {
        const computedObj = {
          ...movie,
          // firstName: this.actors.first_name,
          // lastName: this.actors.last_name,
        };
        return Object.keys(computedObj).some((key) =>
          ("" + computedObj[key])
            .toLowerCase()
            .includes(this.search.toLowerCase())
        );
      });
    },
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
    // Finally display local storage in the DOM
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
// Page top back button
.back-btn-and-header-container {
  padding: 4% 0 0 4%;
}

// Back button Icon
.fa-arrow-left {
  font-size: 2rem;
  margin-bottom: 4%;
}

// Page header
.search-page-header {
  font-size: calc(8px + 1vw);
}

// Searchbar container
.search-container {
  position: relative;
  display: inline-block;
  height: 40px;
  width: 50px;
  vertical-align: bottom;
  left: 4%;
  margin: 0.25vw 0 2vw 0;
}

// Searchbar placeholder text
.search::placeholder {
  color: grey;
}

// Top navbar search bar styling
.button {
  display: inline-block;
  align-items: center;
  margin: 4px 2px;
  background-color: black;
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

// Search icon
.mglass {
  display: inline-block;
  pointer-events: none;
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
}

// Search button icon
.searchbutton {
  position: absolute;
  font-size: 2rem;
  width: 100%;
  margin: 0;
  padding: 0;
}

.search:focus + .searchbutton {
  transition-duration: 0.4s;
  -moz-transition-duration: 0.4s;
  -webkit-transition-duration: 0.4s;
  -o-transition-duration: 0.4s;
  background-color: black;
}

// Searchbar input
.search {
  position: absolute;
  left: 49px;
  background: black;
  color: #fff;
  outline: none;
  border: none;
  padding: 0;
  width: 363px;
  height: 100%;
  z-index: 10;
}

.search:focus {
  border: 1px solid rgba(219, 219, 219, 0.89);
}
//End of top navbar search bar styling

// MEDIA QUERIES
@media screen and (min-width: 1601px) and (max-width: 1920px) {
  //#
}

@media screen and (min-width: 1281px) and (max-width: 1600px) {
  /* Top page back button */
  .fa-arrow-left {
    margin-top: 15px;
    font-size: 2rem;
  }
}

@media screen and (min-width: 841px) and (max-width: 1280px) {
  /* Top page back button */
  .fa-arrow-left {
    margin-top: 25px;
    font-size: 1.9rem;
  }
}

@media screen and (min-width: 481px) and (max-width: 840px) {
  /* Top page back button */
  .fa-arrow-left {
    margin-top: 40px;
    font-size: 1.75rem;
  }
}

@media screen and (min-width: 0) and (max-width: 480px) {
  /* Top page back button */
  .fa-arrow-left {
    margin-top: 50px;
    font-size: 1.5rem;
  }
}
</style>
