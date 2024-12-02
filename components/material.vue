<template>
    <div class="bg-white">
      <div class="mx-auto max-w-2xl pt-24 pb-7 px-4 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8">
        <div class="grid grid-cols-1 items-start gap-y-16 gap-x-14 lg:grid-cols-2 mt-12">
          
          <div>
            <div class="border-b border-gray-200 pb-10">
              <h2 class="font-medium text-md text-gray-500">Sculptural</h2>
              <p class="mt-2 text-5xl font-bold tracking-tight text-sky-900 sm:text-4xl">ELEGENT RESILLIENCE</p>
            </div>
            
            <dl class="mt-10 space-y-8">
              <div v-for="feature in materialPlanner.features" :key="feature.name">
                <dt class="text-xl font-semibold text-gray-900">{{ feature.name }}</dt>
                <dd class="mt-3 text-lg text-gray-500">{{ feature.description }}</dd>
              </div>
            </dl>
          </div>
  
          <div>
            <div class="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100 mb-7">
              <img src="../assets/m3.jpg" alt="Room design image 1" class="h-full w-full object-cover object-center" />
            </div>
            <div class="mt-4 grid grid-cols-2 gap-4 sm:mt-6 sm:gap-6 lg:mt-8 lg:gap-8">
              <div class="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100">
                <img src="../assets/m1.jpg" alt="Room design image 2" class="h-full w-full object-cover object-center" />
              </div>
              <div class="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100">
                <img src="../assets/m2.jpg" alt="Room design image 3" class="h-full w-full object-cover object-center" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
 const materialPlanner = {
  features: [
    { 
      name: "Purpose", 
      description: "We ensure the seamless planning and procurement of materials, tailored to meet project-specific requirements efficiently and cost-effectively." 
    },
    { 
      name: "Material Sourcing", 
      description: "We partner with trusted suppliers to provide high-quality materials that align with your project goals and budget." 
    },
    { 
      name: "Inventory Management", 
      description: "Our planning includes detailed tracking and management of materials to avoid shortages or surpluses, ensuring smooth project progress." 
    },
    { 
      name: "Cost Optimization", 
      description: "We analyze and forecast material costs to optimize spending and help you stay within budget without compromising quality." 
    },
    { 
      name: "Sustainability", 
      description: "Our approach incorporates eco-friendly materials and practices to minimize environmental impact while maintaining project standards." 
    }
  ]
};

  </script>
  