<template>
  <section class="mx-auto max-w-6xl px-6 py-16">
    <header class="mb-8">
      <p class="text-xs uppercase tracking-[0.3em] text-[#3A6FF7] font-semibold">Selected Work</p>
      <h1 class="mt-2 text-4xl md:text-5xl font-extrabold tracking-tight text-[#1F1F1F]">
        Projects
      </h1>
      <div class="mt-3 h-1.5 w-28 rounded-full bg-gradient-to-r from-[#1F1F1F] to-[#3A6FF7]"></div>
    </header>
    <div v-if="loading">Loading projects…</div>
    <div v-else-if="error" class="text-red-600">
      Error: {{ error }}
      <button
        type="button"
        class="ml-3 inline-flex items-center rounded-lg border px-3 py-1.5 text-sm font-medium
               text-[#3A6FF7] border-[#3A6FF7] hover:bg-[#3A6FF7]/10 transition
               focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3A6FF7]"
        @click="reload"
      >
        Retry
      </button>
    </div>

    <ul v-else class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <li v-for="(p, i) in projects" :key="p.projectName + i">
        <ProjectCard :project="p" />
      </li>
    </ul>
  </section>
</template>
<script setup>
import { useProjects } from '@/composables/useProjects'
import ProjectCard from '@/components/ProjectCard.vue'

const { projects, loading, error, reload } = useProjects()
</script>
