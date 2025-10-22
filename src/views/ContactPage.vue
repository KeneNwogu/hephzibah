<template>
  <section>
    <div
      class="bg-[radial-gradient(circle_at_30%_50%,_#fff1f6_0%,_#fafbfc_60%,_#e8f0f9_100%)] pb-[80px] pt-[150px]"
    >
      <p
        class="font-sf-pro lg:grotesque text-center text-5xl font-bold lg:text-8xl"
      >
        Strategy Starts with a Conversation.
      </p>
      <div
        class="mt-12 grid grid-cols-2 gap-4 px-6 lg:flex lg:items-center lg:justify-between lg:px-[300px]"
      >
        <img
          class="h-45 aspect-2/1 col-span-2 rounded-lg lg:h-40"
          src="../assets/contact/header-1.jpg"
          alt=""
        />
        <img
          class="aspect-2/1 h-32 rounded-lg lg:h-40"
          src="../assets/contact/header-2.jpg"
          alt=""
        />
        <img
          class="aspect-2/1 h-32 rounded-lg lg:h-40"
          src="../assets/contact/header-3.jpg"
          alt=""
        />
      </div>
    </div>

    <div class="px-6">
      <p
        class="grotesque mt-[20px] mb-8 text-center text-4xl font-bold text-[#98A2B3] lg:text-7xl"
      >
        Get in Touch
      </p>
      <p class="py-8 text-xl leading-6 lg:hidden">
        Describe your project and leave us your contact info,
        <span class="text-[#98A2B3]"
          >we’ll get back to you within 24 hours.</span
        >
      </p>

      <div class="block lg:flex lg:items-stretch lg:gap-8">
        <div class="hidden lg:block lg:flex-1">
          <img
            class="rounded-lg"
            src="../assets/contact/form-image.jpg"
            alt=""
          />
        </div>
        <div class="lg:flex-1">
          <p class="hidden py-8 text-xl leading-6 lg:block">
            Describe your project and leave us your contact info,
            <span class="text-[#98A2B3]"
              >we’ll get back to you within 24 hours.</span
            >
          </p>

          <form id="contactForm">
            <!-- Full name -->
            <div class="mb-6">
              <label
                for="fullname"
                class="mb-2 block text-sm font-medium text-gray-700"
              >
                Full name
              </label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                placeholder="Full name"
                class="w-full rounded-md border border-gray-300 px-4 py-2 outline-none focus:border-transparent focus:ring-2 focus:ring-red-900"
              />
            </div>

            <!-- Email -->
            <div class="mb-6">
              <label
                for="email"
                class="mb-2 block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="you@company.com"
                class="w-full rounded-md border border-gray-300 px-4 py-2 outline-none focus:border-transparent focus:ring-2 focus:ring-red-900"
              />
            </div>

            <!-- Phone number -->
            <div class="mb-6">
              <label
                for="phone"
                class="mb-2 block text-sm font-medium text-gray-700"
              >
                Phone number
              </label>
              <div class="flex gap-2">
                <select
                  id="countryCode"
                  class="rounded-md border border-gray-300 bg-white px-3 py-2 outline-none focus:border-transparent focus:ring-2 focus:ring-red-900"
                >
                  <option value="NG">NG</option>
                  <option value="US">US</option>
                  <option value="UK">UK</option>
                  <option value="CA">CA</option>
                </select>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+234-000-0000-000"
                  class="flex-1 rounded-md border border-gray-300 px-4 py-2 outline-none focus:border-transparent focus:ring-2 focus:ring-red-900"
                />
              </div>
            </div>

            <!-- Message -->
            <div class="mb-6">
              <label
                for="message"
                class="mb-2 block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Leave us a message..."
                class="w-full resize-none rounded-md border border-gray-300 px-4 py-2 outline-none focus:border-transparent focus:ring-2 focus:ring-red-900"
              ></textarea>
            </div>

            <!-- Services -->
            <div class="mb-8 lg:mt-[40px]">
              <label class="mb-3 block text-sm font-medium text-gray-700">
                Services
              </label>
              <div class="grid grid-cols-2 gap-x-8 gap-y-3">
                <label class="flex items-center">
                  <input
                    type="checkbox"
                    name="services"
                    value="brand-activation"
                    class="h-4 w-4 rounded border-gray-300 text-red-900 focus:ring-red-900"
                  />
                  <span class="ml-2 text-sm text-gray-700"
                    >Brand Activation</span
                  >
                </label>
                <label class="flex items-center">
                  <input
                    type="checkbox"
                    name="services"
                    value="event-management"
                    class="h-4 w-4 rounded border-gray-300 text-red-900 focus:ring-red-900"
                  />
                  <span class="ml-2 text-sm text-gray-700"
                    >Event Management</span
                  >
                </label>
                <label class="flex items-center">
                  <input
                    type="checkbox"
                    name="services"
                    value="marketing"
                    class="h-4 w-4 rounded border-gray-300 text-red-900 focus:ring-red-900"
                  />
                  <span class="ml-2 text-sm text-gray-700">Marketing</span>
                </label>
                <label class="flex items-center">
                  <input
                    type="checkbox"
                    name="services"
                    value="public-relations"
                    class="h-4 w-4 rounded border-gray-300 text-red-900 focus:ring-red-900"
                  />
                  <span class="ml-2 text-sm text-gray-700"
                    >Public Relations</span
                  >
                </label>
                <label class="flex items-center">
                  <input
                    type="checkbox"
                    name="services"
                    value="digital-campaign-planning"
                    class="h-4 w-4 rounded border-gray-300 text-red-900 focus:ring-red-900"
                  />
                  <span class="ml-2 text-sm text-gray-700"
                    >Digital Campaign Planning</span
                  >
                </label>
                <label class="flex items-center">
                  <input
                    type="checkbox"
                    name="services"
                    value="other"
                    class="h-4 w-4 rounded border-gray-300 text-red-900 focus:ring-red-900"
                  />
                  <span class="ml-2 text-sm text-gray-700">Other</span>
                </label>
              </div>
            </div>

            <!-- Submit button -->
            <button
              type="submit"
              class="w-full rounded-full bg-red-900 px-6 py-3 font-medium text-white transition-colors duration-200 hover:bg-red-800 lg:mt-[40px]"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </div>

    <div class="px-6">
      <p
        class="grotesque mt-[80px] text-center text-4xl font-bold text-[#98A2B3] lg:text-left"
      >
        We’d love to hear from you
      </p>
      <p class="text-center lg:text-left">Our friendly team is always here to chat.</p>

      <div class="mt-[12px] lg:flex lg:justify-between gap-7">
        <div class="mb-6 rounded-2xl bg-[#F5F0F1] p-8 lg:flex-1">
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
          <h3 class="mb-3 text-xl font-bold text-gray-900">Chat to us</h3>
          <p class="text-gray-600">Speak to our friendly team</p>
          <a class="text-[#6C0921]" href="mailto:info@hephzibahexpbiz.com"
            >info@hephzibahexpbiz.com</a
          >
        </div>

        <div class="mb-6 rounded-2xl bg-[#F5F0F1] p-8 lg:flex-1">
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
          <h3 class="mb-3 text-xl font-bold text-gray-900">Visit us</h3>
          <p class="text-gray-600">Speak to our friendly team</p>
          <p class="text-[#6C0921]">
            20b Ogundana Street, Off Allen Avenue Ikeja Lagos
          </p>
        </div>

        <div class="mb-6 rounded-2xl bg-[#F5F0F1] p-8 lg:flex-1">
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
          <h3 class="mb-3 text-xl font-bold text-gray-900">Call us</h3>
          <p class="text-gray-600">Mon-Fri from 8am to 5pm.</p>
          <p class="text-[#6C0921]">+234 817 721 8783</p>
        </div>
      </div>
    </div>

    <section>
      <div class="mx-auto mt-8 w-[95%] max-w-[70%] rounded-3xl py-3">
        <div class="mx-auto mt-5 px-3">
          <p
            class="grotesque mb-4 text-center text-3xl font-bold text-black lg:text-6xl"
          >
            Question? Look here.
          </p>
          <div class="lg:p-10">
            <FAQSection />
          </div>
        </div>
      </div>
    </section>

    <div class="my-8">
      <ScrollingBanner bg-color="#6C0921" />
    </div>
  </section>
</template>

<script setup>
import FAQSection from "../components/FAQSection.vue";
import ScrollingBanner from "../components/ScrollingBanner.vue";
</script>
