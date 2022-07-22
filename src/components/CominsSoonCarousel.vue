<template>
  <div class="carousel">
    <div class="home-page-app-wrapper">
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
      </section>
    </div>
  </div>
</template>

<script></script>

<style lang="scss">
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
  height: 100%;
  opacity: 1;
  right: 26%;
  z-index: 1;
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
</style>
