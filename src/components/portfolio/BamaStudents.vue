<script setup>
import GenericWorkItem from './GenericWorkItem.vue';
import Logo from '../../assets/exhibition/bama/bama-logo.png';
import Image1 from '../../assets/exhibition/bama/bama-1.png';
import Image2 from '../../assets/exhibition/bama/bama-2.png';
import Image3 from '../../assets/exhibition/bama/bama-3.png';
import Image4 from '../../assets/exhibition/bama/bama-4.png';
import Image5 from '../../assets/exhibition/bama/bama-5.png';
import Image6 from '../../assets/exhibition/bama/bama-6.png';

const images = [Image1, Image2, Image3, Image4, Image6, Image5];
</script>

<template>
    <GenericWorkItem 
        :logo="Logo"
        name="Bama Mayonnaise brand sampling for 1,400 students"
        description="Hephzibah Experiential executed a two-day sampling activation for Bama Mayonnaise, delivering branded setup, breakfast distribution, and data capture for 1,400 students — ensuring full venue visibility and seamless brand interaction."
        :images="images"
        header-bg="#002984"
        main-bg="#FFDE42"
    />
</template>