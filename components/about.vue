<template>
  <div class="overflow-hidden my-3  py-7 bg-cover bg-no-repeat bg-center bg-gradient-to-r from-white via-sky-50 to-sky-200 ..." >
    <div class="relative mx-auto max-w-7xl py-8 px-4 lg:px-8">
      <div class="absolute top-0  left-2/4 hidden w-screen lg:block" />
      <div class="mx-auto max-w-prose text-base lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-6">
        <div>
          <h3 class="mt-1 text-4xl font-bold leading-8 tracking-tight text-sky-900 sm:text-3xl pt-6 px-5">About Our 3D CAD</h3>
        </div>
      </div>  
      <div class="mt-6 lg:grid lg:grid-cols-2 lg:gap-6">
        <div class="relative lg:col-start-2 lg:row-start-1">
          <svg class="absolute top-0 right-0 -mt-16 -mr-16 hidden lg:block" width="404" height="384" fill="none" viewBox="0 0 404 384" aria-hidden="true">
            <defs>
              <pattern id="de316486-4a29-4312-bdfc-fbce2132a2c1" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="384" fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
          </svg>
          <div class="relative mx-auto max-w-prose text-base lg:max-w-none">
            <figure>
              <div class="h-96 overflow-hidden rounded-lg"> 
                <img class="object-cover object-center w-full h-full shadow-lg" src="../assets/man.png" alt="Whitney leaning against a railing on a downtown street" />
              </div>
            </figure>
          </div>
        </div>
        <div class="mt-6 lg:mt-0 pr-8">
          <div class="mx-auto max-w-prose text-base lg:max-w-none">
            <p class=" text-xl md:text-2xl text-grey-700 font-bold px-5">Quality is at the heart of everything we do. Even the smallest detail matters a lot!</p>
          </div>
          <div class="prose prose-indigo mx-auto mt-4 text-black lg:col-start-1 lg:row-start-1 lg:max-w-none ">
            <p class="pb-2 px-5 md:text-lg ">Our team is dedicated to maintaining the highest standards throughout each stage of the design process, from initial drafts to final revisions.</p> 
            <p class="pb-4  px-5 md:text-lg">At 3D CAD, we are passionate about transforming concepts into reality through advanced 3D CAD design. As a team of dedicated designers and engineers, we bring creativity and precision to every project, aiming to deliver results that are both visually compelling and functionally robust.</p>
            <NuxtLink :to="'/solution'" class="text-lg font-semibold text-gray-900 hover:text-gray-700 flex justify-start items-center px-5">
              <button type="button" class="inline-flex items-center rounded-md border border-transparent bg-sky-900 px-4 py-3 text-sm font-medium leading-4 text-white shadow-sm hover:bg-white hover:text-sky-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Check solutions</button>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
