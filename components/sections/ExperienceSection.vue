<script setup lang="ts">
import { experience } from '~/content/experience'

function formatDate(date: string | null): string {
  if (!date) return 'Present'
  const [year, month] = date.split('-')
  return new Date(Number(year), Number(month) - 1).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })
}
</script>

<template>
  <section id="experience" class="py-24 border-t border-white/5">
    <div class="max-w-5xl mx-auto px-6">
      <h2 class="text-xs font-mono text-accent-light uppercase tracking-widest mb-12">Experience</h2>
      <div class="relative pl-4 border-l border-white/10 space-y-12">
        <div
          v-for="entry in experience"
          :key="`${entry.company}-${entry.startDate}`"
          class="relative"
        >
          <div class="absolute -left-[21px] top-1.5 w-3 h-3 rounded-full bg-accent border-2 border-gray-950" />
          <div class="ml-4">
            <div class="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
              <h3 class="text-white font-semibold text-lg">{{ entry.role }}</h3>
              <span class="text-accent-light font-medium">{{ entry.company }}</span>
              <span class="text-gray-500 text-sm ml-auto">{{ formatDate(entry.startDate) }} — {{ formatDate(entry.endDate) }}</span>
            </div>
            <p class="text-gray-400 text-sm mb-1">{{ entry.location }}</p>
            <p class="text-gray-300 mb-3">{{ entry.description }}</p>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="skill in entry.skills"
                :key="skill"
                class="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400"
              >{{ skill }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
