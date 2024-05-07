<template>
    <div class="title">
       <h1>{{ title }}</h1> 
        
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
    return {
      title: '' 
    }
  },
  mounted() {
    axios
      .get('http://127.0.0.1:8000/api/welcome')
      .then((response) => {
        this.title = response.data
      })
  }
}
</script>

<style scoped>

h1 {
    text-align: center;
}
</style>
