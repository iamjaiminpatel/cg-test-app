import { profileAPI, albumAPI, logoutAPI } from "@/services/apiService";
import Loader from "@/components/LoaderView.vue";

export const UserProfileMixin = {
  data() {
    return {
      profile: {},
      albums: [],
      isLoading: false, // Add loader state
    };
  },
  components: {
    Loader,
  },
  async mounted() {
    try {
      const token = localStorage.getItem('token');
      
      // Fetch Profile
      this.isLoading =  true;
      const response = await profileAPI(token);
      this.profile = response.user;

      // Fetch Cards
      const albumResponse = await albumAPI(token);
      this.albums =  albumResponse.albums;
      
    } catch (error) {
      this.$router.push('/login'); // Redirect if error
    }finally {
      this.isLoading = false; // Hide loader
    }
  },
  methods: {
    async logout() {
      try {
        // Get the JWT token from localStorage or Vuex store (if applicable)
        const token = localStorage.getItem('token');
        this.isLoading =  true;
        // Call the logout API to invalidate the token on the server
        const response = await logoutAPI(token);
        if (response.is_success) {
          // Remove the token from localStorage
          localStorage.removeItem('token');

          // Redirect to the login page
          this.$router.push('/login');
        }
      } catch (error) {
        console.log(error);
      }finally {
        this.isLoading = false; // Hide loader
      }
    },
    formatDate(date) {
      const d = new Date(date);
      const year = d.getFullYear();
      const month = (d.getMonth() + 1).toString().padStart(2, '0');
      const day = d.getDate().toString().padStart(2, '0');
      return `${year}-${month}-${day}`;
    },
  },
};
