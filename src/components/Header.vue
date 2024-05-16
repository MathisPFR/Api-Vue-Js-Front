<template>
    <header class="header">
    <h1>{{ title }}</h1>
        <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><RouterLink to="/inscription">Inscription</RouterLink></li>
            <li><router-link to="/login">Login</router-link></li>
            <li><router-link to="/products">Produits</router-link></li>
            <li><router-link to="/categories">Catégories</router-link></li>
        </ul>
    </header>
</template>
   
   <script setup>
   
   </script>
   
   <style scoped>
   .header {
    padding: 16px;
    background-color: hashtag#f5f5f5;
    display: flex;
    justify-content: space-between;
    align-items: center;
   }
   
   ul {
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0;
   }
   
   li {
    margin-right: 16px;
   }
   
   a {
    text-decoration: none;
    color: #444444;
    font-weight: bold;
   }
   </style>
   