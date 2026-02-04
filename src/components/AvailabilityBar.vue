<template>
  <section
    class="rounded-2xl border border-[#3A6FF7]/20 bg-[#3A6FF7]/10 p-4 sm:p-5
           flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
    aria-label="Availability"
  >
    <div class="flex items-center gap-3">
      <span
        class="inline-flex items-center gap-2 rounded-full bg-white text-[#1F1F1F]
               ring-1 ring-[#3A6FF7]/20 px-3 py-1 text-sm font-medium"
      >
        <!-- green dot -->
        <span class="h-2.5 w-2.5 rounded-full bg-[#3A6FF7]" aria-hidden="true"></span>
        Open for hire
      </span>
    </div>

    <!-- Right: roles + location chips -->
    <div class="flex flex-wrap items-center gap-2">
      <span
        v-for="r in roles"
        :key="r"
        class="text-xs px-2.5 py-1 rounded-full bg-white text-[#1F1F1F] ring-1 ring-[#A0A4A8]/30"
      >
        {{ r }}
      </span>

      <span
        v-if="location"
        class="text-xs px-2.5 py-1 rounded-full bg-white text-[#1F1F1F] ring-1 ring-[#A0A4A8]/30 inline-flex items-center gap-1.5"
      >
        <!-- pin icon -->
        <svg class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
             stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M21 10c0 6-9 12-9 12S3 16 3 10a9 9 0 1 1 18 0Z"/><circle cx="12" cy="10" r="3"/>
        </svg>
        {{ location }}
      </span>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  roles: { type: Array, default: () => [] },
  location: { type: String, default: '' },
})
</script>
