import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/todolist",
    name: "Todolist",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/todolist.vue"),
  },
  {
    path: "/table",
    name: "Table",
    component: () => import("../views/table.vue"),
  },
  {
    path: "/slideshow",
    name: "Slideshow",
    component: () => import("../views/slideshow.vue"),
  },
  {
    path: "/play",
    name: "Play",
    component: () => import("../views/play.vue"),
  },
  {
    path: "/list",
    name: "List",
    component: () => import("../views/table/list.vue"),
  },
  {
    path: "/descriptions",
    name: "Descriptions",
    component: () => import("../views/descriptions/descriptions.vue"),
  },
  {
    path: "/new",
    name: "New",
    component: () => import("../views/add/new.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/login/index.vue"),
  },
  {
    path: "/snake",
    name: "Snake",
    component: () => import("../views/login/snake.vue"),
  },
  {
    path: "*",
    name: "ahha",
    component: () => import("../views/slideshow.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
