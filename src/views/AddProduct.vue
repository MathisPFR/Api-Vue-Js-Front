<template>
    <div>
      <h2>Ajouter un produit</h2>
      <form @submit.prevent="submitForm">
        <div>
          <label for="title">Titre :</label>
          <input type="text" id="title" v-model="newProduct.title" required>
        </div>
        <div>
          <label for="description">Description :</label>
          <textarea id="description" v-model="newProduct.description" required></textarea>
        </div>
        <div>
          <label for="price">Prix :</label>
          <input type="number" id="price" v-model.number="newProduct.price" required>
        </div>
        <div>
          <label for="stock">Stock :</label>
          <input type="number" id="stock" v-model.number="newProduct.stock" required>
        </div>
        <!-- <div>
          <label for="categories">Catégorie :</label>
          <input type="number" id="caegories" v-model.number="newProduct.categories" required>
        </div> -->
       
          <div v-for="category in categories" :key="category.id">
            <input type="checkbox" :id="`checkbox-${category.id}`" :value="category.id" v-model="newProduct.categories">
            <label :for="`checkbox-${category.id}`">{{ category.title }}</label>
          </div>

        
  
        <button type="submit">Ajouter</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  import axios from 'axios';

  const router = useRouter();
  
  const newProduct = ref({
    title: '',
    description: '',
    price: 0,
    stock: 0,
    categories: ref([]),

  });

  const categories = ref([]);

function fetchCategories() {
  axios.get('categories').then(response => {
    categories.value = response.data.data;
    console.log(categories.value);
  });
}

onMounted(fetchCategories);
  
  async function submitForm() {
    try {
      await axios.post('products', newProduct.value);
      router.push({ name: 'products' });
      
    } catch (error) {
      console.error('Error adding product:', error);
    }
  }

  
  </script>
  
  <style scoped>

  </style>
  