// Global View and Component Registry
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LogInView from "../views/LogInView.vue";
import ComingSoonView from "../views/ComingSoonView.vue";
import SearchMovies from "../views/FilteredMovies.vue";
import WatchListView from "../views/WatchListView.vue"


const routes = [
  {
    // this is my home page
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    // this will be my login page
    path: "/login",
    name: "login",
    component: LogInView,
  },
  {
    // this will be my Coming Soon page
    path: "/watchlist",
    name: "watchlist",
    component: WatchListView,
  },
  {
    // this will be my Coming Soon page
    path: "/comingsoon",
    name: "comingsoon",
    component: ComingSoonView,
  },
  {
    // this is my filtered movies page
    path: "/search",
    name: "search",
    component: SearchMovies,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;