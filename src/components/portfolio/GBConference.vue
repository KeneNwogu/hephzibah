<script setup>
import GenericWorkItem from './GenericWorkItem.vue';
import GinoLogo from '../../assets/exhibition/gino/gino-logo.png';
import Image1 from '../../assets/exhibition/gb/conference/image-1.jpg';
import Image2 from '../../assets/exhibition/gb/conference/image-2.jpg';
import Image3 from '../../assets/exhibition/gb/conference/image-3.jpg';
import Image4 from '../../assets/exhibition/gb/conference/image-4.jpg';
import Image5 from '../../assets/exhibition/gb/conference/image-5.jpg';

const images = [Image1, Image2, Image3, Image4, Image5];
</script>

<template>
    <GenericWorkItem 
        :logo="GinoLogo"
        name="GB Food Sales Conference 2024"
        description="A high-energy corporate event designed to inspire and align the GB Foods sales team with branded stage design, interactive sessions, and presentations that strengthened team spirit and sales focus."
        :images="images"
        header-bg="#FFFFFF"
        main-bg="#F16A21"
        header-text-color="#000000"
    />
</template>