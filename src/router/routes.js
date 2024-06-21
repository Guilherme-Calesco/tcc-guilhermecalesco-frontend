const routes = [
  {
    path: '/',
    component: () => import('pages/Login.vue'),
  },
  {
    path: '/home',
    component: () => import('pages/Home.vue'),
  },
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
