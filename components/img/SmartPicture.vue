<template>
  <div class="w-full h-full relative overflow-hidden">
    <!-- High quality image -->
    <div v-if="HQINeeded">
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
        v-show="showHQImage"
      />
    </div>

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
import { ref, onMounted, onUnmounted, computed } from "@nuxtjs/composition-api";
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

var LQINeeded = ref(false);
var HQINeeded = ref(false);
var showHQImage = ref(false);




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

function onHQILoadError() {}

// Change
function handleChange() {
  LQINeeded.value = false;
  showHQImage.value = true;
}

// ---------------
// Life Cicle
// ---------------

onMounted(() => {
  if (!process.client) return;
  console.log(
    // `(smart-image) [mounted] | ${props.src.split("/")[3].split(".")[0]}`
  );
  LQINeeded.value = true;
});

onUnmounted(() => {
  if (!process.client) return;
  console.log(
    // `(smart-image) [un-mounted] | ${props.src.split("/")[3].split(".")[0]}`
  );
});
</script>
