<template>
    <div class="w-full mx-auto p-4">
      
      <h3
        class="mt-2 text-3xl font-bold flex justify-center items-center leading-8 tracking-tight bg-gradient-to-r from-teal-700 to-blue-500 inline-block text-transparent bg-clip-text sm:text-4xl pb-10"
      >
        Services We're Offering
      </h3>
      
     
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div 
          v-for="(item, index) in expertiseList" 
          :key="index" 
          class="overflow-hidden flex flex-col justify-between items-center p-5"
        >
         
          <div class="w-64 h-64 overflow-hidden flex justify-center items-center ">
            <img
              :src="item.image"
              :alt="item.title"
              class="w-full h-full object-cover rounded-full hover:shadow-xl border border-sky-900 "
            />
          </div>
          
       
          <div class="p-4">
            <h3 class="text-xl font-bold text-black text-center">{{ item.title }}</h3>
          </div>
          
         
          <div class="px-4 pb-4">
            <p class="text-black text-md text-center">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { expertiseList } from '../data/service.json';
  </script>
  