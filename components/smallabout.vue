<template>
    <section class="about-section flex flex-col md:flex-row mx-auto gap-8 md:gap-16 max-w-6xl my-10 justify-around items-center">
      <div class="company-image-container w-full md:w-1/2 p-4 flex justify-center md:pr-10">
        <img src="../assets/smab.webp" alt="Company Image" class="w-full h-auto " />
      </div>
      
     
      <div class="company-details w-full md:w-1/2  md:text-left">
        <h2 class="text-2xl md:text-3xl font-bold mb-4 text-sky-900 pt-4 md:pt-8 pb-4 text-center md:text-left">
          About CAD 3D
        </h2>
        <p class="text-base px-8 md:px-0 md:text-lg font-semibold text-gray-700 leading-relaxed pb-2">
          We supply digital solutions and efficient processes to enable customers to be the top of their industries.
        </p>
        <p class="text-base px-8 md:px-0 md:text-lg mt-4 font-semibold text-gray-700 leading-relaxed">
          We are a leading international software company with more than 32 years of experience supplying complete software solutions for the interior design and production business, specialized in bespoke furniture. Whether you are a cabinet maker, shopfitter, or an exhibition booth builder, individual design requires individual solutions.
        </p>
        <div class="mt-5 flex justify-center md:justify-start">
          <NuxtLink to="/about" class="bg-sky-900 p-2 w-32 px-3 rounded-md text-base text-center text-white hover:bg-sky-800 transition">
            More info
          </NuxtLink>
        </div>
      </div>
    </section>

</template>