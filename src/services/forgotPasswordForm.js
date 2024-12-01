import { forgotPasswordAPI } from "@/services/apiService";
import config from "@/config";
import Loader from "@/components/LoaderView.vue";

export const forgotPasswordMixin = {
  data() {
    return {
      form: {
        email: ''
      },
      isLoading: false, // Add loader state
      error: null,
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
        email: this.form.email
      };

      try {
        this.isLoading = true; // Show loader
        const response = await forgotPasswordAPI(formData);
        
        
        if (response.data.is_success) {
          
          this.$router.push("/login");
          this.resetForm();
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
        email: ''
      };
    },
  },
  computed: {
    loginURL() {
      return `${config.APP_URL}/login`; 
    }
  },
};
