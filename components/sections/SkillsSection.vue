<script setup lang="ts">
import { skillGroups } from '~/content/skills'
</script>

<template>
  <section id="skills" class="py-28 border-b-2 border-grid-bright">
    <div class="max-w-5xl mx-auto px-6">
      <SectionLabel label="SKILLS" />
      <div class="grid md:grid-cols-3 gap-10">
        <div v-for="group in skillGroups" :key="group.category">
          <div class="font-mono text-xs text-gold tracking-widest mb-5">// {{ group.category.toUpperCase() }}</div>
          <div class="space-y-4">
            <div v-for="skill in group.skills" :key="skill.label">
              <div class="flex justify-between items-center mb-1.5">
                <span class="font-mono text-xs text-ink-muted tracking-wide">{{ skill.label.toUpperCase() }}</span>
                <span class="font-mono text-xs text-ink-faint">{{ skill.level }}</span>
              </div>
              <div class="h-2 bg-bg-raised rounded-none overflow-hidden">
                <div
                  class="h-full bg-cyber transition-all duration-700"
                  :style="{ width: `${skill.level}%` }"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
