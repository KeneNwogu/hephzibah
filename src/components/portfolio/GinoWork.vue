<script setup>
import GenericWorkItem from './GenericWorkItem.vue';
import GinoLogo from '../../assets/exhibition/gino/gino-logo-2.png';
import Image1 from '../../assets/exhibition/gino/launch-images/image-1.jpg';
import Image2 from '../../assets/exhibition/gino/launch-images/image-2.jpg';
import Image3 from '../../assets/exhibition/gino/launch-images/image-3.jpg';
import Image4 from '../../assets/exhibition/gino/launch-images/image-4.jpg';
import Image5 from '../../assets/exhibition/gino/launch-images/image-5.jpg';
import Image6 from '../../assets/exhibition/gino/launch-images/image-6.jpg';

const images = [Image1, Image2, Image3, Image4, Image5, Image6];
</script>

<template>
    <GenericWorkItem 
        :logo="GinoLogo"
        name="Gino Pepper Chicken Launch"
        description="We brought Gino Pepper Chicken to life with live cooking demonstrations, tasting sessions, and vibrant audience engagement which boosted product awareness and encouraged instant consumer trials."
        :images="images"
        header-bg="#FE2323"
        main-bg="#FFDE42"
    />
</template>