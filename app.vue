<script setup lang="ts">
  // Use SSR-safe IDs for Headless UI to avoid hydration errors
  provideHeadlessUseId(() => useId())
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
