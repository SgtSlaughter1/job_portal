<template>
    <div class="profile-container">
        <h2 class="profile-title">User Profile</h2>
        <div class="profile-info">
            <p><strong>Name:</strong> {{ user.name }}</p>
            <p><strong>Email:</strong> {{ user.email }}</p>
            <p><strong>Joined:</strong> {{ user.joinedDate }}</p>
        </div>
        <router-link to="/edit-profile" class="btn btn-primary">Edit Profile</router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user: {
                name: '',
                email: '',
                joinedDate: ''
            }
        };
    },
    created() {
        this.loadUserProfile();
    },
    methods: {
        loadUserProfile() {
            const existingData = JSON.parse(localStorage.getItem('userData')) || [];
            const loggedInUser = existingData.find(user => user.name === localStorage.getItem('username'));
            if (loggedInUser) {
                this.user = {
                    name: loggedInUser.name,
                    email: loggedInUser.email,
                    joinedDate: loggedInUser.joinedDate
                };
            }
        }
    }
}
</script>

<style scoped>
.profile-container {
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 10px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    max-width: 600px;
    margin: auto;
}

.profile-title {
    text-align: center;
    margin-bottom: 20px;
}

.profile-info {
    margin-bottom: 20px;
}
</style>
