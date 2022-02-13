<template>
  <div class="w-full h-[500px] bg-slate-100">
    <div class="flex items-center justify-center w-full h-full">
      <!-- <SmartPicture :src="picturesSrcs[0]" /> -->

      <div id="glide" class="glide h-full relative">
        <div class="glide__track h-full" data-glide-el="track">
          <ul class="glide__slides h-full">
            <li
              class="glide__slide h-full flex items-center justify-center"
              v-for="(src, index) in pics"
              key="index"
            >
              <SmartPicture :src="src" />
            </li>
          </ul>
        </div>

        <div
          data-glide-el="controls"
          class="glide__arrows absolute top-1/2 left-0 w-full flex items-center justify-between px-5 md:px-8 lg:px-20"
        >
          <button
            class="glide__arrow glide__arrow--left bg-white/80 backdrop-blur-sm p-1 rounded-full"
            data-glide-dir="<"
          >
            <ChevronLeft class="w-6 h-6 sm:w-4 sm:h-4" />
          </button>
          <button
            class="glide__arrow glide__arrow--right bg-white/80 backdrop-blur-sm p-1 rounded-full"
            data-glide-dir=">"
          >
            <ChevronRight class="w-6 h-6 sm:w-4 sm:h-4" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Glide from "@glidejs/glide";
import { onMounted } from "@vue/composition-api";
import SmartPicture from "~/components/img/SmartPicture.vue";
import ChevronLeft from "../icons/ChevronLeft.vue";
import ChevronRight from "../icons/ChevronRight.vue";
// state

const pics = [
  "/img/1920x1280/sara-dubler-Koei_7yYtIo-unsplash.jpg",
  "/img/1920x1280/alexander-kaunas-hEAGekaiJ8g-unsplash.jpg",
  "/img/1920x1280/alexander-kaunas-TAgGZWz6Qg8-unsplash.jpg",
  "/img/1920x1280/cory-bjork-D1yT791Nf9A-unsplash.jpg",
  "/img/1920x1280/visualsofdana-T5pL6ciEn-I-unsplash.jpg",
];

var glide;

function initGlide() {
  if (process.client) {
    glide = new Glide("#glide", {
      type: "slider",
      startAt: 0,
    //   autoplay: 4000,
      hoverpause:true,
      keyboard:true,
    }).mount();
  }
}

function disposeGlide(){
    // TODO complete
    // call on unmounted
}

onMounted(initGlide);
</script>

<style>
@import url("node_modules/@glidejs/glide/dist/css/glide.core.min.css");
</style>
