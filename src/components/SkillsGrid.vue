<template>
    <section  aria-labelledby="skills-title">
        <p class="mb-5 text-xs uppercase tracking-[0.2em] text-accent font-semibold text-center">What I Work With</p>
        <ul class="flex flex-wrap justify-center gap-3">
            <li v-for="skill in items" :key="skill.label"
                class="group inline-flex items-center gap-3 rounded-full border border-secondary/30 bg-white
                       px-5 py-3 shadow-sm transition hover:shadow-md hover:-translate-y-0.5">
                <img :src="skill.iconUrl" :alt="skill.label" class="h-7 w-7 object-contain" loading="lazy" decoding="async" role="img" />
                <span class="text-base font-medium text-primary">{{ skill.label }}</span>
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
