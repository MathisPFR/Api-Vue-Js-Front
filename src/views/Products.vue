<template>
    <div>
        <div>Title products : {{ products.value }}</div>
        <div>Email Address: {{  }}</div>
    </div>
    </template>





<script setup>
import { onMounted, reactive } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const products = reactive({
    
});


function fetchProductsDetails() {
    axios.get('products').then(response => {
        products.value = response.data.data;
        console.log(products.value);
    });
}


onMounted(fetchProductsDetails);
</script>
