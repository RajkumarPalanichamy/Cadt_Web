<template>
    <div class="bg-white">
      <div class="mx-auto max-w-2xl pt-24 pb-7 px-4 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8">
        <div class="grid grid-cols-1 items-start gap-y-16 gap-x-14 lg:grid-cols-2 mt-12">
          
          <div>
            <div class="border-b border-gray-200 pb-10">
              <h2 class="font-medium text-md text-gray-500">Sleek</h2>
              <p class="mt-2 text-5xl font-bold tracking-tight text-sky-900 sm:text-4xl">RUSTIC CHARM</p>
            </div>
            
            <dl class="mt-10 space-y-8">
              <div v-for="feature in smartSpaceOptimizer.features" :key="feature.name">
                <dt class="text-xl font-semibold text-gray-900">{{ feature.name }}</dt>
                <dd class="mt-3 text-lg text-gray-500">{{ feature.description }}</dd>
              </div>
            </dl>
          </div>
  
          <div>
            <div class="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100 mb-7">
              <img src="../assets/s1.jpg" alt="Room design image 1" class="h-full w-full object-cover object-center" />
            </div>
            <div class="mt-4 grid grid-cols-2 gap-4 sm:mt-6 sm:gap-6 lg:mt-8 lg:gap-8">
              <div class="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100">
                <img src="../assets/z3.jpg" alt="Room design image 2" class="h-full w-full object-cover object-center" />
              </div>
              <div class="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100">
                <img src="../assets/z2.jpg" alt="Room design image 3" class="h-full w-full object-cover object-center" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
  
<script setup>
    const smartSpaceOptimizer = {
  features: [
    {
      name: "Purpose",
      description: "We specialize in transforming compact areas into efficient, multi-functional spaces without compromising on style or comfort."
    },
    {
      name: "Space Utilization",
      description: "Our designs maximize every square inch, integrating smart solutions like foldable furniture, modular setups, and hidden storage."
    },
    {
      name: "Technology Integration",
      description: "We incorporate smart home technologies, like automated lighting, climate control, and IoT-enabled devices, to enhance convenience and usability."
    },
    {
      name: "Custom Designs",
      description: "Every project is tailored to individual needs, offering bespoke layouts and unique features that reflect your personal lifestyle and taste."
    },
    {
      name: "Eco-Friendly Solutions",
      description: "Our approach integrates sustainable materials and energy-efficient systems to create spaces that are environmentally responsible."
    }
  ]
};

  </script>
  