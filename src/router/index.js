import { createRouter, createWebHistory } from "vue-router";
import Login from "../components/LoginForm.vue";
import Register from "../components/RegisterForm.vue";
import ForgotPasswordForm from "../components/ForgotPasswordForm.vue";
import ResetPasswordForm from "../components/ResetPasswordForm.vue";
import UserProfile from "../components/UserProfile.vue";

const routes = [
  { path: "/login", component: Login },
  { path: "/", component: Register },
  { path: "/forgot-password", component: ForgotPasswordForm },
  { path: "/reset-password/:string", component: ResetPasswordForm },
  { path: "/profile", component: UserProfile,meta: { requiresAuth: true }},
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
