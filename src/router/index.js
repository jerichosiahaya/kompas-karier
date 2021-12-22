import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import JobDetail from '../views/JobDetail.vue'
import JobBoards from '../views/JobBoards.vue'
import ApplyJob from '../views/ApplyJob.vue'


Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/job',
    name: 'JobBoards',
    component: JobBoards
  },
  {
    path: '/job/:id',
    name: 'JobDetail',
    component: JobDetail
  },
  {
    path: '/job/apply/:id',
    name: 'ApplyJob',
    component: ApplyJob
  }
]

const router = new VueRouter({
  routes
})

export default router