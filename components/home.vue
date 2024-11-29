<template>
  <div class="carousel relative h-screen overflow-hidden mt-7 object-cover bg-cover bg-center bg-no-repeat w-full" >
    
      
    <div v-show="currentSlide === 1" class="absolute inset-0 flex transition-opacity duration-1000 ease-in-out opacity-0 bg-gradient-to-r from-white via-sky-50 to-sky-200 ... "
     :class="{ 'opacity-100': currentSlide === 1 }">
    <div class="w-2/5 h-full flex items-center justify-center">
      <img src="../assets/3d.jpg" alt="3D Display" class="h-auto max-w-full ">
    </div>
    <main class="w-3/5 relative z-10 flex items-center justify-center  px-6 lg:px-8">
    <div class="max-w-2xl py-32 sm:py-48 lg:py-56">
      <div class="hidden sm:mb-8 sm:flex sm:justify-center">
        <div class="relative rounded-full py-1 px-3 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
          Announcing our next round of funding.
          <a href="#" class="font-semibold text-sky-700">
            <span class="absolute inset-0" aria-hidden="true"></span>
            Read more <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
      <div class="text-center">
        <h1 class="text-4xl font-bold tracking-tight text-sky-900 sm:text-6xl">Unleash Creativity with 3D CAD!</h1>
        <p class="mt-6 text-lg leading-8 text-gray-600">Elevate your projects with unparalleled creativity and accuracy, turning your concepts into stunning 3D masterpieces.</p>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <NuxtLink to="/setup" class="rounded-md bg-sky-900 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:shadow-md hover:bg-slate-200 hover:font-bold hover:text-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get started</NuxtLink>
          <NuxtLink to="/about" class="text-base font-semibold leading-7 text-gray-900">Learn more <span aria-hidden="true">→</span></NuxtLink>
        </div>
      </div>
    </div>
  </main>
</div>

  

      <!-- Slide 2 -->
      <div v-show="currentSlide === 0" class="absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ease-in-out opacity-0  bg-gradient-to-r from-sky-200 via-sky-50 to-white ..."
     :class="{ 'opacity-100': currentSlide === 0 }">
    <main class="relative z-10 w-3/5 ml-auto">
    <div class="relative px-3 lg:px-4">
      <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div class="hidden sm:mb-8 sm:flex sm:justify-center">
          <div class="relative rounded-full py-1 px-3 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            Announcing our new features!
            <a href="#" class="font-semibold text-sky-700">
              <span class="absolute inset-0" aria-hidden="true"></span>
              Read more <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
        <div class="text-center">
          <h1 class="text-4xl font-bold tracking-tight text-sky-900 sm:text-6xl">Let Your Ideas Soar with 3D CAD</h1>
          <p class="mt-6 text-lg leading-8 text-gray-600">Transform your boldest concepts into stunning 3D designs and watch them take flight with our innovative CAD solutions</p>
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <NuxtLink to="/setup" class="rounded-md bg-sky-900 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:shadow-md hover:bg-slate-200 hover:font-bold hover:text-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get started</NuxtLink>
            <NuxtLink to="/about" class="text-base font-semibold leading-7 text-gray-900">Learn more <span aria-hidden="true">→</span></NuxtLink>
          </div>
        </div>
      </div>
      <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <svg class="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]" viewBox="0 0 1155 678" xmlns="http://www.w3.org/2000/svg">
          <path fill="url(#gradient)" fill-opacity=".3" d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" />
          <defs>
            <linearGradient id="gradient" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
              <stop stop-color="#9089FC" />
              <stop offset="1" stop-color="#FF80B5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  </main>
  <div class="w-2/5 h-full flex items-center justify-center">
    <img src="../assets/br.png" alt="3D Display" class="h-auto max-w-full ">
  </div>
</div>

<div v-show="currentSlide === 2" class="absolute inset-0 flex transition-opacity duration-1000 ease-in-out opacity-0 bg-gradient-to-r from-sky-200 via-sky-50 to-white ... "
     :class="{ 'opacity-100': currentSlide === 2 }">
    
    <main class="w-3/5 relative z-10 flex items-center justify-center">
    <div class="max-w-2xl py-32 sm:py-48 lg:py-56">
      <div class="hidden sm:mb-8 sm:flex sm:justify-center">
        <div class="relative rounded-full py-1 px-3 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
          Announcing our next round of funding.
          <a href="#" class="font-semibold text-sky-700">
            <span class="absolute inset-0" aria-hidden="true"></span>
            Read more <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
      <div class="text-center">
        <h1 class="text-4xl font-bold tracking-tight text-sky-900 sm:text-6xl">Experience the Magic of 3D CAD
        </h1>
        <p class="mt-6 text-lg leading-8 text-gray-600">Transform your visions into reality with the enchanting power of 3D CAD technology!</p>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <NuxtLink to="/setup" class="rounded-md bg-sky-900 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:shadow-md hover:bg-slate-200 hover:font-bold hover:text-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get started</NuxtLink>
          <NuxtLink to="/about" class="text-base font-semibold leading-7 text-gray-900">Learn more <span aria-hidden="true">→</span></NuxtLink>
        </div>
      </div>
    </div>
  </main>
  <div class="w-2/5 h-full flex items-center justify-center pr-10 ">
      <img src="../assets/hbg2.png" alt="3D Display" class="h-auto max-w-full ">
    </div>
</div>




    <button @click="prevSlide" class="absolute left-5 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-md p-2 hover:bg-gray-100">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
    </button>
    <button @click="nextSlide" class="absolute right-5 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-md p-2 hover:bg-gray-100">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </button>               
  </div>

 
  <section class="about-section flex flex-col md:flex-row  mx-auto  max-w-6xl my-10 justify-between">
     
     <div class="company-image-container  w-full p-4 flex  pr-10">
       <img src="../assets/smab.webp" alt="Company Image" class="w-full h-auto " />
     </div>
     
    
     <div class="company-details  w-full ">
       <h2 class="text-3xl font-bold mb-4 text-sky-900 pt-8 pb-4">About CAD 3D</h2>
       <p class="text-lg font-semibold text-gray-700 leading-relaxed pb-2">
        We supply digital solutions and efficient processes to enable customers to be the top of their industries.
       </p>
      <p class="text-lg font-semibold text-gray-700 leading-relaxed">
        We are a leading international software company with more than 32 years of experience supplying complete software solutions for the interior design and production business, specialized in bespoke furniture.Whether you are a cabinet maker, shopfitter or an exhibition booth builder, individual design requires individual solutions.
      </p>
      <div class="mt-5">
      <NuxtLink to="/about" class="bg-sky-900 p-2 w-32 px-3 rounded-md text-base text-white">More info</NuxtLink>
      </div>
       <!-- <p class="mt-4 text-lg text-gray-700 leading-relaxed">
         We believe in continuous improvement and innovation, which is why we invest in cutting-edge technology and sustainable practices. Our commitment to excellence has earned us a loyal customer base and numerous industry accolades. Join us on our journey as we continue to make a positive impact in our community and beyond.
       </p> -->
     </div>
   </section>
</template>

<script>

export default {
  data() {
    return {
      currentSlide: 0,
      slides: [0, 1, 2],
    };
  },
  methods: {
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    },
    prevSlide() {
      this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    },
  },
  mounted() {
    setInterval(this.nextSlide, 5000);
  },
};
</script>

<style scoped>
.carousel {
  position: relative;
}

.carousel .slide {
  transition: opacity 1s ease;
}

.carousel .opacity-0 {
  opacity: 0;
}

.carousel .opacity-100 {
  opacity: 1;
}
</style>
