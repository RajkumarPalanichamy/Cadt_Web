<template>
  <div class="bg-white pb-16">
    <header class="absolute inset-x-0 top-0 z-50">
      <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div class="flex lg:flex-1">
          <NuxtLink :to="{ name: 'index' }" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img class="h-8 w-auto" src="@/assets/logo.png" alt="Your Company Logo" />
          </NuxtLink>
        </div>

        <!-- Mobile menu button -->
        <div class="flex lg:hidden">
          <button
            type="button"
            class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-800"
            @click="toggleMobileMenu"
          >
            <span class="sr-only">Open main menu</span>
            <svg class="h-6 w-6" aria-hidden="true" :class="{'hidden': mobileMenuOpen, 'block': !mobileMenuOpen}">
              <use :xlink:href="mdiMenu"></use>
            </svg>
            <svg class="h-6 w-6" aria-hidden="true" :class="{'block': mobileMenuOpen, 'hidden': !mobileMenuOpen}">
              <use :xlink:href="mdiClose"></use>
            </svg>
          </button>
        </div>

        <!-- Desktop navigation -->
        <div class="hidden lg:flex lg:gap-x-10">
          <NuxtLink
            v-for="item in navigation"
            :key="item.name"
            :to="item.href"
            class="text-lg font-semibold text-gray-900 hover:text-gray-700"
          >
            {{ item.name }}
          </NuxtLink>
        </div>

        
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
          <NuxtLink to="/contact" class="text-lg font-semibold text-gray-900 hover:text-gray-700">
            <button class="p-2 bg-sky-900 text-white rounded-md hover:shadow-md hover:bg-slate-100 hover:font-bold hover:text-sky-700">
              Get Consultation
            </button>
          </NuxtLink>
        </div>
      </nav>

     
      <Dialog class="lg:hidden" @close="closeMobileMenu" :open="mobileMenuOpen">
        <div class="fixed inset-0 z-50"></div>
        <DialogPanel class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div class="flex items-center justify-between">
            <NuxtLink :to="{ name: 'index' }" class="-m-1.5 p-1.5" @click="closeMobileMenu">
              <span class="sr-only">Your Company</span>
              <img class="h-8 w-auto" src="@/assets/logo.png" alt="Your Company Logo" />
            </NuxtLink>
            <button
              type="button"
              class="-m-2.5 rounded-md p-2.5 text-gray-800"
              @click="closeMobileMenu"
            >
              <span class="sr-only">Close menu</span>
              <svg class="h-6 w-6" aria-hidden="true">
                <use :xlink:href="mdiClose"></use>
              </svg>
            </button>
          </div>
          <div class="mt-6 space-y-2">
            <NuxtLink
              v-for="item in navigation"
              :key="item.name"
              :to="item.href"
              class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              @click="closeMobileMenu"
            >
              {{ item.name }}
            </NuxtLink>
          </div>
          <div class="mt-6">
            <NuxtLink to="/contact" class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" @click="closeMobileMenu">
              Get Consultation
            </NuxtLink>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { mdiMenu, mdiClose } from '@mdi/js';
import { Dialog, DialogPanel } from '@headlessui/vue';

const router = useRouter();
const mobileMenuOpen = ref(false);

const navigation = [
  { name: 'Home', href:{ name: 'index' } },
  { name: 'About Us', href:'about'},
  { name: 'Services', href: { name: 'service' } },
  { name: 'Contact', href: { name: 'contact' } }
];

function toggleMobileMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value;
}

function closeMobileMenu() {
  mobileMenuOpen.value = false;
}
</script>

<style scoped>
.bg-sky-900 {
  background-color: #007ace;
}
</style>
