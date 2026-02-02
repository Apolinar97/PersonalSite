<template>
  <section class="mx-auto max-w-6xl px-6 py-16">
    <h1 class="text-3xl md:text-4xl font-extrabold tracking-tight mb-8">Projects</h1>
    <div v-if="loading">Loading projects…</div>
    <div v-else-if="error" class="text-red-600">
      Error: {{ error }}
      <button
        type="button"
        class="ml-3 inline-flex items-center rounded-lg border px-3 py-1.5 text-sm font-medium
               text-cyan-900 border-cyan-900 hover:bg-cyan-50 transition
               focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
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
