<template>
    <div>
        <div v-if="product" class="">
            <div><h2 class="">{{ product.products.title }}</h2></div>
                    <div class="">{{ product.products.description }}</div>
                    <div class="">Stock : {{ product.products.stock }}</div>
                    <div class="">{{ product.products.price }} €</div>
                    <div v-for="categories in product.category" class="">Catégorie : {{ categories }}</div>

        </div>
                    <div v-else>
                        <p>Chargement en cours...</p>
                    </div>
       
            
    </div>
</template>

<script setup>

import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRoute } from 'vue-router';

const route = useRoute();
const productId = ref(route.params.id);
const product = ref(null);

async function fetchProductDetails() {
  try {
    const response = await axios.get(`products/${productId.value}`);
    product.value = response.data; 
    console.log(product.value);
  } catch (error) {
    console.error('Erreur lors de la récupération des détails du produit :', error);
  }
}

onMounted(fetchProductDetails);


</script>

