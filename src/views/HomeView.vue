<template>
  <section id="first-section" class="mx-auto bg-[#001123] text-white">
    <div class="mx-auto w-[66%] text-center lg:w-full lg:px-10 lg:text-left">
      <div>
        <h2
          class="leading-12 pt-[150px] text-5xl font-bold text-white lg:w-[50%] lg:text-[80px] lg:leading-[80px]"
        >
          Creating Experience in every Idea
        </h2>

        <p class="text-md mt-3 text-white/60 lg:w-[40%] lg:text-xl">
          Integrated BTL & ATL campaigns driven by 20+ years of strategic
          innovation
        </p>
        <button
          class="mt-4 w-full rounded-full bg-white p-4 text-[#6C0921] lg:w-[16%]"
        >
          See Our Works
        </button>
      </div>
    </div>
  </section>

  <section
    class="mx-auto mt-10 w-[70%] rounded-3xl bg-[#000E1D] p-6 text-center text-white lg:hidden"
  >
    <div v-for="metric in metrics" :key="metric.value">
      <div class="mb-6">
        <p class="leading-12 text-4xl font-bold">{{ metric.value }}</p>
        <p class="text-md text-[#EAECF0]">{{ metric.label }}</p>
      </div>
    </div>
  </section>

  <section class="mx-auto mt-[50px] w-[60%]">
    <p class="text-center text-2xl font-bold lg:text-4xl">
      <span class="text-[#010101]"
        >Trusted by industry leaders across sectors to
      </span>
      <span class="text-[#9F9F9F]">deliver meaningful brand experiences.</span>
    </p>

    <p class="mt-3 hidden text-center text-[#475467] lg:block">
      With over two decades of service, Hephzibah Experiential has partnered
      with top-tier brands across finance, telecom, consumer goods, and public
      sectors
    </p>

    <!-- TODO: fix customer-list -->
    <!-- <div class="mt-[20px] w-[100%]">
      <img src="../assets/customer-list.png" alt="">
    </div> -->
  </section>

  <section class="mt-10">
    <ScrollingBanner />
  </section>

  <section class="bg-white py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h2 class="mb-4 text-4xl font-bold text-gray-900">
          Why Hephzibah Experiential
        </h2>
        <p class="mx-auto mb-12 text-xl text-gray-600 lg:w-[30%]">
          Discover the pillars that make our campaigns unmissable
        </p>
      </div>

      <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <!-- Strategic Storytelling Card -->
        <div v-for="i in 3" :key="i" class="rounded-2xl bg-[#F5F0F1] p-8">
          <div
            class="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-[#6C0921]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1H2"
              />
            </svg>
          </div>
          <h3 class="mb-3 text-xl font-bold text-gray-900">
            Strategic Storytelling
          </h3>
          <p class="text-gray-600">
            We fuse brand insights with audience psychology to tell stories that
            move people to action
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="bg-[#6C0921] pb-20 pt-12 lg:pb-0">
    <div class="mx-auto w-[90%]">
      <div>
        <div class="mb-4 text-center text-3xl font-bold text-white">
          <p>Visionaries in 360°</p>
          <p>Brand Storytelling</p>
        </div>
      </div>

      <div
        class="block lg:flex lg:w-full lg:items-stretch lg:justify-between lg:gap-12"
      >
        <!-- Image block -->
        <div class="mt-5 lg:flex-1">
          <img
            class="h-[70%] w-full rounded-2xl object-cover"
            src="../assets/office-strategy.png"
            alt="Office Strategy"
          />
        </div>

        <!-- Content block -->
        <div
          class="mt-8 flex h-full flex-col justify-between rounded-2xl bg-white p-6 lg:mt-5 lg:flex-1"
        >
          <div class="text-[#344054] lg:text-xl">
            <p class="mb-3 lg:mb-6">
              At Hephzibah Experiential Ltd, we’re more than an advertising
              agency, we’re strategic partners dedicated to amplifying your
              brand’s voice.
            </p>

            <p class="mb-3 lg:mb-6">
              For over 20 years, our storytellers, creators, and visionaries
              have blended BTL and ATL expertise to deliver fully integrated
              marketing communications.
            </p>

            <p class="mb-3 lg:mb-6">
              From concept to execution, our 360° approach ensures every
              touchpoint, whether digital, outdoor, or in-person, works in
              harmony to ignite conversations and drive measurable results.
            </p>
          </div>

          <button
            class="mt-3 w-full rounded-full bg-[#6C0921] p-3 text-white lg:mt-8"
          >
            About us
          </button>
        </div>
      </div>
    </div>
  </section>

  <section class="mt-10 pb-6">
    <div class="mx-auto w-[95%] rounded-3xl bg-[#0C111D]">
      <div class="px-10">
        <div class="pt-8 text-2xl lg:text-4xl lg:leading-[32px]">
          <h2 class="flex flex-col font-bold text-white lg:inline-block">
            <span>Sixth Sense Marketing:</span>
            <span class="mb-12 text-[#9F9F9F]">
              Turning Brand Touchpoints Into Brand Truth
            </span>
          </h2>
        </div>

        <div class="mt-3 text-center">
          <img
            class="mx-auto aspect-[2/1] w-[100%] max-w-[500px]"
            src="../assets/sixth-sense.png"
            alt=""
          />
        </div>

        <div class="mt-6 pb-8 text-white lg:w-[30%] lg:text-3xl">
          <p>
            “We create a connecting point
            <span class="text-[#9F9F9F]">where everything makes sense.</span>”
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="bg-[#098CEF] p-6">
    <div class="mx-auto w-[95%] rounded-3xl bg-white">
      <div class="px-10">
        <div class="pt-8 text-xl font-semibold lg:text-4xl">
          <p>
            We deliver full-spectrum brand management
            <span class="text-[#A3A3A3]"
              >through innovation, media, digital, PR solutions and
              experiential</span
            >
          </p>
        </div>
      </div>

      <!-- <div class="mx-auto mt-5 px-8 text-white">
        <div class="rounded-2xl bg-[#098CEF] px-3 pt-8">
          <p class="text-xl">Experiential Marketing</p>
          <p>
            Brand Activation & Consumer Research POSM Merchandising & Deployment
            Conference & Event Management
          </p>

          <div class="mt-10 h-[170px] w-[170px] bg-white">
            <img src="./assets/cash-flow.png" alt="" />
          </div>
        </div>
      </div> -->
      <div class="grid grid-cols-1 gap-4 pb-6 md:grid-cols-2">
        <FeatureCard v-for="f in features" :key="f.title" :feature="f" />
      </div>
    </div>
  </section>

  <section class="mt-9 bg-white p-6">
    <p class="mb-3 text-center text-3xl font-bold lg:text-7xl">
      Our Work <span class="text-[#98A2B3]">In Action</span>
    </p>

    <div class="hidden lg:block">
      <MegaLaunch />
    </div>

    <div class="mx-auto mt-2 w-[95%] rounded-3xl bg-[#F16A21] py-3 lg:hidden">
      <div class="mx-auto mt-5 px-3">
        <div class="rounded-2xl bg-white px-3 pb-4 pt-8">
          <img
            class="h-[40px] w-[80px]"
            src="../assets/exhibition/gino/gino-logo.png"
            alt="bama-logo"
          />
          <p class="mt-2 font-bold text-black">
            Argungu Fishing Festival,
            <span class="text-[#F16A21]">Birnin Kebbi</span>
          </p>
          <p class="mt-3 text-[#5D5B5B]">
            Hephzibah partnered with GB Foods to activate the Argungu Fishing
            Festival, delivering cultural engagement and strong brand visibility
            through on-ground experiences.
          </p>
        </div>
      </div>

      <div class="mt-4 px-3">
        <img
          v-for="(i, index) in ginoImages"
          :key="`image-${index}`"
          class="mb-4 rounded-2xl"
          :src="i"
          alt=""
        />
      </div>
    </div>

    <div class="mx-auto mt-12 w-[95%] rounded-3xl bg-[#FFDE42] py-3 lg:hidden">
      <div class="mx-auto mt-5 px-3">
        <div class="rounded-2xl bg-[#002984] px-3 pb-4 pt-8">
          <img
            class="aspect-[45/33] w-[80px]"
            src="../assets/exhibition/bama/bama-logo.png"
            alt="bama-logo"
          />
          <p class="font-bold text-[#FFDE42]">
            Bama Mayonnaise
            <span class="text-white">brand sampling for 1,400 students</span>
          </p>
          <p class="mt-3 text-white">
            Hephzibah Experiential executed a two-day sampling activation for
            Bama Mayonnaise, delivering branded setup, breakfast distribution,
            and data capture for 1,400 students — ensuring full venue visibility
            and seamless brand interaction.
          </p>
        </div>
      </div>

      <div class="mt-4 px-3">
        <img
          v-for="(i, index) in bamaImages"
          :key="`image-${index}`"
          class="mb-4 rounded-2xl"
          :src="i"
          alt=""
        />
      </div>
    </div>

    <button
      class="mt-10 flex w-full items-center justify-center gap-2 rounded-full bg-[#6C0921] p-3 text-white lg:mx-auto lg:w-[400px] lg:bg-black"
    >
      Browse Our Full Portfolio
      <img src="../assets/arrow-icon.png" alt="" />
    </button>
  </section>

  <section class="p-6">
    <div class="mx-auto mt-12 w-[95%] rounded-3xl bg-[#098CEF] py-3">
      <div class="mx-auto mt-5 px-3">
        <p class="mb-3 text-center text-3xl font-bold text-white lg:text-6xl">
          Watch the Experience
        </p>
        <p class="text-center text-white lg:text-2xl">
          See our work in motion — real moments, real impact.
        </p>
      </div>

      <div class="mx-auto max-w-[70%]">
        <img
          class="mx-auto aspect-[2/1] rounded-md lg:w-[80%]"
          src="../assets/video-thumbnail.png"
          alt=""
        />
      </div>
    </div>
  </section>

  <section>
    <div class="mx-auto mt-12 w-[95%] max-w-[70%] rounded-3xl py-3">
      <div class="mx-auto mt-5 px-3">
        <p
          id="grotesque"
          class="mb-3 text-center text-3xl font-bold text-black lg:text-6xl"
        >
          Question? Look here.
        </p>
        <div class="lg:p-10">
          <FAQSection />
        </div>
      </div>
    </div>
  </section>

  <section class="mt-10">
    <ScrollingBanner bg-color="#6C0921" />
  </section>
</template>

<script setup>
import FeatureCard from "../components/FeatureCard.vue";
import MegaLaunch from "../components/MegaLaunch.vue";
import ScrollingBanner from "../components/ScrollingBanner.vue";
import Gino1 from "../assets/exhibition/gino/gino-1.png";
import Gino2 from "../assets/exhibition/gino/gino-2.png";
import Gino3 from "../assets/exhibition/gino/gino-3.png";
import Gino4 from "../assets/exhibition/gino/gino-4.png";
import Gino5 from "../assets/exhibition/gino/gino-5.png";
import Gino6 from "../assets/exhibition/gino/gino-6.png";

import Bama1 from "../assets/exhibition/bama/bama-1.png";
import Bama2 from "../assets/exhibition/bama/bama-2.png";
import Bama3 from "../assets/exhibition/bama/bama-3.png";
import Bama4 from "../assets/exhibition/bama/bama-4.png";
import Bama5 from "../assets/exhibition/bama/bama-5.png";
import FAQSection from "../components/FAQSection.vue";

const ginoImages = [Gino1, Gino2, Gino3, Gino4, Gino5, Gino6];
const bamaImages = [Bama1, Bama2, Bama3, Bama4, Bama5];

const metrics = [
  { value: "20+", label: "Years in Business" },
  { value: "150+", label: "Campaigns Delivered" },
  { value: "5.8M", label: "Impressions Generated" },
  { value: "90%", label: "Client Retention Rate" },
];

const features = [
  {
    title: "Experiential Marketing",
    features: [
      "Brand Activation & Consumer Research",
      "POSM Merchandising & Deployment Conference & Event Management",
    ],
    bgColor: "#098CEF",
    textColor: "#FFFFFF",
  },
  {
    title: "ATL (Above-The-Line)",
    features: [
      "Advertising (TV, Radio, Print)",
      "Public Relations",
      "Strategic Media Monitoring",
      "Digital Profiling & Marketing Media Buying & Placement",
    ],
    textColor: "#02121F",
    bgColor: "#D6EDFF",
  },
  {
    title: "Public Relations",
    features: [
      "Media Relations & Press Releases",
      "Crisis Communication Support Influencer & Stakeholder Engagement",
      "Thought Leadership Positioning",
    ],
    bgColor: "#098CEF",
    textColor: "white",
  },
  {
    title: "Digital Production",
    features: [
      "Outdoor LED Content & Management",
      "Video Production & Editing",
      "3D Animation & Motion Graphics",
      "Corporate Communication Materials",
    ],
    textColor: "#252525",
    bgColor: "#D6EDFF",
  },
];
</script>

<style scoped>
#first-section {
  background: url("../assets/first-section-hero.png");
  height: 700px;
  /* background-position: 20% 100%;   */
}

img {
  max-width: 100%;
}

#grotesque {
  font-family: "Bricolage Grotesque", sans-serif;
}
</style>
