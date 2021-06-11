<template>
  <div
    class="flex flex-col items-center justify-between space-y-8 h-full pt-10"
  >
    <button>
      <ChipIcon class="h-10 w-10 text-gray-100" />
    </button>
    <div class="flex flex-col space-y-5">
      <div class="group hover:bg-lightBlue-600 p-3 rounded-lg cursor-pointer">
        <HomeIcon class="h-7 w-7 text-gray-500 group-hover:text-gray-300" />
      </div>
      <div class="group hover:bg-lightBlue-600 p-3 rounded-lg cursor-pointer">
        <ChatAltIcon class="h-7 w-7 text-gray-500 group-hover:text-gray-300" />
      </div>
      <div class="group hover:bg-lightBlue-600 p-3 rounded-lg cursor-pointer">
        <UsersIcon class="h-7 w-7 text-gray-500 group-hover:text-gray-300" />
      </div>
      <div class="group hover:bg-lightBlue-600 p-3 rounded-lg cursor-pointer">
        <ShieldCheckIcon
          class="h-7 w-7 text-gray-500 group-hover:text-gray-300"
        />
      </div>
      <div class="group hover:bg-lightBlue-600 p-3 rounded-lg cursor-pointer">
        <ChartPieIcon class="h-7 w-7 text-gray-500 group-hover:text-gray-300" />
      </div>
      <div class="bg-gray-700 h-0.5 w-full shadow-lg"></div>
      <div class="group hover:bg-lightBlue-600 p-3 rounded-lg cursor-pointer">
        <ArchiveIcon class="h-7 w-7 text-gray-500 group-hover:text-gray-300" />
      </div>
      <div class="group hover:bg-lightBlue-600 p-3 rounded-lg cursor-pointer">
        <CogIcon class="h-7 w-7 text-gray-500 group-hover:text-gray-300" />
      </div>
    </div>
    <div class="bg-gray-900 w-full flex items-center justify-center py-6">
      <button class="rounded-full bg-gray-600 p-1.5">
        <ChevronRightIcon class="h-5 w-5 text-gray-100" />
      </button>
    </div>
  </div>
</template>

<script>
import {
  ChipIcon,
  ChevronRightIcon,
  HomeIcon,
  ChatAltIcon,
  UsersIcon,
  ShieldCheckIcon,
  ChartPieIcon,
  ArchiveIcon,
  CogIcon,
} from "@heroicons/vue/outline";
export default {
  setup() {
    return {};
  },
  components: {
    ChipIcon,
    ChevronRightIcon,
    HomeIcon,
    ChatAltIcon,
    UsersIcon,
    ShieldCheckIcon,
    ChartPieIcon,
    ArchiveIcon,
    CogIcon,
  },
};
</script>

<style lang="scss" scoped></style>
