<template>
  <div class="font-poppins  w-full mx-auto p-4">
    <h3 
      class="font-poppins  mt-4 text-3xl font-bold flex justify-center items-center leading-8 tracking-tight bg-sky-900 text-transparent bg-clip-text sm:text-4xl pb-10"
    >
      Services We're Offering
    </h3>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
      <div 
        v-for="(item, index) in expertiseList" 
        :key="index" 
        class="overflow-hidden flex flex-col justify-between items-center px-2 py-2  rounded-xl shadow-md"
      >
        <div class="w-64 h-64 overflow-hidden flex justify-center items-center">
          <img
            :src="item.image"
            :alt="item.title"
            class="w-full h-full object-cover rounded-full hover:shadow-xl border border-sky-900"
          />
        </div>
        <div class="p-4">
          <h3 class="text-xl font-poppins font-bold text-black text-center">{{ item.title }}</h3>
        </div>

        <div class="px-4 pb-4">
          <p class="text-black text-md font-poppins text-center">{{ item.description }}</p>
          <div class="flex items-center">
            <router-link
              :to="item.route"
              class="mt-4 inline-block px-6 py-2 text-lg font-bold font-poppins text-sky-900"
            >
              READ MORE
            </router-link>
            <div class="bg-sky-100 h-1 w-56 mt-5"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { expertiseList } from '../data/service.json';
</script>
