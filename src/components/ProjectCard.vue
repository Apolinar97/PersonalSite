<template>
  <article class="group h-full rounded-2xl border border-[#A0A4A8]/30 bg-white p-5 transition
           hover:shadow-md focus-within:shadow-md hover:-translate-y-0.5 focus-within:-translate-y-0.5">
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
  // matches your normalized shape from useProjects()
  project: {
    type: Object,
    required: true,
    default: () => ({ projectName: '', description: '', technologies: [], repositoryUrl: '' })
  }
})

// keep cards tidy on long descriptions
const truncated = computed(() => {
  const s = String(props.project?.description || '')
  return s.length > 160 ? s.slice(0, 160) + '…' : s
})
</script>
