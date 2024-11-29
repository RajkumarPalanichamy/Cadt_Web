<template>
    <div class="bg-white">
      <div class="mx-auto max-w-2xl pt-24 pb-7 px-4 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8">
        <div class="grid grid-cols-1 items-start gap-y-16 gap-x-14 lg:grid-cols-2 mt-12">
          
          <div>
            <div class="border-b border-gray-200 pb-10">
              <h2 class="font-medium text-md text-gray-500">Whimsical </h2>
              <p class="mt-2 text-5xl font-bold tracking-tight text-sky-900 sm:text-4xl">BOLD MINIMALISM</p>
            </div>
            
            <dl class="mt-10 space-y-8">
              <div v-for="feature in roomCreator.features" :key="feature.name">
                <dt class="text-xl font-semibold text-gray-900">{{ feature.name }}</dt>
                <dd class="mt-3 text-lg text-gray-500">{{ feature.description }}</dd>
              </div>
            </dl>
          </div>
  
          <div>
            <div class="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100 mb-7">
              <img src="../assets/r3.jpg" alt="Room design image 1" class="h-full w-full object-cover object-center" />
            </div>
            <div class="mt-4 grid grid-cols-2 gap-4 sm:mt-6 sm:gap-6 lg:mt-8 lg:gap-8">
              <div class="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100">
                <img src="../assets/r2.jpg" alt="Room design image 2" class="h-full w-full object-cover object-center" />
              </div>
              <div class="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100">
                <img src="../assets/r1.jpg" alt="Room design image 3" class="h-full w-full object-cover object-center" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const roomCreator = {
    features: [
      { name: "Purpose", description: "We design rooms that serve your needs, whether for relaxation, productivity, or entertainment, ensuring each space is uniquely tailored to you." },
      { name: "Materials", description: "We use a variety of materials, from cozy textiles to durable flooring and wall treatments, to create a room that is both comfortable and long-lasting." },
      { name: "Layout Optimization", description: "Our designs prioritize the flow of the space, maximizing functionality and minimizing clutter, to create a room that feels spacious and inviting." },
      { name: "Design Style", description: "Select from a wide range of design styles, including contemporary, vintage, bohemian, or industrial, crafted to reflect your personal taste." },
      { name: "Inclusions", description: "Our services include mood boards, 3D visualizations, and customized furniture recommendations, bringing your dream room to life with thoughtful details." }
    ]
  };
  </script>
  