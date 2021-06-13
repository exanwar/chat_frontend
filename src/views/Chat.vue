<template>
  <div
    class="
      w-28
      xs:w-36
      sm:w-44
      md:w-72
      flex-none flex flex-col
      border-r border-gray-300
    "
  >
    <left-part />
  </div>
  <div class="flex-1 flex flex-col xl:border-r border-gray-300">
    <middle-part />
  </div>
  <last-part />
</template>

<script>
  import LeftPart from '../components/common/chat/friends/LeftPart.vue';
  import MiddlePart from '../components/common/chat/messages/MiddlePart.vue';
  import LastPart from '../components/common/chat/friend-profile/LastPart.vue';
  export default {
    setup() {
      return {};
    },
    components: {
      LeftPart,
      MiddlePart,
      LastPart,
    },
    data() {
      return {
        messages: [
          {
            '27-03-2020': {},
          },
        ],
      };
    },
  };
</script>

<style lang="scss" scoped></style>
