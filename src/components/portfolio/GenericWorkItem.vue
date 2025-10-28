<script setup lang="ts">
defineProps({
    logo: {
        type: String,
        required: true,
        default: ""
    },
    name: {
        type: String,
        required: true,
        default: ""
    },
    location: {
        type: String,
        required: false,
        default: ""
    },
    description: {
        type: String,
        required: true,
        default: ""
    },
    images: {
        type: [String],
        required: true,
        default: ""
    },
    headerBg: {
        type: String,
        required: true,
        default: ""
    },
    mainBg: {
        type: String,
        required: true,
        default: ""
    },
    headerTextColor: {
        type: String,
        required: true,
        default: "#FFFFFF"
    },
})
</script>

<template>
  <div class="mx-auto lg:p-4 my-3">
    <div
      class="bg-white rounded-3xl overflow-hidden shadow-2xl"
      :style="{'border-color': mainBg, 'border-width': '12px', 'background-color': mainBg}"
    >
      <div class="lg:px-6 lg:py-4 p-2" :style="{'background-color': headerBg}">
        <div class="flex items-start gap-3">
            <div>
                <img class="lg:w-28 w-16 h-auto" :src="logo" alt="">
            </div>
          <div class="flex-1" :style="{'color': headerTextColor}">
            <h1 class="lg:text-xl font-bold text-md">
              {{ name }},
              <span v-if="location" class="text-orange-500">{{ location }}</span>
            </h1>
            <p class="lg:text-xs mt-1 leading-tight w-[80%] text-[10px]">
              {{ description }}
            </p>
          </div>
        </div>
      </div>

      <div class="mt-3" :style="{'background-color': mainBg}">
        <div class="flex flex-col lg:grid lg:grid-cols-3 gap-2">
            <div 
                v-for="img in images" 
                class="aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden"
                :key="img"
            >
                <img
                    :src="img"
                    alt="Festival presentation"
                    class="w-full h-full object-cover"
                    loading="lazy"
                />
            </div>
        </div>
      </div>
    </div>
  </div>
</template>
