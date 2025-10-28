<script setup>
import GenericWorkItem from './GenericWorkItem.vue';
import GinoLogo from '../../assets/exhibition/gino/gino-logo.png';
import Image1 from '../../assets/exhibition/gino/gino-1.png';
import Image2 from '../../assets/exhibition/gino/gino-2.png';
import Image3 from '../../assets/exhibition/gino/gino-3.png';
import Image4 from '../../assets/exhibition/gino/gino-4.png';
import Image5 from '../../assets/exhibition/gino/gino-5.png';
import Image6 from '../../assets/exhibition/gino/gino-6.png';

const images = [Image1, Image2, Image3, Image4, Image5, Image6];
</script>

<template>
    <GenericWorkItem 
        :logo="GinoLogo"
        name="Argungu Fishing Festival, Birnin Kebbi"
        description="Hephzibah partnered with GB Foods to activate the Argungu Fishing Festival, delivering cultural engagement and strong brand visibility through on-ground experiences."
        :images="images"
        header-bg="#FFFFFF"
        main-bg="#F16A21"
        header-text-color="#000000"
    />
</template>