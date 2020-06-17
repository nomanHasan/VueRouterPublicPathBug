
Hello, I'm facing a bug with Vue3 + Vue Router Next + WebHashHistory. If I deploy the app under a nested public path and build the project accordingly - The app when run - rewrites the url Bar and removes the nested path altogether.

I've tested with a vue-cli project. Same problem there. Following steps are for a vite project -

## Reproduction Steps

1. `yarn create vite-app vuerouternextdemo`

2. Create an app with WebHashHistory
>`main.js`
``` javascript
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
```
>`package.json`
```javascript
{
  "name": "viterouter",
  "version": "0.0.0",
  "scripts": {
    "dev": "vite",
    "build": "vite build --base=./"
  },
  "dependencies": {
    "vue": "^3.0.0-beta.14",
    "vue-router": "^4.0.0-alpha.12"
  },
  "devDependencies": {
    "vite": "^0.20.0",
    "@vue/compiler-sfc": "^3.0.0-beta.14"
  }
}
```

3. Build the app with arguments `yarn run vite build --base=./`

4. Run a live-server in the project directory (outside of the dist folder) `live-server .`
5. Go to the nested public path dist `http://127.0.0.1:8080/dist/`

6. Now, public path is erased and the URL is redirected to this **`http://127.0.0.1:8080/#/home`**. The correct url should be **`http://127.0.0.1:8080/dist/#/home`**