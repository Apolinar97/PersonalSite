<template>
    <section  aria-labelledby="skills-title">
        <h2 id="skills-title" class="text-2xl font-semibold mb-6 text-center">Skills & Tools</h2>
        <ul class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 md:gap-8">
        
        <li v-for="skill in items" :key="skill.label" class="group flex flex-col items-center gap-3 text-center">
            <div class="h-24 w-24 rounded-2xl bg-gray-100 text-cyan-900 flex items-center justify-center shadow
                 transition-transform duration-150 group-hover:-translate-y-0.5" :aria-label="skill.label" role="img">
                <!-- Placeholder initials until we wire real icons -->
                <span class="text-2xl font-semibold select-none" aria-hidden="true">
                    x
                </span>
            </div>
            <span class="text-sm text-gray-700">{{ skill.label }}</span>
        </li>
    </ul>
    </section>
    
</template>

<script setup>
const props = defineProps({
    items: {
        type: Array,
        default: () => []
    }
});
</script>