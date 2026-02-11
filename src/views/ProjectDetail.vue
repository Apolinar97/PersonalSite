<template>
  <NotFound v-if="!project" />

  <article v-else class="min-h-screen bg-white">
    <!-- Hero Section -->
    <div class="bg-white border-b border-[#A0A4A8]/30">
      <div class="mx-auto max-w-4xl px-6 py-12 md:py-16">
        <!-- Back Button -->
        <RouterLink to="/projects" class="inline-flex items-center gap-2 text-[#3A6FF7] hover:text-[#2F5FE0] transition-colors mb-6 group font-medium text-sm
         outline-none focus-visible:ring-2 focus-visible:ring-[#3A6FF7] rounded">
          <svg class="w-4 h-4 transition-transform group-hover:-translate-x-0.5" fill="none" stroke="currentColor"
            viewBox="0 0 24 24" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Projects
        </RouterLink>

        <!-- Project Title -->
        <div class="mb-4">
          <h1 class="text-4xl md:text-5xl font-bold tracking-tight text-[#1F1F1F]">
            {{ project.projectName }}
          </h1>
          <p v-if="project.writeupFirstWritten || project.writeupLastUpdated" class="mt-2 text-xs text-[#A0A4A8]">
            <span v-if="project.writeupFirstWritten">First written: {{ formatDate(project.writeupFirstWritten) }}</span>
            <span v-if="project.writeupFirstWritten && project.writeupLastUpdated" class="mx-2">•</span>
            <span v-if="project.writeupLastUpdated">Last updated: {{ formatDate(project.writeupLastUpdated) }}</span>
          </p>
        </div>

        <p v-if="project.description" class="text-sm text-[#A0A4A8] mb-3">
          <span class="inline-flex items-center rounded-full border border-[#3A6FF7]/20 bg-[#3A6FF7]/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[#1F1F1F]">
            TL;DR
          </span>
          <span class="ml-2 align-middle">{{ project.description }}</span>
        </p>

        <!-- Technologies -->
        <ul v-if="project.technologies && project.technologies.length" class="flex flex-wrap gap-2">
          <li v-for="tech in project.technologies" :key="tech"
            class="text-xs px-2.5 py-1 rounded-full bg-[#3A6FF7]/10 text-[#1F1F1F] border border-[#3A6FF7]/20">
            {{ tech }}
          </li>
        </ul>
      </div>
    </div>

    <!-- Markdown Content -->
    <div class="bg-[#A0A4A8]/10">
      <div class="mx-auto max-w-4xl px-6 py-8">
        <div v-if="mdHtml" class="prose prose-lg prose-gray max-w-none
               prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-[#1F1F1F]
               prose-h1:text-3xl prose-h1:mt-8 prose-h1:mb-4
               prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
               prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
               prose-p:text-[#A0A4A8] prose-p:leading-relaxed prose-p:mb-4
               prose-a:text-[#3A6FF7] prose-a:no-underline hover:prose-a:underline prose-a:font-medium
               prose-strong:text-[#1F1F1F] prose-strong:font-semibold
               prose-ul:my-4 prose-ol:my-4
               prose-li:text-[#A0A4A8] prose-li:my-2
               prose-code:bg-[#A0A4A8]/10 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm prose-code:text-[#1F1F1F] prose-code:before:content-none prose-code:after:content-none
               prose-pre:bg-[#1F1F1F] prose-pre:text-white prose-pre:p-4 prose-pre:rounded-xl prose-pre:overflow-x-auto
               prose-blockquote:border-l-4 prose-blockquote:border-[#3A6FF7] prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-[#A0A4A8]
               prose-img:rounded-xl prose-img:shadow-md prose-img:my-8
               prose-hr:my-8 prose-hr:border-[#A0A4A8]/30
               bg-white rounded-2xl border border-[#A0A4A8]/30 shadow-sm p-8 md:p-12" v-html="mdHtml" />

        <div v-else-if="mdError" class="bg-white rounded-2xl border border-[#A0A4A8]/30 p-8 text-center">
          <svg class="w-16 h-16 text-[#A0A4A8] mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
            stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 class="text-lg font-semibold text-[#1F1F1F] mb-2">Content Not Found</h3>
          <p class="text-sm text-[#A0A4A8]">Unable to load project details for this project.</p>
        </div>

        <div v-else class="bg-white rounded-2xl border border-[#A0A4A8]/30 shadow-sm p-8 md:p-12">
          <div class="animate-pulse space-y-4">
            <div class="h-4 bg-[#A0A4A8]/25 rounded w-3/4"></div>
            <div class="h-4 bg-[#A0A4A8]/25 rounded w-full"></div>
            <div class="h-4 bg-[#A0A4A8]/25 rounded w-5/6"></div>
            <div class="h-4 bg-[#A0A4A8]/25 rounded w-full"></div>
            <div class="h-4 bg-[#A0A4A8]/25 rounded w-4/5"></div>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup>
import { computed, ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import MarkdownIt from 'markdown-it';
import { useProjects } from '@/composables/useProjects';
import NotFound from './NotFound.vue';

const { projects } = useProjects();
const route = useRoute();
const project = computed(() => projects.value.find(p => p.slug === route.params.slug));

const mdFiles = import.meta.glob('/src/content/projects/*.md', { as: 'raw' });

const mdRaw = ref('');
const mdError = ref(false);

const getMarkdownLoader = (slug) => {
  const entry = Object.entries(mdFiles).find(([key]) =>
    key.endsWith(`/${slug}.md`)
  )
  return entry?.[1]
}
watchEffect(async () => {
  if (!project.value) return;

  mdRaw.value = '';
  mdError.value = false;

  const slug = String(route.params.slug || '');
  const loader = getMarkdownLoader(slug);


  if (!loader) {
    mdError.value = true;
    return;
  }

  try {
    mdRaw.value = await loader();

  } catch (e) {
    mdError.value = true;

  }
});

const md = new MarkdownIt({
  html: false,
  linkify: true,
  breaks: true,
});

const mdHtml = computed(() =>
  mdRaw.value ? md.render(mdRaw.value) : ''
);

const formatDate = (value) => {
  const d = new Date(value)
  if (Number.isNaN(d.getTime())) return value
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(d)
}
</script>