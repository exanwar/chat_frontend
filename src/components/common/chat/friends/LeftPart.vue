<template>
  <div class="px-1.5 py-2 md:px-5 md:py-3 border-b w-full border-gray-300">
    <div class="bg-gray-200 rounded-lg md:rounded-3xl px-1 md:px-6 md:py-2">
      <div class="flex items-center space-x-5">
        <SearchIcon class="h-5 w-5 text-gray-600" />
        <input
          type="text"
          placeholder="Search"
          class="
            py-1.5
            w-full
            bg-gray-200
            text-sm
            md:text-lg
            outline-none
            text-gray-600
            font-nunito font-medium
            tracking-wider
          "
        />
      </div>
    </div>
  </div>

  <friends-list />
</template>

<script>
import { SearchIcon } from "@heroicons/vue/outline";
import FriendsList from "./FriendsList.vue";
export default {
  setup() {
    return {};
  },
  components: {
    SearchIcon,
    FriendsList,
  },
};
</script>

<style lang="scss" scoped></style>
