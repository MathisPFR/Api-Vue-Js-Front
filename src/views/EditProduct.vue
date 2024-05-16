<template>
    <div>
      <h2>Modifier un produit</h2>
      <form @submit.prevent="updateProduct">
        <div>
          <label for="title">Titre :</label>
          <input type="text" id="title" v-model="updatedProduct.title">
        </div>
        <div>
          <label for="description">Description :</label>
          <textarea id="description" v-model="updatedProduct.description"></textarea>
        </div>
        <div>
          <label for="price">Prix :</label>
          <input type="decimal" id="price" v-model="updatedProduct.price">
        </div>
        <div>
          <label for="stock">Stock :</label>
          <input type="number" id="stock" v-model="updatedProduct.stock">
        </div>
        <button type="submit">Modifier</button>
      </form>
    </div>
  </template>
  
  <script>

// import axios from 'axios';
// import { ref } from 'vue';

// export default {
//   data() {
//     return {
//       productId: '',
//       updatedProduct: {
//         title: '',
//         description: '',
//         price: 0,
//         stock: 0,
//         categories: [],
//       },
//     };
//   },
//   mounted() {
//     this.productId = this.$route.params.id;
//     this.fetchProductDetails();
//     this.fetchCategories(); // Appel de la fonction fetchCategories lors du montage du composant
//   },
//   methods: {
//     fetchProductDetails() {
//       axios
//         .get(`products/${this.productId}`)
//         .then((response) => {
//           this.updatedProduct = response.data.products;
//         })
//         .catch((error) => {
//           console.error('Error fetching product details:', error);
//         });
//     },
//     fetchCategories() {
//       axios
//         .get('categories')
//         .then((response) => {
//           this.updatedProduct.categories = response.data.data;
//           console.log('Categories:', this.updatedProduct.categories);
//         })
//         .catch((error) => {
//           console.error('Error fetching categories:', error);
//         });
//     },
//     updateProduct() {
//       axios
//         .put(`products/${this.productId}`, this.updatedProduct)
//         .then(() => {
//           console.log('Product updated successfully');
//           this.$router.push({ name: 'products' });
//         })
//         .catch((error) => {
//           console.error('Error updating product:', error);
//         });
//     },
//   },
// };











import axios from 'axios';

export default {
  data() {
    return {
      productId: '',
      updatedProduct: {
        title: '',
        description: '',
        price: 0,
        stock: 0,
        
      }
    };
  },
  mounted() {
    this.productId = this.$route.params.id;
    this.fetchProductDetails();
  },
  methods: {
    fetchProductDetails() {
      axios
        .get(`products/${this.productId}`)
        .then((response) => {
          this.updatedProduct = response.data.products;
          

          console.log(response.data.category);
        })
        .catch((error) => {
          console.error('Error fetching product details:', error);
        });
    },
    updateProduct() {
      axios
        .put(`products/${this.productId}`, this.updatedProduct)
        .then(() => {
          console.log('Product updated successfully');
          this.$router.push({ name: 'products' });
        })
        .catch((error) => {
          console.error('Error updating product:', error);
        });
    }
  }
};

  </script>
  