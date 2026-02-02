<script setup>
import headshot from '@/assets/apolinar-headshot.jpg'
</script>

<template>
  <section class="mx-auto max-w-6xl px-6 py-16">
    <div class="mt-8 md:mt-10 grid gap-8 md:gap-12 md:grid-cols-[minmax(0,1fr)_300px] items-start">
      <!-- LEFT: Intro Text -->
      <div class="max-w-prose text-slate-700 space-y-5">
        <div class="space-y-2">
          <p class="text-xs uppercase tracking-[0.2em] text-cyan-700 font-semibold">Developer • data & analytics</p>
          <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-800 leading-tight
                   border-l-4 border-cyan-900 pl-3">
            Hi, I’m Apolinar — <span class="text-cyan-900">I build data solutions</span>.
          </h1>
          <p class="text-base md:text-lg text-slate-600">
            I’m a developer who builds reliable software and loves applying it to data problems—pipelines, analytics,
            and decision support.
          </p>
        </div>

        <div class="space-y-4">
          <p class="text-base md:text-lg leading-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus
            ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
          </p>
          <p class="text-base md:text-lg leading-7 text-slate-600">
            Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum
            lacinia arcu eget nulla.
          </p>
          <p class="text-base md:text-lg leading-7">
            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur
            sodales ligula in libero.
          </p>
        </div>
      </div>

      <!-- RIGHT: Headshot -->
      <figure class="justify-self-center md:justify-self-end md:self-start md:order-last">
        <div class="relative">
          <div class="absolute -inset-3 rounded-3xl bg-gradient-to-br from-cyan-100 via-white to-slate-100 blur-sm"></div>
          <div class="relative w-40 h-52 sm:w-48 sm:h-60 md:w-[300px] md:h-[375px]
                 overflow-hidden rounded-3xl shadow-md ring-2 ring-cyan-100 bg-slate-100">
          <img :src="headshot" srcset="
              /src/assets/apolinar-headshot.jpg 700w,
              /src/assets/apolinar-headshot.jpg 350w
            " sizes="(min-width: 1024px) 300px, (min-width: 640px) 192px, 160px"
            alt="Professional headshot of Apolinar Camacho" class="w-full h-full object-cover object-[center_20%]"
            loading="lazy" decoding="async" width="700" height="875" />
          </div>
        </div>
        <figcaption class="mt-3 text-center text-xs uppercase tracking-[0.2em] text-slate-500">
          Based in San Diego
        </figcaption>
      </figure>
    </div>

  </section>
</template>
