<template>
  <div class="h-full w-full">
    <div class="flex flex-col items-center p-3 space-y-4">
      <div class="relative">
        <img
          src="https://randomuser.me/api/portraits/men/51.jpg"
          class="w-auto h-3/10 object-center object-cover"
        />
        <div class="absolute left-1.5 bottom-1.5">
          <h1 class="text-white text-3xl font-bold">Bessie Cooper</h1>
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
            <h1 class="font-extrabold text-gray-700 text-lg tracking-wide">
              Media
            </h1>
            <h1 class="text-semibold text-blue-700 text-sm tracking-tight">
              Show more
            </h1>
          </div>
          <div class="flex flex-row space-x-1.5">
            <div class="relative">
              <img
                src="https://randomuser.me/api/portraits/men/81.jpg"
                class="h-auto w-32 object-cover object-center"
              />
            </div>
            <div class="relative">
              <img
                src="https://randomuser.me/api/portraits/men/81.jpg"
                class="h-auto w-32 object-cover object-center"
              />
            </div>
            <div class="relative">
              <img
                src="https://randomuser.me/api/portraits/men/81.jpg"
                class="h-auto w-32 object-cover object-center"
              />
              <div
                class="
                  absolute
                  h-full
                  w-full
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
                    translate-y-7
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
            <h1 class="font-extrabold text-gray-700 text-lg tracking-wide">
              Docs
            </h1>
          </div>
          <div class="flex flex-col space-y-4">
            <div class="flex flex-row justify-between items-center">
              <div class="flex flex-row space-x-3">
                <div class="bg-abmer-400 rounded-lg p-3">
                  <DocumentIcon class="h-6 w-6 text-gray-50" />
                </div>
                <div class="flex flex-col">
                  <h1 class="text-gray-600 font-bold">Return Product</h1>
                  <div class="flex flex-row space-x-5">
                    <p class="text-gray-600 text-sm">pdf</p>
                    <p class="text-gray-600 text-sm">1.7Mb</p>
                  </div>
                </div>
              </div>
              <div class="p-2 border-2 border-gray-500 rounded-full">
                <DownloadIcon class="h-4 w-4 text-gray-500" />
              </div>
            </div>
            <div class="flex flex-row justify-between items-center">
              <div class="flex flex-row space-x-3">
                <div class="bg-blue-600 rounded-lg p-3">
                  <DocumentIcon class="h-6 w-6 text-gray-50" />
                </div>
                <div class="flex flex-col">
                  <h1 class="text-gray-600 font-bold">New Customer Guide</h1>
                  <div class="flex flex-row space-x-5">
                    <p class="text-gray-600 text-sm">docx</p>
                    <p class="text-gray-600 text-sm">2.5Mb</p>
                  </div>
                </div>
              </div>
              <div class="p-2 border-2 border-gray-500 rounded-full">
                <DownloadIcon class="h-4 w-4 text-gray-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { DocumentIcon, DownloadIcon } from "@heroicons/vue/solid";
export default {
  setup() {
    return {};
  },
  components: {
    DocumentIcon,
    DownloadIcon,
  },
};
</script>

<style lang="scss" scoped></style>
