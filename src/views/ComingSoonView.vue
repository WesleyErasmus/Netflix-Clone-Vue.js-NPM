<template>
  <div class="comingSoon">
    <div class="home-page-top-menu">
      <nav class="navbar top-navbar fixed-top">
        <div class="container-fluid top-navbar-inner">
          <div class="app-logo-and-menu-flex-container">
            <!-- Home page Netflix logo -->
            <router-link :to="{ path: '/' }">
              <img
                id="home-page-back-to-top"
                class="home-gage-app-logo"
                src="../assets/netflix-logo.png"
                alt="Netflix Logo"
            /></router-link>
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
  </div>
  <center>
    <h1 class="coming-soon">COMING SOON PAGE</h1>
  </center>
</template>

<script>
export default {
  data() {
    return {
      scTimer: 0,
      scY: 0,
    };
  },

  methods: {
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
  // CodeSpace API import using axios
  mounted() {
    // Scroll to top Home button
    window.addEventListener("scroll", this.handleScroll);
  },
};
</script>

<style></style>
