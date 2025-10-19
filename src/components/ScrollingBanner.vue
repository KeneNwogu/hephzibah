<template>
  <section class="w-full overflow-hidden" aria-hidden="false">
    <div class="marquee p-4" role="region" aria-label="Scrolling banner" :style="{'background-color': bgColor}">
      <!-- First track -->
      <div
        class="marquee-track"
        :style="trackStyle"
        aria-hidden="true"
      >
        <template v-for="(item, i) in items" :key="`a-${i}`">
          <span class="mx-6 text-xl font-semibold text-white sm:text-base">{{ item }}</span>
          <img class="h-[32px] max-w-[32px]" src="../assets/scrolling-banner-separator.png" alt="">
        </template>
      </div>

      <!-- Second track (duplicate for seamless loop) -->
      <div
        class="marquee-track"
        :style="trackStyle"
        aria-hidden="true"
      >
        <template v-for="(item, i) in items" :key="`b-${i}`">
          <span class="mx-6 text-xl font-semibold text-white sm:text-base">{{ item }}</span>
          <img class="h-[32px] max-w-[32px]" src="../assets/scrolling-banner-separator.png" alt="">
        </template>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ScrollingBanner',
  props: {
    items: {
      type: Array,
      default: () => [
        'Advertising Agency',
        'Creative Storytelling',
        'Technology',
        'Public Relations'
      ],
    },
    duration: {
      type: Number,
      default: 22,
    },
    reverse: {
      type: Boolean,
      default: false,
    },
    bgColor: {
      type: String,
      default: "#001326"
    }
  },
  computed: {
    trackStyle() {
      return {
        animationDuration: `${this.duration}s`,
        animationDirection: this.reverse ? 'reverse' : 'normal',
      };
    },
  },
};
</script>

<style scoped>
.marquee {
  display: flex;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  position: relative;
}

.marquee-track {
  display: inline-flex;
  align-items: center;
  white-space: nowrap;
  animation: marqueeScroll linear infinite;
  will-change: transform;
}

@keyframes marqueeScroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

/* Respect user preference for reduced motion */
@media (prefers-reduced-motion: reduce) {
  .marquee-track {
    animation: none;
  }
}

.marquee span {
  display: inline-block;
  padding: 0.25rem 0;
}
</style>