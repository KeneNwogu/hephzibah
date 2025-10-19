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
            v-for="index in 14"
            :key="index"
            :class="{ 'row-span-2': index === 2 }"
            class="rounded bg-gradient-to-br from-red-600 to-red-800"
          >
            <img
              :src="'/src/assets/mega-launch/image-' + index + '.jpg'"
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

<script>
export default {
  name: "MegaLaunch",
};
</script>
