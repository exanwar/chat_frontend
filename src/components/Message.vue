<template>
  <div class="h-full w-full border-r border-gray-300">
    <!-- Heading -->
    <div
      class="
        flex
        justify-between
        items-center
        px-8
        py-4
        border-b border-gray-300
      "
    >
      <h1 class="text-2xl font-bold text-gray-600">Bessie Cooper</h1>
      <DotsVerticalIcon class="h-7 w-7 text-gray-600" />
    </div>
    <!-- Messages -->
    <div
      class="
        flex flex-col
        px-8
        space-y-1
        overflow-y-scroll
        scrollbar-thin
        scrollbar-thumb-rounded
        scrollbar-track-rounded
        scrollbar-track-gray-200
        scrollbar-thumb-gray-400
      "
      ref="chatContainer"
    >
      <!-- Date -->
      <div class="flex flex-row items-center py-5">
        <div class="flex flex-1 bg-gray-300 w-full h-0.5"></div>
        <div
          class="px-5 py-2.5 border border-gray-300 rounded-full bg-gray-300"
        >
          <h1 class="text-sm text-blue-500 font-bold tracking-wider">
            June 25
          </h1>
        </div>
        <div class="flex flex-1 bg-gray-300 w-full h-0.5"></div>
      </div>

      <!-- Send Message -->
      <div class="flex flex-row justify-end items-center">
        <div
          class="
            bg-gradient-to-r
            from-purple-800
            via-violet-900
            to-purple-800
            text-gray-100
            px-10
            py-3
            rounded-full rounded-br-xl
            w-2/4
          "
        >
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </div>
      </div>
      <div class="flex flex-row justify-end items-center">
        <div
          class="
            bg-gradient-to-r
            from-purple-800
            via-violet-900
            to-purple-800
            text-gray-100
            px-10
            py-3
            rounded-2xl
            w-2/4
          "
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil,
          pariatur.
        </div>
      </div>
      <div class="flex flex-row justify-end items-center">
        <div
          class="
            bg-gradient-to-r
            from-purple-800
            via-violet-900
            to-purple-800
            text-gray-100
            px-10
            py-3
            rounded-full rounded-tr-xl
            w-2/4
          "
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla ex
          modi tenetur nihil placeat praesentium fuga at nostrum quasi cum!
        </div>
      </div>

      <!-- Recieve Message -->
      <div class="flex flex-row justify-start space-x-2">
        <div class="flex items-end">
          <img
            src="@/assets/images/profile/17.jpg"
            alt="user-image"
            class="h-10 w-10 rounded-full"
          />
        </div>
        <div
          class="
            bg-gradient-to-r
            from-fuchsia-600
            to-pink-600
            text-gray-100
            px-10
            py-3
            rounded-full rounded-bl-xl
            w-2/4
          "
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ipsum
          labore nobis.
        </div>
      </div>
      <!-- Date -->
      <div class="flex flex-row items-center py-5">
        <div class="flex flex-1 bg-gray-300 w-full h-0.5"></div>
        <div
          class="px-5 py-2.5 border border-gray-300 rounded-full bg-gray-300"
        >
          <h1 class="text-sm text-blue-500 font-bold tracking-wider">
            July 27
          </h1>
        </div>
        <div class="flex flex-1 bg-gray-300 w-full h-0.5"></div>
      </div>

      <!-- Send Message -->
      <div class="flex flex-row justify-end items-center">
        <div
          class="
            bg-gradient-to-r
            from-purple-800
            via-violet-900
            to-purple-800
            text-gray-100
            px-10
            py-3
            rounded-full rounded-br-xl
            w-2/4
          "
        >
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </div>
      </div>
      <div class="flex flex-row justify-end items-center">
        <div
          class="
            bg-gradient-to-r
            from-purple-800
            via-violet-900
            to-purple-800
            text-gray-100
            px-10
            py-3
            rounded-2xl
            w-2/4
          "
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil,
          pariatur.
        </div>
      </div>
      <div class="flex flex-row justify-end items-center">
        <div
          class="
            bg-gradient-to-r
            from-purple-800
            via-violet-900
            to-purple-800
            text-gray-100
            px-10
            py-3
            rounded-full rounded-tr-xl
            w-2/4
          "
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla ex
          modi tenetur nihil placeat praesentium fuga at nostrum quasi cum!
        </div>
      </div>

      <!-- Recieve Message -->
      <div class="flex flex-row justify-start space-x-2">
        <div class="flex items-end">
          <img
            src="@/assets/images/profile/17.jpg"
            alt="user-image"
            class="h-10 w-10 rounded-full"
          />
        </div>
        <div
          class="
            bg-gradient-to-r
            from-fuchsia-600
            to-pink-600
            text-gray-100
            px-10
            py-3
            rounded-full rounded-bl-xl
            w-2/4
          "
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ipsum
          labore nobis.
        </div>
      </div>
      <!-- Date -->
      <div class="flex flex-row items-center py-5">
        <div class="flex flex-1 bg-gray-300 w-full h-0.5"></div>
        <div
          class="px-5 py-2.5 border border-gray-300 rounded-full bg-gray-300"
        >
          <h1 class="text-sm text-blue-500 font-bold tracking-wider">
            July 27
          </h1>
        </div>
        <div class="flex flex-1 bg-gray-300 w-full h-0.5"></div>
      </div>

      <!-- Send Message -->
      <div class="flex flex-row justify-end items-center">
        <div
          class="
            bg-gradient-to-r
            from-purple-800
            via-violet-900
            to-purple-800
            text-gray-100
            px-10
            py-3
            rounded-full rounded-br-xl
            w-2/4
          "
        >
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </div>
      </div>
      <div class="flex flex-row justify-end items-center">
        <div
          class="
            bg-gradient-to-r
            from-purple-800
            via-violet-900
            to-purple-800
            text-gray-100
            px-10
            py-3
            rounded-2xl
            w-2/4
          "
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil,
          pariatur.
        </div>
      </div>
      <div class="flex flex-row justify-end items-center">
        <div
          class="
            bg-gradient-to-r
            from-purple-800
            via-violet-900
            to-purple-800
            text-gray-100
            px-10
            py-3
            rounded-full rounded-tr-xl
            w-2/4
          "
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla ex
          modi tenetur nihil placeat praesentium fuga at nostrum quasi cum!
        </div>
      </div>

      <!-- Recieve Message -->
      <div class="flex flex-row justify-start space-x-2">
        <div class="flex items-end">
          <img
            src="@/assets/images/profile/17.jpg"
            alt="user-image"
            class="h-10 w-10 rounded-full"
          />
        </div>
        <div
          class="
            bg-gradient-to-r
            from-fuchsia-600
            to-pink-600
            text-gray-100
            px-10
            py-3
            rounded-full rounded-bl-xl
            w-2/4
          "
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ipsum
          labore nobis.
        </div>
      </div>
    </div>

    <!-- Text Area -->
    <div class="relative align-bottom px-3 pt-2 h-1/10">
      <div class="flex flex-row justify-between rounded-xl bg-gray-300 p-3">
        <input
          type="text"
          placeholder="Enter to send..."
          class="
            text-lg text-gray-600
            tracking-wide
            w-full
            bg-gray-300
            outline-none
            px-10
          "
        />
        <div class="bg-blue-500 p-3 rounded-xl overflow-hidden cursor-pointer">
          <CloudUploadIcon class="h-8 w-8 text-gray-100" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { DotsVerticalIcon, CloudUploadIcon } from "@heroicons/vue/solid";
export default {
  setup() {
    return {};
  },
  components: {
    DotsVerticalIcon,
    CloudUploadIcon,
  },
  methods: {
    scrollToBottom() {
      var content = this.$refs.chatContainer;
      content.scrollTop = content.scrollHeight;
    },
  },
  mounted() {
    this.scrollToBottom();
  },
};
</script>

<style lang="scss" scoped></style>
