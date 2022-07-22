<template>
  <!-- * TRY USING THE BELOW CODE TO MAKE THE NETFLIX LOGO A HOME BUTTON * -->
  <!-- <header>
<router-link to="/">
  <h1><span>Vue</span>Movies</h1>
</router-link>
</header> -->

  <main>
    <router-view />
  </main>
</template>

<script>
export default {
  data() {
    return {
      scTimer: 0,
      scY: 0,
      watchList: [],
    };
  },
};
</script>

<style lang="scss">
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
// }
</style>
