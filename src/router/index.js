import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "ItemList",
      component: HomeView,
      props: (route) => ({ items: route.params.items }),
    },
    {
      path: "/item/:id",
      name: "ItemDetail",
      component: AboutView,
      props: (route) => ({
        item: route.params.item,
        id: parseInt(route.params.id, 10),
      }),
    },
  ],
});

export default router;
