import { loginAPI } from "@/services/apiService";
import config from "@/config";
import Loader from "@/components/LoaderView.vue";

export const loginFormMixin = {
  data() {
    return {
      form: {
        email: '',
        password: '',
        
      },
      passwordVisibility: false,
      error: null,
      isLoading: false, // Add loader state
    };
  },
  components: {
    Loader,
  },
  methods: {
    
    async handleSubmit() {
      // Validate that passwords match
      
      // Prepare data for submission
      const formData = {
        email: this.form.email,
        password: this.form.password,
      };

      try {
        this.isLoading = true; // Show loader
        const response = await loginAPI(formData);
        if (response.data.is_success) {
          this.resetForm();
          localStorage.setItem('token', response.data.token); // Save JWT
          this.$router.push('/profile');

        } else {
          this.error =response.message;
        }
      } catch (error) {
        this.error = error.response?.data?.message || "An unexpected error occurred.";
      } finally {
        this.isLoading = false; // Hide loader
      }
    },
    resetForm() {
      this.form = {
        email: '',
        password: '',
      };
    },
  },
  computed: {
    registerURL() {
      return `${config.APP_URL}`; 
    },
    forgotPasswordURL() {
      return `${config.APP_URL}/forgot-password`; 
    }
  },
};
