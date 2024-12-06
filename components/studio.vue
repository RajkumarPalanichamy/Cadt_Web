<template>
    <div class="bg-white">
      <div class="mx-auto max-w-2xl pt-28 pb-7 px-4 sm:pb-12 sm:px-6 lg:max-w-7xl lg:px-8">
        <div class="grid grid-cols-1 items-start gap-y-16 gap-x-14 lg:grid-cols-2">
          
          <div>
            <div class="border-b border-gray-200 pb-10">
              <h2 class="font-medium text-md text-gray-500">Opulent</h2>
              <p class="mt-2 text-3xl font-bold tracking-tight text-sky-900 sm:text-4xl">CRAFTED PERFECTION</p>
            </div>
            
            <dl class="mt-10 space-y-8">
              <div v-for="feature in productShowcaseStudio.features" :key="feature.name">
                <dt class="sm:text-xl text-lg font-semibold text-gray-900">{{ feature.name }}</dt>
                <dd class="mt-3 text-md sm:text-lg text-gray-500">{{ feature.description }}</dd>
              </div>
            </dl>
          </div>
  
          <div>
            <div class="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100 mb-7">
              <img src="../assets/p3.jpg" alt="Room design image 1" class="h-full w-full object-cover object-center" />
            </div>
            <div class="mt-4 grid grid-cols-2 gap-4 sm:mt-6 sm:gap-6 lg:mt-8 lg:gap-8">
              <div class="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100">
                <img src="../assets/p1.jpg" alt="Room design image 2" class="h-full w-full object-cover object-center" />
              </div>
              <div class="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100">
                <img src="../assets/p2.jpg" alt="Room design image 3" class="h-full w-full object-cover object-center" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
 const productShowcaseStudio = {
  features: [
    { 
      name: "Dynamic Display", 
      description: "We create visually compelling displays tailored to highlight the unique features of your products, making them stand out and capture attention." 
    },
    { 
      name: "High-Quality Visuals", 
      description: "Using premium lighting and advanced staging techniques, we ensure that your products are presented in the best possible light." 
    },
    { 
      name: "Custom Layouts", 
      description: "Our designs are tailored to your brand’s aesthetic, featuring versatile layouts that emphasize the functionality and appeal of each product." 
    },
    { 
      name: "Interactive Features", 
      description: "We integrate interactive elements like touchscreens, dynamic lighting, or 3D displays to create an immersive experience for your customers." 
    },
    { 
      name: "Professional Presentation", 
      description: "From mood boards to fully-realized 3D setups, we provide detailed visualizations to ensure your product showcase aligns with your vision." 
    }
  ]
};
  </script>
  