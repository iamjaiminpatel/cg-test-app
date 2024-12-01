<template>
  <div class="container">
    <!-- Loader -->
    <Loader :isLoading="isLoading" />
    <form @submit.prevent="handleSubmit">
      <!-- Header Section -->
      <div class="form-header">
        <img src="/logo.png" alt="Logo">
        <h1>Reset Your Password</h1>
        <p>Remember Password? <a :href="loginURL">Login</a></p>
      </div>
      <p v-if="error" class="error">{{ error }}</p>
      <!-- Form Fields -->
      <input type="hidden" v-model="token" name="token">
      <div class="form-row "> 
        <div class="form-group">
          <div class="form-group form-control-icon">
            <label for="password" class="form-label">Password</label>
            <input type="password" class="form-control" id="password" v-model="form.password" placeholder="Password" required>
            <i class="bi bi-eye-slash" @click="togglePassword" :class="passwordVisibility ? 'bi-eye' : 'bi-eye-slash'" id="togglePassword"></i>
          </div>
        </div>
        </div>
      <div class="form-row "> 
        <div class="form-group">  
          <div class="form-group form-control-icon">
            <label for="confirm-password" class="form-label">Confirm Password</label>
            <input type="password" class="form-control" id="confirm-password" v-model="form.confirmPassword" placeholder="Confirm Password" required>
            <i class="bi bi-eye-slash" @click="toggleConfirmPassword" :class="confirmPasswordVisibility ? 'bi-eye' : 'bi-eye-slash'" id="toggleConfirmPassword"></i>
          </div>
        </div> 
      </div>
      <!-- Submit Button -->
      <div class="form-field-center">
        <button type="submit" class="btn-primary">Reset Password</button>
      </div>
    </form>
  </div>
</template>

<script>
import { resetPasswordFormMixin } from "@/services/resetPasswordForm";
export default {
  mixins: [resetPasswordFormMixin],
};
</script>



<style scoped>
/* Flexbox Form Fields */
.form-row {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top:1rem
}
.btn-primary {
  background-color: #ff6f61;
  border-color: #ff6f61;
  font-weight: 600;
  color: white;
  padding: 0.75rem;
  border: none;
  width: auto;
  margin-top: 1.5rem;
  border-radius: 8px;
  cursor: pointer;
}

.btn-primary:hover {
  background-color: #e0554b;
  border-color: #e0554b;
}
</style>
