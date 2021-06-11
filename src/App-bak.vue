<template>
  <div class="flex flex-row flex-wrap">
    <!-- 
    ? SideNav 
    TODO: Make the sidenav 
    -->
    <div class="h-screen w-1/24 bg-gray-800">
      <navigation></navigation>
    </div>
    <div class="flex flex-col h-screen w-23/24">
      <div class="w-full">
        <top-nav></top-nav>
      </div>
      <div class="flex flex-row h-full">
        <!-- 
    ! Recent Messages Section 
    TODO: Make the Recent Messages Section 
    -->
        <div class="w-3/12">
          <recent-messages></recent-messages>
        </div>
        <!-- 
    ! Messages Section 
    TODO: Make the Messages Section 
    -->
        <div class="w-7/12">
          <message></message>
        </div>
        <!-- 
    ! Profile Section 
    TODO: Make the Profile Section 
    -->
        <div class="w-2/12">
          <friend-profile></friend-profile>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from "./components/common/Navigation.vue";
import RecentMessages from "./components/common/RecentMessages.vue";
import TopNav from "./components/common/TopNav.vue";
import FriendProfile from "./components/FriendProfile.vue";
import Message from "./components/Message.vue";
// import { MoonIcon, SunIcon } from "@heroicons/vue/outline";
export default {
  components: {
    Navigation,
    RecentMessages,
    Message,
    FriendProfile,
    TopNav,
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
