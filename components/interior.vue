<template>
    <div class="bg-white">
      <div class="mx-auto max-w-2xl  px-4 pb-12 sm:px-6 lg:max-w-7xl lg:px-8">
        <div class="grid grid-cols-1 items-start gap-y-16 gap-x-14 lg:grid-cols-2 mt-20">
          
          <div>
            <div class="border-b border-gray-200 pb-10">
              <h2 class="font-medium text-md text-gray-500">Refined</h2>
              <p class="mt-2 text-3xl font-bold tracking-tight text-sky-900 sm:text-4xl">STYLISH PRECISION</p>
            </div>
            
            <dl class="mt-10 space-y-8">
              <div v-for="feature in interiorDesigner.features" :key="feature.name">
                <dt class="text-xl font-semibold text-gray-900">{{ feature.name }}</dt>
                <dd class="mt-3 text-md sm:text-lg text-gray-500">{{ feature.description }}</dd>
              </div>
            </dl>
          </div>
  
          <div>
            <div class="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100 mb-7">
              <img src="../assets/i2.jpg" alt="Room design image 1" class="h-full w-full object-cover object-center" />
            </div>
            <div class="mt-4 grid grid-cols-2 gap-4 sm:mt-6 sm:gap-6 lg:mt-8 lg:gap-8">
              <div class="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100">
                <img src="../assets/i1.jpg" alt="Room design image 2" class="h-full w-full object-cover object-center" />
              </div>
              <div class="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100">
                <img src="../assets/i3.jpg" alt="Room design image 3" class="h-full w-full object-cover object-center" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const interiorDesigner = {
  features: [
    { name: "Purpose", description: "We specialize in designing personalized and functional spaces, turning every room into a reflection of your style and needs." },
    { name: "Materials", description: "We use premium materials such as luxurious fabrics, high-quality wood, and elegant finishes to create a sophisticated and comfortable environment." },
    { name: "Space Planning", description: "Our designs optimize the available space, balancing aesthetics with functionality to create harmonious, well-organized rooms." },
    { name: "Design Style", description: "From modern to traditional, eclectic to minimalist, we offer a variety of design styles to suit your taste and lifestyle." },
    { name: "Inclusions", description: "Our services include customized furniture, lighting designs, mood boards, and 3D visualizations to help you visualize your dream space before we begin." }
  ]
};
  </script>
  