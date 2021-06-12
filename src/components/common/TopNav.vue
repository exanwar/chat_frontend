<template>
  <div
    class="
      flex flex-row
      justify-between
      items-center
      px-8
      py-1.5
      border-b border-gray-300
    "
  >
    <h1 class="text-2xl font-nunito tracking-wide font-bold text-gray-700">
      Messages
    </h1>
    <div
      class="
        flex flex-row
        space-x-2
        md:space-x-2
        xl:space-x-7
        xl:pr-3
        items-center
      "
    >
      <div class="relative cursor-pointer">
        <div class="rounded-full border border-gray-500 p-1">
          <BellIcon class="h-5 w-5 sm:h-7 sm:w-7 text-gray-500 animate-spin" />
        </div>
        <div
          class="
            absolute
            top-0
            right-0
            bg-pink-800
            h-2
            w-2
            sm:h-3
            sm:w-3
            rounded-full
            transform
            -translate-x-0.5 -translate-y-0
          "
        ></div>
      </div>
      <div class="bg-gray-300 w-0.5 h-full"></div>
      <div class="relative" @mouseover="showMenu" @mouseleave="hideMenu">
        <div class="flex flex-row items-center sm:space-x-4 cursor-pointer">
          <img
            src="@/assets/images/profile/15.jpg"
            alt="avatar"
            class="h-10 w-10 sm:h-12 sm:w-12 rounded-full"
          />
          <div class="hidden sm:flex flex-col items-center">
            <h1 class="text-sm text-gray-700 font-semibold float-left">
              Yus Febrianto
            </h1>
            <div class="flex flex-row items-center space-x-2 self-start">
              <div class="bg-green-400 h-2 w-2 rounded-full"></div>
              <p class="text-md text-gray-500">Available</p>
            </div>
          </div>
          <div
            class="
              sm:hidden
              bg-green-500
              w-2
              h-2
              rounded-full
              right-0
              bottom-0
              transform
              -translate-x-1.5
              translate-y-3
            "
          ></div>
          <div class="p-1 rounded-full shadow-2xl border border-gray-400">
            <ChevronDownIcon class="h-3 w-3 sm:h-4 sm:w-4 text-gray-400" />
          </div>
        </div>
        <transition name="dropdown-fade">
          <div
            v-show="isVisible"
            class="
              absolute
              normal-case
              font-normal
              right-0
              sm:left-0
              lg:right-0
              bg-white
              shadow
              overflow-hidden
              rounded-xl
              w-40
              sm:w-48
              border
              mt-2
              py-1
              lg:z-20
            "
          >
            <div>
              <a href="#" class="flex items-center px-3 py-3 hover:bg-gray-200">
                <svg
                  fill="currentColor"
                  class="text-gray-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path
                    class="heroicon-ui"
                    d="M12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm9 11a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v2z"
                  ></path>
                </svg>
                <span class="ml-2 text-gray-600">Account</span>
              </a>
            </div>
            <div>
              <a href="#" class="flex items-center px-3 py-3 hover:bg-gray-200">
                <svg
                  fill="currentColor"
                  class="text-gray-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path
                    class="heroicon-ui"
                    d="M20 22H4a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h4V8c0-1.1.9-2 2-2h4V4c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2zM14 8h-4v12h4V8zm-6 4H4v8h4v-8zm8-8v16h4V4h-4z"
                  ></path>
                </svg>
                <span class="ml-2 text-gray-600">Analytics</span>
              </a>
            </div>
            <div>
              <a href="#" class="flex items-center px-3 py-3 hover:bg-gray-200">
                <svg
                  fill="currentColor"
                  class="text-gray-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path
                    class="heroicon-ui"
                    d="M9 4.58V4c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v.58a8 8 0 0 1 1.92 1.11l.5-.29a2 2 0 0 1 2.74.73l1 1.74a2 2 0 0 1-.73 2.73l-.5.29a8.06 8.06 0 0 1 0 2.22l.5.3a2 2 0 0 1 .73 2.72l-1 1.74a2 2 0 0 1-2.73.73l-.5-.3A8 8 0 0 1 15 19.43V20a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-.58a8 8 0 0 1-1.92-1.11l-.5.29a2 2 0 0 1-2.74-.73l-1-1.74a2 2 0 0 1 .73-2.73l.5-.29a8.06 8.06 0 0 1 0-2.22l-.5-.3a2 2 0 0 1-.73-2.72l1-1.74a2 2 0 0 1 2.73-.73l.5.3A8 8 0 0 1 9 4.57zM7.88 7.64l-.54.51-1.77-1.02-1 1.74 1.76 1.01-.17.73a6.02 6.02 0 0 0 0 2.78l.17.73-1.76 1.01 1 1.74 1.77-1.02.54.51a6 6 0 0 0 2.4 1.4l.72.2V20h2v-2.04l.71-.2a6 6 0 0 0 2.41-1.4l.54-.51 1.77 1.02 1-1.74-1.76-1.01.17-.73a6.02 6.02 0 0 0 0-2.78l-.17-.73 1.76-1.01-1-1.74-1.77 1.02-.54-.51a6 6 0 0 0-2.4-1.4l-.72-.2V4h-2v2.04l-.71.2a6 6 0 0 0-2.41 1.4zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
                  ></path>
                </svg>
                <span class="ml-2 text-gray-600">Settings</span>
              </a>
            </div>
            <div>
              <a href="#" class="flex items-center px-3 py-3 hover:bg-gray-200">
                <svg
                  fill="currentColor"
                  class="text-gray-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path
                    class="heroicon-ui"
                    d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM10.59 8.59a1 1 0 1 1-1.42-1.42 4 4 0 1 1 5.66 5.66l-2.12 2.12a1 1 0 1 1-1.42-1.42l2.12-2.12A2 2 0 0 0 10.6 8.6zM12 18a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
                  ></path>
                </svg>
                <span class="ml-2 text-gray-600">Help</span>
              </a>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import {
  BellIcon,
  ChevronDownIcon,
  // InformationCircleIcon,
} from "@heroicons/vue/outline";
export default {
  setup() {
    return {};
  },
  components: {
    BellIcon,
    ChevronDownIcon,
    // InformationCircleIcon,
  },
  data() {
    return {
      isVisible: false,
    };
  },
  methods: {
    showMenu() {
      this.isVisible = true;
    },
    hideMenu() {
      this.isVisible = false;
    },
  },
};
</script>

<style lang="scss" scoped></style>
