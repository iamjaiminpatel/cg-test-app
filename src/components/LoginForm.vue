<template>
  <div class="container">
    <!-- Loader -->
    <Loader :isLoading="isLoading" />
    
    <form @submit.prevent="handleSubmit">
      <!-- Header Section -->
      <div class="form-header">
        <img src="/logo.png" alt="Logo">
        <h1>Login to your account</h1>
        <p>Don't have an Account? <a :href="registerURL">Create an Account</a></p>
      </div>
      <p v-if="error" class="error">{{ error }}</p>
      <!-- Form Fields -->
      <div class="form-row">
        <div class="form-group">
          <label for="email" class="form-label">Email</label>
          <input type="email" class="form-control" id="email" v-model="form.email" placeholder="smith@gmail.com" required>
        </div>
      </div>
      <div class="form-row ">  
        <div class="form-group">
          <div class="form-group form-control-icon">
            <label for="password" class="form-label">Password</label>
            <input type="password" class="form-control" id="password" v-model="form.password" placeholder="Password" required>
            <i class="bi bi-eye-slash" @click="togglePassword" :class="passwordVisibility ? 'bi-eye' : 'bi-eye-slash'" id="togglePassword"></i>
          </div>
        </div>  
      </div>
      <p class="p-text"><a :href="forgotPasswordURL">Forgot Password?</a></p>

      <!-- Submit Button -->
      <div class="form-field-center">
        <button type="submit" class="btn-primary">Login</button>
      </div>
    </form>
    
  
  </div>
</template>

<script>
import { loginFormMixin } from "@/services/loginForm";
export default {
  mixins: [loginFormMixin],
};
</script>



<style scoped>

.p-text a  {
  color: #ff6f61;
  text-decoration: none;
  font-weight: 500;
}
.form-row {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top:1rem
}
</style>
