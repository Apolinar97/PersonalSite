<template>
  <article class="group h-full rounded-2xl border border-secondary/30 bg-white p-5 transition overflow-hidden
           hover:shadow-md focus-within:shadow-md hover:-translate-y-0.5 focus-within:-translate-y-0.5">
    <div v-if="stageMeta"
      :class="['-mx-5 -mt-5 mb-4 px-5 py-2 text-[11px] uppercase tracking-[0.2em] font-semibold border-b', stageMeta.className]">
      {{ stageMeta.label }}
    </div>
    <h3 class="text-lg font-semibold text-primary">
      {{ project.projectName }}
    </h3>

    <p class="mt-2 text-sm text-secondary">
      {{ truncated }}
    </p>

    <!-- Tech badges -->
    <ul v-if="project.technologies?.length" class="mt-3 flex flex-wrap gap-2">
      <li v-for="t in project.technologies" :key="t"
        class="text-xs px-2.5 py-1 rounded-full bg-accent/10 text-primary border border-accent/20">
        {{ t }}
      </li>
    </ul>

    <div class="mt-4 flex items-center gap-6">
      <a v-if="project.repositoryUrl" :href="project.repositoryUrl" target="_blank" rel="noopener noreferrer" class="inline-flex items-center text-accent text-sm font-medium
               outline-none focus-visible:ring-2 focus-visible:ring-accent rounded">
        View Repository
        <svg class="ml-1.5 h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
          aria-hidden="true">
          <path d="M5 12h14" />
          <path d="M12 5l7 7-7 7" />
        </svg>
      </a>
      <RouterLink v-if="project.slug" :to="`/projects/${project.slug}`" class="inline-flex items-center text-accent text-sm font-medium
         outline-none focus-visible:ring-2 focus-visible:ring-accent rounded">
        Read More
        <svg class="ml-1.5 h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
          aria-hidden="true">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          <path d="M15 3h6v6" />
          <path d="M10 14L21 3" />
        </svg>
      </RouterLink>
    </div>
  </article>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  project: {
    type: Object,
    required: true,
    default: () => ({ projectName: '', description: '', technologies: [], repositoryUrl: '' })
  }
})

const truncated = computed(() => {
  const s = String(props.project?.description || '')
  return s.length > 160 ? s.slice(0, 160) + '…' : s
})

const stageMeta = computed(() => {
  const stage = String(props.project?.projectStage || '').trim()
  if (!stage) return null
  const map = {
    idea: {
      label: 'Idea',
      className: 'text-accent-hover bg-accent/10 border-accent/20'
    },
    in_progress: {
      label: 'In Progress',
      className: 'text-stage-progress-text bg-stage-progress-bg/35 border-stage-progress-border/45'
    },
    mvp: {
      label: 'MVP',
      className: 'text-stage-mvp-text bg-stage-mvp-bg/30 border-stage-mvp-border/40'
    },
    live: {
      label: 'Live',
      className: 'text-stage-live-text bg-stage-live-bg/30 border-stage-live-border/40'
    },
    paused: {
      label: 'Paused',
      className: 'text-stage-paused-text bg-stage-paused-bg/28 border-stage-paused-border/40'
    }
  }
  if (!map[stage]) {
    return {
      label: `Unknown stage: ${stage.replace(/_/g, ' ')}`,
      className: 'text-stage-default-text bg-stage-default-bg/35 border-stage-default-border/40'
    }
  }
  return map[stage]
})
</script>
