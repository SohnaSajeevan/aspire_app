import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: () => import("../pages/home.vue"),
  },
  {
    path: "/cards",
    name: "Cards",
    component: () => import("../pages/cards.vue"),
  },
  {
    path: "/payments",
    name: "Payments",
    component: () => import("../pages/payments.vue"),
  },
  {
    path: "/credit",
    name: "Credit",
    component: () => import("../pages/credit.vue"),
  },
  {
    path: "/settings",
    name: "Settings",
    component: () => import("../pages/settings.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
