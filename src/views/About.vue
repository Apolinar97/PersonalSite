<script setup>
import headshot from '@/assets/apolinar-headshot.jpg'
</script>

<template>
  <section class="mx-auto max-w-6xl px-6 py-16">
    <div class="mt-8 md:mt-10 grid gap-8 md:gap-12 md:grid-cols-[minmax(0,1fr)_300px] items-start">
      <!-- LEFT: Intro Text -->
      <div class="max-w-prose text-[#1F1F1F] space-y-5">
        <div class="space-y-2">
          <p class="text-xs uppercase tracking-[0.2em] text-[#3A6FF7] font-semibold">Developer • data & analytics</p>
          <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight text-[#1F1F1F] leading-tight
                   border-l-4 border-[#3A6FF7] pl-3">
            Hi, I’m Apolinar — <span class="text-[#3A6FF7]">I build data solutions</span>.
          </h1>
          <p class="text-base md:text-lg text-[#A0A4A8]">
            I'm a data‑focused developer passionate about building solutions and solving meaningful problems. I have 3+
            years of experience working with data technologies and modern development practices.
          </p>
        </div>

        <div class="space-y-4">
          <p class="text-base md:text-lg leading-7">
            Working as a developer on a small team gave me the chance to wear many hats. That environment introduced me
            to data‑centered projects, and I quickly became fascinated by how data shapes the way organizations make
            informed decisions. Through that work, I gained exposure to tools like Power BI and concepts such as data
            modeling and ETL, which ultimately inspired me to pivot my career toward the data space
          </p>
          <p class="text-base md:text-lg leading-7">
            Today, I'm actively pursuing a data engineer/analyst career path. I enjoy learning new concepts,
            experimenting with emerging technologies, and building solutions that turn raw information into meaningful
            insights. I’m currently based in San Diego, CA, and I hold a degree in Computer Science from California
            State University San Marcos.
          </p>
          <p class="text-base md:text-lg leading-7">
            Right now, I’m studying for the AWS Certified Data Engineer – Associate certification and building projects
            using cloud infrastructure. Stay tuned on my site as I continue to share new projects and write about what
            I’m learning.
          </p>
        </div>
      </div>

      <!-- RIGHT: Headshot -->
      <figure class="justify-self-center md:justify-self-end md:self-start md:order-last">
        <div class="relative">
          <div
            class="absolute -inset-3 rounded-3xl bg-gradient-to-br from-[#3A6FF7]/15 via-white to-[#A0A4A8]/20 blur-sm">
          </div>
          <div class="relative w-40 h-52 sm:w-48 sm:h-60 md:w-[300px] md:h-[375px]
                 overflow-hidden rounded-3xl shadow-md ring-2 ring-[#A0A4A8]/30 bg-white">
            <img :src="headshot" srcset="
              /src/assets/apolinar-headshot.jpg 700w,
              /src/assets/apolinar-headshot.jpg 350w
            " sizes="(min-width: 1024px) 300px, (min-width: 640px) 192px, 160px"
              alt="Professional headshot of Apolinar Camacho" class="w-full h-full object-cover object-[center_20%]"
              loading="lazy" decoding="async" width="700" height="875" />
          </div>
        </div>
        <div
          class="mt-4 rounded-2xl border border-[#3A6FF7]/20 bg-white/90 p-3 text-left text-sm text-[#1F1F1F] shadow-sm">
          <p class="text-[11px] uppercase tracking-[0.2em] text-[#3A6FF7] font-semibold">TLDR</p>
          <div class="mt-2 space-y-1.5">
            <p><span class="font-semibold text-[#1F1F1F]">Experience:</span> 3+ years in data-focused development.</p>
            <p><span class="font-semibold text-[#1F1F1F]">Education:</span> B.S. Computer Science, CSUSM.</p>
            <p><span class="font-semibold text-[#1F1F1F]">Now:</span> AWS Data Engineer cert + cloud projects.</p>
          </div>
        </div>
      </figure>
    </div>

  </section>
</template>
