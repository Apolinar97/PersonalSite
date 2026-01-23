<template>
  <NotFound v-if="!project" />

  <section v-else class="mx-auto max-w-6xl px-6 py-16">
    <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
      Project Details
    </h1>
    <p class="text-lg md:text-xl text-gray-600 mb-8">
      Detailed information about the selected project will go here.
    </p>
  </section>
</template>


// Handle project not found
<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { ref, watchEffect } from 'vue';
import MarkdownIt from 'markdown-it';
import { useProjects } from '@/composables/useProjects';
import NotFound from './NotFound.vue';
const { projects } = useProjects();
const route = useRoute();
const project = computed(() => projects.value.find(p => p.projectPageSlug === route.params.slug))

const mdFiles = import.meta.glob('/src/content/projects/*.md', { as: 'raw' });

const mdRaw = ref('')
const mdError = ref(false)

watchEffect(async () => {
  if (!project.value) return;
  
  mdRaw.value = ''
  mdError.value = false

  const slug = String(route.params.slug || '')
  const path = `/src/content/projects/${slug}.md`
  const loader = mdFiles[path]
  if (!loader) {
    mdError.value = true
    return
  }
  try {
    mdRaw.value = await loader()
    console.log(`Loaded markdown content for ${slug}:`, mdRaw.value)
  } catch (e) {
    mdError.value = true
  }
})
const md = new MarkdownIt({
  html: false,
  linkify: true,
  breaks: false,
});
const mdHtml = computed(() =>
mdRaw.value ? md.render(mdRaw.value) : ''
);

</script>