<template>
  <Teleport to="body">
    <transition name="fade">
      <div
        v-if="open"
        class="fixed inset-0 z-50"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <!-- Backdrop (tap to close) -->
        <div class="absolute inset-0 bg-black/60" @click="$emit('close')" />

        <!-- Panel -->
        <div class="absolute inset-0 bg-cyan-900 text-white flex flex-col">
          <!-- Header row with close (X) -->
          <div class="flex items-center justify-between p-6">
            <span class="text-xl font-semibold">Menu</span>
            <button
              class="p-2 rounded hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white"
              @click="$emit('close')"
              aria-label="Close menu"
              ref="closeBtn"
            >
              <!-- X icon -->
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none"
                   viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>

          <!-- Links -->
          <nav class="px-6">
            <RouterLink
              v-for="item in routes"
              :key="item.to"
              :to="item.to"
              :class="navLinkClass(item.to)"
              @click="$emit('close')"
            >
              {{ item.label }}
            </RouterLink>
          </nav>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<script setup>
import { RouterLink, useRoute } from 'vue-router'
import { defineProps, defineEmits, ref, watch, onMounted, onUnmounted, nextTick } from 'vue'

const props = defineProps({
  open: { type: Boolean, default: false },
  routes: {
    type: Array,
    default: () => ([
      { to: '/', label: 'Home' },
      { to: '/about', label: 'About' },
      { to: '/projects', label: 'Projects' },
      { to: '/contact', label: 'Contact' },
    ])
  }
})
const emit = defineEmits(['close'])
const closeBtn = ref(null)
const route = useRoute()
let mediaQuery = null

const onResize = () => {
  if (mediaQuery?.matches) emit('close')
}

const navLinkClass = (path) => {
  const base = 'block px-4 py-3 text-lg border-t border-white/10 rounded-lg transition-colors'
  return route.path === path
    ? `${base} bg-white/10 text-white`
    : `${base} hover:text-cyan-300`
}

// Close on Escape
const onKey = (e) => { if (e.key === 'Escape') emit('close') }
watch(() => props.open, async (v) => {
  if (v) {
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    // focus the close button for accessibility
    await nextTick()
    closeBtn.value?.focus()
    // lock scroll
    document.documentElement.style.overflow = 'hidden'
  } else {
    window.removeEventListener('keydown', onKey)
    window.removeEventListener('resize', onResize)
    document.documentElement.style.overflow = ''
  }
})

onMounted(() => {
  mediaQuery = window.matchMedia('(min-width: 768px)')
  if (mediaQuery.matches) emit('close')
})

onUnmounted(() => {
  window.removeEventListener('keydown', onKey)
  window.removeEventListener('resize', onResize)
  document.documentElement.style.overflow = ''
})
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity .2s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
