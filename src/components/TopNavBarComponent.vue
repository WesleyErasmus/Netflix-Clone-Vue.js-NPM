<template>
  <div class="top-navbar-component">
    <!-- Navbar component navbar wrapper -->
    <div class="home-page-top-menu">
      <!-- Bootstrap Offcanvas Navbar -->
      <nav class="navbar top-navbar fixed-top">
        <div class="container-fluid top-navbar-inner">
          <div class="app-logo-and-menu-flex-container">
            <!-- Home page Netflix logo. Links to home page -->
            <router-link :to="{ path: '/' }">
              <img
                id="home-page-back-to-top"
                class="home-gage-app-logo"
                src="../assets/netflix-logo.png"
                alt="Netflix Logo"
              />
            </router-link>

            <!-- Nav link buttons -->
            <ul class="top-nav-menu-btns">
              <!-- Home button - takes you back to top of page -->
              <li class="top-nav-btn top-nav-home-btn"><a href="#">Back to top</a></li>

              <!-- Coming soon page link -->
              <router-link :to="{ path: '/comingsoon' }">
                <li class="top-nav-btn top-nav-movies-btn">Coming Soon</li>
              </router-link>

               <!-- Watch-list page link -->
              <router-link :to="{ path: '/watchlist' }">
                <li class="top-nav-btn top-nav-movies-btn">Your Watch List</li>
              </router-link>
            </ul>
          </div>

          <!-- Nav buttons, Search, User Account -->
          <div class="top-nav-actions-menu">
            <div class="top-nav-action-item">
              <!-- Search Icon -->
              <!-- Add router to link to search page -->
              <router-link :to="{ path: '/search' }">
                <span class="home-page-mglass">&#9906;</span>
              </router-link>
            </div>

            <!-- Container account avatar -->
            <div class="top-nav-action-item">
              <!-- User avatar icon -->
              <img
                src="../assets/avatar2.jpg"
                alt=""
                style="width: 32px; border-radius: 3px"
              />
            </div>

            <!-- Display username -->
            <div class="top-nav-action-item display-name">
              {{ displayName }}
            </div>
            <!-- Sign out dropdown  -->
            <div class="dropdown">
              <span class="sign-out-dropdown"></span>
              <div class="dropdown-content">
                <!-- Sign-out link to About Page  -->
                <router-link :to="{ path: '/login' }">
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
            <span
              ><img
                src="../assets/avatar2.jpg"
                alt=""
                style="width: 32px; border-radius: 3px"
              />
            </span>
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
              {{ displayName }}
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
                  <!-- Home page link to app home page -->
                  <router-link :to="{ path: '/' }">
                    <a class="nav-link active" aria-current="page"
                      >Back to top</a
                    ></router-link
                  >
                </li>

                <!-- Link to search page -->
                <router-link :to="{ path: '/search' }">
                  <li class="nav-item">Search</li>
                </router-link>

                <!-- Link to coming soon page -->
                <li class="nav-item">
                  <router-link :to="{ path: '/comingsoon' }">
                    <a class="nav-link active" aria-current="page" href="#"
                      >Coming Soon</a
                    ></router-link
                  >
                </li>

                <!-- Link to Watch-list page -->
                <li class="nav-item">
                  <router-link :to="{ path: '/watchlist' }">
                    <a class="nav-link active" aria-current="page" href="#"
                      >Your Watch List</a
                    ></router-link
                  >
                </li>

                <!-- Link to login page -->
                <li class="nav-item">
                  <router-link :to="{ path: '/login' }">
                    <a
                      class="nav-link active offcanvas-sign-out"
                      aria-current="page"
                      href="#"
                      >Sign Out</a
                    ></router-link
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      displayName: "",
    };
  },

  mounted() {
    // Displays the username stored on local storage in webpage
    if (localStorage.name) {
      this.displayName = localStorage.name;
    }
  },
};
</script>

<style lang="scss">
/* NAVBAR */
.home-page-top-menu {
  position: relative;
  z-index: 1000;
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
  height: calc(12px + 0.7vw);
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
 border-top: 1px solid rgba(255, 255, 255, 0.216);
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
  font-size: calc(8px + 0.4vw);
  margin-left: 15px;
  color: #fff;
  text-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
}

// Remove from HOME PAGE ONCE SEARCH BAR HAS BEEN MOVED
.home-page-mglass {
  font-size: calc(22px + 0.7vw);
  display: inline-block;
  cursor: pointer;
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
}

// Top nav username dropdown
.sign-out-dropdown {
  border-color: #fff transparent transparent;
  border-style: solid;
  border-width: 6px 6px 0;
  margin-left: 0.7vw;
  position: relative;
  top: 1vh;
}

// Sing out button that appears on hover
.home-page-sign-out-btn {
  background: rgba(0, 0, 0, 0.75);
  color: #e5e5e5;
  min-width: 100px;
  min-height: 50px;
  text-decoration: underline;
  z-index: 1;
  border-radius: 4%;
}

// Sign out dropdown container
.dropdown {
  position: relative;
  display: inline-block;
}

// Sign out dropdown contents
.dropdown-content {
  position: absolute;
  right: -3vw;
  background: rgba(0, 0, 0, 0.75);
  display: none;
  z-index: 1;
  border-radius: 4%;
  margin-top: 3px;
}

// Hover to display sign out button
.dropdown:hover .dropdown-content {
  display: block;
}

// Top navbar hamburger button [hidden]
.navbar-toggler {
  display: none;
  border: none;
}

.navbar-toggler:focus {
  outline: none !important;
}

.navbar-toggler:active {
  outline: none !important;
}
.navbar-toggler:after {
  outline: none !important;
}

// Styling to override navbar link font color
.nav-link {
  color: #fff !important;
}

.nav-link:hover,
.nav-item:hover {
  opacity: 0.75;
}

// Offcanvas navbar background
.offcanvas {
  background-color: transparent !important;
  background: rgba(0, 0, 0, 0.75);
  border: none;
}

// Offcanvas navbar heading
.offcanvas-header {
  background-color: rgba(0, 0, 0, 0.75);
  font-size: calc(10px + 0.55vw);
  border-bottom: 1px solid #fff;
}

.offcanvas-sign-out {
  font-size: calc(15px + 0.2vw);
  text-decoration: underline;
  margin-top: 50px;
  font-weight: bold;
  color: #e5e5e5e5;
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

// MEDIA QUERIES
@media screen and (min-width: 1601px) and (max-width: 1920px) {
  // #
}

@media screen and (min-width: 1281px) and (max-width: 1600px) {
.top-navbar {
    height: 68px;
    font-size: 14px;
  }
}

@media screen and (min-width: 841px) and (max-width: 1280px) {
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
}

@media screen and (min-width: 481px) and (max-width: 840px) {
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
}

@media screen and (min-width: 0) and (max-width: 480px) {
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
}
</style>
