import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";

const routes = [
  {
    // this is my home page
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    // this will be my login page - change names accordingly
    path: "/about",
    name: "about",
    component: AboutView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

// Watch-list slider handles
document.addEventListener("click", (e) => {
  let handle;
  if (e.target.matches(".sliderHandles")) {
    handle = e.target;
  } else {
    handle = e.target.closest(".sliderHandles");
  }
  if (handle != null) onHandleClick(handle);
});

function onHandleClick(handle) {
  const slider = handle
    .closest(".watch-list-movie-slider-wrapper")
    .querySelector(".movieSlider");
  const sliderIndex = parseInt(
    getComputedStyle(slider).getPropertyValue("--slider-index")
  );
  if (handle.classList.contains("nextHandle")) {
    slider.style.setProperty("--slider-index", sliderIndex - 1);
  }
  if (handle.classList.contains("prevHandle")) {
    slider.style.setProperty("--slider-index", sliderIndex + 1);
  }
}
