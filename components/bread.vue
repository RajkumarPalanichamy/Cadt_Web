<template>
  <nav
    class="flex flex-col h-[600px] w-full items-center justify-center bg-cover bg-no-repeat mt-7"
    aria-label="Breadcrumb"
    style="background-image: url('brg.jpg');"
  >
    <h2 class="text-3xl mb-5 text-sky-900 font-semibold">{{ breadcrumbTitle }}</h2>
    <ol role="list" class="flex space-x-4 rounded-md bg-white px-6 shadow">
      <li class="flex">
        <div class="flex items-center">
          <NuxtLink to="/home" class="text-sky-700 hover:text-sky-900">
            <i class="mdi mdi-home h-5 w-5 flex-shrink-0" aria-hidden="true"></i>
          </NuxtLink>
          <h1 class="sr-only">Home</h1>
        </div>
      </li>
      <li class="flex">
        <div class="flex items-center">
          <svg
            class="h-full w-6 flex-shrink-0 text-gray-200"
            viewBox="0 0 24 44"
            preserveAspectRatio="none"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
          </svg>
          <NuxtLink
            :to="breadcrumbPath"
            class="ml-4 text-sm font-medium text-sky-700 hover:text-sky-900"
            aria-current="page"
          >
            {{ breadinside }}
          </NuxtLink>
        </div>
      </li>
    </ol>
  </nav>
  <!-- <div class="h-36 bg-slate-100"></div> -->
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'nuxt/app'


const route = useRoute()


const breadcrumbTitle = computed(() => {
  if (route.path === '/setup') {
    return 'Create, Configure, Innovate'
  } else if (route.path === '/contact') {
    return 'Contact Us'
  } else if (route.path === '/service') {
    return 'Our Services'
  } else if (route.path === '/industry'){
    return 'Industries'
  } else if (route.path === '/solution'){
    return 'solutions'
  }
    return 'Home'
})


const breadinside = computed(() => {
  if (route.path === '/setup') {
    return 'Setup'
  } else if (route.path === '/contact') {
    return 'Contact Us'
  } else if (route.path === '/service') {
    return 'Services'
  } else if  (route.path === '/industry'){
    return 'Industries'
  }
    else if (route.path === '/solution'){
    return 'solutions'
  }
    return 'Home'
})


const breadcrumbPath = computed(() => {
  if (route.path === '/setup') {
    return '/setup'
  } else if (route.path === '/contact') {
    return '/contact'
  } else if (route.path === '/service') {
    return '/service'
  } else if  (route.path === '/industry'){
    return 'Industries'
  }
    else if (route.path === '/solution'){
    return 'solutions'
  }
  return '/home'
})
</script>

<style scoped>
@import url("https://cdn.jsdelivr.net/npm/@mdi/font/css/materialdesignicons.min.css");
</style>
