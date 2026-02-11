<template>
  <Analytics />
  <BaseLayout>
    <RouterView />
  </BaseLayout>
</template>

<script setup>
import { RouterView } from 'vue-router'
import BaseLayout from '@/components/BaseLayout.vue'
import { Analytics } from '@vercel/analytics/vue';
</script>