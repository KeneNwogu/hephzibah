<template>
  <footer
    class="mx-auto mt-5 max-w-sm rounded-3xl bg-black p-6 text-white lg:max-w-[80%]"
  >
    <div class="space-y-3 lg:flex lg:items-center lg:justify-between">
      <div class="lg:flex-2">
        <div class="mb-5 space-y-4 lg:w-[60%]">
          <h2 class="text-2xl font-light tracking-wide">Hephzibah</h2>
          <p class="text-sm leading-relaxed text-gray-400">
            Hephzibah Experiential Ltd is a full-service brand consultancy
            specializing in 360° marketing.
          </p>
        </div>

        <div class="flex gap-4">
          <a
            href="#"
            class="flex h-10 w-10 items-center justify-center rounded border border-white transition-colors hover:bg-white hover:text-black"
            aria-label="LinkedIn"
          >
            <Linkedin size="20" />
          </a>
          <a
            href="#"
            class="flex h-10 w-10 items-center justify-center rounded border border-white transition-colors hover:bg-white hover:text-black"
            aria-label="X (Twitter)"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
              />
            </svg>
          </a>
          <a
            href="#"
            class="flex h-10 w-10 items-center justify-center rounded border border-white transition-colors hover:bg-white hover:text-black"
            aria-label="Facebook"
          >
            <Facebook size="20" />
          </a>
          <a
            href="#"
            class="flex h-10 w-10 items-center justify-center rounded border border-white transition-colors hover:bg-white hover:text-black"
            aria-label="Instagram"
          >
            <Instagram size="20" />
          </a>
        </div>
      </div>

      <div class="lg:flex-1">
        <div class="space-y-3">
          <h3 class="mb-4 text-sm font-medium">Quick Links</h3>
          <nav class="space-y-2">
            <a
              href="#"
              class="block text-sm text-gray-400 transition-colors hover:text-white"
              >Home</a
            >
            <a
              href="#"
              class="block text-sm text-gray-400 transition-colors hover:text-white"
              >Our work</a
            >
            <a
              href="#"
              class="block text-sm text-gray-400 transition-colors hover:text-white"
              >About us</a
            >
            <a
              href="#"
              class="block text-sm text-gray-400 transition-colors hover:text-white"
              >Contact us</a
            >
            <a
              href="#"
              class="block text-sm text-gray-400 transition-colors hover:text-white"
              >FAQs</a
            >
          </nav>
        </div>
      </div>

      <div class="lg:flex-1">
        <div class="space-y-3">
          <h3 class="mb-4 text-sm font-medium">Contact</h3>
          <div class="space-y-2 text-sm text-gray-400">
            <p>+234 817 721 9783</p>
            <a
              href="mailto:info@hephzibahltd82.com"
              class="block transition-colors hover:text-white"
            >
              info@hephzibahltd82.com
            </a>
            <p class="leading-relaxed">
              20th Ogunnaya Street, Off<br />
              Allen Avenue Ikeja Lagos
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-4 border-t border-gray-800 pt-6">
      <p class="text-center text-xs text-gray-500">
        © {{ year }} Hephzibah Experiential Ltd. All rights reserved<br />
        VAT: 1540912
      </p>
    </div>
  </footer>
</template>

<script setup>
import { Linkedin, Facebook, Instagram } from "lucide-vue-next";

const year = new Date().getFullYear();
</script>
