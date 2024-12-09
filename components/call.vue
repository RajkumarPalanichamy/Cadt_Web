
<template>
  <div class="flex flex-col lg:flex-row justify-center items-center lg:justify-around py-10 bg-gradient-to-r from-white via-sky-50 to-sky-200">
    <div class="text-center lg:text-left">
      <h3 class="mt-1 text-2xl sm:text-3xl lg:text-4xl font-bold leading-8 tracking-tight text-sky-900 pt-6 animate__animated animate__fadeInUp">
        Ready to Elevate Your Digital Experience? <br>
        Let's Transform Together!
      </h3>
      <NuxtLink to="/contact" class="inline-block">
        <button class="mt-6 lg:mt-10  px-3 sm:px-5 py-2 sm:py-3 bg-transparent w-38 sm:w-40 text-sky-900 border border-solid border-black font-semibold rounded-md transition duration-300 hover:bg-sky-800 hover:text-white hover:animate-pulse">
          Connect with us
        </button>
      </NuxtLink>
    </div>
    <img 
      src="../assets/phone.jpg" 
      alt="Phone" 
      class="w-72 h-48 sm:w-80 sm:h-56 lg:w-96 lg:h-64 mt-8 lg:mt-0 rounded-md"
    >
  </div>
</template>
