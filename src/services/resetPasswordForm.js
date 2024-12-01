import { resetPasswordAPI } from "@/services/apiService";
import config from "@/config";
import Loader from "@/components/LoaderView.vue";

export const resetPasswordFormMixin = {
  data() {
    return {
      form: {
        password: '',
        confirmPassword: '',
      },
      passwordVisibility: false,
      confirmPasswordVisibility: false,
      token: '',
      isLoading: false, // Add loader state
      error: null,
    };
  },
  components: {
    Loader,
  },
  mounted() {
    // Fetch route parameter (e.g., `/user/:id`)
    this.token = this.$route.path.replace('/reset-password/', '') || '';
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
        token: this.token,
        password: this.form.password,
        password_confirmation: this.form.confirmPassword,
      };

      try {
        this.isLoading = true; // Show loader
        const response = await resetPasswordAPI(formData);
        
        if (response.data.is_success) {
          
          this.$router.push("/login");
          this.resetForm();
        } else {
          this.error = response.message;
        }
        
      }catch (error) {
        this.error = error.response?.data?.message || "An unexpected error occurred.";
      } finally {
        this.isLoading = false; // Hide loader
      }
    },
    resetForm() {
      this.form = {
        token: '',
        password: '',
        confirmPassword: '',
      };
    },
  },
  computed: {
    loginURL() {
      return `${config.APP_URL}/login`; // Build Login URL dynamically
    },
  },
};
