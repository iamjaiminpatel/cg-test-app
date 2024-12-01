<template>
  <div class="container">
    <!-- Loader -->
    <Loader :isLoading="isLoading" />
    <div class="profile">
      <div class="profile-section profile-picture">
        <img :src="profile.profile_image || 'default-profile.jpg'" alt="Profile Picture" />
      </div>
       <div class="profile-section profile-info">
        <h1>{{ profile.full_name }}</h1>
        <p>Bio</p>
        <p>{{ profile.bio }}</p>
      </div><p class="logout"><a href="#" @click="logout">Logout</a></p>
      <div class="profile-section profile-contact">
        
        <p>Phone:<br/> <span>{{ profile.phone_num }}</span></p>
        <p>Email:<br/> <span>{{ profile.email }}</span></p>
      </div>
    </div>

    <div class="cards">
      <div class="card" v-for="album in albums" :key="album.id">
        <img :src="album.img || 'https://via.placeholder.com/300x150'" alt="{{ album.title }}" />
        <div class="content">
          <h3>{{ album.title }}</h3>
          <p>{{ album.description }}</p>
          <div>
            <p class="date">{{ formatDate(album.created_at) }}</p>
            <div class="like">❤️</div>
          </div>  
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { UserProfileMixin } from "@/services/userProfile";
export default {
  mixins: [UserProfileMixin],
};
</script>




 <style scoped>
    body {
      font-family: 'Poppins', sans-serif;
      background: linear-gradient(135deg, #ff9a9e, #fad0c4);
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
    }

    .container {
      width: 80%;
      margin: 20px auto;
      background: none;
      border-radius: 0px;
      padding: 0px;
      max-width: none;
      box-shadow: none;
    }

    /* Profile Section */
    .profile {
      display: flex;
      justify-content: space-between;
      gap: 20px;
      padding: 20px;
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      margin-top:215px;
    }

    .profile-picture img {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      object-fit: cover;
    }

    .profile-info h1 {
      font-size: 2.5em;
      margin: 0px;
    }

    .profile-info p {
      color: #666;
    }

    .profile-contact {
      margin-top:70px;
    }

    .profile-contact span{
      color: #ff6f61;
    }

    .profile-contact p {
      font-size: 1em;
      color: #333;
    }

    .logout a {
      color: #ff6f61;
      text-decoration: none;
    }

    /* Responsive Design */
    @media (max-width: 768px) {
      .profile {
        flex-direction: column;
        align-items: center;
      }

      .profile-section {
        width: 100%;
        text-align: center;
        margin-bottom: 20px;
      }

      .profile-picture img {
        width: 80px;
        height: 80px;
      }

      .profile-info h1 {
        font-size: 1.2em;
      }
    }

    /* Cards Section */
    .cards {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 20px;
      margin-top: 20px;
    }

    .card {
      flex: 1 1 calc(33.33% - 20px);
      max-width: calc(33.33% - 20px);
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      display: flex;
      flex-direction: column;
      overflow: hidden;
      text-align: center;
    }

    .card img {
      width: 100%;
      height: 150px;
      object-fit: cover;
    }

    .card .content {
      padding: 15px;
      flex-grow: 1;
    }

    .card h3 {
      margin: 10px 0;
    }

    .card p {
      font-size: 0.9em;
      color: #666;
    }

    .card .date {
      font-size: 0.8em;
      color: #aaa;
    }

    .card .like {
      margin: 10px 0;
      color: red;
      font-size: 1.2em;
      cursor: pointer;
    }

    /* Responsive Design */
    @media (max-width: 768px) {
      .card {
        flex: 1 1 calc(50% - 20px);
        max-width: calc(50% - 20px);
      }
    }

    @media (max-width: 480px) {
      .card {
        flex: 1 1 100%;
        max-width: 100%;
      }
    }
  </style>
