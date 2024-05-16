<template>
    <div>
      <h2>Modifier un produit</h2>
      <form @submit.prevent="updateProduct">
        <div>
          <label for="title">Titre :</label>
          <input type="text" id="title" v-model="updatedProduct.title" value="{{  }}">
        </div>
        <div>
          <label for="description">Description :</label>
          <textarea id="description" v-model="updatedProduct.description"></textarea>
        </div>
        <div>
          <label for="price">Prix :</label>
          <input type="number" id="price" v-model="updatedProduct.price">
        </div>
        <div>
          <label for="stock">Stock :</label>
          <input type="number" id="stock" v-model="updatedProduct.stock">
        </div>
        <button type="submit">Modifier</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  import axios from 'axios';
  import { useRoute } from 'vue-router';
  
  const route = useRoute();
  const router = useRouter();
  const productId = ref(route.params.id);
  const updatedProduct = ref({
    title: '',
    description: '',
    price: 0,
    stock: 0,
  });
  
  const fetchProductDetails = async () => {
    try {
      const response = await axios.get(`products/${productId.value}`);
      updatedProduct.value = response.data.data;
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching product details:', error);
    }
  };
  
  onMounted(fetchProductDetails);
  
  const updateProduct = async () => {
    try {
      await axios.put(`products/${productId.value}`, updatedProduct.value);
      console.log('Product updated successfully');
      router.push({ name: 'products' });
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };
  </script>
  