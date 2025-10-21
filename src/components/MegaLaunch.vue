<template>
  <div class="min-h-screen bg-[white] p-8">
    <div class="mx-auto max-w-6xl bg-[#F1252A]">
      <div class="mb-6 rounded-lg border-4 border-red-600 bg-white p-8">
        <h1 class="mb-4 text-4xl font-bold">
          <span class="text-red-600">5 in 1</span> Mega Launch
        </h1>
        <p class="text-sm leading-relaxed text-gray-700">
          In a historic first, Hindustan Unilever orchestrated a groundbreaking
          activation where five products were launched in a single day. This
          unprecedented event combined strategy, spectacle, and seamless
          coordination, setting a new benchmark in the industry. The launch
          created immersive experiences and record-breaking visibility for the
          brand, captivating audiences and setting the stage for future
          innovations.
        </p>
      </div>

      <div class="rounded-lg p-4">
        <div class="grid grid-cols-3 gap-3">
          <div
            v-for="(image, index) in imageList"
            :key="index"
            :class="{ 'row-span-2': index === 2 }"
            class="rounded bg-gradient-to-br from-red-600 to-red-800"
          >
            <img
              :src="image"
              :alt="'Launch Event Image ' + index"
              class="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import image1 from '../assets/mega-launch/image-1.jpg';
import image2 from '../assets/mega-launch/image-2.jpg';
import image3 from '../assets/mega-launch/image-3.jpg';
import image4 from '../assets/mega-launch/image-4.jpg';
import image5 from '../assets/mega-launch/image-5.jpg';
import image6 from '../assets/mega-launch/image-6.jpg';
import image7 from '../assets/mega-launch/image-7.jpg';
import image8 from '../assets/mega-launch/image-8.jpg';
import image9 from '../assets/mega-launch/image-9.jpg';
import image10 from '../assets/mega-launch/image-10.jpg';
import image11 from '../assets/mega-launch/image-11.jpg';
import image12 from '../assets/mega-launch/image-12.jpg';
import image13 from '../assets/mega-launch/image-13.jpg';
import image14 from '../assets/mega-launch/image-14.jpg';

const imageList = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14
]
</script>
