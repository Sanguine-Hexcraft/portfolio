<script setup lang="ts">
defineProps<{ label: string }>()
</script>

<template>
  <div class="mb-16">
    <p class="font-mono text-xs text-cyber tracking-widest mb-3">[ {{ label }} ]</p>
    <h2 class="font-display font-bold text-4xl sm:text-5xl text-ink tracking-tight leading-none mb-5">{{ label }}</h2>
    <div class="w-full h-0.5 bg-grid-bright" />
  </div>
</template>
