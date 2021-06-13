<template>
  <div class="">
    <div class="px-5 py-5 border-b border-gray-300">
      <div
        class="
          flex flex-row
          items-center
          xs:space-x-1
          space-x-0.5cursor-pointer
        "
      >
        <h1
          class="
            font-semibold
            md:font-extrabold
            tracking-wider
            text-gray-600
            md:text-base
            sm:text-xs
            xs:text-xs
            text-xxs
          "
        >
          All Messages
        </h1>
        <h1
          class="
            bg-gray-200
            px-1
            sm:px-2
            md:px-3
            py-0.5
            rounded-2xl
            font-extrabold
            text-gray-500 text-xs text-xxs
            md:text-sm
          "
        >
          12
        </h1>

        <ChevronDownIcon
          class="hidden sm:block h-3 md:h-5 w-3 md:w-5 text-gray-700"
        />
      </div>
    </div>
  </div>
  <div
    class="
      overflow-y-auto
      scrollbar
      scrollbar-thumb-gray-400
      scrollbar-track-gray-100
      scrollbar-thin
      scrollbar-thumb-rounded-full
      scrollbar-track-rounded-full
    "
  >
    <div v-for="(friend, index) in friends" :key="index">
      <friends-list-item :friend="friend" />
    </div>
  </div>
</template>

<script>
import { ChevronDownIcon } from "@heroicons/vue/outline";
import FriendsListItem from "./FriendsListItem.vue";
export default {
  components: { FriendsListItem, ChevronDownIcon },
  setup() {
    return {};
  },

  data() {
    return {
      friends: [
        {
          image: `assets/images/profile/1.jpg`,
          name: `Bessie Cooper`,
          lastMessage: `Hello from dynamic content`,
          lastMessageTime: `Just now`,
          unseenMessageCount: `10`,
        },
        {
          image: `assets/images/profile/1.jpg`,
          name: `Bessie Cooper`,
          lastMessage: `Hello from dynamic content`,
          lastMessageTime: `Just now`,
          unseenMessageCount: `10`,
        },
        {
          image: `assets/images/profile/1.jpg`,
          name: `Bessie Cooper`,
          lastMessage: `Hello from dynamic content`,
          lastMessageTime: `Just now`,
          unseenMessageCount: `10`,
        },
        {
          image: `assets/images/profile/1.jpg`,
          name: `Bessie Cooper`,
          lastMessage: `Hello from dynamic content`,
          lastMessageTime: `Just now`,
          unseenMessageCount: `10`,
        },
        {
          image: `assets/images/profile/1.jpg`,
          name: `Bessie Cooper`,
          lastMessage: `Hello from dynamic content`,
          lastMessageTime: `Just now`,
          unseenMessageCount: `10`,
        },
        {
          image: `assets/images/profile/1.jpg`,
          name: `Bessie Cooper`,
          lastMessage: `Hello from dynamic content`,
          lastMessageTime: `Just now`,
          unseenMessageCount: `10`,
        },
        {
          image: `assets/images/profile/1.jpg`,
          name: `Bessie Cooper`,
          lastMessage: `Hello from dynamic content`,
          lastMessageTime: `Just now`,
          unseenMessageCount: `10`,
        },
        {
          image: `assets/images/profile/1.jpg`,
          name: `Bessie Cooper`,
          lastMessage: `Hello from dynamic content`,
          lastMessageTime: `Just now`,
          unseenMessageCount: `10`,
        },
        {
          image: `assets/images/profile/1.jpg`,
          name: `Bessie Cooper`,
          lastMessage: `Hello from dynamic content`,
          lastMessageTime: `Just now`,
          unseenMessageCount: `10`,
        },
        {
          image: `assets/images/profile/1.jpg`,
          name: `Bessie Cooper`,
          lastMessage: `Hello from dynamic content`,
          lastMessageTime: `Just now`,
          unseenMessageCount: `10`,
        },
        {
          image: `assets/images/profile/1.jpg`,
          name: `Bessie Cooper`,
          lastMessage: `Hello from dynamic content`,
          lastMessageTime: `Just now`,
          unseenMessageCount: `10`,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
