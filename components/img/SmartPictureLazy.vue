<template>
  <div class="w-full h-full relative overflow-hidden" ref="target">
    <!-- High quality image -->
    <nuxt-picture
      :alt="alt"
      :src="src"
      :imgAttrs="{
        class: imgClasses.concat(
          ' absolute inset-0 h-full w-full object-cover '
        ),
      }"
      @load.capture="onHQILoad()"
      @error.capture="onHQILoadError()"
      v-if="HQINeeded"
    />

    <!-- low quality image -->
    <nuxt-picture
      :alt="alt"
      :src="computedLQISrc"
      quality="10"
      :imgAttrs="{
        class: imgClasses.concat(
          '  absolute inset-0 h-full w-full object-cover  blur-md  '
        ),
        loading: 'lazy',
      }"
      @load.capture="onLQILoad()"
      @error.capture="onLQILoadError()"
      v-show="LQINeeded"
    />
  </div>
</template>

<script setup>
import { ref, watch, computed } from "@nuxtjs/composition-api";
import { useElementVisibility } from "@vueuse/core";

// ---------------
// Props
// ---------------
const props = defineProps({
  // image alternative text
  alt: String,
  // source
  src: String,
  // img classes
  imgClasses: String,
});

// -----------------------------
// Events (parent comunication)
// -----------------------------
const emit = defineEmits(['image-load', 'image-error']);

// ---------------
// State
// ---------------
var LQINeeded = ref(false);
var HQINeeded = ref(false);
var computedLQISrc = computed(() => (LQINeeded ? props.src : ""));

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

// High Quality
function loadHQI() {
  HQINeeded.value = true;
}

function onHQILoad() {
  triggerChange();
  emit('image-load');
}

function onHQILoadError() {
  emit("image-error");
}

// Change
function triggerChange() {
  LQINeeded.value = false;
}

// Lazy Handling
var target = ref(null);
const targetIsVisible = useElementVisibility(target);

// handle first visible time
const unWatchVisibility = watch(targetIsVisible, (newV, oldV) => {
  // clean this watcher
  unWatchVisibility();

  // trigger load
  if (newV) {
    // check high quality is not render
    // and low quality hasen't been reder either
    if (!HQINeeded.value && !LQINeeded.value) {
      LQINeeded.value = true;
    }
  }
});
</script>
