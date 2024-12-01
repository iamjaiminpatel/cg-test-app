import { registerAPI } from "@/services/apiService";
import config from "@/config";
import Loader from "@/components/LoaderView.vue";

export const registerFormMixin = {
    data() {
        return {
          form: {
            name: '',
            email: '',
            phone: '',
            bio: '',
            password: '',
            confirmPassword: '',
          },
          passwordVisibility: false,
          confirmPasswordVisibility: false,
          isLoading: false, // Add loader state
          error: null,
        };
      },
      components: {
        Loader,
      },
      computed: {
        loginURL() {
          return `${config.APP_URL}/login`; // Build Login URL dynamically
        },
      },
      methods: {
        togglePassword() {
          this.passwordVisibility = !this.passwordVisibility;
        },
        toggleConfirmPassword() {
          this.confirmPasswordVisibility = !this.confirmPasswordVisibility;
        },
        async handleSubmit() {
          // Validate that passwords match
          if (this.form.password !== this.form.confirmPassword) {
            this.error = "Passwords do not match!";
            return;
          }
    
          // Prepare data for submission
          const formData = {
            full_name: this.form.name,
            email: this.form.email,
            phone_num: this.form.phone,
            bio: this.form.bio,
            password: this.form.password,
            password_confirmation: this.form.confirmPassword,
          };
    
          try {
            this.isLoading = true; // Show loader
            const response = await registerAPI(formData);
            if (response.data.is_success) {
              this.resetForm();
              this.$router.push('/login');
            } else {
              this.error = response.message;
            }
          } catch (error) {
            this.error = error.response?.data?.message || "An unexpected error occurred.";
          } finally {
            this.isLoading = false; // Hide loader
          }
        },
        resetForm() {
          this.form = {
            name: '',
            email: '',
            phone: '',
            bio: '',
            password: '',
            confirmPassword: '',
          };
        },
    },
};
