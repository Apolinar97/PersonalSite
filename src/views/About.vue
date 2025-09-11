<script setup>
import headshot from '@/assets/apolinar-headshot.jpg'
</script>

<template>
  <section class="mx-auto max-w-6xl px-6 py-16">
    <div class="mt-8 md:mt-10 grid gap-8 md:gap-12 md:grid-cols-[minmax(0,1fr)_300px] items-start">
      <!-- LEFT: Intro Text -->
      <div class="max-w-prose text-slate-700 space-y-5">
        <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-800 leading-tight
                 border-l-4 border-cyan-900 pl-3">
          Hi, I’m Apolinar — <span class="text-cyan-900">I build data solutions</span>.
        </h1>

        <p class="text-lg md:text-xl leading-8 text-slate-800">
          I’m a developer focused on
          <span class="rounded px-1 bg-cyan-100/60">data engineering &amp; analytics</span>. I enjoy building
          reliable data pipelines and turning raw data into clear, actionable insights.
        </p>

        <p class="text-base md:text-lg leading-7">
          Day to day I work with T-SQL/SQL Server, Python (Pandas/Jupyter), Airflow, Power BI (DAX), and .NET Core (C#)
          to deliver end-to-end solutions—from ingestion and transforms to modeling and dashboards.
        </p>
      </div>

      <!-- RIGHT: Headshot -->
      <figure class="justify-self-center md:justify-self-end md:self-start md:order-last">
        <div class="w-40 h-52 sm:w-48 sm:h-60 md:w-[300px] md:h-[375px]
                 overflow-hidden rounded-2xl shadow-md ring-1 ring-black/5 bg-slate-100">
          <img :src="headshot" srcset="
              /src/assets/apolinar-headshot.jpg 700w,
              /src/assets/apolinar-headshot.jpg 350w
            " sizes="(min-width: 1024px) 300px, (min-width: 640px) 192px, 160px"
            alt="Professional headshot of Apolinar Camacho" class="w-full h-full object-cover object-[center_22%]"
            loading="lazy" decoding="async" width="700" height="875" />
        </div>
      </figure>
    </div>

  </section>
</template>
