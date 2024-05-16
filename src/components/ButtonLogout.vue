<template>
    <div class="btn-logout">
        <button v-if="isAuthenticated" @click="signOut" type="button">Sign Out</button>
    </div>
</template>

<script setup>


import { onMounted, reactive } from 'vue';
    import { useRouter } from 'vue-router';

    const router = useRouter();

    let isAuthenticated = localStorage.getItem('token') !== null;

    window.addEventListener('storage', (event) => {
    if (event.key === 'token') {
      isAuthenticated = event.newValue !== null;
    }
  });


function signOut() {
    localStorage.removeItem('token');
    axios.defaults.headers.common['Authorization'] = 'Bearer';
    router.push({ name: 'Login' });
}


</script>

<style>

.btn-logout {
    display: flex;
    justify-content: flex-end;
}

</style>

