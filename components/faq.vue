<template>
  <div class="bg-cover bg-center bg-no-repeat bg-gradient-to-r from-white via-sky-50 to-sky-200">
    <div class="mx-auto max-w-7xl px-6 py-24 sm:py-10 lg:py-16 lg:px-8">
      <div class="mx-auto max-w-4xl divide-y divide-gray-900/10">
        <h3 class="mt-1 text-3xl font-bold leading-8 tracking-tight text-sky-900 sm:text-5xl pt-6">
          You need to know<br />
          before begin everything.
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
                <span class="text-lg font-semibold leading-7">{{ faq.question }}</span>
                <span class="ml-6 flex h-7 items-center">
                  <i :class="isOpen(index) ? 'mdi mdi-minus' : 'mdi mdi-plus'" class="h-6 w-6"></i>
                </span>
              </button>
            </dt>
            <dd v-if="isOpen(index)" class="mt-2 pr-12">
              <p class="text-base leading-7 text-gray-600">{{ faq.answer }}</p>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// FAQ data
const faqs = [
{
      question: "What is 3D CAD, and why is it important in design?",
      answer:
        "3D CAD (Computer-Aided Design) allows designers to create three-dimensional models of objects and structures on a computer. It’s essential because it provides detailed visualizations, precise measurements, and allows for virtual prototyping, which saves time and resources during the product development process. ",
    },
    {
      question: "What is the difference between 2D and 3D CAD?",
      answer:
        "2D CAD represents designs as flat, two-dimensional drawings (length and width), while 3D CAD adds depth, creating a full, spatial model of an object. 3D CAD allows for realistic rendering, easier visualization, and testing of how a part will interact with other components.",
    },
    {
      question: "What are some popular 3D CAD software programs?",
      answer:
        " Popular 3D CAD programs include AutoCAD, SolidWorks, Fusion 360, CATIA, and Rhino. Each has its own strengths depending on the type of design, complexity, and industry requirements. ",
    },
    {
      question: "What is a CAD file format, and which formats are commonly used in 3D CAD?",
      answer:
        "A CAD file format is a type of digital file used to store 3D models. Common formats include STL, STEP, IGES, DWG, and OBJ. These formats allow CAD files to be shared across different software platforms and 3D printers. ",
    },
    {
      question: "What is an STL file, and when should I use it?",
      answer:
        "STL (Stereolithography) is a file format commonly used for 3D printing because it represents the surface geometry of a 3D object without color or texture. It’s ideal for transferring models to 3D printers or other systems that don’t require detailed material properties.",
    },
];


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
