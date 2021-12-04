import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Project from '../views/Project.vue'
import Skill from '../views/Skill.vue'
import Contact from '../views/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/projects',
    name: 'projects',
    component: Project
  },
  {
    path: '/skills',
    name: 'skills',
    component: Skill
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: Contact
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  linkActiveClass: "active",
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
