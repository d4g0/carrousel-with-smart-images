<template>
  <div class="w-full min-h-screen bg-slate-100">
    <div class="w-full">

      <Carrousel />
    </div>
  </div>
</template>

<script setup>
import SmartImage from "~/components/img/SmartImage.vue";
import SmartPicture from "~/components/img/SmartPicture.vue";
import SmartImageLazy from "~/components/img/SmartImageLazy.vue";
import SmartPictureLazy from "~/components/img/SmartPictureLazy.vue";
import Carrousel from "~/components/carrousel/Carrousel.vue";

function onImageLoad() {}
</script>
