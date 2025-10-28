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

      <svg width="0" height="0">
        <defs>
          <clipPath id="curveClip" clipPathUnits="objectBoundingBox">
            <!-- concave: top curves downward, bottom curves upward -->
            <path d="M0,0.05 Q0.5,0.25 1,0.05 L1,0.95 Q0.5,0.75 0,0.95 Z" />
          </clipPath>
        </defs>
      </svg>

      <section
        class="hidden lg:flex h-[300px] w-full items-stretch justify-between gap-24 overflow-hidden mt-6"
        style="clip-path: url(#curveClip)"
      >
        <div class="h-full flex-[2]">
          <img
            src="../assets/portfolio/banner-left.jpg"
            alt="Event 1"
            class="h-full w-full rounded-lg object-cover shadow-md"
          />
        </div>

        <div class="h-full flex-[4]">
          <img
            src="../assets/portfolio/banner-center.jpg"
            alt="Event 2"
            class="h-full w-full scale-105 rounded-lg object-cover shadow-md"
          />
        </div>

        <div class="h-full flex-[1]">
          <img
            src="../assets/portfolio/banner-right.jpg"
            alt="Event 3"
            class="h-full w-full rounded-lg object-cover shadow-md"
          />
        </div>
      </section>
    </div>

    <div class="pt-12 lg:px-24">
      <p
        class="grotesque mx-auto w-full text-center text-3xl font-bold lg:w-[55%] lg:text-5xl"
      >
        Brand Activation & Marketing Case Studies
      </p>

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
      <div class="flex min-h-screen items-center justify-center bg-gray-50 p-4">
        <div
          class="relative h-64 w-full max-w-2xl overflow-hidden rounded-2xl shadow-2xl"
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
            class="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
          >
            <h1
              class="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl"
            >
              Your Next Big Brand<br />Moment Starts Here
            </h1>

            <button
              class="transform rounded-full bg-white px-8 py-3 font-semibold text-gray-900 shadow-lg transition-colors duration-300 hover:scale-105 hover:bg-gray-100 hover:shadow-xl"
            >
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- <svg width="0" height="0" style="position: absolute">
    <defs>
      <clipPath id="ellipseClip" clipPathUnits="objectBoundingBox">
        <ellipse
          cx="0.496"
          cy="-0.037"
          rx="0.855"
          ry="1.036"
          transform="rotate(45 0.5 0)"
        />
        <ellipse cx="0.496" cy="-0.037" rx="0.855" ry="1.036" />
      </clipPath>
    </defs>
  </svg> -->

  <svg width="0" height="0" style="position: absolute">
    <defs>
      <!-- Top ellipse -->
      <clipPath id="ellipseClipTop" clipPathUnits="objectBoundingBox">
        <ellipse cx="0.496" cy="-0.037" rx="0.855" ry="1.036" />
      </clipPath>

      <!-- Bottom ellipse (rotated 180°) -->
      <clipPath id="ellipseClipBottom" clipPathUnits="objectBoundingBox">
        <ellipse
          cx="0.496"
          cy="1.037"
          rx="0.855"
          ry="1.036"
          transform="rotate(180 0.5 0.5)"
        />
      </clipPath>
    </defs>
  </svg>
</template>

<style scoped>
.curved {
  /* Combine both paths into one composite clip */
  clip-path: path("M0,0.15 Q0.5,-0.1 1,0.15 L1,0.85 Q0.5,1.1 0,0.85 Z");
}

.curved img {
  height: 100%;
  object-fit: contain; /* Makes image fill the space */
  object-position: center; /* Controls which part is visible */
}
</style>
