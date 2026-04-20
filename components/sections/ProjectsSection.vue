<script setup lang="ts">
import { projects } from '~/content/projects'
</script>

<template>
  <section id="projects" class="py-28 border-b-2 border-grid-bright">
    <div class="max-w-5xl mx-auto px-6">
      <SectionLabel label="PROJECTS" />
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <article
          v-for="project in projects"
          :key="project.title"
          class="group flex flex-col p-6 bg-bg-surface border-2 border-grid hover:border-cyber transition-colors"
        >
          <div class="flex items-center justify-between mb-3">
            <span v-if="project.featured" class="font-mono text-xs text-gold tracking-wider">◆ FEATURED</span>
            <span v-else class="font-mono text-xs text-ink-faint tracking-wider">PROJECT</span>
            <div class="flex gap-3">
              <a v-if="project.repo" :href="project.repo" target="_blank" rel="noopener" class="font-mono text-xs text-ink-faint hover:text-cyber transition-colors">SRC ↗</a>
              <a v-if="project.url" :href="project.url" target="_blank" rel="noopener" class="font-mono text-xs text-ink-faint hover:text-cyber transition-colors">LIVE ↗</a>
            </div>
          </div>
          <h3 class="font-display font-bold text-ink text-xl mb-2 group-hover:text-cyber transition-colors">{{ project.title }}</h3>
          <p class="text-ink-muted text-sm leading-relaxed flex-1 mb-4">{{ project.description }}</p>
          <div class="flex flex-wrap gap-1.5 pt-3 border-t-2 border-grid">
            <span
              v-for="tag in project.tags"
              :key="tag"
              class="font-mono text-xs text-ink-faint"
            >{{ tag }}</span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
