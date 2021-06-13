<template>
  <div
    class="
      group
      py-5
      px-1.5
      flex
      items-center
      justify-between
      border-b border-gray-300
      hover:bg-gray-700
      cursor-pointer
    "
  >
    <div class="relative">
      <img
        :src="friend.image"
        alt="user-image"
        class="h-3 w-3 xs:h-8 sm:h-12 xs:w-8 sm:w-12 rounded-full"
      />
      <div
        class="
          absolute
          bg-green-500
          w-1
          h-1
          sm:w-2 sm:h-2
          rounded-full
          right-0
          bottom-0
          transform
          -translate-x-0.5 -translate-y-0
          sm:-translate-x-1.5 sm:-translate-y-0
        "
      ></div>
    </div>
    <div class="ml-2 md:ml-1.5 group flex flex-col items-start">
      <h1
        class="
          font-extrabold
          text-gray-700
          md:text-sm
          xs:text-xs
          text-xxs
          font-nunito
          tracking-wide
          group-hover:text-gray-200
        "
      >
        {{ friend.name }}
      </h1>
      <h1
        class="
          hidden
          md:block
          text-gray-500 text-xs
          font-semibold
          group-hover:text-gray-400
        "
      >
        {{ friend.lastMessage }}
      </h1>
    </div>
    <div
      class="
        group
        flex flex-col flex-wrap
        justify-center
        items-baseline
        xs:items-center
        space-y-1
      "
    >
      <div
        class="
          text-gray-400
          font-bold
          inline-block
          text-xxs
          group-hover:text-gray-400
          pr-1.5
        "
      >
        <h1 class="text-center hidden xs:block">
          {{ friend.lastMessageTime }}
        </h1>
      </div>
      <h1
        class="
          bg-blue-500
          px-2
          py-1
          font-nunito
          text-xxs
          sm:text-xs
          rounded-full
          text-gray-50
          font-bold
        "
      >
        {{ friend.unseenMessageCount }}
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
  props: ["friend"],
};
</script>

<style lang="scss" scoped></style>
