<template>
  <div class="px-5 py-3 border-b w-full border-gray-300">
    <div class="bg-gray-200 rounded-3xl px-6 py-2">
      <div class="flex items-center space-x-5">
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
  <div class="">
    <div class="px-5 py-5 border-b border-gray-300">
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
  </div>
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
  >
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
          src="@/assets/images/profile/1.jpg"
          alt="user-image"
          class="h-12 w-12 rounded-full"
        />
        <div
          class="
            absolute
            bg-green-500
            w-2
            h-2
            rounded-full
            right-0
            bottom-0
            transform
            -translate-x-0.5 -translate-y-0.5
          "
        ></div>
      </div>
      <div class="ml-1.5 group flex flex-col items-start">
        <h1
          class="
            font-extrabold
            text-gray-700 text-sm
            font-nunito
            tracking-wide
            group-hover:text-gray-200
          "
        >
          Bessie Cooper
        </h1>
        <h1
          class="text-gray-500 text-xs font-semibold group-hover:text-gray-400"
        >
          Yes, I need your help with my...
        </h1>
      </div>
      <div
        class="
          group
          flex flex-col flex-wrap
          justify-center
          items-center
          space-y-1
        "
      >
        <div
          class="
            text-gray-400
            font-semibold
            inline-block
            text-xxs
            group-hover:text-gray-400
          "
        >
          <h1 class="text-center">Just now</h1>
        </div>
        <h1
          class="
            bg-blue-500
            px-2
            py-1
            text-xxs
            rounded-full
            text-gray-50
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
          src="@/assets/images/profile/1.jpg"
          alt="user-image"
          class="h-12 w-12 rounded-full"
        />
        <div
          class="
            absolute
            bg-green-500
            w-2
            h-2
            rounded-full
            right-0
            bottom-0
            transform
            -translate-x-0.5 -translate-y-0.5
          "
        ></div>
      </div>
      <div class="ml-1.5 group flex flex-col items-start">
        <h1
          class="
            font-extrabold
            text-gray-700 text-sm
            font-nunito
            tracking-wide
            group-hover:text-gray-200
          "
        >
          Bessie Cooper
        </h1>
        <h1
          class="text-gray-500 text-xs font-semibold group-hover:text-gray-400"
        >
          Yes, I need your help with my...
        </h1>
      </div>
      <div
        class="
          group
          flex flex-col flex-wrap
          justify-center
          items-center
          space-y-1
        "
      >
        <div
          class="
            text-gray-400
            font-semibold
            inline-block
            text-xxs
            group-hover:text-gray-400
          "
        >
          <h1 class="text-center">Just now</h1>
        </div>
        <h1
          class="
            bg-blue-500
            px-2
            py-1
            text-xxs
            rounded-full
            text-gray-50
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
          src="@/assets/images/profile/1.jpg"
          alt="user-image"
          class="h-12 w-12 rounded-full"
        />
        <div
          class="
            absolute
            bg-green-500
            w-2
            h-2
            rounded-full
            right-0
            bottom-0
            transform
            -translate-x-0.5 -translate-y-0.5
          "
        ></div>
      </div>
      <div class="ml-1.5 group flex flex-col items-start">
        <h1
          class="
            font-extrabold
            text-gray-700 text-sm
            font-nunito
            tracking-wide
            group-hover:text-gray-200
          "
        >
          Bessie Cooper
        </h1>
        <h1
          class="text-gray-500 text-xs font-semibold group-hover:text-gray-400"
        >
          Yes, I need your help with my...
        </h1>
      </div>
      <div
        class="
          group
          flex flex-col flex-wrap
          justify-center
          items-center
          space-y-1
        "
      >
        <div
          class="
            text-gray-400
            font-semibold
            inline-block
            text-xxs
            group-hover:text-gray-400
          "
        >
          <h1 class="text-center">Just now</h1>
        </div>
        <h1
          class="
            bg-blue-500
            px-2
            py-1
            text-xxs
            rounded-full
            text-gray-50
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
          src="@/assets/images/profile/1.jpg"
          alt="user-image"
          class="h-12 w-12 rounded-full"
        />
        <div
          class="
            absolute
            bg-green-500
            w-2
            h-2
            rounded-full
            right-0
            bottom-0
            transform
            -translate-x-0.5 -translate-y-0.5
          "
        ></div>
      </div>
      <div class="ml-1.5 group flex flex-col items-start">
        <h1
          class="
            font-extrabold
            text-gray-700 text-sm
            font-nunito
            tracking-wide
            group-hover:text-gray-200
          "
        >
          Bessie Cooper
        </h1>
        <h1
          class="text-gray-500 text-xs font-semibold group-hover:text-gray-400"
        >
          Yes, I need your help with my...
        </h1>
      </div>
      <div
        class="
          group
          flex flex-col flex-wrap
          justify-center
          items-center
          space-y-1
        "
      >
        <div
          class="
            text-gray-400
            font-semibold
            inline-block
            text-xxs
            group-hover:text-gray-400
          "
        >
          <h1 class="text-center">Just now</h1>
        </div>
        <h1
          class="
            bg-blue-500
            px-2
            py-1
            text-xxs
            rounded-full
            text-gray-50
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
          src="@/assets/images/profile/1.jpg"
          alt="user-image"
          class="h-12 w-12 rounded-full"
        />
        <div
          class="
            absolute
            bg-green-500
            w-2
            h-2
            rounded-full
            right-0
            bottom-0
            transform
            -translate-x-0.5 -translate-y-0.5
          "
        ></div>
      </div>
      <div class="ml-1.5 group flex flex-col items-start">
        <h1
          class="
            font-extrabold
            text-gray-700 text-sm
            font-nunito
            tracking-wide
            group-hover:text-gray-200
          "
        >
          Bessie Cooper
        </h1>
        <h1
          class="text-gray-500 text-xs font-semibold group-hover:text-gray-400"
        >
          Yes, I need your help with my...
        </h1>
      </div>
      <div
        class="
          group
          flex flex-col flex-wrap
          justify-center
          items-center
          space-y-1
        "
      >
        <div
          class="
            text-gray-400
            font-semibold
            inline-block
            text-xxs
            group-hover:text-gray-400
          "
        >
          <h1 class="text-center">Just now</h1>
        </div>
        <h1
          class="
            bg-blue-500
            px-2
            py-1
            text-xxs
            rounded-full
            text-gray-50
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
          src="@/assets/images/profile/1.jpg"
          alt="user-image"
          class="h-12 w-12 rounded-full"
        />
        <div
          class="
            absolute
            bg-green-500
            w-2
            h-2
            rounded-full
            right-0
            bottom-0
            transform
            -translate-x-0.5 -translate-y-0.5
          "
        ></div>
      </div>
      <div class="ml-1.5 group flex flex-col items-start">
        <h1
          class="
            font-extrabold
            text-gray-700 text-sm
            font-nunito
            tracking-wide
            group-hover:text-gray-200
          "
        >
          Bessie Cooper
        </h1>
        <h1
          class="text-gray-500 text-xs font-semibold group-hover:text-gray-400"
        >
          Yes, I need your help with my...
        </h1>
      </div>
      <div
        class="
          group
          flex flex-col flex-wrap
          justify-center
          items-center
          space-y-1
        "
      >
        <div
          class="
            text-gray-400
            font-semibold
            inline-block
            text-xxs
            group-hover:text-gray-400
          "
        >
          <h1 class="text-center">Just now</h1>
        </div>
        <h1
          class="
            bg-blue-500
            px-2
            py-1
            text-xxs
            rounded-full
            text-gray-50
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
          src="@/assets/images/profile/1.jpg"
          alt="user-image"
          class="h-12 w-12 rounded-full"
        />
        <div
          class="
            absolute
            bg-green-500
            w-2
            h-2
            rounded-full
            right-0
            bottom-0
            transform
            -translate-x-0.5 -translate-y-0.5
          "
        ></div>
      </div>
      <div class="ml-1.5 group flex flex-col items-start">
        <h1
          class="
            font-extrabold
            text-gray-700 text-sm
            font-nunito
            tracking-wide
            group-hover:text-gray-200
          "
        >
          Bessie Cooper
        </h1>
        <h1
          class="text-gray-500 text-xs font-semibold group-hover:text-gray-400"
        >
          Yes, I need your help with my...
        </h1>
      </div>
      <div
        class="
          group
          flex flex-col flex-wrap
          justify-center
          items-center
          space-y-1
        "
      >
        <div
          class="
            text-gray-400
            font-semibold
            inline-block
            text-xxs
            group-hover:text-gray-400
          "
        >
          <h1 class="text-center">Just now</h1>
        </div>
        <h1
          class="
            bg-blue-500
            px-2
            py-1
            text-xxs
            rounded-full
            text-gray-50
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
          src="@/assets/images/profile/1.jpg"
          alt="user-image"
          class="h-12 w-12 rounded-full"
        />
        <div
          class="
            absolute
            bg-green-500
            w-2
            h-2
            rounded-full
            right-0
            bottom-0
            transform
            -translate-x-0.5 -translate-y-0.5
          "
        ></div>
      </div>
      <div class="ml-1.5 group flex flex-col items-start">
        <h1
          class="
            font-extrabold
            text-gray-700 text-sm
            font-nunito
            tracking-wide
            group-hover:text-gray-200
          "
        >
          Bessie Cooper
        </h1>
        <h1
          class="text-gray-500 text-xs font-semibold group-hover:text-gray-400"
        >
          Yes, I need your help with my...
        </h1>
      </div>
      <div
        class="
          group
          flex flex-col flex-wrap
          justify-center
          items-center
          space-y-1
        "
      >
        <div
          class="
            text-gray-400
            font-semibold
            inline-block
            text-xxs
            group-hover:text-gray-400
          "
        >
          <h1 class="text-center">Just now</h1>
        </div>
        <h1
          class="
            bg-blue-500
            px-2
            py-1
            text-xxs
            rounded-full
            text-gray-50
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
          src="@/assets/images/profile/1.jpg"
          alt="user-image"
          class="h-12 w-12 rounded-full"
        />
        <div
          class="
            absolute
            bg-green-500
            w-2
            h-2
            rounded-full
            right-0
            bottom-0
            transform
            -translate-x-0.5 -translate-y-0.5
          "
        ></div>
      </div>
      <div class="ml-1.5 group flex flex-col items-start">
        <h1
          class="
            font-extrabold
            text-gray-700 text-sm
            font-nunito
            tracking-wide
            group-hover:text-gray-200
          "
        >
          Bessie Cooper
        </h1>
        <h1
          class="text-gray-500 text-xs font-semibold group-hover:text-gray-400"
        >
          Yes, I need your help with my...
        </h1>
      </div>
      <div
        class="
          group
          flex flex-col flex-wrap
          justify-center
          items-center
          space-y-1
        "
      >
        <div
          class="
            text-gray-400
            font-semibold
            inline-block
            text-xxs
            group-hover:text-gray-400
          "
        >
          <h1 class="text-center">Just now</h1>
        </div>
        <h1
          class="
            bg-blue-500
            px-2
            py-1
            text-xxs
            rounded-full
            text-gray-50
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
          src="@/assets/images/profile/1.jpg"
          alt="user-image"
          class="h-12 w-12 rounded-full"
        />
        <div
          class="
            absolute
            bg-green-500
            w-2
            h-2
            rounded-full
            right-0
            bottom-0
            transform
            -translate-x-0.5 -translate-y-0.5
          "
        ></div>
      </div>
      <div class="ml-1.5 group flex flex-col items-start">
        <h1
          class="
            font-extrabold
            text-gray-700 text-sm
            font-nunito
            tracking-wide
            group-hover:text-gray-200
          "
        >
          Bessie Cooper
        </h1>
        <h1
          class="text-gray-500 text-xs font-semibold group-hover:text-gray-400"
        >
          Yes, I need your help with my...
        </h1>
      </div>
      <div
        class="
          group
          flex flex-col flex-wrap
          justify-center
          items-center
          space-y-1
        "
      >
        <div
          class="
            text-gray-400
            font-semibold
            inline-block
            text-xxs
            group-hover:text-gray-400
          "
        >
          <h1 class="text-center">Just now</h1>
        </div>
        <h1
          class="
            bg-blue-500
            px-2
            py-1
            text-xxs
            rounded-full
            text-gray-50
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
          src="@/assets/images/profile/1.jpg"
          alt="user-image"
          class="h-12 w-12 rounded-full"
        />
        <div
          class="
            absolute
            bg-green-500
            w-2
            h-2
            rounded-full
            right-0
            bottom-0
            transform
            -translate-x-0.5 -translate-y-0.5
          "
        ></div>
      </div>
      <div class="ml-1.5 group flex flex-col items-start">
        <h1
          class="
            font-extrabold
            text-gray-700 text-sm
            font-nunito
            tracking-wide
            group-hover:text-gray-200
          "
        >
          Bessie Cooper
        </h1>
        <h1
          class="text-gray-500 text-xs font-semibold group-hover:text-gray-400"
        >
          Yes, I need your help with my...
        </h1>
      </div>
      <div
        class="
          group
          flex flex-col flex-wrap
          justify-center
          items-center
          space-y-1
        "
      >
        <div
          class="
            text-gray-400
            font-semibold
            inline-block
            text-xxs
            group-hover:text-gray-400
          "
        >
          <h1 class="text-center">Just now</h1>
        </div>
        <h1
          class="
            bg-blue-500
            px-2
            py-1
            text-xxs
            rounded-full
            text-gray-50
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
          src="@/assets/images/profile/1.jpg"
          alt="user-image"
          class="h-12 w-12 rounded-full"
        />
        <div
          class="
            absolute
            bg-green-500
            w-2
            h-2
            rounded-full
            right-0
            bottom-0
            transform
            -translate-x-0.5 -translate-y-0.5
          "
        ></div>
      </div>
      <div class="ml-1.5 group flex flex-col items-start">
        <h1
          class="
            font-extrabold
            text-gray-700 text-sm
            font-nunito
            tracking-wide
            group-hover:text-gray-200
          "
        >
          Bessie Cooper
        </h1>
        <h1
          class="text-gray-500 text-xs font-semibold group-hover:text-gray-400"
        >
          Yes, I need your help with my...
        </h1>
      </div>
      <div
        class="
          group
          flex flex-col flex-wrap
          justify-center
          items-center
          space-y-1
        "
      >
        <div
          class="
            text-gray-400
            font-semibold
            inline-block
            text-xxs
            group-hover:text-gray-400
          "
        >
          <h1 class="text-center">Just now</h1>
        </div>
        <h1
          class="
            bg-blue-500
            px-2
            py-1
            text-xxs
            rounded-full
            text-gray-50
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
          src="@/assets/images/profile/1.jpg"
          alt="user-image"
          class="h-12 w-12 rounded-full"
        />
        <div
          class="
            absolute
            bg-green-500
            w-2
            h-2
            rounded-full
            right-0
            bottom-0
            transform
            -translate-x-0.5 -translate-y-0.5
          "
        ></div>
      </div>
      <div class="ml-1.5 group flex flex-col items-start">
        <h1
          class="
            font-extrabold
            text-gray-700 text-sm
            font-nunito
            tracking-wide
            group-hover:text-gray-200
          "
        >
          Bessie Cooper
        </h1>
        <h1
          class="text-gray-500 text-xs font-semibold group-hover:text-gray-400"
        >
          Yes, I need your help with my...
        </h1>
      </div>
      <div
        class="
          group
          flex flex-col flex-wrap
          justify-center
          items-center
          space-y-1
        "
      >
        <div
          class="
            text-gray-400
            font-semibold
            inline-block
            text-xxs
            group-hover:text-gray-400
          "
        >
          <h1 class="text-center">Just now</h1>
        </div>
        <h1
          class="
            bg-blue-500
            px-2
            py-1
            text-xxs
            rounded-full
            text-gray-50
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
          src="@/assets/images/profile/1.jpg"
          alt="user-image"
          class="h-12 w-12 rounded-full"
        />
        <div
          class="
            absolute
            bg-green-500
            w-2
            h-2
            rounded-full
            right-0
            bottom-0
            transform
            -translate-x-0.5 -translate-y-0.5
          "
        ></div>
      </div>
      <div class="ml-1.5 group flex flex-col items-start">
        <h1
          class="
            font-extrabold
            text-gray-700 text-sm
            font-nunito
            tracking-wide
            group-hover:text-gray-200
          "
        >
          Bessie Cooper
        </h1>
        <h1
          class="text-gray-500 text-xs font-semibold group-hover:text-gray-400"
        >
          Yes, I need your help with my...
        </h1>
      </div>
      <div
        class="
          group
          flex flex-col flex-wrap
          justify-center
          items-center
          space-y-1
        "
      >
        <div
          class="
            text-gray-400
            font-semibold
            inline-block
            text-xxs
            group-hover:text-gray-400
          "
        >
          <h1 class="text-center">Just now</h1>
        </div>
        <h1
          class="
            bg-blue-500
            px-2
            py-1
            text-xxs
            rounded-full
            text-gray-50
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
          src="@/assets/images/profile/1.jpg"
          alt="user-image"
          class="h-12 w-12 rounded-full"
        />
        <div
          class="
            absolute
            bg-green-500
            w-2
            h-2
            rounded-full
            right-0
            bottom-0
            transform
            -translate-x-0.5 -translate-y-0.5
          "
        ></div>
      </div>
      <div class="ml-1.5 group flex flex-col items-start">
        <h1
          class="
            font-extrabold
            text-gray-700 text-sm
            font-nunito
            tracking-wide
            group-hover:text-gray-200
          "
        >
          Bessie Cooper
        </h1>
        <h1
          class="text-gray-500 text-xs font-semibold group-hover:text-gray-400"
        >
          Yes, I need your help with my...
        </h1>
      </div>
      <div
        class="
          group
          flex flex-col flex-wrap
          justify-center
          items-center
          space-y-1
        "
      >
        <div
          class="
            text-gray-400
            font-semibold
            inline-block
            text-xxs
            group-hover:text-gray-400
          "
        >
          <h1 class="text-center">Just now</h1>
        </div>
        <h1
          class="
            bg-blue-500
            px-2
            py-1
            text-xxs
            rounded-full
            text-gray-50
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
          src="@/assets/images/profile/1.jpg"
          alt="user-image"
          class="h-12 w-12 rounded-full"
        />
        <div
          class="
            absolute
            bg-green-500
            w-2
            h-2
            rounded-full
            right-0
            bottom-0
            transform
            -translate-x-0.5 -translate-y-0.5
          "
        ></div>
      </div>
      <div class="ml-1.5 group flex flex-col items-start">
        <h1
          class="
            font-extrabold
            text-gray-700 text-sm
            font-nunito
            tracking-wide
            group-hover:text-gray-200
          "
        >
          Bessie Cooper
        </h1>
        <h1
          class="text-gray-500 text-xs font-semibold group-hover:text-gray-400"
        >
          Yes, I need your help with my...
        </h1>
      </div>
      <div
        class="
          group
          flex flex-col flex-wrap
          justify-center
          items-center
          space-y-1
        "
      >
        <div
          class="
            text-gray-400
            font-semibold
            inline-block
            text-xxs
            group-hover:text-gray-400
          "
        >
          <h1 class="text-center">Just now</h1>
        </div>
        <h1
          class="
            bg-blue-500
            px-2
            py-1
            text-xxs
            rounded-full
            text-gray-50
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
          src="@/assets/images/profile/1.jpg"
          alt="user-image"
          class="h-12 w-12 rounded-full"
        />
        <div
          class="
            absolute
            bg-green-500
            w-2
            h-2
            rounded-full
            right-0
            bottom-0
            transform
            -translate-x-0.5 -translate-y-0.5
          "
        ></div>
      </div>
      <div class="ml-1.5 group flex flex-col items-start">
        <h1
          class="
            font-extrabold
            text-gray-700 text-sm
            font-nunito
            tracking-wide
            group-hover:text-gray-200
          "
        >
          Bessie Cooper
        </h1>
        <h1
          class="text-gray-500 text-xs font-semibold group-hover:text-gray-400"
        >
          Yes, I need your help with my...
        </h1>
      </div>
      <div
        class="
          group
          flex flex-col flex-wrap
          justify-center
          items-center
          space-y-1
        "
      >
        <div
          class="
            text-gray-400
            font-semibold
            inline-block
            text-xxs
            group-hover:text-gray-400
          "
        >
          <h1 class="text-center">Just now</h1>
        </div>
        <h1
          class="
            bg-blue-500
            px-2
            py-1
            text-xxs
            rounded-full
            text-gray-50
            font-extrabold
          "
        >
          1
        </h1>
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
