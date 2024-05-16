import { createRouter, createWebHistory } from 'vue-router';
import { useRouter } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Inscription from '@/views/Inscription.vue';
import Login from '@/views/Login.vue';
import Products from '@/views/Products.vue';
import AddProduct from '@/views/AddProduct.vue';
import Categories from '@/views/Categories.vue';
import ProductDetailComponent from '@/views/ProductDetailComponent.vue';
import EditProduct from '@/views/EditProduct.vue';


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
      component: Products,
      meta: { requiresAuth: true } 
    },
    {
      path: '/AddProduct',
      name: 'AddProduct',
      component: AddProduct,
      meta: { requiresAuth: true } 
    },
    {
      path: '/categories',
      name: 'categories',
      component: Categories,
      meta: { requiresAuth: true } 
    },
    {
      path: '/product/:id',
      name: 'ProductDetail',
      component: ProductDetailComponent,
      meta: { requiresAuth: true }
    },
    {
      path: '/editproduct/:id',
      name: 'EditProduct',
      component: EditProduct,
      meta: { requiresAuth: true }
    },
    
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

