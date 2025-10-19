<template class="grotesque">
  <section id="first-section" class="mx-auto bg-[#001123] text-white">
    <div class="mx-auto w-[66%] text-center lg:w-full lg:px-10 lg:text-left">
      <div class="absolute bottom-0 left-1/2 -translate-x-1/2">
        <p
          class="grotesque pt-[150px] text-sm font-light text-white lg:w-[50%] lg:text-[80px] lg:leading-[80px]"
        >
          We Don’t Just Build Campaigns...
        </p>

        <p
          class="grotesque mb-6 text-6xl font-extrabold text-white lg:w-[40%] lg:text-xl"
        >
          We Build Experiences
        </p>
      </div>
    </div>
  </section>

  <section class="grotesque p-6">
    <div class="text-4xl">
      <p class="text-[#6C0921]">Two Decades,</p>
      <p class="text-[#98A2B3]">Transforming Brands</p>
    </div>
    <div class="mt-5">
      <p class="font-light text-[#0C111D]">
        Hephzibah Experiential is a leading brand consultancy with over 20 years
        of experience in creating meaningful connections between brands and
        people. We deliver strategic and creative solutions across experiential
        marketing, media, digital communication, and public relations. Our
        approach is rooted in storytelling, innovation, and seamless execution,
        helping brands remain relevant, build loyalty, and drive measurable
        impact through every campaign we craft.
      </p>
    </div>
  </section>

  <section
    class="mx-auto mt-10 w-[70%] rounded-3xl bg-[#000E1D] p-6 text-center text-white lg:hidden"
  >
    <div v-for="metric in metrics" :key="metric.value">
      <div class="mb-8">
        <p class="leading-12 text-4xl font-bold">{{ metric.value }}</p>
        <p class="text-md mt-3 text-[#EAECF0]">{{ metric.label }}</p>
      </div>
    </div>
  </section>

  <section class="mx-auto p-6">
    <FolderComponent />
    <FolderComponent class="mt-6" />
  </section>

  <section class="mx-auto p-6">
    <p class="text-4xl font-medium">Our Network</p>
    <p class="font-light text-[#0C111D] mt-3">
      Our Local footprint can be seen across the 36 states in Nigeria and Abuja
      with the capacity of activating simultaneously across the network in a
      singlestretch
    </p>
  </section>

  <section class="mx-auto p-6">
    <LocationComponent v-for="i in 6" :key="i" class="mb-4"/>
  </section>
</template>

<script setup>
import FolderComponent from "../components/about/FolderComponent.vue";
import LocationComponent from "../components/about/LocationComponent.vue";

const metrics = [
  { value: "20+", label: "Years of Experience" },
  { value: "200+", label: "Brands Served" },
  { value: "300+", label: "Campaigns Executed" },
];

// const regions = [

// ]
</script>

<style scoped>
#first-section {
  background: url("../assets/about/sections/section-1.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 500px;
  position: relative;
}

#first-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(
    0,
    0,
    0,
    0.5
  ); /* Adjust opacity by changing the last value (0.5) */
  pointer-events: none;
}

section {
  font-family: "Bricolage Grotesque", sans-serif;
}
</style>
