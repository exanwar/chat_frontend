<template>
  <div class="flex">
    <div
      class="
        w-12
        md:w-20
        flex-none
        min-h-screen
        h-screen
        overflow-y-auto
        bg-gray-800
        scrollbar
        scrollbar-thumb-gray-400
        scrollbar-track-gray-100
        scrollbar-thin
        scrollbar-thumb-rounded-full
        scrollbar-track-rounded-full
      "
    >
      <navigation />
    </div>
    <div class="flex-1 flex flex-col min-h-screen h-screen">
      <div class=""><top-nav /></div>
      <div class="flex-1 flex overflow-y-hidden">
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
          <recent-messages />
        </div>
        <div class="flex-1 flex flex-col xl:border-r border-gray-300">
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
              <h1 class="text-xl sm:text-2xl font-bold text-gray-600">
                Bessie Cooper
              </h1>
              <div class="flex">
                <!-- <DotsVerticalIcon class="h-7 w-7 text-gray-600" /> -->
                <div class="cursor-pointer">
                  <InformationCircleIcon
                    class="xl:hidden h-7 w-7 text-gray-600"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="flex-1 flex flex-col justify-between overflow-y-hidden">
            <div
              class="
                flex flex-col
                px-8
                space-y-1
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
              <!-- Date -->
              <div class="flex flex-row items-center py-5">
                <div class="flex flex-1 bg-gray-300 w-full h-0.5"></div>
                <div
                  class="
                    px-5
                    py-2.5
                    border border-gray-300
                    rounded-full
                    bg-gray-300
                  "
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
                    2xl:px-10
                    xl:px-7
                    lg:px-8
                    sm:px-2
                    px-1.5
                    lg:py-3
                    md:py-2
                    py-1.5
                    rounded-2xl
                    lg:rounded-full lg:rounded-br-xl
                    max-w-max
                    w-11/12
                    xs:w-11/12
                    lg:w-10/12
                    xl:w-9/12
                    2xl:w-8/12
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
                    2xl:px-10
                    xl:px-7
                    lg:px-8
                    sm:px-2
                    px-1.5
                    lg:py-3
                    md:py-2
                    py-1.5
                    rounded-2xl
                    max-w-max
                    w-11/12
                    xs:w-11/12
                    lg:w-10/12
                    xl:w-9/12
                    2xl:w-8/12
                  "
                >
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Nihil, pariatur.
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
                    2xl:px-10
                    xl:px-7
                    lg:px-8
                    sm:px-2
                    px-1.5
                    lg:py-3
                    md:py-2
                    py-1.5
                    rounded-2xl
                    lg:rounded-full lg:rounded-tr-xl
                    max-w-max
                    w-11/12
                    xs:w-11/12
                    lg:w-10/12
                    xl:w-9/12
                    2xl:w-8/12
                  "
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nulla ex modi tenetur nihil placeat praesentium fuga at
                  nostrum quasi cum!
                </div>
              </div>

              <!-- Recieve Message -->
              <div class="flex flex-row justify-start space-x-2">
                <div class="flex items-end">
                  <img
                    src="@/assets/images/profile/17.jpg"
                    alt="user-image"
                    class="h-7 w-7 sm:h-10 sm:w-10 rounded-full"
                  />
                </div>
                <div
                  class="
                    bg-gradient-to-r
                    from-fuchsia-600
                    to-pink-600
                    text-gray-100
                    2xl:px-10
                    xl:px-7
                    lg:px-8
                    sm:px-2
                    px-1.5
                    lg:py-3
                    md:py-2
                    py-1.5
                    rounded-2xl
                    lg:rounded-full lg:rounded-bl-xl
                    max-w-max
                    w-11/12
                    xs:w-11/12
                    lg:w-10/12
                    xl:w-9/12
                    2xl:w-8/12
                  "
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                  ipsum labore nobis.
                </div>
              </div>

              <!-- Date -->
              <div class="flex flex-row items-center py-5">
                <div class="flex flex-1 bg-gray-300 w-full h-0.5"></div>
                <div
                  class="
                    px-5
                    py-2.5
                    border border-gray-300
                    rounded-full
                    bg-gray-300
                  "
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
                    2xl:px-10
                    xl:px-7
                    lg:px-8
                    sm:px-2
                    px-1.5
                    lg:py-3
                    md:py-2
                    py-1.5
                    rounded-2xl
                    lg:rounded-full lg:rounded-br-xl
                    max-w-max
                    w-11/12
                    xs:w-11/12
                    lg:w-10/12
                    xl:w-9/12
                    2xl:w-8/12
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
                    2xl:px-10
                    xl:px-7
                    lg:px-8
                    sm:px-2
                    px-1.5
                    lg:py-3
                    md:py-2
                    py-1.5
                    rounded-2xl
                    max-w-max
                    w-11/12
                    xs:w-11/12
                    lg:w-10/12
                    xl:w-9/12
                    2xl:w-8/12
                  "
                >
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Nihil, pariatur.
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
                    2xl:px-10
                    xl:px-7
                    lg:px-8
                    sm:px-2
                    px-1.5
                    lg:py-3
                    md:py-2
                    py-1.5
                    rounded-2xl
                    lg:rounded-full lg:rounded-tr-xl
                    max-w-max
                    w-11/12
                    xs:w-11/12
                    lg:w-10/12
                    xl:w-9/12
                    2xl:w-8/12
                  "
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nulla ex modi tenetur nihil placeat praesentium fuga at
                  nostrum quasi cum!
                </div>
              </div>

              <!-- Recieve Message -->
              <div class="flex flex-row justify-start space-x-2">
                <div class="flex items-end">
                  <img
                    src="@/assets/images/profile/17.jpg"
                    alt="user-image"
                    class="h-7 w-7 sm:h-10 sm:w-10 rounded-full"
                  />
                </div>
                <div
                  class="
                    bg-gradient-to-r
                    from-fuchsia-600
                    to-pink-600
                    text-gray-100
                    2xl:px-10
                    xl:px-7
                    lg:px-8
                    sm:px-2
                    px-1.5
                    lg:py-3
                    md:py-2
                    py-1.5
                    rounded-2xl
                    lg:rounded-full lg:rounded-bl-xl
                    max-w-max
                    w-11/12
                    xs:w-11/12
                    lg:w-10/12
                    xl:w-9/12
                    2xl:w-8/12
                  "
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                  ipsum labore nobis.
                </div>
              </div>

              <!-- Date -->
              <div class="flex flex-row items-center py-5">
                <div class="flex flex-1 bg-gray-300 w-full h-0.5"></div>
                <div
                  class="
                    px-5
                    py-2.5
                    border border-gray-300
                    rounded-full
                    bg-gray-300
                  "
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
                    2xl:px-10
                    xl:px-7
                    lg:px-8
                    sm:px-2
                    px-1.5
                    lg:py-3
                    md:py-2
                    py-1.5
                    rounded-2xl
                    lg:rounded-full lg:rounded-br-xl
                    max-w-max
                    w-11/12
                    xs:w-11/12
                    lg:w-10/12
                    xl:w-9/12
                    2xl:w-8/12
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
                    2xl:px-10
                    xl:px-7
                    lg:px-8
                    sm:px-2
                    px-1.5
                    lg:py-3
                    md:py-2
                    py-1.5
                    rounded-2xl
                    max-w-max
                    w-11/12
                    xs:w-11/12
                    lg:w-10/12
                    xl:w-9/12
                    2xl:w-8/12
                  "
                >
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Nihil, pariatur.
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
                    2xl:px-10
                    xl:px-7
                    lg:px-8
                    sm:px-2
                    px-1.5
                    lg:py-3
                    md:py-2
                    py-1.5
                    rounded-2xl
                    lg:rounded-full lg:rounded-tr-xl
                    max-w-max
                    w-11/12
                    xs:w-11/12
                    lg:w-10/12
                    xl:w-9/12
                    2xl:w-8/12
                  "
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nulla ex modi tenetur nihil placeat praesentium fuga at
                  nostrum quasi cum!
                </div>
              </div>

              <!-- Recieve Message -->
              <div class="flex flex-row justify-start space-x-2">
                <div class="flex items-end">
                  <img
                    src="@/assets/images/profile/17.jpg"
                    alt="user-image"
                    class="h-7 w-7 sm:h-10 sm:w-10 rounded-full"
                  />
                </div>
                <div
                  class="
                    bg-gradient-to-r
                    from-fuchsia-600
                    to-pink-600
                    text-gray-100
                    2xl:px-10
                    xl:px-7
                    lg:px-8
                    sm:px-2
                    px-1.5
                    lg:py-3
                    md:py-2
                    py-1.5
                    rounded-2xl
                    lg:rounded-full lg:rounded-bl-xl
                    max-w-max
                    w-11/12
                    xs:w-11/12
                    lg:w-10/12
                    xl:w-9/12
                    2xl:w-8/12
                  "
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                  ipsum labore nobis.
                </div>
              </div>
            </div>
            <div class="">
              <!-- Text Area -->
              <div class="xs:px-3 px-1 py-2">
                <div
                  class="
                    flex flex-row
                    justify-between
                    rounded-xl
                    bg-gray-300
                    p-3
                  "
                >
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
        </div>
        <div
          class="
            w-60
            flex-none
            overflow-y-auto
            scrollbar
            scrollbar-thumb-gray-400
            scrollbar-track-gray-100
            scrollbar-thin
            scrollbar-thumb-rounded-full
            scrollbar-track-rounded-full
            hidden
            xl:block
          "
        >
          <div class="flex flex-col items-center px-4 py-3 space-y-3">
            <div class="relative">
              <img
                src="@/assets/images/profile/9.jpg"
                class="w-auto h-3/10 object-center object-cover rounded-lg"
              />
              <div class="absolute left-2.5 bottom-2">
                <h1 class="text-white text-2xl font-bold">Bessie Cooper</h1>
                <div class="flex flex-row items-center space-x-1">
                  <div class="bg-green-500 h-1.5 w-1.5 rounded-full"></div>
                  <h1 class="text-gray-300 text-sm font-bold">Online</h1>
                </div>
              </div>
            </div>
            <div class="flex flex-col justify-start self-start">
              <div class="p-1">
                <h1 class="text-gray-400 text-md font-bold">ID</h1>
                <h1 class="text-md font-semibold text-gray-600 tracking-wide">
                  #432873
                </h1>
              </div>
              <div class="p-1">
                <h1 class="text-gray-400 text-md font-bold">Email</h1>
                <h1 class="text-md font-semibold text-gray-600 tracking-wide">
                  ys@fikristudio.com
                </h1>
              </div>
              <div class="p-1">
                <h1 class="text-gray-400 text-md font-bold">Phone</h1>
                <h1 class="text-md font-semibold text-gray-600 tracking-wide">
                  (0281) 212-55779
                </h1>
              </div>
              <div class="px-2 py-1">
                <h1 class="text-md text-blue-700 font-bold">Show more</h1>
              </div>
            </div>
            <div class="px-3 w-full">
              <div class="flex flex-col space-y-2">
                <div class="flex flex-row justify-between items-center">
                  <h1
                    class="font-extrabold text-gray-700 text-lg tracking-wide"
                  >
                    Media
                  </h1>
                  <h1
                    class="text-semibold text-blue-700 text-sm tracking-tight"
                  >
                    Show more
                  </h1>
                </div>
                <div class="flex flex-row space-x-1.5">
                  <div class="relative">
                    <img
                      src="@/assets/images/profile/1.jpg"
                      class="h-auto w-32 object-cover object-center"
                    />
                  </div>
                  <div class="relative">
                    <img
                      src="@/assets/images/profile/4.jpg"
                      class="h-auto w-32 object-cover object-center"
                    />
                  </div>
                  <div class="relative">
                    <img
                      src="@/assets/images/profile/5.jpg"
                      class="h-auto w-32 object-cover object-center"
                    />
                    <div
                      class="
                        absolute
                        bg-gray-500
                        left-0
                        top-0
                        right-0
                        bottom-0
                        opacity-75
                      "
                    >
                      <div
                        class="
                          flex
                          items-center
                          justify-center
                          transform
                          translate-y-4
                        "
                      >
                        <h1 class="text-white font-bold text-2xl">+5</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="px-3 w-full">
              <div class="flex flex-col space-y-2">
                <div class="flex flex-row justify-between items-center">
                  <h1
                    class="font-extrabold text-gray-700 text-lg tracking-wide"
                  >
                    Docs
                  </h1>
                </div>
                <div class="flex flex-col space-y-4">
                  <div class="flex flex-row justify-between items-center">
                    <div class="flex flex-row space-x-1.5 items-center">
                      <div class="bg-abmer-400 rounded-lg p-3">
                        <DocumentIcon class="h-6 w-6 text-gray-50" />
                      </div>
                      <div class="flex flex-col">
                        <h1 class="text-gray-600 font-bold text-sm">
                          Return Product
                        </h1>
                        <div class="flex flex-row space-x-5">
                          <p class="text-gray-600 text-sm">pdf</p>
                          <p class="text-gray-600 text-sm">1.7Mb</p>
                        </div>
                      </div>
                    </div>
                    <div class="p-1 border-2 border-gray-500 rounded-full">
                      <DownloadIcon class="h-3 w-3 text-gray-500" />
                    </div>
                  </div>
                  <div class="flex flex-row justify-between items-center">
                    <div class="flex flex-row space-x-1.5 items-center">
                      <div class="bg-blue-400 rounded-lg p-3">
                        <DocumentIcon class="h-6 w-6 text-gray-50" />
                      </div>
                      <div class="flex flex-col">
                        <h1 class="text-gray-600 font-bold text-sm">
                          New Customer Guide
                        </h1>
                        <div class="flex flex-row space-x-5">
                          <p class="text-gray-600 text-sm">docx</p>
                          <p class="text-gray-600 text-sm">2.5Mb</p>
                        </div>
                      </div>
                    </div>
                    <div class="p-1 border-2 border-gray-500 rounded-full">
                      <DownloadIcon class="h-3 w-3 text-gray-500" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from "../components/common/Navigation.vue";
import TopNav from "../components/common/TopNav.vue";
import {
  DocumentIcon,
  DownloadIcon,
  // DotsVerticalIcon,
  InformationCircleIcon,
  // CloudUploadIcon,
} from "@heroicons/vue/solid";
import RecentMessages from "../components/common/RecentMessages.vue";
export default {
  setup() {
    return {};
  },
  components: {
    Navigation,
    TopNav,
    DocumentIcon,
    DownloadIcon,
    // DotsVerticalIcon,
    InformationCircleIcon,
    // CloudUploadIcon,
    RecentMessages,
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
