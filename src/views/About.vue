<script setup>
import headshot from '@/assets/headshot.jpg'
</script>

<template>
  <section class="mx-auto max-w-4xl px-4 py-8">
    <h1 class="text-3xl font-extrabold text-slate-800">About</h1>

    <div class="mt-6 grid gap-8 md:grid-cols-[1fr,280px] items-start">
      <!-- Text -->
      <div class="text-slate-700 leading-relaxed">
        <p>This is the home page content.</p>
      </div>

      <!-- Headshot -->
      <figure class="justify-self-center md:justify-self-end">
        <!-- Portrait crop (4:5-ish) -->
        <div
          class="w-40 h-52 sm:w-48 sm:h-60 md:w-[280px] md:h-[350px]
                 overflow-hidden rounded-2xl shadow-md ring-1 ring-black/5 bg-slate-100">
          <img
            :src="headshot"
            alt="Professional headshot of Apolinar Camacho"
            class="w-full h-full object-cover object-center"
            loading="lazy" decoding="async"
            width="700" height="875" />
        </div>
      </figure>
    </div>
  </section>
</template>
