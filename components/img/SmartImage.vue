<template>
  <div class="w-full h-full relative overflow-hidden">
    <!-- High quality image -->
    <nuxt-img
      :alt="alt"
      :src="src"
      :class="
        imgClasses.concat(' absolute inset-0 h-full w-full object-cover ')
      "
      @load.capture="onHQILoad()"
      @error.capture="onHQILoadError()"
      v-if="HQINeeded"
    />

    <!-- low quality image -->
    <nuxt-img
      :alt="alt"
      :src="src"
      quality="10"
      :class="
        imgClasses.concat(
          '  absolute inset-0 h-full w-full object-cover  blur-md  '
        )
      "
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
  src: String,
  // img classes
  imgClasses: String,
});

var LQINeeded = ref(true);
var HQINeeded = ref(false);

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
}

function onHQILoad() {
  handleChange();
}

function onHQILoadError() {
}

// Change
function handleChange() {
  LQINeeded.value = false;
}
</script>
