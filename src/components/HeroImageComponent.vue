<template>
<!-- Home page hero image -->
      <section class="hero-image-trailer-wrapper">
        <img
          src="https://occ-0-6161-32.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABelwiLzuD_aWWEzm0BWTbrpd-SVngzQc1_NxyEov1_7VrixLFr_BrsJb7-ZFbdNfhqpFo-Obi3WrhVExFRUG2O06XEo3e4jNq2_k.webp?r=c9b"
          alt=""
          class="hero-static-image"/>

        <!-- Hera image meta data -->
        <div class="hero-image-meta-data">

          <!-- Hero image logo title -->
          <img
            alt="Spider-Man: No Way Home"
            class="hero-title-logo"
            src="https://occ-0-6161-32.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABYKP4Buao_XGUtdsFrl8sbCzXcLNwTSetfS8I6hr7gemIQlbBqY1HaU83JfBrQLWSfThQ1OupfWQEPg1SIxkGiTM_ChcNCaaEiHf69VAxw0a.webp?r=8a1"
            title="Spider-Man: No Way Home"/>

          <!-- Hero image description -->
          <div class="hero-movie-description">
            When his loved ones are put at risk, Peter Parker asks Doctor
            Strange to restore his secret — and accidentally sets off a disaster
            of epic proportions.
          </div>

        </div>
        <!-- End of hero image meta data -->

      </section>    
</template>

<style lang="scss">
// Coming soon hero image container
.hero-image-trailer-wrapper {
  position: relative;
}

/* PAGE HERO IMAGE */
.hero-static-image {
  position: relative;
  width: 100%;
}

// Hero image contents
.hero-image-meta-data {
  position: absolute;
  width: 30vw;
  bottom: 40%;
  left: 4%;
  padding: 0;
  margin: 0;
  z-index: 11;
}

// Meta data title logo
.hero-title-logo {
  width: 100%;
  margin-bottom: 1vw;
}

// Hero image meta data description
.hero-movie-description {
  font-size: calc(10px + 0.4vw);
  width: 100%;
  margin-bottom: 1vw;
}

// MEDIA QUERIES
@media screen and (min-width: 1601px) and (max-width: 1920px) {
  // #
}

@media screen and (min-width: 1281px) and (max-width: 1600px) {
  // #
}

@media screen and (min-width: 841px) and (max-width: 1280px) {
  // #
}

@media screen and (min-width: 481px) and (max-width: 840px) {
    .hero-image-meta-data {
  position: absolute;
  bottom: 25%;
}

// Hero image meta data description
.hero-movie-description {
  font-size: calc(9px + 0.3vw);
}
}

@media screen and (min-width: 0) and (max-width: 480px) {
  .hero-image-meta-data {
  position: absolute;
  bottom: 20%;
}

// Hero image meta data description
.hero-movie-description {
  font-size: calc(8px + 0.3vw);
}
}
</style>