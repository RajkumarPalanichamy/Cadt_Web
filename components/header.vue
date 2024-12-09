<template>
  <div class="bg-white min-w-screen  fixed top-0 left-0 w-full z-50 overflow-hidden pb-[60px] sm:pb-[78px]">
    <header class="absolute inset-x-0 top-0 z-50 w-full">
      <nav class="flex items-center justify-between p-4 sm:p-6" aria-label="Global">
       
        <div class="flex sm:flex-1 ">
          <NuxtLink to="/" class="sm:-m-1.5 sm:p-1.5" @click="reload">
            <img class="h-6 sm:h-8 w-auto" src="@/assets/logo.png" alt="Your Company Logo" />
          </NuxtLink>
        </div>

       
        <div class="flex sm:hidden">
          <button
            type="button"
            class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-800"
            @click="toggleMobileMenu"
          >
            <span class="sr-only">Open main menu</span>
            <svg class="h-5 w-5" aria-hidden="true" :class="{ hidden: mobileMenuOpen, block: !mobileMenuOpen }">
              <path :d="mdiMenu" />
            </svg>
            <svg class="h-5 w-5" aria-hidden="true" :class="{ block: mobileMenuOpen, hidden: !mobileMenuOpen }">
              <path :d="mdiClose" />
            </svg>
          </button>
        </div>

        <div class="hidden sm:flex sm:gap-x-6 lg:gap-x-10">
          <template v-for="(item, index) in navigation" :key="item.name || index">
            <NuxtLink
              v-if="item?.name && !item.dropdown"
              :to="item.href"
              class="text-xs sm:text-sm lg:text-lg font-semibold text-gray-900 hover:text-gray-700"
            >
              {{ item.name }}
            </NuxtLink>

            <div v-else-if="item?.name === 'Solutions' && item?.dropdown" class="relative group">
              <button
                class="text-xs sm:text-sm lg:text-lg font-semibold text-gray-900 hover:text-sky-900 focus:outline-none"
                @click="navigateToSolution"
              >
                {{ item.name }}
              </button>
              <div
                class="absolute mt-1 sm:mt-2 w-32 sm:w-40 lg:w-56 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
              >
                <NuxtLink
                  v-for="(subItem, subIndex) in item.dropdown"
                  :key="subItem.name || subIndex"
                  :to="subItem.href"
                  class="block sm:px-4 py-1 sm:py-2 text-xs sm:text-sm font-medium text-gray-900 hover:bg-sky-100 hover:text-sky-900"
                >
                  {{ subItem.name || 'Unnamed Subitem' }}
                </NuxtLink>
              </div>
            </div>
          </template>
        </div>

        <div class="hidden sm:flex sm:flex-1 sm:justify-end">
          <NuxtLink
            to="/contact"
            class="px-2 py-1 sm:px-3 sm:py-2 bg-sky-700 text-xs sm:text-sm lg:text-base w-auto lg:w-40 text-white border border-solid border-black font-semibold rounded-md transition duration-300 hover:text-sky-900 hover:bg-white ease-in-out hover:animate-pulse"
          >
            Get Consultation
          </NuxtLink>
        </div>
      </nav>

   <!-- mobile -->
      <Dialog class="sm:hidden" @close="closeMobileMenu" :open="mobileMenuOpen">
        <DialogPanel
          class="fixed inset-0 z-50 flex flex-col bg-white px-4 py-6 h-screen overflow-hidden"
        >
          <div class="flex items-center justify-between mb-4">
            
            <NuxtLink :to="{ name: 'index' }" class="-m-1.5 p-1.5" @click="closeMobileMenu">
              <img class="h-6 w-auto" src="@/assets/logo.png" alt="Your Company Logo" />
            </NuxtLink>
           
            <button type="button" class="rounded-md p-2 text-gray-800" @click="closeMobileMenu">
              <svg class="h-5 w-5" aria-hidden="true">
                <path :d="mdiClose" />
              </svg>
            </button>
          </div>

      
          <nav class="flex flex-col space-y-2">
            <template v-for="(item, index) in navigation" :key="item.name || index">
           
              <NuxtLink
                v-if="item?.name && !item.dropdown"
                :to="item.href"
                class="block rounded-lg py-2 px-3 text-xs sm:text-sm lg:text-base font-semibold text-gray-900 hover:bg-sky-200"
                @click="closeMobileMenu"
              >
                {{ item.name }}
              </NuxtLink>

             
              <div v-else-if="item?.name && item?.dropdown">
                <button
                  @click="toggleDropdown(item.name)"
                  class="w-full text-left block py-2 px-3 text-xs sm:text-sm lg:text-base font-semibold text-gray-900 hover:bg-sky-200"
                >
                  {{ item.name }}
                </button>
                <div v-if="dropdownOpen[item.name]" class="ml-4 space-y-1">
                  <NuxtLink
                    v-for="(subItem, subIndex) in item.dropdown"
                    :key="subItem.name || subIndex"
                    :to="subItem.href"
                    class="block py-2 px-3 text-xs sm:text-sm lg:text-base text-gray-800 hover:bg-sky-100 rounded-lg"
                    @click="closeMobileMenu"
                  >
                    {{ subItem.name }}
                  </NuxtLink>
                </div>
              </div>
            </template>
          </nav>

   
          <div class="mt-auto">
            <NuxtLink
              to="/contact"
              class="block w-full text-center rounded-md bg-sky-900 px-4 py-2 text-xs sm:text-sm lg:text-base font-medium text-white hover:bg-white hover:text-sky-900"
            >
              Get Consultation
            </NuxtLink>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  </div>
</template>

<script setup>
import { mdiMenu, mdiClose } from '@mdi/js';
import { Dialog, DialogPanel } from '@headlessui/vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const mobileMenuOpen = ref(false);
const dropdownOpen = ref({});

const navigation = [
  { name: 'About Us', href: { name: 'about' } },
  { name: 'Industries', href: { name: 'industry' } },
  {
    name: 'Solutions',
    href: { name: 'solution' },
    dropdown: [
      { name: 'Kitchen Designer', href: { name: 'kitchen' } },
      { name: 'Room Creator', href: { name: 'room' } },
      { name: 'Interior Designer', href: { name: 'interior' } },
      { name: 'Product Showcase Studio', href: { name: 'studio' } },
      { name: 'Material Planner', href: { name: 'material' } },
      { name: 'Smart Space Optimizer', href: { name: 'smart' } },
    ],
  },
  { name: 'Contact', href: { name: 'contact' } },
];

function toggleMobileMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value;
}

function closeMobileMenu() {
  mobileMenuOpen.value = false;
}

function toggleDropdown(name) {
  dropdownOpen.value[name] = !dropdownOpen.value[name];
}

function reload() {
  if (router.currentRoute.value.name === 'index') {
    window.location.reload();
  } else {
    router.push({ name: 'index' });
  }
}

function navigateToSolution() {
  router.push({ name: 'solution' });
}
</script>
