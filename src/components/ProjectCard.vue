<template>
  <article
    class="group h-full rounded-2xl border border-gray-200 bg-white p-5 transition
           hover:shadow-md focus-within:shadow-md"
  >
    <h3 class="text-lg font-semibold text-gray-900">
      {{ project.projectName }}
    </h3>

    <p class="mt-2 text-sm text-gray-600">
      {{ truncated }}
    </p>

    <!-- Tech badges -->
    <ul v-if="project.technologies?.length" class="mt-3 flex flex-wrap gap-2">
      <li
        v-for="t in project.technologies"
        :key="t"
        class="text-xs px-2.5 py-1 rounded-full bg-cyan-50 text-cyan-900 border border-cyan-100"
      >
        {{ t }}
      </li>
    </ul>

    <div class="mt-4">
      <a
        v-if="project.repositoryUrl"
        :href="project.repositoryUrl"
        target="_blank"
        rel="noopener"
        class="inline-flex items-center text-cyan-900 text-sm font-medium
               outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded"
      >
        View repository
        <svg
          class="ml-1.5 h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5"
          viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
          stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"
        >
          <path d="M5 12h14" />
          <path d="M12 5l7 7-7 7" />
        </svg>
      </a>
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
