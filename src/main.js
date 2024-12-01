import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router";
import './assets/styles/common.css';

const app = createApp(App);

// Global Navigation Guard to check authentication
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('token'); // Check token existence
  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/login');
  } else {
    next();
  }
});

app.use(router);
app.mount('#app');
