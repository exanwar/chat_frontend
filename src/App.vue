<template>
  <router-view />
</template>

<script>
// import { MoonIcon, SunIcon } from "@heroicons/vue/outline";
export default {
  components: {
    // MoonIcon,
    // SunIcon,
  },
  data() {
    return {
      lightMode: true,
    };
  },
  methods: {
    switchDarkAndLight() {
      if (!this.lightMode) {
        document.body.classList.remove("dark");
        this.lightMode = true;
      } else {
        document.body.classList.add("dark");
        this.lightMode = false;
      }
    },
  },
};
</script>
<style lang="scss"></style>
