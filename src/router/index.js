import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
  // {path: '/', name: 'app', component: () => import('../App.vue')},
  {path: '/', name: 'Sudoku', component: () => import('../views/Sudoku.vue')},
  {path: '/Auth', name: 'Auth', component: () => import('../views/Auth.vue')},
  {path: '/Home', name: 'Home', component: () => import('../views/Home.vue')},
  {path: '/LeaderBoard', name: 'LeaderBoard', component: () => import('../views/LeaderBoard.vue')},
  // {path: '/Sudoku', name: 'SudokuHome', component: () => import('../views/Home.vue')},
  {path: '*', component: () => import('../views/Home.vue')}
];
// if (process.env.MODE !== 'ssr') {
//   routes.push({
//     path: '*',
//     component: () => import('../views/Home.vue')
//   })
// }

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
