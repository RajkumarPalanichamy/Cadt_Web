<template>
  <div class="bg-white">
    <div class="mx-auto max-w-2xl pt-24 px-4 py-12 sm:px-6 lg:max-w-7xl lg:px-8">
      <div class="grid grid-cols-1 items-start gap-y-16 gap-x-14 lg:grid-cols-2">
       
        <div>
          <div class="border-b border-gray-200 pb-10">
            <h2 class="font-medium text-md text-gray-500">Versatile</h2>
            <p class="mt-2 text-3xl font-bold tracking-tight text-sky-900 sm:text-4xl">ELEGANT SIMPLICITY</p>
          </div>

          
          <dl class="mt-10 space-y-8">
            <div v-for="feature in kitchenDesigner.features" :key="feature.name">
              <dt class=" sm:text-xl font-semibold text-gray-900">{{ feature.name }}</dt>
              <dd class="mt-3 text-md sm:text-lgc:\Users\lavan\Downloads\i1.jpg c:\Users\lavan\Downloads\i3.jpg c:\Users\lavan\Downloads\i2.jpg text-gray-500">{{ feature.description }}</dd>
            </div>
          </dl>
        </div>

       
        <div>
          <div class="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100 mb-7">
            <img src="../assets/k1.jpg" alt="Kitchen design image 1" class="h-full w-full object-cover object-center" />
          </div>
          <div class="mt-4 grid grid-cols-2 gap-4 sm:mt-6 sm:gap-6 lg:mt-8 lg:gap-8">
            <div class="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100">
              <img src="../assets/k2.jpg" alt="Kitchen design image 2" class="h-full w-full object-cover object-center" />
            </div>
            <div class="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100">
              <img src="../assets/k3.jpg" alt="Kitchen design image 3" class="h-full w-full object-cover object-center" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

const kitchenDesigner = {
  title: "Kitchen Designer",
  description: "Designing functional and aesthetically pleasing kitchen spaces, we incorporate modern appliances and materials while optimizing layout for workflow.",
  features: [
    { name: "Purpose", description: "We create kitchens that blend functionality with beauty, ensuring they meet your unique needs and enhance your lifestyle." },
    { name: "Materials", description: "We use high-quality materials like solid countertops, durable cabinetry, and eco-friendly finishes for a sustainable touch." },
    { name: "Layout Optimization", description: "Our designs focus on efficient workflows, maximizing storage, and ensuring every inch of space is utilized effectively." },
    { name: "Design Style", description: "Choose from a range of styles, including modern, minimalist, rustic, or classic, tailored to match your preferences." },
    { name: "Inclusions", description: "Our services include 3D visualizations, lighting plans, and expert material selection to bring your dream kitchen to life." }
  ],
 
};
</script>
