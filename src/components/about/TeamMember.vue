<template>
    <div class="relative max-h-[400px] mx-auto">
        <img :src="image" alt="team-member" class="w-[90%] mx-auto max-h-[400px] object-cover lg:grayscale">
        <div class="p-2 absolute bottom-2 w-[85%] left-1/2 -translate-x-1/2 bg-[#FFFFFFB2] text-center rounded-lg">
            <p class="font-bold">{{ name }}</p>
            <p class="text-[#475467]">{{ title }}</p>
        </div>
    </div>
</template>

<script setup>
defineProps({
    image: {
        type: String
    },
    title: {
        type: String
    },
    name: {
        type: String
    }
})
</script>