<script setup lang="ts">
const { regularCollection } = useCollections();

const braceletImage = computed(() =>
  regularCollection.value.map((item) => item.href)
);
</script>

<template>
  <div class="flex-col items-center justify-center w-full h-full bg-secondary1">
    <div v-for="image in braceletImage" :key="image">
      <NuxtImg :src="image" alt="Bracelet" class="w-full" />
    </div>
  </div>
</template>
