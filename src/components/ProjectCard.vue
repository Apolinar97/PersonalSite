<template>
  <article class="group h-full rounded-2xl border border-[#A0A4A8]/30 bg-white p-5 transition overflow-hidden
           hover:shadow-md focus-within:shadow-md hover:-translate-y-0.5 focus-within:-translate-y-0.5">
    <div v-if="stageMeta"
      :class="['-mx-5 -mt-5 mb-4 px-5 py-2 text-[11px] uppercase tracking-[0.2em] font-semibold border-b', stageMeta.className]">
      {{ stageMeta.label }}
    </div>
    <h3 class="text-lg font-semibold text-[#1F1F1F]">
      {{ project.projectName }}
    </h3>

    <p class="mt-2 text-sm text-[#A0A4A8]">
      {{ truncated }}
    </p>

    <!-- Tech badges -->
    <ul v-if="project.technologies?.length" class="mt-3 flex flex-wrap gap-2">
      <li v-for="t in project.technologies" :key="t"
        class="text-xs px-2.5 py-1 rounded-full bg-[#3A6FF7]/10 text-[#1F1F1F] border border-[#3A6FF7]/20">
        {{ t }}
      </li>
    </ul>

    <div class="mt-4 flex items-center gap-6">
      <a v-if="project.repositoryUrl" :href="project.repositoryUrl" target="_blank" rel="noopener noreferrer" class="inline-flex items-center text-[#3A6FF7] text-sm font-medium
               outline-none focus-visible:ring-2 focus-visible:ring-[#3A6FF7] rounded">
        View Repository
        <svg class="ml-1.5 h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
          aria-hidden="true">
          <path d="M5 12h14" />
          <path d="M12 5l7 7-7 7" />
        </svg>
      </a>
      <RouterLink v-if="project.slug" :to="`/projects/${project.slug}`" class="inline-flex items-center text-[#3A6FF7] text-sm font-medium
         outline-none focus-visible:ring-2 focus-visible:ring-[#3A6FF7] rounded">
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
      className: 'text-[#2F5FE0] bg-[#3A6FF7]/10 border-[#3A6FF7]/20'
    },
    in_progress: {
      label: 'In Progress',
      className: 'text-[#B6422E] bg-[#F0B9AE]/35 border-[#E39A8B]/45'
    },
    live: {
      label: 'Live',
      className: 'text-[#217A4B] bg-[#8ED3B0]/30 border-[#74C8A0]/40'
    },
    paused: {
      label: 'Paused',
      className: 'text-[#6B4BC7] bg-[#BFA8F0]/28 border-[#A98AE6]/40'
    }
  }
  if (!map[stage]) {
    return {
      label: `Unknown stage: ${stage.replace(/_/g, ' ')}`,
      className: 'text-[#8A6A00] bg-[#F4C95D]/35 border-[#E3B64B]/40'
    }
  }
  return map[stage]
})
</script>
