import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Inscription from '@/views/Inscription.vue';
import Login from '@/views/Login.vue';
import UserView from '../views/Products.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/inscription',
      name: 'Inscription',
      component: Inscription
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/products',
      name: 'products',
      component: UserView,
      meta: { requiresAuth: true } 
    }
  ]
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('token'); 
  if (to.meta.requiresAuth && !isAuthenticated) {
    
    next({ name: 'Login' });
  } else {
   
    next();
  }
});

export default router;

