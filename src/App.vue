<template>
  <div class="flex">
    <div
      class="
        w-12
        md:w-20
        flex-none
        min-h-screen
        h-screen
        overflow-y-auto
        bg-gray-800
        scrollbar
        scrollbar-thumb-gray-400
        scrollbar-track-gray-100
        scrollbar-thin
        scrollbar-thumb-rounded-full
        scrollbar-track-rounded-full
      "
    >
      <navigation />
    </div>
    <div class="flex-1 flex flex-col min-h-screen h-screen">
      <div class=""><top-nav /></div>
      <div class="flex-1 flex overflow-y-hidden">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from "./components/common/Navigation.vue";
import TopNav from "./components/common/TopNav.vue";
export default {
  setup() {
    return {};
  },
  components: {
    Navigation,
    TopNav,
  },
  data() {
    return {
      messages: [
        {
          "27-03-2020": {},
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
