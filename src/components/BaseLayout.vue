<template>
  <div class="min-h-screen bg-white text-gray-800 flex flex-col">
    <!-- Navbar -->
    <header class="bg-cyan-900 text-white shadow-md">
      <nav class="px-6 py-4 flex items-center justify-between w-full">
        <!-- Logo / Site Name -->
        <div class="text-2xl font-bold tracking-wide text-white flex-grow">
          Apolinar Camacho & Miffy
        </div>

        <!-- Navigation Links -->
        <div class="flex gap-6 text-lg font-medium text-white">
          <RouterLink :to="'/'" :class="navLinkClass('/')">Home</RouterLink>
          <RouterLink :to="'/about'" :class="navLinkClass('/about')">About</RouterLink>
          <RouterLink :to="'/projects'" :class="navLinkClass('/projects')">Projects</RouterLink>
          <RouterLink :to="'/contact'" :class="navLinkClass('/contact')">Contact</RouterLink>
        </div>
      </nav>
    </header>

    <!-- Page Content Slot -->
    <main class="flex-grow p-6">
      <slot />
    </main>

    <!-- Footer -->
   <!-- Footer -->
<footer class="bg-cyan-900 text-white py-4 px-6 flex items-center justify-between">
  <!-- Social Icons -->
  <div class="flex gap-4">
    <a
      href="https://github.com/yourusername"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub"
      class="hover:text-cyan-300 transition-colors"
    >
      <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M12 0.297C5.373 0.297 0 5.67 0 12.297c0 5.28 3.438 9.747 8.207 11.324.6.113.793-.26.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.085 1.839 1.238 1.839 1.238 1.07 1.832 2.809 1.303 3.495.996.108-.774.419-1.303.762-1.602-2.665-.304-5.466-1.334-5.466-5.931 0-1.311.469-2.382 1.237-3.222-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.505 11.505 0 0 1 3.003-.403c1.018.004 2.045.138 3.002.403 2.292-1.552 3.297-1.23 3.297-1.23.655 1.653.243 2.873.12 3.176.77.84 1.236 1.911 1.236 3.222 0 4.609-2.805 5.625-5.475 5.922.43.371.814 1.102.814 2.222v3.293c0 .32.192.694.8.576C20.565 22.04 24 17.577 24 12.297 24 5.67 18.627 0.297 12 0.297z"
        />
      </svg>
    </a>

    <a
      href="https://linkedin.com/in/yourusername"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
      class="hover:text-cyan-300 transition-colors"
    >
      <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M22.23 0H1.77C.79 0 0 .774 0 1.727v20.545C0 23.227.79 24 1.77 24h20.46C23.21 24 24 23.227 24 22.273V1.727C24 .774 23.21 0 22.23 0zM7.081 20.452H3.542V9.045h3.539v11.407zM5.311 7.587c-1.134 0-2.053-.927-2.053-2.068 0-1.14.919-2.067 2.053-2.067 1.135 0 2.054.927 2.054 2.067 0 1.141-.919 2.068-2.054 2.068zm15.141 12.865h-3.539v-5.553c0-1.325-.027-3.03-1.847-3.03-1.85 0-2.134 1.445-2.134 2.934v5.649h-3.538V9.045h3.396v1.561h.048c.472-.893 1.627-1.834 3.348-1.834 3.582 0 4.24 2.358 4.24 5.424v6.256z"
        />
      </svg>
    </a>
  </div>

  <!-- Footer Text -->
  <p class="text-sm text-white text-center w-full">
    &copy; {{ currentYear }} Apolinar Camacho. All rights reserved.
  </p>
</footer>
  </div>
</template>

<script setup>
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()

const navLinkClass = (path) => {
  return route.path === path
    ? 'text-cyan-100 underline'
    : 'hover:text-cyan-300 transition-colors'
}

const currentYear = new Date().getFullYear()
</script>
