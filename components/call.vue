<template>
    <div class="flex flex-col justify-center items-center  text-center mx-16 h-60 md:flex-row bg-slate-100 mt-7 gap-5 md:gap-3 shadow-xl rounded-md">
      <div class="flex flex-col  justify-center md:items-start text-center md:text-left w-4/5 mx-20">
        <h2 class="text-4xl font-bold text-sky-900 mb-4">Schedule a Free Consultation Call Today</h2>
        <h3 class="text-xl font-semibold text-gray-800">
          Experience how our solutions can propel your business forward with a consultation.
        </h3>
      </div>
  
      <div class="flex gap-5 mt-4 md:mt-0 w-1/5 flex-col md:items-start">
        <NuxtLink to="/request">
          <button class="px-5 py-3 bg-sky-900 w-40 text-white font-semibold rounded-md hover:bg-sky-800 transition duration-300">
            Request a call 
          </button>
        </NuxtLink>
        <NuxtLink to="/contact">
          <button class="px-5 py-3 bg-transparent w-40 text-sky-900 border border-solid border-black font-semibold rounded-md hover:bg-sky-800 hover:text-white transition duration-300">
            Connect with us
          </button>
        </NuxtLink>
      </div>
    </div>
  </template>
  