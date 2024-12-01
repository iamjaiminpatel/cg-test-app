<template>
  <div class="container">
    <!-- Loader -->
    <Loader :isLoading="isLoading" />
    
    <form @submit.prevent="handleSubmit">
      <!-- Header Section -->
      <div class="form-header">
        <img src="/logo.png" alt="Logo">
        <h1>Register an account</h1>
        <p>Have an Account? <a :href="loginURL">Login</a></p>
      </div>
      <p v-if="error" class="error">{{ error }}</p>
      <!-- Form Fields -->
      <div class="form-row">
        <div class="form-group">
          <label for="name" class="form-label">Name</label>
          <input type="text" class="form-control" id="name" v-model="form.name" placeholder="Full Name" required>
        </div>
        <div class="form-group">
          <label for="email" class="form-label">Email</label>
          <input type="email" class="form-control" id="email" v-model="form.email" placeholder="smith@gmail.com" required>
        </div>
        <div class="form-group">
          <label for="phone" class="form-label">Phone Number</label>
          <input type="tel" class="form-control" id="phone" v-model="form.phone" placeholder="Phone Number">
        </div>
        <div class="form-group">
          <label for="bio" class="form-label">Bio</label>
          <input type="text" class="form-control" id="bio" v-model="form.bio" placeholder="Bio">
        </div>
        <div class="form-group form-control-icon">
          <label for="password" class="form-label">Password</label>
          <input type="password" class="form-control" id="password" v-model="form.password" placeholder="Password" required>
          <i class="bi bi-eye-slash" @click="togglePassword" :class="passwordVisibility ? 'bi-eye' : 'bi-eye-slash'" id="togglePassword"></i>
        </div>
        <div class="form-group form-control-icon">
          <label for="confirm-password" class="form-label">Confirm Password</label>
          <input type="password" class="form-control" id="confirm-password" v-model="form.confirmPassword" placeholder="Confirm Password" required>
          <i class="bi bi-eye-slash" @click="toggleConfirmPassword" :class="confirmPasswordVisibility ? 'bi-eye' : 'bi-eye-slash'" id="toggleConfirmPassword"></i>
        </div>
      </div>

      <!-- Submit Button -->
      <div class="form-field-center">
        <button type="submit" class="btn-primary">Register</button>
      </div>
    </form>
  </div>
</template>

<script>
import { registerFormMixin } from "@/services/registerForm";
export default {
  mixins: [registerFormMixin],
};
</script>