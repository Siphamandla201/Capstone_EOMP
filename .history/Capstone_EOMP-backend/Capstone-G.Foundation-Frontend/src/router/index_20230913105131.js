import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/KidsHomeView.vue")HomeView,
  },
  {
    path: "/kids",
    name: "",
    component: () => import("../views/KidsHomeView.vue"),
  },
  {
    path: "/women",
    name: "Home",
    component: () => import("../views/WomenHomeView.vue"),
  },
  {
    path: "/About",
    name: "About",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/Products",
    name: "Products",
    component: () => import("../views/ProductsView.vue"),
  },
  {
    path: "/Login",
    name: "Login",
    component: () => import("../views/LoginView.vue"),
  },
  {
    path: "/Admin",
    name: "Admin",
    component: () => import("../views/AdminView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
