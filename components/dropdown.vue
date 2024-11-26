<template>
    <div class="relative" @mouseenter="openDropdown" @mouseleave="closeDropdown">
     
      <button class="text-lg font-semibold text-gray-900 hover:text-gray-700 flex items-center gap-2">
        {{ title }}
        <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
          <path
            fill-rule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 01.02-1.06z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
  
    
      <div
        v-if="isOpen"
        class="absolute z-10 mt-2 w-48 bg-white shadow-lg rounded-md py-2"
      >
        <NuxtLink
          v-for="item in items"
          :key="item.name"
          :to="item.href"
          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          {{ item.name }}
        </NuxtLink>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const props = defineProps({
    title: String,
    items: {
      type: Array,
      required: true,
    },
  });
  
  const isOpen = ref(false);
  
  function openDropdown() {
    isOpen.value = true;
  }
  
  function closeDropdown() {
    isOpen.value = false;
  }
  </script>
  