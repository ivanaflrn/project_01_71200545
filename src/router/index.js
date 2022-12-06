import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MakananView from '../views/MakananView.vue'
import MinumanView from '../views/MinumanView.vue'
import SnackView from '../views/SnackView.vue'
import OpsiGigaMacView from '../views/OpsiGigaMacView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/makanan',
    name: 'Makanan',
    component: MakananView
  },
  {
    path: '/minuman',
    name: 'Minuman',
    component: MinumanView
  },
  {
    path: '/snack',
    name: 'Snack',
    component: SnackView
  },
  {
    path: '/opsiGiga',
    name: 'OpsiGigaMacView',
    component: OpsiGigaMacView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
