<template>
  <div class="min-h-screen bg-white text-gray-800 flex flex-col">
    <!-- Navbar -->
    <header class="bg-cyan-900 text-white shadow-md">
      <nav class="px-6 py-4 flex items-center justify-between w-full">
        <!-- Logo / Site Name -->
        <div class="text-2xl font-bold tracking-wide text-white flex-grow">
          Camacho.dev
        </div>

        <!-- Hamburger (mobile only) -->
        <button
          class="md:hidden text-white focus:outline-none p-2 rounded hover:bg-white/10 focus:ring-2 focus:ring-white"
          @click="toggleMenu"
          aria-label="Toggle menu"
          :aria-expanded="isOpen.toString()"
          aria-controls="mobile-nav-overlay"
        >
          <!-- Hamburger Icon -->
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>

        <!-- Desktop nav -->
        <div class="hidden md:flex gap-6 text-lg font-medium text-white md:items-center">
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
    <footer class="bg-cyan-900 text-white py-4 px-6 flex justify-between items-center">
      <p class="text-sm">&copy; {{ currentYear }} Apolinar Camacho. All rights reserved.</p>
      <div class="flex gap-4">
        <a href="https://github.com/apolinar97" target="_blank" rel="noopener" aria-label="GitHub">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 hover:text-cyan-300 transition-colors" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.58 2 12.2c0 4.5 2.87 8.32 6.84 9.67.5.09.66-.22.66-.48v-1.69c-2.78.61-3.37-1.36-3.37-1.36-.45-1.17-1.1-1.49-1.1-1.49-.91-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.67.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.04 1.02-2.75-.1-.26-.45-1.31.1-2.72 0 0 .84-.27 2.75 1.04a9.27 9.27 0 0 1 2.5-.35c.85 0 1.7.11 2.5.35 1.9-1.3 2.74-1.04 2.74-1.04.55 1.41.2 2.46.1 2.72.63.71 1.02 1.63 1.02 2.75 0 3.95-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9v2.82c0 .26.16.58.67.48A10.2 10.2 0 0 0 22 12.2C22 6.58 17.52 2 12 2Z"/>
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/apolinar-camacho-06560b1a1/" target="_blank" rel="noopener" aria-label="LinkedIn">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 hover:text-cyan-300 transition-colors" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4.98 3.5a2.48 2.48 0 1 1 0 4.96 2.48 2.48 0 0 1 0-4.96zM3 9h4v12H3zm7.34 0h3.86v1.71h.05c.54-1 1.86-2.04 3.83-2.04 4.09 0 4.84 2.69 4.84 6.18V21h-4v-5.19c0-1.24-.03-2.84-1.73-2.84-1.73 0-2 1.35-2 2.74V21h-4z"/>
          </svg>
        </a>
      </div>
    </footer>

    <!-- Mobile Overlay -->
    <MobileNavOverlay
      id="mobile-nav-overlay"
      :open="isOpen"
      :routes="routes"
      @close="isOpen = false"
    />
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import MobileNavOverlay from '@/components/MobileNavOverlay.vue' // NOTE: default import

const route = useRoute()
const isOpen = ref(false)
const toggleMenu = () => { isOpen.value = !isOpen.value }

// Close overlay whenever route changes
watch(() => route.fullPath, () => { isOpen.value = false })

// Desktop link styling
const navLinkClass = (path) => {
  return route.path === path
    ? 'text-cyan-100 underline'
    : 'hover:text-cyan-300 transition-colors'
}

// Provide routes to overlay
const routes = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
]

const currentYear = new Date().getFullYear()
</script>
