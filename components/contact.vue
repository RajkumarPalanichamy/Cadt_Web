<template>
  <div class="contact-form-section flex flex-col md:flex-row items-start justify-between mx-auto p-8 bg-white rounded-lg shadow-lg max-w-5xl my-10">
    <div class="contact-form-container w-full md:w-1/2 p-6 flex flex-col">
      <div class="w-full mb-6">
        <h2 class="text-4xl font-bold text-sky-900 mb-2 text-center md:text-left">Let's Discuss Your Project</h2>
        <p class="text-gray-600 text-center md:text-left">We help companies and individuals build out their brand guidelines.</p>
      </div>
      <form @submit.prevent="submitForm" class="space-y-6">
        <div>
          <label for="name" class="block text-gray-700 font-semibold mb-2">Name</label>
          <input
            type="text"
            id="name"
            v-model="formData.name"
            required
            class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-sky-500 transition duration-200"
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label for="email" class="block text-gray-700 font-semibold mb-2">Email</label>
          <input
            type="email"
            id="email"
            v-model="formData.email"
            required
            class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-sky-500 transition duration-200"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label for="message" class="block text-gray-700 font-semibold mb-2">Message</label>
          <textarea
            id="message"
            v-model="formData.message"
            required
            rows="6"
            class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-sky-500 transition duration-200"
            placeholder="Type your message here..."
          ></textarea>
        </div>
        <div class="text-center">
          <button
            type="submit"
            class="w-full py-3 bg-sky-600 text-white rounded-lg font-semibold hover:bg-sky-700 transition duration-200 transform hover:scale-105"
          >
            Let's Talk
          </button>
        </div>
      
        <SwitchGroup as="div" class="flex gap-x-4 sm:col-span-2">
          <div class="flex h-6 items-center">
            <Switch v-model="agreed" :class="[agreed ? 'bg-sky-700' : 'bg-gray-200', 'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600']">
              <span class="sr-only">Agree to policies</span>
              <span aria-hidden="true" :class="[agreed ? 'translate-x-3.5' : 'translate-x-0', 'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out']" />
            </Switch>
          </div>
          <SwitchLabel class="text-sm text-gray-600">
            By selecting this, you agree to our
            <a href="#" class="font-semibold text-sky-700">privacy policy</a>.
          </SwitchLabel>
        </SwitchGroup>
      </form>
    </div>
 
    <div class="image-container md:w-1/2 w-full h-full flex justify-center items-center">
      <img src="../assets/op.png" alt="Professional Contact Form" class="w-full h-full rounded-lg shadow-md object-cover" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const agreed = ref(false);
const formData = ref({
  name: '',
  email: '',
  message: ''
});

const submitForm = () => {
  console.log('Form submitted:', formData.value);
 
  formData.value = {
    name: '',
    email: '',
    message: ''
  };
};
</script>

<style scoped>

</style>
