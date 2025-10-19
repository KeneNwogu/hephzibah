<template>
  <div
    id="navbar"
    class="fixed left-1/2 top-3 mx-auto my-3 flex h-[60px] w-[80%] -translate-x-1/2 items-center justify-center rounded-full bg-[#17222E]"
  >
    <!-- mobile hamburger menu -->
    <div class="flex w-[90%] items-center justify-between text-white lg:hidden">
      <div><img src="../assets/heph-logo.png" alt="heph-logo" /></div>
      <div>
        <button
          class="flex h-10 w-10 items-center justify-center rounded-full border-white bg-gray-800 text-white"
        >
          <svg
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
        </button>
      </div>
    </div>

    <!-- laptop full navbar -->
    <div class="hidden w-[90%] items-center justify-between text-white lg:flex">
      <div><img src="../assets/heph-logo.png" alt="heph-logo" /></div>
      <div class="flex w-[40%] items-center justify-between">
        <a v-for="link in links" :key="link.route" class="text-[#ADADAD]">{{ link.name }}</a>
      </div>

      <div>
        <button class="rounded-full bg-white p-3 text-[#6C0921]">See Our Works</button>
      </div>
    </div>
  </div>
</template>

<script setup>
const links = [
  {name: "Home", route: "/home"},
  {name: "About Us", route: "/about"},
  {name: "Our work", route: "/work"},
  {name: "Contact us", route: "/contact"}
]
</script>

<style scoped>
#navbar{
  z-index: 1000;
}
</style>
