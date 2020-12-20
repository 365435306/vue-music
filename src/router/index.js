import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import Layout from "../views/Layout";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "/",
        name: "Home",
        component: Home
      },
      {
        path: "/mine",
        name: "Mine",
        component: () => import(/* webpackChunkName: "Mine" */ "@/views/Mine")
      },
      {
        path: "/search",
        name: "Search",
        component: () =>
          import(/* webpackChunkName: "Search" */ "@/views/Search")
      },
      {
        path: "/topic",
        name: "Topic",
        component: () => import(/* webpackChunkName: "Topic" */ "@/views/Topic")
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  linkActiveClass: "active",
  base: process.env.BASE_URL,
  routes
});

export default router;
