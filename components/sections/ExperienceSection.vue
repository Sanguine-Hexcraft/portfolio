<script setup lang="ts">
import { experience } from '~/content/experience'

function formatDate(date: string | null): string {
  if (!date) return 'PRESENT'
  const [year, month] = date.split('-')
  return new Date(Number(year), Number(month) - 1)
    .toLocaleDateString('en-US', { year: 'numeric', month: 'short' })
    .toUpperCase()
}
</script>

<template>
  <section id="experience" class="py-28 border-b-2 border-grid-bright">
    <div class="max-w-5xl mx-auto px-6">
      <SectionLabel label="EXPERIENCE" />
      <div class="space-y-0">
        <div
          v-for="(entry, i) in experience"
          :key="`${entry.company}-${entry.startDate}`"
          class="grid md:grid-cols-4 gap-6 py-10 border-b-2 border-grid last:border-b-0"
        >
          <!-- Date col -->
          <div class="font-mono text-xs text-ink-faint space-y-1">
            <div class="text-cyber">{{ String(i + 1).padStart(2, '0') }}</div>
            <div>{{ formatDate(entry.startDate) }}</div>
            <div>→ {{ formatDate(entry.endDate) }}</div>
            <div class="mt-2 text-ink-muted">{{ entry.location }}</div>
          </div>

          <!-- Content -->
          <div class="md:col-span-3">
            <div class="flex flex-wrap items-baseline gap-x-3 mb-2">
              <h3 class="font-display font-bold text-2xl text-ink">{{ entry.role }}</h3>
              <span class="font-mono text-xs text-cyber">// {{ entry.company }}</span>
            </div>
            <p class="text-ink-muted text-base leading-relaxed mb-4">{{ entry.description }}</p>
            <ul class="space-y-1.5 mb-4">
              <li
                v-for="bullet in entry.bullets"
                :key="bullet"
                class="flex gap-2 text-sm text-ink-muted"
              >
                <span class="text-cyber mt-0.5 shrink-0">›</span>
                <span>{{ bullet }}</span>
              </li>
            </ul>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="skill in entry.skills"
                :key="skill"
                class="font-mono text-xs px-2.5 py-1 border-2 border-grid text-ink-muted bg-bg-surface"
              >{{ skill }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
