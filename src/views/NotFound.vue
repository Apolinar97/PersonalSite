<!-- src/views/NotFound.vue -->
<template>
  <section class="mx-auto max-w-6xl px-6 py-16">
    <div class="mx-auto max-w-2xl text-center">
      <!-- 404 badge -->
      <div
        class="inline-flex items-center gap-2 rounded-full border  border-red-200 bg-red-50 px-3 py-1 text-sm font-medium text-cyan-900"
      >
        <span class="inline-block h-2 w-2 rounded-full bg-red-900" aria-hidden="true"></span>
        404 — Page not found
      </div>

      <h1 class="mt-6 text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
        This page doesn’t exist.
      </h1>

      <p class="mt-4 text-lg text-gray-600">
        The link may be broken, or the page may have been moved.
      </p>

      <!-- Actions -->
      <div class="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
        <RouterLink
          to="/"
          class="inline-flex items-center rounded-xl bg-cyan-900 px-5 py-3 text-white font-medium
                 hover:bg-cyan-800 transition focus-visible:outline-none focus-visible:ring-2
                 focus-visible:ring-cyan-500 focus-visible:ring-offset-2"
          aria-label="Go to homepage"
        >
          Go Home
        </RouterLink>

        <RouterLink
          to="/projects"
          class="group inline-flex items-center rounded-xl border px-5 py-3 font-medium
                 text-cyan-900 border-cyan-900 hover:bg-cyan-50 transition
                 focus-visible:outline-none focus-visible:ring-2
                 focus-visible:ring-cyan-500 focus-visible:ring-offset-2"
          aria-label="View projects"
        >
          View Projects
          <svg
            class="ml-2 h-5 w-5 transition-transform duration-200 group-hover:translate-x-0.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12h14" />
            <path d="M12 5l7 7-7 7" />
          </svg>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup>
// No script needed
</script>
