<script setup>
import GenericWorkItem from './GenericWorkItem.vue';
import Logo from '../../assets/exhibition/bama/bama-logo.png';
import Image1 from '../../assets/exhibition/bama/interhouse-sport/image-1.jpg';
import Image2 from '../../assets/exhibition/bama/interhouse-sport/image-2.jpg';
import Image3 from '../../assets/exhibition/bama/interhouse-sport/image-3.jpg';
import Image4 from '../../assets/exhibition/bama/interhouse-sport/image-4.jpg';
import Image5 from '../../assets/exhibition/bama/interhouse-sport/image-5.jpg';
import Image6 from '../../assets/exhibition/bama/interhouse-sport/image-6.jpg';

const images = [Image1, Image2, Image3, Image4, Image5, Image6];
</script>

<template>
    <GenericWorkItem 
        :logo="Logo"
        name="Scholal Crest Inter House Sport"
        description="A lively school sports event activation that combined exciting competitions with strong brand presence, creating memorable moments for students and parents while building lasting brand recognition."
        :images="images"
        header-bg="#002984"
        main-bg="#FFDE42"
    />
</template>