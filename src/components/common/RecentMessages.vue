<template>
  <div class="h-full w-full border-r border-gray-300">
    <div class="px-5 py-3 border-b w-full border-gray-300">
      <div class="bg-gray-200 rounded-3xl px-6 py-2">
        <div class="flex flex-row items-center space-x-5">
          <SearchIcon class="h-5 w-5 text-gray-600" />
          <input
            type="text"
            placeholder="Search"
            class="
              py-1.5
              w-full
              bg-gray-200
              text-lg
              outline-none
              text-gray-600
              font-nunito font-medium
              tracking-wider
            "
          />
        </div>
      </div>
    </div>
    <div class="w-full px-5 py-5 border-b border-gray-300">
      <div class="flex flex-row items-center space-x-2 cursor-pointer">
        <h1 class="font-extrabold tracking-wider text-gray-600">
          All Messages
        </h1>
        <h1
          class="
            bg-gray-200
            px-3
            py-0.5
            rounded-2xl
            font-extrabold
            text-gray-500 text-sm
          "
        >
          12
        </h1>

        <ChevronDownIcon class="h-5 w-5 text-gray-400" />
      </div>
    </div>
    <div
      class="
        w-full
        overflow-y-scroll
        scrollbar
        scrollbar-thumb-gray-400
        scrollbar-track-gray-100
        scrollbar-thin
        scrollbar-thumb-rounded-full
        scrollbar-track-rounded-full
      "
      style="height: 76vh"
    >
      <div class="flex flex-col justify-center">
        <div
          class="
            group
            p-8
            flex flex-row
            items-center
            justify-between
            border-b border-gray-300
            bg-gray-700
            cursor-pointer
          "
        >
          <div class="relative">
            <img
              src="@/assets/images/profile/17.jpg"
              alt="user-image"
              class="h-16 w-16 rounded-full"
            />
            <div
              class="
                absolute
                bg-green-500
                w-4
                h-4
                rounded-full
                right-0
                bottom-0
                transform
                -translate-x-0.5 -translate-y-0.5
              "
            ></div>
          </div>
          <div class="group flex flex-col items-start">
            <h1 class="font-extrabold font-nunito tracking-wide text-gray-200">
              Bessie Cooper
            </h1>
            <h1 class="text-gray-300">Yes, I need your help with my...</h1>
          </div>
          <div class="group flex flex-col items-center space-y-1">
            <h1 class="text-gray-400">Just now</h1>
            <h1
              class="
                bg-blue-500
                px-3
                py-1
                rounded-2xl
                text-gray-50 text-sm
                font-extrabold
              "
            >
              1
            </h1>
          </div>
        </div>
        <div
          class="
            group
            p-8
            flex flex-row
            items-center
            justify-between
            border-b border-gray-300
            hover:bg-gray-700
            cursor-pointer
          "
        >
          <div class="relative">
            <img
              src="@/assets/images/profile/1.jpg"
              alt="user-image"
              class="h-16 w-16 rounded-full"
            />
            <div
              class="
                absolute
                bg-green-500
                w-4
                h-4
                rounded-full
                right-0
                bottom-0
                transform
                -translate-x-0.5 -translate-y-0.5
              "
            ></div>
          </div>
          <div class="group flex flex-col items-start">
            <h1
              class="
                font-extrabold
                text-gray-700
                font-nunito
                tracking-wide
                group-hover:text-gray-200
              "
            >
              Bessie Cooper
            </h1>
            <h1 class="text-gray-500 font-semibold group-hover:text-gray-400">
              Yes, I need your help with my...
            </h1>
          </div>
          <div class="group flex flex-col items-center space-y-1">
            <h1 class="text-gray-400 font-bold group-hover:text-gray-400">
              Just now
            </h1>
            <h1
              class="
                bg-blue-500
                px-3
                py-1
                rounded-2xl
                text-gray-50 text-sm
                font-extrabold
              "
            >
              1
            </h1>
          </div>
        </div>
        <div
          class="
            group
            p-8
            flex flex-row
            items-center
            justify-between
            border-b border-gray-300
            hover:bg-gray-700
            cursor-pointer
          "
        >
          <div class="relative">
            <img
              src="@/assets/images/profile/4.jpg"
              alt="user-image"
              class="h-16 w-16 rounded-full"
            />
            <div
              class="
                absolute
                bg-green-500
                w-4
                h-4
                rounded-full
                right-0
                bottom-0
                transform
                -translate-x-0.5 -translate-y-0.5
              "
            ></div>
          </div>
          <div class="group flex flex-col items-start">
            <h1
              class="
                font-extrabold
                text-gray-700
                font-nunito
                tracking-wide
                group-hover:text-gray-200
              "
            >
              Bessie Cooper
            </h1>
            <h1 class="text-gray-500 font-semibold group-hover:text-gray-400">
              Yes, I need your help with my...
            </h1>
          </div>
          <div class="group flex flex-col items-center space-y-1">
            <h1 class="text-gray-400 font-bold group-hover:text-gray-400">
              Just now
            </h1>
            <h1
              class="
                bg-blue-500
                px-3
                py-1
                rounded-2xl
                text-gray-50 text-sm
                font-extrabold
              "
            >
              1
            </h1>
          </div>
        </div>
        <div
          class="
            group
            p-8
            flex flex-row
            items-center
            justify-between
            border-b border-gray-300
            hover:bg-gray-700
            cursor-pointer
          "
        >
          <div class="relative">
            <img
              src="@/assets/images/profile/11.jpg"
              alt="user-image"
              class="h-16 w-16 rounded-full"
            />
            <div
              class="
                absolute
                bg-green-500
                w-4
                h-4
                rounded-full
                right-0
                bottom-0
                transform
                -translate-x-0.5 -translate-y-0.5
              "
            ></div>
          </div>
          <div class="group flex flex-col items-start">
            <h1
              class="
                font-extrabold
                text-gray-700
                font-nunito
                tracking-wide
                group-hover:text-gray-200
              "
            >
              Bessie Cooper
            </h1>
            <h1 class="text-gray-500 font-semibold group-hover:text-gray-400">
              Yes, I need your help with my...
            </h1>
          </div>
          <div class="group flex flex-col items-center space-y-1">
            <h1 class="text-gray-400 font-bold group-hover:text-gray-400">
              Just now
            </h1>
            <h1
              class="
                bg-blue-500
                px-3
                py-1
                rounded-2xl
                text-gray-50 text-sm
                font-extrabold
              "
            >
              1
            </h1>
          </div>
        </div>
        <div
          class="
            group
            p-8
            flex flex-row
            items-center
            justify-between
            border-b border-gray-300
            hover:bg-gray-700
            cursor-pointer
          "
        >
          <div class="relative">
            <img
              src="@/assets/images/profile/14.jpg"
              alt="user-image"
              class="h-16 w-16 rounded-full"
            />
            <div
              class="
                absolute
                bg-green-500
                w-4
                h-4
                rounded-full
                right-0
                bottom-0
                transform
                -translate-x-0.5 -translate-y-0.5
              "
            ></div>
          </div>
          <div class="group flex flex-col items-start">
            <h1
              class="
                font-extrabold
                text-gray-700
                font-nunito
                tracking-wide
                group-hover:text-gray-200
              "
            >
              Bessie Cooper
            </h1>
            <h1 class="text-gray-500 font-semibold group-hover:text-gray-400">
              Yes, I need your help with my...
            </h1>
          </div>
          <div class="group flex flex-col items-center space-y-1">
            <h1 class="text-gray-400 font-bold group-hover:text-gray-400">
              Just now
            </h1>
            <h1
              class="
                bg-blue-500
                px-3
                py-1
                rounded-2xl
                text-gray-50 text-sm
                font-extrabold
              "
            >
              1
            </h1>
          </div>
        </div>
        <div
          class="
            group
            p-8
            flex flex-row
            items-center
            justify-between
            border-b border-gray-300
            hover:bg-gray-700
            cursor-pointer
          "
        >
          <div class="relative">
            <img
              src="@/assets/images/profile/9.jpg"
              alt="user-image"
              class="h-16 w-16 rounded-full"
            />
            <div
              class="
                absolute
                bg-green-500
                w-4
                h-4
                rounded-full
                right-0
                bottom-0
                transform
                -translate-x-0.5 -translate-y-0.5
              "
            ></div>
          </div>
          <div class="group flex flex-col items-start">
            <h1
              class="
                font-extrabold
                text-gray-700
                font-nunito
                tracking-wide
                group-hover:text-gray-200
              "
            >
              Bessie Cooper
            </h1>
            <h1 class="text-gray-500 font-semibold group-hover:text-gray-400">
              Yes, I need your help with my...
            </h1>
          </div>
          <div class="group flex flex-col items-center space-y-1">
            <h1 class="text-gray-400 font-bold group-hover:text-gray-400">
              Just now
            </h1>
            <h1
              class="
                bg-blue-500
                px-3
                py-1
                rounded-2xl
                text-gray-50 text-sm
                font-extrabold
              "
            >
              1
            </h1>
          </div>
        </div>
        <div
          class="
            group
            p-8
            flex flex-row
            items-center
            justify-between
            border-b border-gray-300
            hover:bg-gray-700
            cursor-pointer
          "
        >
          <div class="relative">
            <img
              src="@/assets/images/profile/8.jpg"
              alt="user-image"
              class="h-16 w-16 rounded-full"
            />
            <div
              class="
                absolute
                bg-green-500
                w-4
                h-4
                rounded-full
                right-0
                bottom-0
                transform
                -translate-x-0.5 -translate-y-0.5
              "
            ></div>
          </div>
          <div class="group flex flex-col items-start">
            <h1
              class="
                font-extrabold
                text-gray-700
                font-nunito
                tracking-wide
                group-hover:text-gray-200
              "
            >
              Bessie Cooper
            </h1>
            <h1 class="text-gray-500 font-semibold group-hover:text-gray-400">
              Yes, I need your help with my...
            </h1>
          </div>
          <div class="group flex flex-col items-center space-y-1">
            <h1 class="text-gray-400 font-bold group-hover:text-gray-400">
              Just now
            </h1>
            <h1
              class="
                bg-blue-500
                px-3
                py-1
                rounded-2xl
                text-gray-50 text-sm
                font-extrabold
              "
            >
              1
            </h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { SearchIcon, ChevronDownIcon } from "@heroicons/vue/outline";
export default {
  setup() {
    return {};
  },
  components: {
    SearchIcon,
    ChevronDownIcon,
  },
};
</script>

<style lang="scss" scoped></style>
