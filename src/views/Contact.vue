<script setup>
import { ref } from 'vue'
import AvailabilityBar from '@/components/AvailabilityBar.vue'

const email       = 'camacho.apolinar97@gmail.com'
const linkedin    = 'https://www.linkedin.com/in/apolinar-camacho-06560b1a1/'
const github      = 'https://github.com/apolinar97'
const location    = 'San Diego, CA (in-office, hybrid, or remote)'
const roles       = ['Data Engineer', 'Data Analyst', 'Developer']

const copied = ref(false)
const mailto = `mailto:${email}?subject=${encodeURIComponent('Hello Apolinar')}`

async function copyEmail() {
  try { await navigator.clipboard.writeText(email); copied.value = true; setTimeout(()=>copied.value=false, 1600) }
  catch {}
}
</script>

<template>
  <section class="relative mx-auto max-w-6xl px-6 py-16">
    <div class="pointer-events-none absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-cyan-50 to-transparent"></div>

    <header class="max-w-prose">
      <h1 class="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-800 leading-tight">
        Let’s get in touch
      </h1>

      <div class="mt-3 h-1.5 w-24 rounded-full bg-gradient-to-r from-cyan-900 to-cyan-400"></div>
    </header>

    
    <div class="mt-8">
      <AvailabilityBar :roles="roles" :location="location" :note="note" />
    </div>

    <!-- your cards below unchanged -->
    <div class="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      <!-- Email card -->
      <div class="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md">
        <div class="flex items-start justify-between gap-4">
          <div class="min-w-0">
            <div class="flex items-center gap-2">
              <span class="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-50 text-cyan-900 ring-1 ring-cyan-100">
                <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <path d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z"/><path d="m22 8-10 6L2 8"/>
                </svg>
              </span>
              <p class="text-sm text-gray-500">Email</p>
            </div>
            <a :href="mailto" class="mt-1 block font-medium text-cyan-900 break-all hover:underline">
              {{ email }}
            </a>
          </div>
          <button
            @click="copyEmail"
            class="inline-flex items-center rounded-lg border px-3 py-1.5 text-sm font-medium
                   text-cyan-900 border-cyan-900 hover:bg-cyan-50 transition
                   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500">
            <svg v-if="!copied" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
            <svg v-else class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6 9 17l-5-5"/></svg>
            <span class="ml-1">{{ copied ? 'Copied!' : 'Copy' }}</span>
          </button>
        </div>
        <p class="sr-only" aria-live="polite">{{ copied ? 'Email copied to clipboard' : '' }}</p>
      </div>

      <!-- LinkedIn card -->
      <a :href="linkedin" target="_blank" rel="noopener"
         class="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500">
        <div class="flex items-center justify-between gap-4">
          <div class="min-w-0">
            <div class="flex items-center gap-2">
              <span class="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-50 text-cyan-900 ring-1 ring-cyan-100">
                <svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.48 2.48 0 1 1 0 4.96 2.48 2.48 0 0 1 0-4.96zM3 9h4v12H3zm7.34 0h3.86v1.71h.05c.54-1 1.86-2.04 3.83-2.04 4.09 0 4.84 2.69 4.84 6.18V21h-4v-5.19c0-1.24-.03-2.84-1.73-2.84-1.73 0-2 1.35-2 2.74V21h-4z"/></svg>
              </span>
              <p class="text-sm text-gray-500">LinkedIn</p>
            </div>
            <p class="mt-1 font-medium text-slate-800 truncate">/in/apolinar-camacho-06560b1a1/</p>
          </div>
          <svg class="h-5 w-5 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
        </div>
      </a>

      <!-- GitHub card -->
      <a :href="github" target="_blank" rel="noopener"
         class="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500">
        <div class="flex items-center justify-between gap-4">
          <div class="min-w-0">
            <div class="flex items-center gap-2">
              <span class="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-50 text-cyan-900 ring-1 ring-cyan-100">
                <svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.58 2 12.2c0 4.5 2.87 8.32 6.84 9.67.5.09.66-.22.66-.48v-1.69c-2.78.61-3.37-1.36-3.37-1.36-.45-1.17-1.1-1.49-1.1-1.49-.91-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.67.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.04 1.02-2.75-.1-.26-.45-1.31.1-2.72 0 0 .84-.27 2.75 1.04a9.27 9.27 0 0 1 2.5-.35c.85 0 1.7.11 2.5.35 1.9-1.3 2.74-1.04 2.74-1.04.55 1.41.2 2.46.1 2.72.63.71 1.02 1.63 1.02 2.75 0 3.95-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9v2.82c0 .26.16.58.67.48A10.2 10.2 0 0 0 22 12.2C22 6.58 17.52 2 12 2Z"/></svg>
              </span>
              <p class="text-sm text-gray-500">GitHub</p>
            </div>
            <p class="mt-1 font-medium text-slate-800 truncate">/apolinar97</p>
          </div>
          <svg class="h-5 w-5 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
        </div>
      </a>

      <!-- Location card (optional to keep since it's already in the strip) -->
      <!-- ... you can remove this if the strip is enough ... -->
    </div>
  </section>
</template>
