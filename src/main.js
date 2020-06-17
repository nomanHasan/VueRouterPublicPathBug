import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

import Home from './components/home.vue';
import About from './components/about.vue';
import { createRouter, createWebHashHistory } from 'vue-router';


export const AppRouter = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    { path: '/home', name: 'home', component: Home },
    { path: '/about', name: 'about', component: About },
  ]
})

const app = createApp(App)
app.use(AppRouter);
app.mount('#app')
