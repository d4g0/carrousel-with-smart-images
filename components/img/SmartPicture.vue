<template>
  <div class="w-full h-full relative overflow-hidden">
    <!-- High quality image -->
    <nuxt-picture
      :alt="alt"
      :src="src"
      :imgAttrs="{
        class: imgClasses
          .concat(' absolute inset-0 h-full w-full object-cover ')
          .concat(),
      }"
      @load.capture="onHQILoad()"
      @error.capture="onHQILoadError()"
      v-show="!LQINeeded"
    />

    <!-- low quality image -->
    <nuxt-picture
      :alt="alt"
      :src="src"
      quality="10"
      :imgAttrs="{
        class: imgClasses.concat(
          '  absolute inset-0 h-full w-full object-cover  blur-md  '
        ),
      }"
      @load.capture="onLQILoad()"
      @error.capture="onLQILoadError()"
      v-show="LQINeeded"
    />
  </div>
</template>

<script setup>
import { ref } from "@nuxtjs/composition-api";
const props = defineProps({
  // image alternative text
  alt: String,
  // source
  src: {
    type: String,
    default: () => "",
  },
  // img classes
  imgClasses: {
    type: String,
    default: () => "",
  },
});

var LQINeeded = ref(true);
var HQINeeded = ref(false);
var HQILoaded = ref(false);


// ---------------
// Handlings
// ---------------

// Low Quality
function onLQILoad() {
  loadHQI();
}

function onLQILoadError() {
  loadHQI();
}

// Hig Quality
function loadHQI() {
  HQINeeded.value = true;
  HQILoaded.value = true;
}

function onHQILoad() {
  handleChange();
}

function onHQILoadError() {}

// Change
function handleChange() {
  LQINeeded.value = false;
}
</script>
