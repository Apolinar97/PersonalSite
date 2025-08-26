<template>
  <section class="mx-auto max-w-6xl px-6 py-16">
    <h1 class="text-3xl md:text-4xl font-extrabold tracking-tight mb-8">Projects</h1>
    <div v-if="loading">Loading projects…</div>
    <div v-else-if="error" class="text-red-600">Error: {{ error }}</div>

    <ul v-else class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <li v-for="(p, i) in projects" :key="p.projectName + i">
        <ProjectCard :project="p" />
        {{ p.projectPageSlug }}
      </li>
    </ul>
  </section>
</template>
<script setup>
import { useProjects } from '@/composables/useProjects'
import ProjectCard from '@/components/ProjectCard.vue'

const { projects, loading, error } = useProjects()
</script>