import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'
import contact from '../components/contact.vue'
import index from "../components/index.vue";
import blog from "../components/blog.vue";

const routes = [
  {
    path: "/contact",
    name: "contact",
    component: contact,
  },
  {
    path: "/",
    name: "index",
    component: index,
  },
  {
    path: "/blog",
    name: "blog",
    component: blog,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
