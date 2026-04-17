<template>
  <section class="mx-auto max-w-6xl px-6 py-16">
    <header class="mb-8">
      <p class="text-xs uppercase tracking-[0.3em] text-accent font-semibold">Selected Work</p>
      <h1 class="mt-2 text-4xl md:text-5xl font-extrabold tracking-tight text-primary">
        Projects
      </h1>
      <div class="mt-3 h-1.5 w-28 rounded-full bg-gradient-to-r from-primary to-accent animate-fade-in"></div>
    </header>
    <ul v-if="loading" class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <li v-for="n in 6" :key="n">
        <ProjectCardSkeleton />
      </li>
    </ul>
    <div v-else-if="error" class="text-red-600">
      Error: {{ error }}
      <button
        type="button"
        class="ml-3 inline-flex items-center rounded-lg border px-3 py-1.5 text-sm font-medium
               text-accent border-accent hover:bg-accent/10 transition
               focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
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
import ProjectCardSkeleton from '@/components/ProjectCardSkeleton.vue'

const { projects, loading, error, reload } = useProjects()
</script>
