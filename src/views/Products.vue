<template>
    <div>

        <div>
            <a href="/AddProduct" class="add-prduct-btn">Ajouter un produit</a>
        </div>

        
        <div class="card-container-all">
            <div v-for="product in products.value" :key="product.id" class="container-card">
                <div class="left-card">
                    <img src="/public/image-test/Assiette-végétarienne-ronde.jpg" alt="" class="image-test">
                </div>
                <div class="right-card">
                    <div><h2 class="title-card">{{ product.title }}</h2></div>
                    <div class="desc-card">{{ product.description }}</div>
                    <div class="stock-card">Stock : {{ product.stock }}</div>
                    <div class="price-card">{{ product.price }} €</div>
                    <div v-for="categories in product.category" class="cat-card">Catégorie : {{ categories }}</div>
                    <div class="button-card">
                        <div><button class="btn-card" @click="EditOneProduct(product.id)">Modifier</button></div>
                        <div><button class="btn-card" @click="deleteData(product.id)">Supprimez</button></div>
                        <div><button class='btn-card' @click="navigateToProductDetail(product.id)">Détails</button></div>
                    </div>
                </div>
            </div>
        </div>

    </div>
    </template>





<script setup>
import { onMounted, reactive } from 'vue';
import { useRouter } from 'vue-router';
import EditProduct from './EditProduct.vue';
const router = useRouter();
const products = reactive({
    
});


function fetchProductsDetails() {
    axios.get('products').then(response => {
        products.value = response.data.data;
        console.log(products.value)
    });
};

function navigateToProductDetail(productId) {
    
    router.push({ name: 'ProductDetail', params: { id: productId } });
}

function EditOneProduct(productId) {
    
    router.push({ name: 'EditProduct', params: { id: productId } });

}

async function deleteData(productId) {
    try {
        if (productId) {
            await axios.delete(`products/${productId}`);
            console.log('La suppression a réussi');
            fetchProductsDetails();
        } else {
            console.error('L\'ID du produit est indéfini.');
        }
    } catch (error) {
        console.error('Erreur lors de la suppression du produit :', error);
    }
}



onMounted(fetchProductsDetails);
</script>


<style>

.card-container-all {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.container-card {
    border-radius: 10px;
    display: grid;
    grid-template-rows: auto 1fr; /* La première ligne pour l'image, la deuxième pour le contenu */
    width: 320px;
    height: 580px;
    background-color: wheat;
    margin: 30px;
}

.image-test {
    width: 100%; /* Pour que l'image occupe toute la largeur de son conteneur */
    height: 100%; /* Pour que l'image occupe toute la hauteur de son conteneur */
    object-fit: cover; /* Pour que l'image remplisse entièrement le conteneur en conservant son ratio */
    object-position: center; /* Pour que l'image soit centrée dans le conteneur */
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}

.right-card {
    padding: 10px;
}


.right-card {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    overflow: hidden;
}

.title-card {
    font-size: 2em;
}

.price-card {
    font-size: 1.8em;
}

.button-card {
    display: flex;
    gap: 10px;
}

.btn-card {
    text-decoration: none;
    color: black;
    padding: 10px 15px; 
    background-color: aqua;
    border-radius: 8px;   
}

.add-prduct-btn {
    text-decoration: none;
    color: black;
    padding: 10px 15px; 
    background-color: aqua;
    border-radius: 8px;  
    margin: 30px;
    display: inline-block;
}

</style>