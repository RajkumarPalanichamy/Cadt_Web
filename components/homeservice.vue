<template>
    <!-- <div class="container mx-auto mt-10">
      <div class="flex flex-col md:flex-row items-center">
      
        <div class="md:w-1/2 flex items-center justify-center p-5">
          <div class="text-center md:text-left">
            <h2 class="text-3xl font-bold mb-4">{{ activeContent.title }}</h2>
            <p class="text-gray-600">{{ activeContent.description }}</p>
          </div>
        </div>
  
      
        <div class="md:w-1/2 relative">
         
          <div class="relative overflow-hidden">
            <div
              v-for="(card, index) in cards"
              :key="index"
              class="absolute inset-0 transition-transform duration-700"
              :class="{ 'translate-x-0': index === activeIndex, 'translate-x-full': index > activeIndex, '-translate-x-full': index < activeIndex }"
            >
              <img
                :src="card.image"
                alt="Carousel Image"
                class="w-full h-60 object-cover rounded-lg"
              />
            </div>
          </div>
  
          
          <div class="flex justify-center mt-4 space-x-2">
            <button
              v-for="(card, index) in cards"
              :key="index"
              @click="setActiveIndex(index)"
              class="w-3 h-3 rounded-full"
              :class="index === activeIndex ? 'bg-blue-500' : 'bg-gray-400'"
            ></button>
          </div>
  
         
          <button
            class="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white shadow-md rounded-full p-2 focus:outline-none"
            @click="prevSlide"
          >
            <span class="material-icons text-gray-600">chevron_left</span>
          </button>
          <button
            class="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white shadow-md rounded-full p-2 focus:outline-none"
            @click="nextSlide"
          >
            <span class="material-icons text-gray-600">chevron_right</span>
          </button>
        </div>
      </div>
    </div> -->
  </template>
  
  <!-- <script setup>
  import { ref, computed } from 'vue';
  
  
  const cards = ref([
    {
      image: "../assets/kitchen.vue",
      title: "Card Title 1",
      description: "This is a description for the first card."
    },
    {
      image: "../assets/",
      title: "Card Title 2",
      description: "This is a description for the second card."
    },
    {
      image: "",
      title: "Card Title 3",
      description: "This is a description for the third card."
    },
    {
      image: "",
      title: "Card Title 4",
      description: "This is a description for the fourth card."
    },
    {
      image: "",
      title: "Card Title 5",
      description: "This is a description for the fifth card."
    }
  ]);
  const activeIndex = ref(0);
  const activeContent = computed(() => cards.value[activeIndex.value]);
  
 
  const nextSlide = () => {
    activeIndex.value = (activeIndex.value + 1) % cards.value.length;
  };
  
  const prevSlide = () => {
    activeIndex.value =
      (activeIndex.value - 1 + cards.value.length) % cards.value.length;
  };
  
  
  const setActiveIndex = (index) => {
    activeIndex.value = index;
  };
  </script>
  
  <style scoped>
  
  button {
    transition: background-color 0.3s ease;
  }
  </style>
   -->