<!-- src/views/NotFound.vue -->
<template>
  <section class="mx-auto max-w-6xl px-6 py-12">
    <div class="mx-auto max-w-2xl text-center">

      <h1 class="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
        404 - Page Not Found
      </h1>

      <p class="mt-3 text-base md:text-lg text-gray-600">
        The link may be broken, or the page may have been moved.
      </p>

      <!-- Actions -->
      <div class="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
        <RouterLink to="/" class="inline-flex items-center rounded-xl bg-cyan-900 px-5 py-3 text-white font-medium
                 hover:bg-cyan-800 transition focus-visible:outline-none focus-visible:ring-2
                 focus-visible:ring-cyan-500 focus-visible:ring-offset-2" aria-label="Go to homepage">
          Go Home
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup>
// No script needed
</script>
