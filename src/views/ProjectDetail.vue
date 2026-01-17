<template>
  <section class="mx-auto max-w-6xl px-6 py-16">
    <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
      Project Details
    </h1>
    <p class="text-lg md:text-xl text-gray-600 mb-8">
      Detailed information about the selected project will go here.
    </p>
    <RouterLink to="/projects" class="inline-flex items-center rounded-xl border px-5 py-3 font-medium
             text-cyan-900 border-cyan-900 hover:bg-cyan-50 transition
             focus-visible:outline-none focus-visible:ring-2
             focus-visible:ring-cyan-500 focus-visible:ring-offset-2" aria-label="Back to projects">
      Back to Projects
      <svg class="ml-2 h-5 w-5 transition-transform duration-200 group-hover:translate-x-0.5" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
        aria-hidden="true">
        <path d="M19 12H5" />
        <path d="M12 19l-7-7 7-7" />
      </svg>
    </RouterLink>
  </section>
</template>