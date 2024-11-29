<template>
  <div class="bg-white pb-16">
    <header class="absolute inset-x-0 top-0 z-50">
      <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div class="flex lg:flex-1">
          <NuxtLink to="/" class="-m-1.5 p-1.5" @click="reload">
            <img class="h-8 w-auto" src="@/assets/logo.png" alt="Your Company Logo" />
          </NuxtLink>
        </div>

        <div class="flex lg:hidden">
          <button
            type="button"
            class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-800"
            @click="toggleMobileMenu"
          >
            <span class="sr-only">Open main menu</span>
            <svg class="h-6 w-6" aria-hidden="true" :class="{'hidden': mobileMenuOpen, 'block': !mobileMenuOpen}">
              <path :d="mdiMenu" />
            </svg>
            <svg class="h-6 w-6" aria-hidden="true" :class="{'block': mobileMenuOpen, 'hidden': !mobileMenuOpen}">
              <path :d="mdiClose" />
            </svg>
          </button>
        </div>

        <div class="hidden lg:flex lg:gap-x-10">
          <template v-for="(item, index) in navigation" :key="item.name || index">
            <NuxtLink
              v-if="item?.name && !item.dropdown"
              :to="item.href"
              class="text-lg font-semibold text-gray-900 hover:text-gray-700"
            >
              <span v-if="item.name === 'Solutions'">
                <svg class="h-4 w-4 inline-block mr-2" aria-hidden="true">
                  <i class="mdi mdi-chevron-down text-lg mr-2"></i> 
                </svg>
              </span>
              {{ item.name }}
            </NuxtLink>

            <div v-else-if="item?.name && item?.dropdown && Array.isArray(item.dropdown)" class="relative">
              <button
                class="text-lg font-semibold text-gray-900 hover:text-sky-900 focus:outline-none"
                @click="toggleDropdown(item.name)"
              >
                {{ item.name }}
              </button>
              <div v-if="dropdownOpen[item.name]" class="absolute mt-2 w-56 bg-white shadow-lg rounded-md">
                <NuxtLink
                  v-for="(subItem, subIndex) in item.dropdown"
                  :key="subItem.name || subIndex"
                  :to="subItem.href"
                  class="block px-4 py-2 text-sm font-medium  text-gray-900 hover:bg-sky-100 hover:text-sky-900"
                  @click="closeDropdown(item.name)"
                >
                  {{ subItem.name || 'Unnamed Subitem' }}
                </NuxtLink>
              </div>
            </div>
          </template>
        </div>

        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
          <NuxtLink
            to="/contact"
            class="px-3 py-2 bg-sky-700 w-40 text-white border border-solid border-black font-semibold rounded-md transition duration-300 hover:text-sky-900 hover:bg-white ease-in-out hover:animate-pulse"
          >
            Get Consultation
          </NuxtLink>
        </div>
      </nav>

 
      <Dialog class="lg:hidden" @close="closeMobileMenu" :open="mobileMenuOpen">
        <DialogPanel class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div class="flex items-center justify-between">
            <NuxtLink :to="{ name: 'index' }" class="-m-1.5 p-1.5" @click="closeMobileMenu">
              <img class="h-8 w-auto" src="@/assets/logo.png" alt="Your Company Logo" />
            </NuxtLink>
            <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-800" @click="closeMobileMenu">
              <svg class="h-6 w-6" aria-hidden="true">
                <path :d="mdiClose" />
              </svg>
            </button>
          </div>
          <div class="mt-6 space-y-2">
            <template v-for="(item, index) in navigation" :key="item.name || index">
              <NuxtLink
                v-if="item?.name && !item.dropdown"
                :to="item.href"
                class="-mx-3 block rounded-lg py-2 px-3 text-base text-md font-bold leading-7 text-gray-900 hover:bg-sky-200 space-y-8"
                @click="closeMobileMenu"
              >
                {{ item.name }}
              </NuxtLink>

              <div v-else-if="item?.name && item?.dropdown && Array.isArray(item.dropdown)">
                <button
                  @click="toggleDropdown(item.name)"
                  class="w-full text-left block py-2 px-3 text-base font-bold leading-7 text-gray-900 hover:bg-sky-200"
                >
                  {{ item.name }}
                </button>
                <div v-if="dropdownOpen[item.name]" class="ml-4 space-y-1">
                  <NuxtLink
                    v-for="(subItem, subIndex) in item.dropdown"
                    :key="subItem.name || subIndex"
                    :to="subItem.href" 
                    class="block py-2 px-3 text-md font-bold space-x-4 leading-7 text-gray-900 hover:bg-sky-100 rounded-md shadow-md"
                    @click="closeMobileMenu"
                  >
                    {{ subItem.name || 'Unnamed Subitem' }}
                  </NuxtLink>
                </div>
              </div>
            </template>
          </div>
          <div class="mt-6">
            <NuxtLink
              to="/contact"
              class="inline-flex items-center rounded-md border border-transparent bg-sky-900 px-4 py-3 text-sm font-medium leading-4 text-white shadow-sm hover:bg-white hover:text-sky-900"
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

function closeDropdown(name) {
  dropdownOpen.value[name] = false;
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
  toggleDropdown('Solution');
}
</script>
