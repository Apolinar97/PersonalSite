<template>
    <section  aria-labelledby="skills-title">
        <h2 id="skills-title" class="text-2xl font-semibold mb-6 text-center">Skills & Tools</h2>
        <ul class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 md:gap-8">
        
        <li v-for="skill in items" :key="skill.label" class="group flex flex-col items-center gap-3 text-center">
            <div class="h-24 w-24 flex items-center justify-center
                 transition-transform duration-150 group-hover:-translate-y-0.5" :aria-label="skill.label" role="img">
                <img :src="skill.iconUrl" :alt="skill.label" class="h-full w-full object-contain" loading="lazy" decoding="async" /> 
            </div>
            <span class="text-medium  text-gray-700">{{ skill.label }}</span>
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