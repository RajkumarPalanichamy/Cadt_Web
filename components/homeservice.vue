<template>
  <div class="container mx-auto my-10">
    <div class="flex flex-col md:flex-row items-center gap-5 justify-around px-20">
  
      <div class="md:w-1/3 relative">
        <div class="relative overflow-hidden">
          <div
            v-for="(card, index) in cards"
            :key="index"
            v-show="index === activeIndex"
            class="transition-opacity duration-500 flex justify-center"
          >
            <img
              :src="card.image ? '/' + card.image : '/3d.jpg'"
              alt="Carousel Image"
              class="w-[350px] h-64 rounded-lg mt-6"
            />
          </div>
        </div>

    
        <div class="flex justify-center items-center mt-4 space-x-2">
          <button
            v-for="(card, index) in cards"
            :key="index"
            @click="setActiveIndex(index)"
            class="w-3 h-3 rounded-full mt-5"
            :class="index === activeIndex ? 'bg-sky-900' : 'bg-gray-400'"
          ></button>
        </div>

       
        <button
          class="absolute left-24 transform -translate-y-1/2 shadow-md text-white rounded-full px-2 py-1 focus:outline-none z-10 bg-sky-900"
          @click="prevSlide"
        >
          <span class="mdi mdi-arrow-left font-semibold"></span>
        </button>
        <button
          class="absolute right-24 transform -translate-y-1/2 text-white bg-sky-900 shadow-md rounded-full px-2 py-1 focus:outline-none z-10"
          @click="nextSlide"
        >
          <span class="mdi mdi-arrow-right"></span>
        </button>
      </div>

    
      <div class="md:w-2/3  ">
        <div class="text-center md:text-left">
          <h1 class="text-3xl font-bold text-sky-900 mb-4">
            SERVICES WE ARE OFFERING
          </h1>
          <h2 class="text-2xl font-bold mb-4">{{ activeContent.title }}</h2>
          <p class=" font-medium text-lg leading-7 text-gray-900 pb-4 ">
            {{ activeContent.description }}
          </p>
        </div>
        <router-link
            :to="activeContent.route"
            class="mt-3 inline-block bg-sky-900 text-white py-2 px-4 rounded-lg hover:bg-sky-700"
          >
            Learn More
          </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { expertiseList } from '../data/service.json';
const cards = ref(expertiseList);

const activeIndex = ref(0);
const activeContent = computed(() => cards.value[activeIndex.value]);


const nextSlide = () => {
  activeIndex.value = (activeIndex.value + 1) % cards.value.length;
};

const prevSlide = () => {
  activeIndex.value = (activeIndex.value - 1 + cards.value.length) % cards.value.length;
};

const setActiveIndex = (index) => {
  activeIndex.value = index;
};
</script>

<style scoped>
.transition-opacity {
  transition: opacity 0.5s ease-in-out;
}
</style>
