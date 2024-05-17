<template>

    <div>
        <div>
    <h2>Inscription</h2>
    <form @submit.prevent="registerUser">
      <div>
        <label for="name">Nom d'utilisateur :</label>
        <input type="text" id="name" v-model="formData.name">
      </div>
      <div>
        <label for="email">Adresse e-mail :</label>
        <input type="email" id="email" v-model="formData.email">
      </div>
      <div>
        <label for="password">Mot de passe :</label>
        <input type="password" id="password" v-model="formData.password">
      </div>
      <div>
        <label for="password_confirmation">Confirmation de mot de passe :</label>
        <input type="password" id="password_confirmation" v-model="formData.password_confirmation">
      </div>
      <button type="submit">S'inscrire</button>
    </form>
    <p v-if="error">{{ error }}</p>
    <p v-if="success">Inscription réussie !</p>
  </div>
    </div>


</template>

<script setup>
import { reactive, ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const router = useRouter();

const formData = {
  name: '',
  email: '',
  password: '',
  password_confirmation: '',
};

let error = '';
let success = false;

const registerUser = async () => {
  try {
    const response = await axios.post('http://127.0.0.1:8000/api/auth/register', formData);
    console.log(response.data);
    success = true;
    error = '';
    router.push({ name: 'Login' });
  } catch (err) {
    success = false;
  }
};


</script>