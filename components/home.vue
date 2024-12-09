<template>
  <div class="relative w-full h-screen mt-16 overflow-hidden md:mt-7">
    <div 
      v-if="currentSlide === 0" 
      class="absolute inset-0 flex flex-col md:flex-row transition-opacity duration-1000 justify-around ease-in-out opacity-0 bg-gradient-to-r from-white via-sky-50 to-sky-200"
      :class="{ 'opacity-100': currentSlide === 0 }">
      <div class="w-full md:w-2/5 h-full flex items-center justify-center">
        <img src="../assets/br.png" alt="Technology Display 1" class="h-auto max-w-full px-4 md:px-0 object-cover">
      </div>
      <main class="w-full md:w-3/5 relative z-10 flex items-center justify-center px-6 lg:px-8">
        <div class="max-w-2xl py-16 sm:py-32 lg:py-40">
          <div class="hidden sm:mb-8 sm:flex sm:justify-center">
            <div class="relative rounded-full py-1 px-3 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Discover the latest in tech.
              <a href="#" class="font-semibold text-sky-700">
                <span class="absolute inset-0" aria-hidden="true"></span>
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div class="text-center">
            <h1 class="text-2xl md:text-4xl font-bold tracking-tight text-sky-900 sm:text-6xl">
              Embrace the Future of Technology!
            </h1>
            <p class="mt-6 text-sm md:text-lg leading-8 text-gray-600">
              Stay ahead of the curve with cutting-edge technology solutions designed for tomorrow’s challenges.
            </p>
            <div class="mt-6 md:mt-10 flex flex-col md:flex-row items-center justify-center gap-x-6 gap-y-3">
              <NuxtLink 
                to="/tech" 
                class="rounded-md bg-sky-900 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:shadow-md hover:bg-slate-200 hover:font-bold hover:text-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Explore Now
              </NuxtLink>
              <NuxtLink 
                to="/about" 
                class="text-base font-semibold leading-7 text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </main>
    </div>


    <div 
      v-if="currentSlide === 1" 
      class="absolute inset-0 flex flex-col md:flex-row transition-opacity duration-1000 ease-in-out opacity-0 bg-gradient-to-r from-white via-sky-50 to-sky-200"
      :class="{ 'opacity-100': currentSlide === 1 }">
      
      <main class="w-full md:w-3/5 relative z-10 flex items-center justify-center px-6 lg:px-8">
        <div class="max-w-2xl py-16 sm:py-32 lg:py-40">
          <div class="hidden sm:mb-8 sm:flex sm:justify-center">
            <div class="relative rounded-full py-1 px-3 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Explore cutting-edge advancements.
              <a href="#" class="font-semibold text-sky-700">
                <span class="absolute inset-0" aria-hidden="true"></span>
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div class="text-center">
            <h1 class="text-2xl md:text-4xl font-bold tracking-tight text-sky-900 sm:text-6xl">
              Innovating Tomorrow, Today!
            </h1>
            <p class="mt-6 text-sm md:text-lg leading-8 text-gray-600">
              Discover the innovations that are shaping the future of the tech industry.
            </p>
            <div class="mt-6 md:mt-10 flex flex-col md:flex-row items-center justify-center gap-x-6 gap-y-3">
              <NuxtLink 
                to="/tech" 
                class="rounded-md bg-sky-900 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:shadow-md hover:bg-slate-200 hover:font-bold hover:text-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Explore Now
              </NuxtLink>
              <NuxtLink 
                to="/about" 
                class="text-base font-semibold leading-7 text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </main>
      <div class="w-full md:w-2/5 h-full flex items-center justify-center">
        <img src="../assets/hbg2.png" alt="Technology Display 2" class="h-auto max-w-full px-4 md:px-0 object-cover">
      </div>
    </div>

  
    <div 
      v-if="currentSlide === 2" 
      class="absolute inset-0 flex flex-col md:flex-row justify-around transition-opacity duration-1000 ease-in-out opacity-0 bg-gradient-to-r from-white via-sky-50 to-sky-200"
      :class="{ 'opacity-100': currentSlide === 2 }">
      <div class="w-full md:w-2/5 h-full flex items-center justify-center">
        <img src="../assets/3d.jpg" alt="Technology Display 3" class="h-auto max-w-full px-4 md:px-0 object-cover">
      </div>
      <main class="w-full md:w-3/5 relative z-10 flex items-center justify-center px-6 lg:px-8">
        <div class="max-w-2xl py-16 sm:py-32 lg:py-40">
          <div class="hidden sm:mb-8 sm:flex sm:justify-center">
            <div class="relative rounded-full py-1 px-3 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              The future of tech is here.
              <a href="#" class="font-semibold text-sky-700">
                <span class="absolute inset-0" aria-hidden="true"></span>
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div class="text-center">
            <h1 class="text-2xl md:text-4xl font-bold tracking-tight text-sky-900 sm:text-6xl">
              Revolutionizing the Digital World!
            </h1>
            <p class="mt-6 text-sm md:text-lg leading-8 text-gray-600">
              Join us in exploring the revolutionary digital solutions for tomorrow's world.
            </p>
            <div class="mt-6 md:mt-10 flex flex-col md:flex-row items-center justify-center gap-x-6 gap-y-3">
              <NuxtLink 
                to="/tech" 
                class="rounded-md bg-sky-900 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:shadow-md hover:bg-slate-200 hover:font-bold hover:text-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Explore Now
              </NuxtLink>
              <NuxtLink 
                to="/about" 
                class="text-base font-semibold leading-7 text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </NuxtLink>
            </div>

          </div>
        </div>
      </main>
    </div>
    <div class="absolute inset-0 flex justify-between items-center px-4">
      <button 
        @click="prevSlide" 
        class="bg-white rounded-full shadow-md p-1 hover:bg-gray-100 flex items-center justify-center md:p-2"
        :class="{'left-2': true, 'md:left-4': true, 'lg:left-8': true}"
        style="z-index: 10;">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button 
        @click="nextSlide" 
        class="bg-white rounded-full shadow-md p-1 hover:bg-gray-100 flex items-center justify-center md:p-2"
        :class="{'right-2': true, 'md:right-4': true, 'lg:right-8': true}"
        style="z-index: 10;">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
    
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const currentSlide = ref(0)
const slides = [0, 1, 2]

function nextSlide() {
  currentSlide.value = (currentSlide.value + 1) % slides.length
}

function prevSlide() {
  currentSlide.value = (currentSlide.value - 1 + slides.length) % slides.length
}

onMounted(function () {
  setInterval(nextSlide, 3000)
})
</script>