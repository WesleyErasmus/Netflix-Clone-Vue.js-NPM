<template>

<!-- Duplicate movie toast message -->
<div id="snackbar">This movies already exists in your watch list
</div>

<!-- Watch-list array full toast message -->
<div id="snackbar2">Watch list limit reached 
</div>

<!-- Movie successfully added to watch list message -->
<div id="snackbar3">Movie successfully added
</div>

</template>

<script>

export default {


   }

</script>

<style lang="scss">
#snackbar, #snackbar2, #snackbar3 {
  visibility: hidden;
  min-width: 250px;
  margin-left: -125px;
  background-color: #333;
  color: #fff;
  text-align: center;
  border-radius: 2px;
  padding: 16px;
  position: fixed;
 z-index: 110;
  left: 50%;
  bottom: 30px;
  font-size: 17px;
}

#snackbar.show, #snackbar2.show, #snackbar3.show {
  z-index: 110;
  visibility: visible;
  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
  animation: fadein 0.5s, fadeout 0.5s 2.5s;
}

// #snackbar2 {
//   visibility: hidden;
//   min-width: 250px;
//   margin-left: -125px;
//   background-color: #333;
//   color: #fff;
//   text-align: center;
//   border-radius: 2px;
//   padding: 16px;
//   position: fixed;
//  z-index: 110;
//   left: 50%;
//   bottom: 30px;
//   font-size: 17px;
// }

// #snackbar2.show {
//   z-index: 110;
//   visibility: visible;
//   -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
//   animation: fadein 0.5s, fadeout 0.5s 2.5s;
// }

@-webkit-keyframes fadein {
  from {bottom: 0; opacity: 0;} 
  to {bottom: 30px; opacity: 1;}
}

@keyframes fadein {
  from {bottom: 0; opacity: 0;}
  to {bottom: 30px; opacity: 1;}
}

@-webkit-keyframes fadeout {
  from {bottom: 30px; opacity: 1;} 
  to {bottom: 0; opacity: 0;}
}

@keyframes fadeout {
  from {bottom: 30px; opacity: 1;}
  to {bottom: 0; opacity: 0;}
}
</style>

