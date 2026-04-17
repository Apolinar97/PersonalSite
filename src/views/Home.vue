<!-- Home.vue -->
<template>
  <section class="mx-auto max-w-6xl px-6 py-12">
    <!-- HERO -->
    <div class="flex flex-col items-center text-center space-y-3">
      <p class="text-xs uppercase tracking-[0.2em] text-accent font-semibold">
        Developer · Data Engineer · Analyst
      </p>
      <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight text-primary">
        Hi, I'm Apolinar — I build
        <span class="text-accent">data-driven solutions</span>.
      </h1>

      <p class="text-base sm:text-lg md:text-xl text-secondary max-w-xl md:max-w-2xl">
        Software developer with 3+ years of experience, now focused on
        data engineering and analytics. Based in San Diego.
      </p>

      <!-- CTAs -->
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a :href="resumeUrl" target="_blank" rel="noopener noreferrer" class="inline-flex items-center rounded-xl bg-accent px-5 py-3 text-white font-medium
                 hover:bg-accent-hover transition focus-visible:outline-none focus-visible:ring-2
                 focus-visible:ring-accent focus-visible:ring-offset-2" aria-label="Download my resume (PDF)">
          View Resume
        </a>
        <RouterLink to="/projects" class="group inline-flex items-center rounded-xl border px-5 py-3 font-medium
                 text-accent border-accent hover:bg-accent/10 transition
                 focus-visible:outline-none focus-visible:ring-2
                 focus-visible:ring-accent focus-visible:ring-offset-2" aria-label="View my projects">
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
    <div class="mt-6 md:mt-7 w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent">
    </div>

    <!-- FEATURED PROJECTS -->
    <div class="mt-10 md:mt-12">
      <div class="flex items-center justify-between mb-5">
        <p class="text-xs uppercase tracking-[0.2em] text-accent font-semibold">Selected Work</p>
        <RouterLink to="/projects" class="text-xs font-medium text-accent hover:text-accent-hover transition">
          View all &rarr;
        </RouterLink>
      </div>

      <div v-if="loading" class="space-y-3">
        <div v-for="n in 3" :key="n" class="h-16 rounded-xl bg-secondary/10 animate-pulse"></div>
      </div>

      <p v-else-if="error" class="text-sm text-secondary">Unable to load projects right now.</p>

      <ul v-else class="space-y-3">
        <li v-for="p in featuredProjects" :key="p.projectName">
          <RouterLink :to="`/projects/${p.slug}`"
            class="group flex items-center justify-between rounded-xl border border-secondary/30 bg-white px-5 py-4
                   transition hover:shadow-md hover:-translate-y-0.5">
            <div class="min-w-0">
              <div class="flex items-center gap-2">
                <h3 class="text-sm font-semibold text-primary">{{ p.projectName }}</h3>
                <span v-if="p.projectStage" class="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full"
                  :class="{
                    'text-accent-hover bg-accent/10': p.projectStage === 'idea',
                    'text-stage-progress-text bg-stage-progress-bg/35': p.projectStage === 'in_progress',
                    'text-stage-live-text bg-stage-live-bg/30': p.projectStage === 'live',
                    'text-stage-paused-text bg-stage-paused-bg/28': p.projectStage === 'paused',
                  }">
                  {{ p.projectStage.replace(/_/g, ' ') }}
                </span>
              </div>
              <p class="mt-1 text-sm text-secondary truncate">{{ p.description }}</p>
            </div>
            <svg class="ml-4 h-5 w-5 shrink-0 text-secondary transition-all group-hover:text-accent group-hover:translate-x-0.5"
              viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M5 12h14" /><path d="M12 5l7 7-7 7" />
            </svg>
          </RouterLink>
        </li>
      </ul>
    </div>

    <!-- SKILLS -->
    <SkillsGrid class="mt-10 md:mt-12" :items="skills" />

    <!-- CTA -->
    <div class="mt-12 md:mt-16 text-center">
      <p class="text-sm text-secondary">Interested in working together?</p>
      <RouterLink to="/contact" class="mt-1 inline-flex items-center text-accent font-medium hover:text-accent-hover transition group">
        Let's connect
        <svg class="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M5 12h14" /><path d="M12 5l7 7-7 7" />
        </svg>
      </RouterLink>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useProjects } from '@/composables/useProjects'
import SkillsGrid from '../components/SkillsGrid.vue'

const resumeUrl = import.meta.env.VITE_RESUME_URL
const { projects, loading, error } = useProjects()
// TODO: Replace hardcoded slug filter with a `featured: true` field in projects.json
const featuredProjects = computed(() =>
  projects.value.filter(p => p.slug !== 'personal-portfolio-site').slice(0, 3)
)

const skills = [
  { label: '.NET Core', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg' },
  { label: 'C#', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg' },
  { label: 'Python', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
  { label: 'SQL Server', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original-wordmark.svg' },
  { label: 'Power BI', iconUrl: 'https://logo.svgcdn.com/logos/microsoft-power-bi.svg' },
  { label: "Git", iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
  // { label: "Apache Airflow", iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apacheairflow/apacheairflow-original-wordmark.svg' }
]
</script>
