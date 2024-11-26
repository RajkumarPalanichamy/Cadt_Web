<template>
  <div class="min-h-screen flex items-center justify-center px-5 py-10 bg-sky-100">
    <div class="flex flex-col md:flex-row items-center justify-center w-full max-w-4xl space-y-8 md:space-y-0 md:space-x-8 ">
 
     
      <div class="flex justify-center items-center shadow-xl w-full md:w-3/5 h-auto bg-white rounded-xl p-10">
        <form @submit.prevent="submitForm" class="flex flex-col items-start w-full  font-bold text-sky-900 text-md">
          <div class="flex flex-row items-center pb-5">
            <h2 class="text-black font-sans text-3xl">Request a Callback</h2>
            <img src="../assets/ic.png" class="w-8 h-8 pl-2" />
          </div>
          <p class="text-slate-400 text-lg mb-5 font-normal">
            Leave your details, and we’ll get back to you soon.
          </p>

          
          <div class="flex flex-row items-center mb-4 w-full">
            <i class="mdi mdi-account text-gray-500 mr-3"></i>
            <input type="text" v-model="form.username" class="rounded-md text-black font-normal text-sm flex-1 p-2 w-60 border focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Enter your username" required />
          </div>

         
          <div class="flex flex-row items-center mb-4 w-full">
            <i class="mdi mdi-phone text-gray-500 mr-3"></i>
            <input type="text" v-model="form.phone" class="rounded-md text-black font-normal text-sm flex-1 p-2 w-full border focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Enter your phone number" />
          </div>

         
          <div class="mb-4 w-full">
            <select v-model="form.time" id="time" class="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50" required>
              <option value="" disabled selected>Select a time</option>
              <option value="morning">Morning (9 AM - 12 PM)</option>
              <option value="afternoon">Afternoon (12 PM - 3 PM)</option>
              <option value="evening">Evening (3 PM - 6 PM)</option>
            </select>
          </div>

          
          <button type="submit" class="bg-sky-900 hover:bg-sky-900 text-white rounded-lg shadow-lg p-3 w-full font-medium">
            Request Callback
          </button>
        </form>
      </div>
      <!-- <div class="hidden md:block w-full md:w-2/5 h-96 bg-sky-900">
        <img src="../assets/mn.png" alt="Callback Image" class="w-full h-96 object-cover " />
      </div> -->

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: '',
        phone: '',
        time: ''
      }
    };
  },
  methods: {
    async submitForm() {
   
      const formData = {
        username: this.form.username,
        phone: this.form.phone,
        time: this.form.time
      };

      try {
        
        const response = await this.$axios.post('/send-email', formData);
        console.log('Email sent:', response.data);
        alert('Callback request sent successfully!');
      } catch (error) {
        console.error('Error sending email:', error);
        alert('There was an issue sending the callback request.');
      }
    }
  }
};
</script>

<style scoped>

</style>
