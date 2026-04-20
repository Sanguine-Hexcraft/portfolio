<script setup lang="ts">
const links = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Interests', href: '#interests' },
]
</script>

<template>
  <nav class="fixed top-0 inset-x-0 z-50 bg-gray-950/80 backdrop-blur-sm border-b border-white/5">
    <div class="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
      <a href="#" class="text-accent-light font-mono text-sm font-semibold tracking-tight">~/portfolio</a>
      <ul class="flex gap-6">
        <li v-for="link in links" :key="link.href">
          <a
            :href="link.href"
            class="text-sm text-gray-400 hover:text-white transition-colors"
          >{{ link.label }}</a>
        </li>
      </ul>
    </div>
  </nav>
</template>
