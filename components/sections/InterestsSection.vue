<script setup lang="ts">
import { interests } from '~/content/interests'
</script>

<template>
  <section id="interests" class="py-28">
    <div class="max-w-5xl mx-auto px-6">
      <SectionLabel label="INTERESTS" />
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        <div
          v-for="interest in interests"
          :key="interest.label"
          class="flex flex-col items-center gap-2.5 p-4 border-2 border-grid bg-bg-surface hover:border-cyber hover:bg-bg-raised transition-colors group"
        >
          <span class="text-2xl">{{ interest.emoji }}</span>
          <span class="font-mono text-xs text-ink-muted group-hover:text-cyber transition-colors tracking-wider text-center">{{ interest.label.toUpperCase() }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
