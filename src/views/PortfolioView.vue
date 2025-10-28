<script setup lang="ts">
// import GenericWorkItem from "../components/portfolio/GenericWorkItem.vue";
import ArgunguFestival from "../components/portfolio/ArgunguFestival.vue";
import BamaSchool from "../components/portfolio/BamaSchool.vue";
import BamaStudents from "../components/portfolio/BamaStudents.vue";
import GBConference from "../components/portfolio/GBConference.vue";
import GinoWork from "../components/portfolio/GinoWork.vue";
import WaveCrest from "../components/portfolio/WaveCrest.vue";
</script>

<template>
  <div>
    <div
      class="bg-[radial-gradient(circle_at_30%_50%,_#fff1f6_0%,_#fafbfc_60%,_#e8f0f9_100%)] pb-[80px] pt-[150px]"
    >
      <p class="grotesque text-center text-5xl font-bold lg:text-8xl">
        Our Portfolio of Bold Brand Moments
      </p>
      <div
        class="mt-12 grid grid-cols-2 gap-4 px-6 lg:flex lg:items-center lg:justify-between lg:px-[300px]"
      >
        <img
          class="h-45 aspect-2/1 col-span-2 rounded-lg lg:h-40"
          src="../assets/contact/header-1.jpg"
          alt=""
        />
        <img
          class="aspect-2/1 h-32 rounded-lg lg:h-40"
          src="../assets/contact/header-2.jpg"
          alt=""
        />
        <img
          class="aspect-2/1 h-32 rounded-lg lg:h-40"
          src="../assets/contact/header-3.jpg"
          alt=""
        />
      </div>
    </div>

    <div class="lg:px-24 pt-12">
      <p class="lg:w-[55%] mx-auto text-center lg:text-5xl font-bold grotesque text-3xl w-full">Brand Activation & Marketing Case Studies</p>

      <div class="mt-3 px-20">
        <GinoWork />
        <WaveCrest />

        <BamaSchool />
        <ArgunguFestival />

        <BamaStudents />

        <GBConference />
        <!-- <GenericWorkItem />
        <GenericWorkItem />
        <GenericWorkItem />
        <GenericWorkItem />
        <GenericWorkItem /> -->
      </div>
    </div>

    <div class="p-6">
      <div
        class="min-h-screen bg-gray-50 flex items-center justify-center p-4"
      >
        <div
          class="relative w-full max-w-2xl h-64 rounded-2xl overflow-hidden shadow-2xl"
        >
          <div
            class="absolute inset-0 bg-cover bg-center"
            style="
              background-image: url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80');
            "
          >
            <div class="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
          <div
            class="relative z-10 h-full flex flex-col items-center justify-center text-center px-6"
          >
            <h1
              class="text-white text-4xl md:text-5xl font-bold mb-6 leading-tight"
            >
              Your Next Big Brand<br />Moment Starts Here
            </h1>

            <button
              class="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
