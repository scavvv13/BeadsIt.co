<script setup lang="ts">
import { NuxtImg } from "#components";
</script>

<template>
  <header
    class="fixed top-0 right-0 left-0 flex justify-between backdrop-blur-lg w-full px-3 py-3 pt-3 md:w-full md:px-16 md:py-3 lg:px-16 lg:w-full lg:py-3"
  >
    <!-- BeadsIt Logo and the left group including navlinks-->
    <div class="flex items-center space-x-20">
      <!-- logo and the letters "beadsIt" -->
      <div class="flex items-center space-x-2">
        <NuxtImg src="/beadsit-small.png" alt="Logo" class="w-14 lg:w-14" />
      </div>

      <!-- NavLinks for large screens -->
      <div
        class="hidden md:hidden lg:flex md:items-center md:space-x-4 lg:items-center lg:space-x-12"
      >
        <NuxtLink to="/" class="text-xl font-light">Home</NuxtLink>
        <NuxtLink to="/about" class="text-xl font-light">About</NuxtLink>
        <NuxtLink to="/contact" class="text-xl font-light"
          >Collections</NuxtLink
        >
        <NuxtLink to="/contact" class="text-xl font-light">Contact</NuxtLink>
        <NuxtLink to="/shop" class="text-xl font-light">Shop</NuxtLink>
        <NuxtLink to="/shop" class="text-xl font-light">Bead maker</NuxtLink>
      </div>
    </div>

    <!-- Menu button for small devices -->
    <div class="md:hidden lg:hidden place-self-center">
      <button @click="">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-11 w-11"
          fill="none"
          viewBox="0 0 24 24"
          stroke=" #432942"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
    </div>

    <!-- far right side  -->
    <!-- lofin sign up button for large screens; hidden in small screens -->
    <div class="hidden md:flex lg:flex items-center gap-x-5">
      <div class="flex items-center gap-x-2">
        <NuxtLink
          to="/login"
          class="text-lg border px-5 py-2 rounded-lg bg-secondary text-white"
          >Login</NuxtLink
        >
        <NuxtLink
          to="/register"
          class="text-lg border border-secondary px-5 py-2 rounded-lg text-secondary"
          >Register</NuxtLink
        >
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-7"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
        />
      </svg>
    </div>
  </header>
</template>
