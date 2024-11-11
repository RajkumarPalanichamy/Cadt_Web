<template>
    <div flex flex-row bg-slate-100 mt-7>
        <div class=" flex flex-col justify-start items- center">
            <h2 class="text-4xl font-bold text-sky-900 mb-2 text-center md:text-left">Schedule a Free Consultation Call Today</h2>
            <h3 class="text-xl font-bold text-black">Experience How Our Solutions Can Propel Your Business Forward with a Consultation.</h3>
        </div>
        <div class="gap-5">
            <Nuxtlink to="/contact"><button class="p-2 bg-sky-900 text-white rounded-md hover:shadow-md hover:bg-slate-100 hover:font-bold hover:text-sky-700 first-letter:">Request a custom quote</button></Nuxtlink>
            <Nuxtlink t0="/calendar"><button class="p-2 bg-sky-900 text-white rounded-md hover:shadow-md hover:bg-slate-100 hover:font-bold hover:text-sky-700 first-letter:">Schedule now</button></Nuxtlink>
        </div>
    </div>
</template>