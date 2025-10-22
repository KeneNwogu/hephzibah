<template>
  <div
    id="navbar"
    class="fixed left-1/2 top-3 mx-auto my-3 flex h-[60px] w-[80%] -translate-x-1/2 items-center justify-center rounded-full bg-[#17222E]"
  >
    <!-- mobile hamburger menu -->
    <div class="flex w-[90%] items-center justify-between text-white lg:hidden">
      <div><img src="../assets/heph-logo.png" alt="heph-logo" class="h-8"/></div>
      <div>
        <button
          @click="isOpen = !isOpen"
          :aria-expanded="isOpen.toString()"
          aria-controls="mobile-menu"
          aria-label="Toggle navigation"
          class="flex h-10 w-10 items-center justify-center rounded-full border border-white bg-gray-800 text-white transition-colors hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-white"
        >
          <svg
            v-if="!isOpen"
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- laptop full navbar -->
    <div class="hidden w-[90%] items-center justify-between text-white lg:flex">
      <div><img src="../assets/heph-logo.png" alt="heph-logo" class="h-8"/></div>
      <div class="flex w-[40%] items-center justify-between">
        <a
          v-for="link in links"
          :href="link.route"
          :key="link.route"
          :class="
            route.path === link.route
              ? 'rounded-full bg-white p-3 text-[#6C0921]'
              : 'text-[#ADADAD]'
          "
        >
          {{ link.name }}
        </a>
      </div>

      <div>
        <a
          href="/portfolio"
          :class="
            route.path === '/portfolio'
              ? 'rounded-full bg-white p-3 text-[#6C0921]'
              : 'text-[#ADADAD]'
          "
        >
          See Our Works
        </a>
      </div>
    </div>

    <!-- Mobile dropdown panel -->
    <transition name="fade-slide">
      <div
        v-if="isOpen"
        id="mobile-menu"
        class="absolute left-1/2 top-20 z-50 w-[90%] -translate-x-1/2 rounded-2xl bg-[#0F1A20]/95 p-4 text-white shadow-lg lg:hidden"
      >
        <nav class="flex flex-col gap-3">
          <a
            v-for="link in links"
            :key="link.route + '-mobile'"
            :href="link.route"
            @click="closeMenu"
            :class="route.path === link.route ? 'rounded-full bg-white px-4 py-2 text-[#6C0921]' : 'px-4 py-2 text-[#ADADAD] hover:text-white'"
          >
            {{ link.name }}
          </a>

          <a
            href="/portfolio"
            @click="closeMenu"
            :class="route.path === '/portfolio' ? 'rounded-full bg-white px-4 py-2 text-[#6C0921]' : 'mt-2 inline-block rounded-full border border-transparent bg-white/5 px-4 py-2 text-[#ADADAD] hover:bg-white/10'"
          >
            See Our Works
          </a>
        </nav>
      </div>
    </transition>

    <!-- backdrop to close menu when clicking outside -->
    <div v-if="isOpen" @click="closeMenu" class="fixed inset-0 z-40 lg:hidden" aria-hidden="true"></div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { ref, onMounted, onBeforeUnmount } from "vue";

const route = useRoute();

const isOpen = ref(false);

function closeMenu() {
  isOpen.value = false;
}

function handleKey(e) {
  if (e.key === "Escape") closeMenu();
}

onMounted(() => window.addEventListener("keydown", handleKey));
onBeforeUnmount(() => window.removeEventListener("keydown", handleKey));

const links = [
  { name: "Home", route: "/home" },
  { name: "About Us", route: "/about" },
  { name: "Our work", route: "/work" },
  { name: "Contact us", route: "/contact" },
];
</script>

<style scoped>
#navbar {
  z-index: 1000;
}

/* transition for mobile dropdown */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 180ms ease;
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(-6px) scale(0.98);
}
.fade-slide-enter-to {
  opacity: 1;
  transform: translateY(0) scale(1);
}
.fade-slide-leave-from {
  opacity: 1;
  transform: translateY(0) scale(1);
}
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-6px) scale(0.98);
}
</style>
