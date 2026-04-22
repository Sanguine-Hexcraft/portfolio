<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const dots = ref(0)
const showCursor = ref(true)
let dotsTimer: ReturnType<typeof setInterval>
let cursorTimer: ReturnType<typeof setInterval>

onMounted(() => {
  dotsTimer = setInterval(() => {
    dots.value = (dots.value + 1) % 4
  }, 500)
  cursorTimer = setInterval(() => {
    showCursor.value = !showCursor.value
  }, 530)
})

onUnmounted(() => {
  clearInterval(dotsTimer)
  clearInterval(cursorTimer)
})
</script>

<template>
  <header class="pt-28 pb-16 border-b border-grid">
    <div class="max-w-5xl mx-auto px-6">
      <div class="grid md:grid-cols-3 gap-8 items-start">

        <!-- Identity -->
        <div class="md:col-span-2">
          <p class="font-mono text-xs text-cyber tracking-widest mb-3">
            INITIALIZING PROFILE<span class="inline-block w-6 text-left">{{ '.'.repeat(dots) }}</span><span :class="showCursor ? 'opacity-100' : 'opacity-0'" class="relative -top-[2px] transition-opacity duration-75">▋</span>
          </p>
          <div class="flex items-center gap-6 mb-6">
            <img src="/images/me.png" alt="Patrick Witmer" class="w-36 h-36 object-cover border-2 border-grid" />
            <h1 class="font-serif text-6xl sm:text-7xl font-normal text-ink leading-none tracking-tight">
              Patrick<br />Witmer
            </h1>
          </div>
          <p class="text-ink-muted text-lg leading-relaxed max-w-lg">
            Full-stack developer with 20+ years building and maintaining production systems. Strong front-end instincts informed by a design foundation — deepening backend skills in Python, Linux, and APIs.
          </p>
        </div>

        <!-- Stat block -->
        <div class="border border-grid bg-bg-surface rounded-sm p-5 font-mono text-xs space-y-2.5">
          <div class="text-cyber tracking-widest mb-3">&gt;&gt; whoami</div>
          <div class="flex justify-between text-ink-muted">
            <span>ROLE</span>
            <span class="text-ink">Full-Stack Dev</span>
          </div>
          <div class="h-px bg-grid" />
          <div class="flex justify-between text-ink-muted">
            <span>EXPERIENCE</span>
            <span class="text-ink">20+ YRS</span>
          </div>
          <div class="h-px bg-grid" />
          <div class="flex justify-between text-ink-muted">
            <span>AVAILABILITY</span>
            <span class="text-green-400">OPEN TO WORK</span>
          </div>
          <div class="h-px bg-grid" />
          <div class="flex justify-between text-ink-muted">
            <span>LOCATION</span>
            <span class="text-ink">Salt Lake City, UT</span>
          </div>
          <div class="h-px bg-grid" />
          <div class="flex justify-between text-ink-muted">
            <span>FOCUS</span>
            <span class="text-ink">Dev · Design · Python</span>
          </div>
          <div class="h-px bg-grid" />
          <div class="flex flex-col gap-2 pt-1">
            <a href="https://github.com/Sanguine-Hexcraft" target="_blank" rel="noopener"
              class="flex items-center justify-center gap-2 border border-grid text-ink-muted hover:text-cyber hover:border-cyber transition-colors py-1.5 text-xs tracking-widest">
              <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
              SANGUINE-HEXCRAFT
            </a>
            <a href="https://github.com/PatrickWitmer" target="_blank" rel="noopener"
              class="flex items-center justify-center gap-2 border border-grid text-ink-muted hover:text-cyber hover:border-cyber transition-colors py-1.5 text-xs tracking-widest">
              <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
              PATRICKWITMER
            </a>
            <a href="https://linkedin.com/in/patrick-witmer-5b836326" target="_blank" rel="noopener"
              class="flex items-center justify-center gap-2 border border-grid text-ink-muted hover:text-cyber hover:border-cyber transition-colors py-1.5 text-xs tracking-widest">
              <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              LINKEDIN
            </a>
          </div>
        </div>

      </div>
    </div>
  </header>
</template>
