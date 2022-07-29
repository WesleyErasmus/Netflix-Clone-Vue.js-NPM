<template>
  <div class="carousel">
    <!-- Coming soon page wrapper -->
    <div class="coming-soon-page-app-wrapper">
      <!-- Home page hero image carousel -->
      <section class="hero-image-trailer-wrapper">
        <!-- Bootstrap CarouselL -->
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
                src="../assets/netflix-hero-bg.jpg"
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
        </div>
        <!-- END OF BOOTSTRAP CAROUSEL -->
      </section>
    </div>
  </div>

  <!-- Coning soon banner for carousel image -->
  <div class="lrg-coming-soon-banner">SEE WHAT'S COMING SOON</div>
</template>

<style lang="scss">
// Pseudo element used to cover coming soon carousel images
.coming-soon-page-app-wrapper::after {
  content: "";
  position: absolute;
  background: linear-gradient(77deg, rgba(0, 0, 0, 0.6), transparent 75%);
  top: 0;
  left: 0;
  height: 100%;
  opacity: 1;
  right: 0;
  z-index: 1;
}
// HOME PAGE CAROUSEL STYLING

// Clickable carousel indicators. Indicating number of slides and slide position (located next to watch-list heading)
.carousel-indicators {
  bottom: 8.5vw;
  z-index: 15;
}

// Carousel buttons [#]
.carousel-control-prev,
.carousel-control-next {
  z-index: 11;
  height: 20% !important;
  top: 20vw;
}

// Carousel header [hidden]
.carousel-caption h5 {
  display: none;
}

// Carousel description [hidden]
.carousel-caption p {
  display: none;
}

// Carousel image coming soon banner
.lrg-coming-soon-banner {
  z-index: 12;
  position: absolute;
  top: 15vw;
  text-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin: 0 4%;
  font-size: calc(14px + 2.3vw);
  font-weight: bold;
  color: #ffffff;
}

// MEDIA QUERIES
@media screen and (min-width: 1601px) and (max-width: 1920px) {
  .carousel-indicators {
    bottom: 8.5vw;
  }

  .lrg-coming-soon-banner {
    top: 18vw;
    font-size: calc(13px + 2.3vw);
  }
}

@media screen and (min-width: 1281px) and (max-width: 1600px) {
  .carousel-indicators {
    bottom: 8.1vw;
  }

  .lrg-coming-soon-banner {
    top: 20vw;
    font-size: calc(13px + 2.2vw);
  }
}

@media screen and (min-width: 841px) and (max-width: 1280px) {
  .carousel-indicators {
    bottom: 7.6vw;
  }

  // Carousel buttons [#]
  .carousel-control-prev,
  .carousel-control-next {
    display: none;
  }

  .lrg-coming-soon-banner {
    top: 24vw;
    font-size: calc(12px + 2.1vw);
  }
}

@media screen and (min-width: 481px) and (max-width: 840px) {
  .carousel-indicators {
    bottom: 6.4vw;
  }

  // Carousel buttons [#]
  .carousel-control-prev,
  .carousel-control-next {
    display: none;
  }

  .lrg-coming-soon-banner {
    top: 24vw;
    font-size: calc(11px + 2vw);
  }
}

@media screen and (min-width: 0) and (max-width: 480px) {
  .carousel-indicators {
    bottom: 4.2vw;
  }

  // Carousel buttons [#]
  .carousel-control-prev,
  .carousel-control-next {
    display: none;
  }

  .lrg-coming-soon-banner {
    top: 25vw;
    font-size: calc(10px + 1.5vw);
  }
}
</style>
