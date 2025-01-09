<template>
  <h3 
      class="font-poppins  mt-4 text-3xl font-bold flex justify-center items-center leading-8 tracking-tight bg-sky-900 text-transparent bg-clip-text sm:text-4xl pb-10"
    >
      Your Queries, Our Priority
    </h3>
  <div class="contact-form-section flex flex-col md:flex-row items-start justify-between mx-auto p-8 bg-white rounded-lg shadow-lg max-w-5xl mt-10">
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
            v-model="name"
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
            v-model="email"
            required
            class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-sky-500 transition duration-200"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label for="message" class="block text-gray-700 font-semibold mb-2">Message</label>
          <textarea
            id="message"
            v-model="message"
            required
            rows="6"
            class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-sky-500 transition duration-200"
            placeholder="Type your message here..."
          ></textarea>
        </div>
        <div class="text-center">
          <button
            type="submit"
            class="w-full py-3 bg-sky-900 text-white rounded-lg font-semibold hover:bg-sky-900 transition duration-200 transform hover:scale-105"
          >
            Let's Talk
          </button>
        </div>
      </form>
    </div>
    
    <div class="image-container md:w-1/2 w-full h-full flex justify-center items-center">
      <img src="../assets/op.png" alt="Professional Contact Form" class="w-full h-full rounded-lg shadow-md object-cover"/>
    </div>


    <div
  v-if="popup"
  class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
>
  <div class="bg-white rounded-lg shadow-lg p-4 w-96 h-84 relative">
    <button
      @click="closePopup"
      class="absolute top-2 right-2 text-gray-700 hover:text-gray-900 text-xl font-bold"
    >
      &times;
    </button>
    <div class="flex flex-col items-center justify-center">
      <img src="../assets/tw.png" class="w-48 h-48 mb-4" />
      <h3 class="text-xl font-bold text-sky-900 mb-4 text-center">Response Submitted</h3>
      <p class="text-gray-700 mb-4 text-center text-md font-semibold">Thank you for your response! We appreciate your  time you took to share with us.</p>
    </div>
  </div>
</div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const name = ref('');
const email = ref('');
const message = ref('');
const popup = ref(false);

const submitForm = async () => {
  try {
    const response = await fetch('/api/mail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        message: message.value,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to send email');
    }

    popup.value = true;

  
    name.value = '';
    email.value = '';
    message.value = '';
  } catch (err) {
    console.error('Error sending email:', err);
    alert('There was an error sending the email.');
  }
};

const closePopup = () => {
  popup.value = false;
};
</script>
