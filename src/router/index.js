import { createWebHistory, createRouter } from "vue-router";import About from "@/views/AboutPage.vue";
import Portfolio from "@/views/PortfolioPage.vue";
import Skills from "@/views/SkillsPage.vue";
import Contact from "@/views/ContactPage.vue";
import NotFound from "@/views/NotFound.vue";

const routes = [
  {
    path: "/",
    redirect: "/about",
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    component: Portfolio,
  },
  {
    path: "/skills",
    name: "Skills",
    component: Skills,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  // {
  //   path: "/:catchAll(.*)",
  //   component: NotFound,
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
