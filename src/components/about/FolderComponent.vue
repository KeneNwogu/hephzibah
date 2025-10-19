<template>
  <div class="relative max-w-sm rounded-xl shadow-md mx-auto">
    <div
      class="rounded-xl border border-gray-200 bg-white p-6 folder-cut"
    >
      <!-- Decorative flower-like element -->
      <div
        class="absolute -right-3 -top-3 flex h-15 w-15 items-center justify-center border border-black rounded-full bg-white-500 text-sm font-bold text-white"
      >
        
      </div>

      <h2 class="mb-3 text-2xl font-semibold">Vision</h2>
      <p class="text-sm leading-relaxed text-gray-700">
        To become a leading marketing service provider in West Africa in the
        integrated marketing services industry, as measured by our exceptional
        client base, high levels of customer satisfaction, and sustained
        profitability.
      </p>
    </div>
  </div>
</template>

<style scoped>
/* Create a top-right cut to mimic a folder tab. Adjust --cut to change size. */
.folder-cut {
  --cut: 36px;
  /* polygon points: top-left, near-top-right, cut point, bottom-right, bottom-left */
  -webkit-clip-path: polygon(0 0, calc(100% - var(--cut)) 0, 100% var(--cut), 100% 100%, 0 100%);
  clip-path: polygon(0 0, calc(100% - var(--cut)) 0, 100% var(--cut), 100% 100%, 0 100%);
}

/* Slightly smaller cut on narrow screens */
@media (max-width: 640px) {
  .folder-cut {
    --cut: 28px;
  }
}
</style>
