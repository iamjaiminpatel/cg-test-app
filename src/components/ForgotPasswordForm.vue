<template>
  <div class="container">
    <!-- Loader -->
    <Loader :isLoading="isLoading" />
    <form @submit.prevent="handleSubmit">
      <!-- Header Section -->
      <div class="form-header">
        <img src="/logo.png" alt="Logo">
        <h1>Password Reset Request</h1>
        <p>Have an Account? <a :href="loginURL">Login</a></p>
      </div>
      <p v-if="error" class="error">{{ error }}</p>
      <!-- Form Fields -->
      <div class="form-row">
        <div class="form-group">
          <label for="email" class="form-label">Email</label>
          <input type="email" class="form-control" id="email" v-model="form.email" placeholder="smith@gmail.com" required>
        </div>
      </div>
      <!-- Submit Button -->
      <div class="form-field-center">
        <button type="submit" class="btn-primary">Submit Reset Request</button>
      </div>
    </form>
  </div>
</template>

<script>
import { forgotPasswordMixin } from "@/services/forgotPasswordForm";
export default {
  mixins: [forgotPasswordMixin],
};
</script>



<style scoped>
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

</style>
