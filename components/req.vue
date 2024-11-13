<template>
    <div class="flex flex-col items-center px-5  py-10 ">
    
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold leading-8 tracking-tight text-sky-900 sm:text-5xl">
          Request a Callback
        </h2>
        <p class="mt-4 text-lg text-gray-700 font-semibold">
          Our team is here to assist you. Leave your details, and we’ll get back to you soon.
        </p>
      </div>
  
      
      <div class="flex flex-col md:flex-row items-center justify-between mt-16  w-full max-w-5xl">
        <div class="w-full md:w-1/2 p-8  bg-sky-50 rounded-lg shadow-lg border ">
          <form class="space-y-6">
           
            <div>
              <label for="name" class="block text-sm font-semibold text-gray-700 mb-2">Name</label>
              <div class="relative">
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  class="w-full p-3 border rounded-md focus:outline-none focus:border-sky-900 bg-gray-50 shadow-sm"
                  required
                />
                <span class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <i class="mdi mdi-account"></i>
                </span>
              </div>
            </div>
  
           
            <div>
              <label for="phone" class="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
              <div class="relative">
                <input
                  type="tel"
                  id="phone"
                  placeholder="Enter your phone number"
                  class="w-full p-3 border rounded-md focus:outline-none focus:border-sky-900 bg-gray-50 shadow-sm"
                  required
                />
                <span class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <i class="mdi mdi-phone"></i>
                </span>
              </div>
            </div>
  
         
            <div>
              <label for="time" class="block text-sm font-semibold text-gray-700 mb-2">Preferred Callback Time</label>
              <select
                id="time"
                class="w-full p-3 border rounded-md focus:outline-none focus:border-sky-900 bg-gray-50 shadow-sm"
                required
              >
                <option value="" disabled selected>Select a time</option>
                <option value="morning">Morning (9 AM - 12 PM)</option>
                <option value="afternoon">Afternoon (12 PM - 3 PM)</option>
                <option value="evening">Evening (3 PM - 6 PM)</option>
              </select>
            </div>
  
        
            <button
              type="submit"
              class="w-full py-3 text-lg bg-sky-900 text-white rounded-md shadow-md hover:bg-sky-700 transition duration-300 transform hover:scale-105"
             >
              Request Callback
            </button>
          </form>
        </div>
        <div class="w-full md:w-1/2 flex justify-center">
          <img src="../assets/1.jpg" alt="Callback Team" class="w-90 h-96 " />
        </div>
  
      </div>
    </div>
  </template>
  
  <style scoped>
  
  </style>
  