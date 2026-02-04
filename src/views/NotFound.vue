<!-- src/views/NotFound.vue -->
<template>
  <section class="mx-auto max-w-6xl px-6 py-16">
    <div class="mx-auto max-w-2xl text-center">

      <h1 class="mt-6 text-4xl md:text-5xl font-extrabold tracking-tight text-[#1F1F1F]">
        404 - Page Not Found
      </h1>

      <p class="mt-4 text-base md:text-lg text-[#A0A4A8]">
        The link may be broken, or the page may have been moved.
      </p>

      <!-- Actions -->
      <div class="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
        <RouterLink to="/" class="inline-flex items-center rounded-xl bg-[#3A6FF7] px-5 py-3 text-white font-medium
                 hover:bg-[#2F5FE0] transition focus-visible:outline-none focus-visible:ring-2
                 focus-visible:ring-[#3A6FF7] focus-visible:ring-offset-2" aria-label="Go to homepage">
          Go Home
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup>
// No script needed
</script>
