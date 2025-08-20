<!-- Home.vue -->
<template>
  <section class="mx-auto max-w-6xl px-6 py-16">
    <!-- HERO -->
    <div
      class="min-h-[45vh] md:min-h-[52vh] flex flex-col justify-center text-center space-y-6"
    >
      <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight">
        Hi I’m Apolinar, a developer focused on data engineering and analytics.
      </h1>
      <p class="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
        Whether it’s designing pipelines or crafting dashboards, I focus on turning
        data into insights people can use.
      </p>
    </div>

    <!-- SKILLS -->
    <SkillsGrid class="mt-16 md:mt-24 lg:mt-32" :items="skills" />
  </section>
</template>

<script setup>
import SkillsGrid from '../components/SkillsGrid.vue';

const skills = [
  {label:'Apache Spark'},
  {label: 'Python'},
  {label:'Dot Net'},
  {label:'SQL Server'},
  {label:'PostgreSQL'},
  {label:'Power BI'},
  {label:'DAX'},
]
</script>
