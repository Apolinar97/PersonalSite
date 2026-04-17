<template>
  <Analytics />
  <BaseLayout>
    <RouterView v-slot="{ Component }">
      <Transition name="page" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </BaseLayout>
</template>

<script setup>
import { RouterView } from 'vue-router'
import BaseLayout from '@/components/BaseLayout.vue'
import { Analytics } from '@vercel/analytics/vue';
</script>