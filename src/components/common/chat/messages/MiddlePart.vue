<template>
  <div class="">
    <div
      class="
        flex
        justify-between
        items-center
        px-3
        sm:px-8
        py-4
        border-b border-gray-300
      "
    >
      <h1 class="text-xl sm:text-2xl font-bold text-gray-600">Bessie Cooper</h1>
      <div class="flex">
        <!-- <DotsVerticalIcon class="h-7 w-7 text-gray-600" /> -->
        <div class="cursor-pointer">
          <InformationCircleIcon class="xl:hidden h-7 w-7 text-gray-600" />
        </div>
      </div>
    </div>
  </div>
  <div class="flex-1 flex flex-col justify-between overflow-y-hidden">
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
      ref="chatContainer"
    >
      <div
        class="flex flex-col px-8 space-y-1"
        v-for="(messagedate, index) in messages"
        :key="index"
      >
        <date-block />
      </div>
    </div>
    <div class="">
      <!-- Text Area -->
      <div class="xs:px-3 px-1 py-2">
        <div class="flex flex-row justify-between rounded-xl bg-gray-300 p-3">
          <input
            type="text"
            placeholder="Enter to send..."
            class="
              text-sm
              xs:text-lg
              text-gray-600
              tracking-wide
              w-full
              xs:w-full
              bg-gray-300
              outline-none
              xs:px-10
            "
          />
          <div class="bg-blue-500 rounded-xl px-3 py-2 cursor-pointer">
            <!-- <CloudUploadIcon class="h-8 w-8 text-gray-100" /> -->
            <h1
              class="
                text-gray-100
                font-bold
                tracking-wider
                xs:text-base
                text-sm
              "
            >
              Send
            </h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { InformationCircleIcon } from '@heroicons/vue/solid';
  import DateBlock from './DateBlock.vue';
  export default {
    setup() {
      return {};
    },
    components: {
      InformationCircleIcon,
      DateBlock,
    },
    data() {
      return {
        messages: [
          {
            h1: 'hello',
            h2: 'hi!',
          },
          {
            h3: 'How are you',
            h4: 'I am fine',
          },
          {
            h3: 'How are you',
            h4: 'I am fine',
          },
          {
            h3: 'How are you',
            h4: 'I am fine',
          },
          {
            h3: 'How are you',
            h4: 'I am fine',
          },
        ],
      };
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
