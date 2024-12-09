<template>
  <div class="bg-cover bg-center bg-no-repeat  bg-gradient-to-r from-white via-sky-50 to-sky-200">
    <div class="mx-auto max-w-7xl px-6 py-24 sm:py-10 lg:py-16 lg:px-8">
      <div class="mx-auto max-w-4xl divide-y divide-gray-900/10">
        <h3 class="mt-1 text-3xl font-bold leading-8 tracking-tight text-sky-900 sm:text-5xl pt-6">
          You need to know<br />
          before beginning everything.
        </h3>
        <dl class="mt-10 space-y-6 divide-y divide-gray-900/10">
          <div
            v-for="(faq, index) in faqs"
            :key="index"
            class="pt-6"
          >
            <dt>
              <button
                @click="toggle(index)"
                class="flex w-full items-start justify-between text-left text-gray-900"
              >
                <span class=" text-md md:text-lg font-semibold leading-7">{{ faq.question }}</span>
                <span class="ml-6 flex h-7 items-center">
                  <i :class="['mdi', isOpen(index) ? 'mdi-minus' : 'mdi-plus']" class="h-6 w-6"></i>
                </span>
              </button>
            </dt>
            <dd v-if="isOpen(index)" class="mt-2 pr-12">
              <p class=" text-sm md:text-base leading-7 text-gray-600">{{ faq.answer }}</p>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup>
import { qa } from '../data/faq.json';
import { ref } from 'vue';

const faqs = ref(qa);
const openIndex = ref(null);

function toggle(index) {
  openIndex.value = openIndex.value === index ? null : index;
}

function isOpen(index) {
  return openIndex.value === index;
}

</script>

<style scoped>
@import url("https://cdn.jsdelivr.net/npm/@mdi/font/css/materialdesignicons.min.css");
</style>
