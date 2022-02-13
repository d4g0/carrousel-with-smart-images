<template>
  <div class="w-full min-h-screen bg-slate-300 px-5 pt-[300px]">
    <div class="w-[1000px] h-[250px] relative flex">
      <!-- <SmartPictureLazy
        @image-load="onImageLoad"
        alt="smarty image"
        src="/img/hotel/visualsofdana-T5pL6ciEn-I-unsplash.jpg"
        imgClasses=""
      /> -->
    </div>
  </div>
</template>

<script setup>
import SmartImage from "~/components/img/SmartImage.vue";
import SmartPicture from "~/components/img/SmartPicture.vue";
import SmartImageLazy from "~/components/img/SmartImageLazy.vue";
import SmartPictureLazy from "~/components/img/SmartPictureLazy.vue";

function onImageLoad() {
}
</script>
