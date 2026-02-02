<!-- Home.vue -->
<template>
  <section class="mx-auto max-w-6xl px-6 py-12">
    <!-- HERO (buttons inside, tighter spacing/height) -->
    <div class="flex flex-col items-center text-center space-y-3">
      <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight">
        Hi, I'm Apolinar
      </h1>

      <p class="text-base sm:text-lg md:text-xl text-gray-600 max-w-xl md:max-w-2xl">
        A .NET developer with strong SQL experience, focused on backend systems and data pipelines, expanding into data
        engineering.</p>

      <!-- CTAs -->
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a :href="resumeUrl" target="_blank" rel="noopener noreferrer" class="inline-flex items-center rounded-xl bg-cyan-900 px-5 py-3 text-white font-medium
                 hover:bg-cyan-800 transition focus-visible:outline-none focus-visible:ring-2
                 focus-visible:ring-cyan-500 focus-visible:ring-offset-2" aria-label="Download my resume (PDF)">
          View Resume
        </a>
        <RouterLink to="/projects" class="group inline-flex items-center rounded-xl border px-5 py-3 font-medium
                 text-cyan-900 border-cyan-900 hover:bg-cyan-50 transition
                 focus-visible:outline-none focus-visible:ring-2
                 focus-visible:ring-cyan-500 focus-visible:ring-offset-2" aria-label="View my projects">
          View Projects
          <svg class="ml-2 h-5 w-5 transition-transform duration-200 group-hover:translate-x-0.5" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            aria-hidden="true">
            <path d="M5 12h14" />
            <path d="M12 5l7 7-7 7" />
          </svg>
        </RouterLink>
      </div>
    </div>

    <!-- Divider -->
    <div class="mt-6 md:mt-7 w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-teal-200 to-transparent"></div>

    <!-- SKILLS -->
    <SkillsGrid class="mt-5 md:mt-6" :items="skills" />
  </section>
</template>

<script setup>
import SkillsGrid from '../components/SkillsGrid.vue'
const resumeUrl = import.meta.env.VITE_RESUME_URL
const skills = [
  { label: '.NET Core', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg' },
  { label: 'C#',  iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg' },
  { label: 'Python',  iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
  { label: 'SQL Server',  iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original-wordmark.svg' },
  { label: 'Power BI',  iconUrl: 'https://logo.svgcdn.com/logos/microsoft-power-bi.svg' },
  { label: "Git",  iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
  {label: "Apache Airflow", iconUrl:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apacheairflow/apacheairflow-original-wordmark.svg'}
]
</script>
