import { createRouter, createWebHashHistory } from 'vue-router'
import PopularPage from "../page/popularPage.vue"
import HomePage from "../page/homePage.vue"
import EventsPage from "../page/eventsPage.vue"
import VacancyPage from "../page/vacancyPage.vue"
import RatingPage from "../page/ratingPage.vue"
import WeatherPage from "../page/weatherPage.vue"
import CompanyPage from "../page/companyPage.vue"

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/popular',
    name: 'popular',
    component: PopularPage
  },
  {
    path: '/events',
    name: 'events',
    component: EventsPage
  },
  {
    path: '/vacancy',
    name: 'vacancy',
    component: VacancyPage
  },
  {
    path: '/rating',
    name: 'rating',
    component: RatingPage
  },
  {
    path: '/weather',
    name: 'weather',
    component: WeatherPage
  },
  {
    path: '/company',
    name: 'company',
    component: CompanyPage
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
