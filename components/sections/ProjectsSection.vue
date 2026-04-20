<script setup lang="ts">
import { projects } from '~/content/projects'
</script>

<template>
  <section id="projects" class="py-24 border-t border-white/5">
    <div class="max-w-5xl mx-auto px-6">
      <h2 class="text-xs font-mono text-accent-light uppercase tracking-widest mb-12">Projects</h2>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <article
          v-for="project in projects"
          :key="project.title"
          class="group flex flex-col p-6 rounded-xl bg-white/3 border border-white/8 hover:border-accent/40 hover:bg-white/5 transition-all"
        >
          <div class="flex-1">
            <div class="flex items-start justify-between mb-3">
              <h3 class="text-white font-semibold">{{ project.title }}</h3>
              <span v-if="project.featured" class="text-xs px-2 py-0.5 rounded-full bg-accent/20 text-accent-light border border-accent/30">Featured</span>
            </div>
            <p class="text-gray-400 text-sm leading-relaxed mb-4">{{ project.description }}</p>
            <div class="flex flex-wrap gap-1.5 mb-4">
              <span
                v-for="tag in project.tags"
                :key="tag"
                class="text-xs px-2 py-0.5 rounded bg-white/5 text-gray-500"
              >{{ tag }}</span>
            </div>
          </div>
          <div class="flex gap-3 pt-3 border-t border-white/5">
            <a
              v-if="project.repo"
              :href="project.repo"
              target="_blank"
              rel="noopener"
              class="text-xs text-gray-400 hover:text-white transition-colors"
            >Source ↗</a>
            <a
              v-if="project.url"
              :href="project.url"
              target="_blank"
              rel="noopener"
              class="text-xs text-gray-400 hover:text-white transition-colors"
            >Live ↗</a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
