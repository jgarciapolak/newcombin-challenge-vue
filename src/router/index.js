import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    meta: { title: "NewCombin - Home" },
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/other",
    name: "other",
    meta: { title: "NewCombin - Other" },
    component: () => import("../views/Other.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
