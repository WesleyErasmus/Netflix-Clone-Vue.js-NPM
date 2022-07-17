<template>
  <div class="home">
    <!-- Transparent background giving a dark cinema effect -->

    <div class="home-page-app-wrapper">
      <div class="cinema-dark-room-effect">
        <!-- Home Page Navbar -->

        <!-- Bootstrap Navbar -->
        <div class="home-page-top-menu">
          <nav class="navbar top-navbar fixed-top">
            <div class="container-fluid top-navbar-inner">
              <div class="app-logo-and-menu-flex-container">
                <img
                  class="home-gage-app-logo"
                  src="../assets/netflix-logo.png"
                  alt="Netflix Logo"
                />
                <ul class="top-nav-menu-btns">
                  <li class="top-nav-btn top-nav-home-btn">Home</li>
                  <li class="top-nav-btn top-nav-tv-shows-btn">Watch List</li>
                  <li class="top-nav-btn top-nav-movies-btn">Coming Soon</li>
                  <!-- <li class="top-nav-btn top-nav-new-btn">New & Popular</li>
                  <li class="top-nav-btn top-nav-my-list-btn">My List</li> -->
                </ul>
              </div>

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
                <!-- <div class="top-nav-action-item">
                  <div class="top-nav-kids-toggle">Kids</div>
                </div> -->
                <!-- <div class="top-nav-action-item">
                  <div class="top-nav-notifications-bell">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="Hawkins-Icon Hawkins-Icon-Standard"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M13 4.57092C16.3922 5.05624 18.9998 7.9736 18.9998 11.5V15.2538C20.0486 15.3307 21.0848 15.4245 22.107 15.5347L21.8926 17.5232C18.7219 17.1813 15.409 17 11.9998 17C8.59056 17 5.27764 17.1813 2.10699 17.5232L1.89258 15.5347C2.91473 15.4245 3.95095 15.3307 4.99978 15.2538V11.5C4.99978 7.97345 7.6076 5.05599 11 4.57086V2H13V4.57092ZM8.62568 19.3712C8.6621 20.5173 10.1509 22 11.9993 22C13.8477 22 15.3365 20.5173 15.373 19.3712C15.38 19.1489 15.1756 19 14.9531 19H9.04555C8.82308 19 8.61862 19.1489 8.62568 19.3712Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div> -->
                <div class="top-nav-action-item">
                  <div class="top-nav-user-menu">Wesley Erasmus</div>
                </div>
                <span class="sign-out-dropdown"></span>
              </div>

              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar"
              >
                <span><i class="fa-solid fa-user"></i></span>
                <span class="sign-out-dropdown"></span>
              </button>
              <div
                class="offcanvas offcanvas-end"
                tabindex="-1"
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
              >
                <div class="offcanvas-header">
                  <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
                    Wesley Erasmus
                  </h5>
                  <button
                    type="button"
                    class="btn-close btn-close-white"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
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
                    <!-- <li class="nav-item dropdown">
                      <a
                        class="nav-link dropdown-toggle"
                        href="#"
                        id="offcanvasNavbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Dropdown
                      </a>
                      <ul
                        class="dropdown-menu"
                        aria-labelledby="offcanvasNavbarDropdown"
                      >
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li>
                          <a class="dropdown-item" href="#">Another action</a>
                        </li>
                        <li>
                          <hr class="dropdown-divider" />
                        </li>
                        <li>
                          <a class="dropdown-item" href="#"
                            >Something else here</a
                          >
                        </li>
                      </ul>
                    </li> -->
                  </ul>
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
        <!-- 
        <header class="home-page-top-menu">
          <nav class="top-navbar">
            <div class="top-navbar-inner">
              <div class="top-nav-netflix-logo">
                <img
                  class="app-logo"
                  src="../assets/netflix-logo.png"
                  alt="Netflix Logo"
                />
              </div>
              <ul class="top-nav-menu-btns">
                <li class="top-nav-btn top-nav-home-btn">Home</li>
                <li class="top-nav-btn top-nav-tv-shows-btn">TV Shows</li>
                <li class="top-nav-btn top-nav-movies-btn">Movies</li>
                <li class="top-nav-btn top-nav-new-btn">New & Popular</li>
                <li class="top-nav-btn top-nav-my-list-btn">My List</li>
              </ul>
            </div>
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
                <div class="top-nav-kids-toggle">Kids</div>
              </div>
              <div class="top-nav-action-item">
                <div class="top-nav-notifications-bell">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="Hawkins-Icon Hawkins-Icon-Standard"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13 4.57092C16.3922 5.05624 18.9998 7.9736 18.9998 11.5V15.2538C20.0486 15.3307 21.0848 15.4245 22.107 15.5347L21.8926 17.5232C18.7219 17.1813 15.409 17 11.9998 17C8.59056 17 5.27764 17.1813 2.10699 17.5232L1.89258 15.5347C2.91473 15.4245 3.95095 15.3307 4.99978 15.2538V11.5C4.99978 7.97345 7.6076 5.05599 11 4.57086V2H13V4.57092ZM8.62568 19.3712C8.6621 20.5173 10.1509 22 11.9993 22C13.8477 22 15.3365 20.5173 15.373 19.3712C15.38 19.1489 15.1756 19 14.9531 19H9.04555C8.82308 19 8.61862 19.1489 8.62568 19.3712Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </div>
              <div class="top-nav-action-item">
                <div class="top-nav-user-menu">Wesley Erasmus</div>
              </div>
              <span class="sign-out-dropdown"></span>
            </div>
          </nav>
        </header> -->
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
          </div>
          <!-- END OF BOOTSTRAP CAROUSEL -->

          <div class="hero-image-trailer">
            <!-- <img
            class="hero-static-image"
            src="https://occ-0-6161-32.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABRXM8JbVMT0QdVT9zM99-LIKCdYyF68UL6oaeib1PU8CtEHAoreOb_svxhhqlUhifqNUSca0slwMr2wGxUm-xptEKAENYfRXLjWs.webp?r=94a"
            alt=""
          /> -->
            <!-- <img
              class="hero-static-image"
              src="https://occ-0-6161-32.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABQCMBLtcppxXsD6dBXpwWTPLWCmvk89ihfn0kKjhxUVPmcUZdgzeDdzrIAW6UGUYDI61C5Ee8ocx8dsDy6IZ3dqNsnGqnCJ9ImDS.webp?r=763"
              alt=""
            /> -->
          </div>

          <span class="coming-soon-watermark">COMING SOON</span>

          <h1 class="my-list-heading">My Watch List</h1>
        </section>
        <div class="movies-and-footer-container">
          <!-- .watch-list-movie-slider-wrapper -->
          <section class="watch-list-movie-slider-wrapper">
            <button class="watch-list-slider-handles watch-list-handle-prev">
              <div class="watch-list-handle-prev-icon">
                <i class="fa-solid fa-chevron-left"></i>
              </div>
            </button>
            <div class="watch-list-movie-slider-container">
              <!-- <button class="watch-list-slider-handles watch-list-handle-prev">
                <div class="watch-list-handle-prev-icon">
                  <i class="fa-solid fa-chevron-left"></i>
                </div>
              </button> -->
              <div class="watch-list-movie-slider">
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
              <button class="watch-list-slider-handles watch-list-handle-next">
                <div class="watch-list-handle-next-icon">
                  <i class="fa-solid fa-chevron-right"></i>
                </div>
              </button>
            </div>
          </section>
          <h1 class="slider-heading">
            Enjoy a Wide Selection of the Latest Movies and TV Shows
          </h1>
          <!-- Movie Slider container -->
          <section class="movie-slider-wrapper">
            <!-- Movie item -->
            <span
              class="movie-slider-item"
              v-for="item in movies"
              v-bind:key="item.id"
            >
              <!-- Movie img -->
              <img class="slider-img" :src="item.image" alt="Movie Poster" />
              <!-- Movie title -->
              <div class="name">Title: {{ item.name }}</div>
              <!-- Movie description -->
              <div class="desc">Description: {{ item.description }}</div>
              <!-- Movie release date -->
              <div class="date">Release Date: {{ item.release_date }}</div>
            </span>
          </section>
          <!-- Home page footer -->
          <footer class="home-page-footer">
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
      </div>
      <!-- End of app-wrapper -->
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "MovieList",
  data() {
    return {
      movies: [],
    };
  },
  mounted() {
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
// Font-families
/* font-family: 'Arimo', sans-serif;
font-family: 'Open Sans', sans-serif; */
.home {
}

:root {
  --primary-color: #e50914;
  --transparent-black-bg: rgba(0, 0, 0, 0.75);
}

::placeholder {
  font-size: 16px;
}

*,
*::after,
*::before {
  box-sizing: border-box;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

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

.cinema-dark-room-effect::after {
  content: "";
  position: absolute;
  background: linear-gradient(77deg, rgba(0, 0, 0, 0.6), transparent 85%);
  top: 0;
  left: 0;
  height: 100%;
  opacity: 1;
  right: 0;
  z-index: 10;
}

.home-page-app-wrapper {
  position: relative;
  margin: 0;
  padding: 0;
}

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

.carousel-slide {
}

.carousel-indicators {
  bottom: 15vh;
  z-index: 11;
}

.carousel-control-prev,
.carousel-control-next {
  z-index: 11;
  display: none;
}

// .carousel-inner {

// }

// .carousel-item {

// }

// Img class
// .d-block {
// }

.carousel-caption {
  z-index: 11;
}

.carousel-caption h5 {
  display: none;
}

.carousel-caption p {
  display: none;
}

.hero-image-trailer-wrapper {
  position: relative;
}

.home-page-top-menu {
  position: relative;
  z-index: 11;
}

/* NAVBAR */
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

.app-logo-and-menu-flex-container {
  display: flex;
  align-items: center;
}

.top-navbar-inner {
  font-size: 14px;
}

.home-gage-app-logo {
  height: 25px;
  margin-right: 25px;
}

.top-nav-menu-btns {
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
}

.top-nav-actions-menu {
  display: flex;
  margin-left: 18px;
  font-size: 14px;
  color: #fff;
}

.top-nav-btn {
  display: block;
  margin-left: 18px;
}

.top-nav-home-btn {
  color: #fff;
  font-weight: 700;
}

.top-nav-actions-menu {
  height: 100%;
  right: 4%;
  top: 0;
}

.top-nav-action-item {
  display: block;
  margin-left: 15px;
}

.sign-out-dropdown {
  border-color: #fff transparent transparent;
  border-style: solid;
  border-width: 6px 6px 0;
  margin-left: 6px;
  position: relative;
  top: 6px;
}

.navbar-toggler {
  display: none;
}

.fa-user {
  color: #e5e5e5;
}

.nav-link {
  color: #fff !important;
}

.offcanvas {
    background-color: transparent !important;
    background: rgba(0, 0, 0, .75);
    border: none;
}

div.offcanvas-body {
  z-index: 20 !important;
    background-color: transparent !important;
    background-image: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.7) 10%,
    transparent
  );
}

.btn-outline-success{
    color: #fff;
    border-color: #fff;
}

/* PAGE HERO IMAGE */
.hero-static-image {
  position: relative;
  width: 100%;
}

.coming-soon-watermark {
  /* CHANGE FONT SIZE and Position TO BE RESPONSIVE */
  font-size: calc(16px + 4vw);
  font-weight: bold;
  position: absolute;
  z-index: 11;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  top: 30%;
  padding: 0 4%;
}

// Container for Movies and footer - used to align all content below the static hero image
.movies-and-footer-container {
  position: relative;
  top: -15vh;
}

// MOVIES LIST - TEMP STYLING
.name,
.desc,
.date {
  display: none;
  padding: 10px;
  // background-color: #496583;
}

.date {
  margin-bottom: 15px;
}

/* Movie Slider */
.watch-list-movie-slider-wrapper {
  position: relative;
  z-index: 3;
  width: 100%;
  margin: 0 auto;
}

.watch-list-movie-slider-container,
.watch-list-movie-slider {
  /* Netflix background to blend slider with hero image */
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

.watch-list-movie-slider-container {
  display: flex;
  overflow: hidden;
  justify-content: center;
  position: relative;
  margin-bottom: 4%;
  padding: 0 4%;
}

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

.watch-list-slider-item {
  aspect-ratio: 16 / 9;
  padding: 0 0.1vw;
  display: flex;
  border-radius: 0.25rem;
  cursor: pointer;
  flex: 0 0 calc(100% / var(--items-per-screen));
  max-width: calc(100% / var(--items-per-screen));
  width: 16.6666667%;
}

.watch-list-slider-handles {
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

.watch-list-handle-prev {
  position: absolute;
  width: 4%;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.watch-list-handle-next {
  position: absolute;
  right: 0;
  width: 4%;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.movie-slider-wrapper {
  /* Netflix background to blend slider with hero image */
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

// MOVE SIZING BY IMAGE TO SIZE BY MOVIE CARD
// .movie-slider-item {
//   aspect-ratio: 16 / 9;
//   padding: 0 0.1vw;
//   margin: 0.5vw 0;
//   max-width: calc(100% / var(--items-per-screen));
//   width: 16.6666667%;
// }

.slider-img {
  aspect-ratio: 16 / 9;
  padding: 0 0.1vw;
  margin: 0.5vw 0;
  cursor: pointer;
  max-width: calc(100% / var(--items-per-screen));
  width: 16.6666667%;
}

.my-list-heading {
  /* Using calc to dynamically set font size with a min font size of 12px */
  font-size: calc(12px + 1vw);
  position: absolute;
  bottom: 15vh;
  padding: 0 4%;
  z-index: 11;
  color: #e5e5e5;
  margin-bottom: 0.6rem;
}

.slider-heading {
  position: relative;
  // SWAPPING TO CONTAINER POSITIONING INSTEAD OF INDIVIDUAL COMPONENT POSITIONING
  // top: -15vh;
  font-size: calc(12px + 1vw);
  z-index: 100;
  color: #e5e5e5;
  margin-bottom: 0.6rem;
  padding: 0 4%;
}

/* Home page footer */
.home-page-footer {
  position: relative;
  // SWAPPING TO CONTAINER POSITIONING INSTEAD OF INDIVIDUAL COMPONENT POSITIONING
  // top: 3vh;
  max-width: 980px;
  color: grey;
  margin: 0 auto;
  padding: 0 4%;
  z-index: 11;
}

.footer-links {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  margin: 0 0 14px;
  padding: 0;
}

.footer-link-item {
  flex-basis: 25%;
  flex: 0 0 33%;
  margin-bottom: 16px;
}

// Media queries
@media screen and (min-width: 1281px) and (max-width: 1600px) {
  .top-navbar {
    height: 68px;
    font-size: 14px;
  }

   .top-navbar {
    height: 68px;
    font-size: 14px;
  }

  .watch-list-movie-slider {
    --items-per-screen: 5;
  }

  .watch-list-slider-item {
    width: 20%;
  }

  .movie-slider-item {
    --items-per-screen: 5;
  }

  .slider-img {
    width: 20%;
  }

  .home-page-app-wrapper {
    position: relative;
    margin: 0;
    padding: 0;
  }

  .home-page-app-wrapper::after {
    height: 19%;
  }
}

@media screen and (min-width: 841px) and (max-width: 1280px) {
  //  Remove duplicate code:
  //  .watch-list-movie-slider . watch-list-slider-item

  .top-navbar {
    height: 68px;
    font-size: 14px;
  }

   .navbar-toggler {
    display: block;
  }

  .top-nav-actions-menu, .top-nav-menu-btns {
    display: none;
  }

  .watch-list-movie-slider,
  .movie-slider-item {
    --items-per-screen: 4;
  }

  .watch-list-slider-item,
  .slider-img {
    width: 25%;
  }

  .movies-and-footer-container {
    top: -10vh;
  }

  .my-list-heading {
    bottom: 10vh;
  }

  .home-page-app-wrapper {
    position: relative;
    margin: 0;
    padding: 0;
  }

  .home-page-app-wrapper::after {
    height: 14.8%;
  }

  .carousel-indicators {
    bottom: 10vh;
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

  .top-nav-menu-btns, .top-nav-actions-menu {
    display: none;
  }

  .top-navbar {
    height: 68px;
    font-size: 14px;
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

  .my-list-heading {
    bottom: 2vh;
  }

  .home-page-app-wrapper {
    position: relative;
    margin: 0;
    padding: 0;
  }

  .home-page-app-wrapper::after {
    height: 8.9%;
  }

  .carousel-indicators {
    bottom: 2vh;
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

  .top-nav-actions-menu, .top-nav-menu-btns {
    display: none;
  }

  .watch-list-movie-slider {
    --items-per-screen: 2;
  }

  .watch-list-slider-item {
    width: 50%;
  }

  .movie-slider-item {
    --items-per-screen: 2;
  }

  .slider-img {
    width: 50%;
  }

  .movies-and-footer-container {
    top: -2vh;
  }

  .my-list-heading {
    bottom: 2vh;
  }

  .home-page-app-wrapper {
    position: relative;
    margin: 0;
    padding: 0;
  }

  .home-page-app-wrapper::after {
    height: 20%;
  }

  .carousel-indicators {
    bottom: 0vh;
  }
}
</style>
