<template class="grotesque">
  <section id="first-section" class="mx-auto bg-[#001123] text-white">
    <div class="mx-auto w-[66%] text-center lg:w-full lg:px-10 lg:text-left">
      <div class="absolute bottom-0 left-1/2 -translate-x-1/2">
        <p
          class="grotesque pt-[150px] text-sm font-light text-white lg:w-full lg:text-center lg:text-[20px] lg:leading-[80px]"
        >
          We Don’t Just Build Campaigns...
        </p>

        <p
          class="grotesque mb-6 text-6xl font-extrabold text-white lg:w-full lg:text-center lg:text-8xl"
        >
          We Build Experiences
        </p>
      </div>
    </div>
  </section>

  <div class="bg-[radial-gradient(circle_at_30%_50%,_#fff1f6_0%,_#fafbfc_60%,_#e8f0f9_100%)]">
    <section class="grotesque px-6 py-12 lg:px-12">
      <div class="text-4xl">
        <p class="font-bold text-[#6C0921] lg:text-6xl">Two Decades,</p>
        <p class="font-bold text-[#98A2B3]">Transforming Brands</p>
      </div>
      <div class="mt-5">
        <p class="font-light text-[#0C111D] lg:w-[85%]">
          Hephzibah Experiential is a leading brand consultancy with over 20
          years of experience in creating meaningful connections between brands
          and people. We deliver strategic and creative solutions across
          experiential marketing, media, digital communication, and public
          relations. Our approach is rooted in storytelling, innovation, and
          seamless execution, helping brands remain relevant, build loyalty, and
          drive measurable impact through every campaign we craft.
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

    <section class="font-sf-pro hidden lg:block">
      <div class="mx-auto grid max-w-5xl grid-cols-3 gap-12 py-16 text-center italic">
        <div class="flex flex-col items-center">
          <p class="text-5xl font-semibold">
            20<span class="relative -top-3 text-gray-500">+</span>
          </p>
          <p class="text-sm text-gray-600">Years of Experience</p>
        </div>

        <div class="mt-[64px] flex flex-col items-center">
          <p class="text-6xl font-semibold">
            100<span class="relative -top-3 text-gray-500">+</span>
          </p>
          <p class="text-sm text-gray-600">Brands Served</p>
        </div>

        <div class="mt-[128px] flex flex-col items-center">
          <p class="text-6xl font-semibold">
            300<span class="relative -top-3 text-gray-500">+</span>
          </p>
          <p class="text-sm text-gray-600">Campaigns Executed</p>
        </div>
      </div>
    </section>

    <!-- TODO: fix folder component -->
    <!-- <section class="mx-auto mb-12 p-6 lg:flex lg:items-center">
          <FolderComponent class="flex-1" />
          <FolderComponent class="mt-6 flex-1" />
        </section> -->
  </div>

  <section class="mx-auto mt-[80px] p-6 lg:px-12">
    <p class="grotesque text-4xl font-medium lg:text-6xl">Our Network</p>
    <p class="mt-3 font-light text-[#0C111D] lg:w-[70%]">
      Our Local footprint can be seen across the 36 states in Nigeria and Abuja
      with the capacity of activating simultaneously across the network in a
      singlestretch
    </p>
  </section>

  <section class="mx-auto">
    <img class="mx-auto p-3" src="../assets/about/map.png" alt="" />
  </section>

  <section class="mx-auto p-6 lg:flex lg:items-center lg:justify-between">
    <LocationComponent
      v-for="r in regions"
      :key="r.name"
      :name="r.name"
      :icon-color="r.iconColor"
      class="mb-4"
    />
  </section>

  <section class="mx-auto mb-6 mt-[180px] p-6">
    <p class="grotesque mb-5 text-4xl font-medium">Our Partners</p>
    <div class="mt-3">
      <img src="../assets/about/partners/full-partner.png" alt="" />
    </div>
  </section>

  <section class="mx-auto mt-[180px] p-6">
    <div class="mb-8 text-center">
      <p class="text-2xl font-medium">Our Team</p>
      <p class="grotesque mx-auto mt-4 w-[90%] text-6xl font-bold">
        Brains. Grit. Vision.
      </p>
    </div>

    <div class="mx-auto w-[90%] lg:grid lg:grid-cols-3">
      <TeamMember
        v-for="member in members"
        :key="member.name"
        :name="member.name"
        :title="member.title"
        :image="member.image"
        class="mb-6"
      />
    </div>
  </section>
</template>

<script setup>
// import FolderComponent from "../components/about/FolderComponent.vue";
import LocationComponent from "../components/about/LocationComponent.vue";
import Member1 from "../assets/about/team/member-1.jpg";
import Member2 from "../assets/about/team/member-2.png";
import Member3 from "../assets/about/team/member-3.png";
import Member4 from "../assets/about/team/member-4.png";
import Member5 from "../assets/about/team/member-5.png";
import Member6 from "../assets/about/team/member-6.png";
import TeamMember from "../components/about/TeamMember.vue";

const metrics = [
  { value: "20+", label: "Years of Experience" },
  { value: "200+", label: "Brands Served" },
  { value: "300+", label: "Campaigns Executed" },
];

const regions = [
  { name: "North-West", iconColor: "#FF6500" },
  { name: "North-East", iconColor: "#38BE17" },
  { name: "South-South", iconColor: "#FF5AA5" },
  { name: "South-East", iconColor: "#03E2B9" },
  { name: "South-West", iconColor: "#875BF7" },
  { name: "North-Central", iconColor: "#DE5DFB" },
];

const members = [
  { name: "Kwaghza Micheal", image: Member1, title: "Managing Director" },
  { name: "Ngozi Mortune", image: Member2, title: "Head of Business" },
  { name: "Ruth Peters", image: Member3, title: "Human Resources" },
  { name: "Okpaneje Chinedu", image: Member6, title: "Head of Operations" },
  {
    name: "Ayomide Ajayi",
    image: Member5,
    title: "Director, Creative and Strategy",
  },
  { name: "Temitope Oni", image: Member4, title: "Finance Manager" },
];
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
