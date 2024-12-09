<template>
  <section>
    <h3 
      class="  mt-6 text-3xl font-bold flex justify-center items-center leading-8 tracking-tight text-sky-900 text-transparent bg-clip-text sm:text-4xl pb-10"
    >
      Industries We Serve
    </h3>
    <div class="space-y-16 mt-7">
      <div
        v-for="(industry, index) in industries"
        :key="index"
        class="flex items-center justify-center"
      >
        <div
          :class="[
            'flex flex-col items-center w-full max-w-screen-xl',
            index % 2 === 0
              ? 'sm:flex-row sm:items-center sm:justify-around sm:space-x-32'
              : 'sm:flex-row-reverse sm:items-center sm:justify-between',
          ]"
        >
        
          <div class="flex justify-center px-4">
            <img
              :src="industry.image"
              :alt="industry.title"
              class=" sm:w-96 sm:h-[600px] sm:object-cover rounded-lg"
            />
          </div>

         
          <div class="flex-1 flex flex-col items-center sm:items-start">
            <h3 class="md:text-4xl pt-4 text-2xl font-bold mb-8 text-center sm:text-left text-sky-900">
              {{ industry.title }}
            </h3>
            <ul class="list-none text-gray-700 space-y-8 md:text-xl text-lg w-5/6">
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
