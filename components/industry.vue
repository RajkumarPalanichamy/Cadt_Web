<template>
    <section>
      <div class="space-y-16 mt-7">
        <div
          v-for="(industry, index) in industries"
          :key="index"
          class="flex items-center  justify-center"
        >
          <div
            :class="{
              'flex-row items-center justify-around space-x-32 ': index % 2 === 0,
              'flex-row-reverse items-center justify-between': index % 2 !== 0
            }"
            class="flex items-center w-full max-w-screen-xl"
          >
           
            <div class="flex justify-center">
              <img
                :src="industry.image"
                :alt="industry.title"
                class="w-96 h-[600px] object-cover rounded-lg"
              />
            </div>
  
          
            <div class="flex-1 flex flex-col  items-center sm:items-start">
              <h3 class="text-4xl font-bold mb-8 text-center justify-center  sm:text-left text-sky-900">
                {{ industry.title }}
              </h3>
              <ul class="list-none text-gray-700 space-y-8 text-xl w-5/6">
                <li
                  v-for="(point, idx) in industry.points"
                  :key="idx"
                  class="flex items-center gap-4"
                >
                  
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="4"
                    stroke="currentColor"
                    class="w-12 h-12 text-sky-900"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                 
                  {{ point }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import industriesData from "~/data/industry.json";
  const industries = industriesData.industries;
  </script>
  