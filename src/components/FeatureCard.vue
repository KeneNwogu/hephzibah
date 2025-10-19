<template>
  <div class="mx-auto mt-5 w-full px-8" :style="{ color: feature.textColor }">
    <div
      class="rounded-2xl px-3 pt-8 text-xl"
      :style="{ backgroundColor: feature.bgColor }"
    >
      <p>{{ feature.title }}</p>
      
      <div class="block lg:relative">
        <div class="mt-2 lg:mb-8">
          <p v-for="m in feature.features" :key="m" class="text-md lg:text-xl">
            {{ m }}
          </p>
        </div>

        <div class="mt-10 h-[100px] w-[100px] bg-white">
          <img src="../assets/cash-flow.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// interface Feature {
//   title: String;
//   features: [String];
//   textColor: String;
//   bgColor: String;
//   img: String;
// }

defineProps({
  feature: {
    type: Object,
    default: () => {
      return {};
    },
  },
});

// const { title, features, textColor, bgColor } = props.feature;
</script>
