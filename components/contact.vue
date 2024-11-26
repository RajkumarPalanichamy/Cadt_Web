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
      <img src="../assets/op.png" alt="Professional Contact Form" class="w-full h-full rounded-lg shadow-md object-cover" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const name = ref('');
const email = ref('');
const message = ref('');

const submitForm = async () => {
  try {
    const response = await fetch('/api/mail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        message: message.value
      })
    });

    if (!response.ok) {
      throw new Error('Failed to send email');
    }

    alert('Email sent successfully!');
    
    
    name.value = '';
    email.value = '';
    message.value = '';
  } catch (err) {
    console.error('Error sending email:', err);
    alert('There was an error sending the email.');
  }
};
</script>
