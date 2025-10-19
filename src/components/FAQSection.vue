<template>
  <div class="space-y-4">
    <div
      v-for="(faq, index) in faqs"
      :key="index"
      class="overflow-hidden rounded-lg border border-gray-200 bg-[#F9FAFB] shadow-sm transition-all duration-200 hover:shadow-md"
    >
      <button
        class="flex w-full items-center justify-between px-6 py-5 text-left focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
        @click="toggleFAQ(index)"
      >
        <span class="pr-4 text-base font-medium text-gray-900">
          {{ faq.question }}
        </span>
        <span
          class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gray-300 bg-[#EAECF0] transition-transform duration-200"
        >
          <svg
            :class="[
              'h-5 w-5 text-gray-600 transition-transform duration-200',
              { 'rotate-45': openIndex === index },
            ]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 4v16m8-8H4"
            />
          </svg>
        </span>
      </button>

      <transition
        enter-active-class="transition-all duration-300 ease-in-out"
        leave-active-class="transition-all duration-300 ease-in-out"
        enter-from-class="max-h-0 opacity-0"
        enter-to-class="max-h-96 opacity-100"
        leave-from-class="max-h-96 opacity-100"
        leave-to-class="max-h-0 opacity-0"
      >
        <div v-show="openIndex === index" class="overflow-hidden">
          <div class="px-6 pb-5 pt-2">
            <p class="leading-relaxed text-gray-600">
              {{ faq.answer }}
            </p>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const openIndex = ref(null);

const faqs = ref([
  {
    question: "What services does Hephzibah Experiential offer?",
    answer:
      "Hephzibah Experiential offers a comprehensive range of event management and experiential marketing services including brand activations, corporate events, product launches, interactive installations, and immersive brand experiences designed to create memorable connections between brands and their audiences.",
  },
  {
    question: "How do I get started with your services?",
    answer:
      "Getting started is simple! Reach out to our team through our contact form or give us a call. We'll schedule a consultation to understand your needs, objectives, and vision, then create a customized proposal tailored to your specific requirements.",
  },
  {
    question: "What industries do you work with?",
    answer:
      "We work across various industries including technology, retail, entertainment, healthcare, finance, and consumer goods. Our diverse experience allows us to adapt our strategies to meet the unique needs of any sector.",
  },
  {
    question: "How long does it take to plan an event?",
    answer:
      "Event planning timelines vary depending on the scope and complexity of the project. Small activations may require 4-6 weeks, while larger events typically need 3-6 months of planning. We also offer rush services for time-sensitive projects.",
  },
]);

const toggleFAQ = (index) => {
  openIndex.value = openIndex.value === index ? null : index;
};
</script>

<style scoped>
/* Tailwind classes handle most styling, but you can add custom styles here if needed */
</style>
