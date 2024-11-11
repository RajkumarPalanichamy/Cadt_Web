<template>
    <div class="container mx-auto p-4" v-if="item">
      <h2 class="text-2xl font-bold">{{ item.title }}</h2>
      <img :src="item.image" :alt="item.title" class="w-full h-64 object-cover rounded-lg mt-4" />
      <p class="mt-2 text-lg">{{ item.description }}</p>
      <p class="mt-2 text-xl font-semibold">Price: ${{ item.price }}</p>
      <!-- <button @click="addToCart" class="bg-blue-500 text-white px-4 py-2 rounded">
        Add to Cart
      </button> -->
      <h3 class="mt-6 text-lg font-semibold">Related Products</h3>
      <ul class="mt-2">
        <li v-for="relatedItem in relatedItems" :key="relatedItem.id" class="mt-2">
          <nuxt-link :to="`/detail/${relatedItem.id}`" class="text-blue-700">
            {{ relatedItem.title }}
          </nuxt-link>
        </li>
      </ul>
      <nuxt-link to="/setup" class="mt-4 inline-block text-blue-700">Back to Setup</nuxt-link>
    </div>
    <div v-else>
      <p>Loading...</p> 
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  import { useRoute } from 'vue-router';
  
 
  const items = [
    { id: 1, title: 'Item 1', image: 'https://via.placeholder.com/300', description: 'Description for Item 1', price: 100 },
    { id: 2, title: 'Item 2', image: 'https://via.placeholder.com/300', description: 'Description for Item 2', price: 200 },
    { id: 3, title: 'Item 3', image: 'https://via.placeholder.com/300', description: 'Description for Item 3', price: 300 },
  ];
  
  const route = useRoute();
  

  const item = computed(() => {
    const id = parseInt(route.params.id);
    return items.find(i => i.id === id);
  });
  
  
  const relatedItems = computed(() => {
    const id = parseInt(route.params.id);
    return items.filter(i => i.id !== id);
  });
  
  
  // const addToCart = () => {
  //   console.log(`${item.value.title} added to cart.`);
  // };
  </script>
  
  <style scoped>
  .container {
    max-width: 600px;
  }
  </style>
  