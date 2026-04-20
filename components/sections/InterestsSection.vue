<script setup lang="ts">
import { interests } from '~/content/interests'
</script>

<template>
  <section id="interests" class="py-24 border-t border-white/5">
    <div class="max-w-5xl mx-auto px-6">
      <h2 class="text-xs font-mono text-accent-light uppercase tracking-widest mb-12">Interests</h2>
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        <div
          v-for="interest in interests"
          :key="interest.label"
          class="flex flex-col items-center gap-3 p-5 rounded-xl bg-white/3 border border-white/8 hover:border-white/15 hover:bg-white/5 transition-all text-center"
        >
          <span class="text-3xl">{{ interest.emoji }}</span>
          <span class="text-sm font-medium text-gray-300">{{ interest.label }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
