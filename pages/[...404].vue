<template>
  <div class="relative min-h-screen bg-brand-dark flex items-center justify-center overflow-hidden px-6 pt-10 mt-10">

    <!-- Animated background grid -->
    <div class="absolute inset-0 z-0 opacity-[0.04]"
      style="background-image: linear-gradient(#22C55E 1px, transparent 1px), linear-gradient(to right, #22C55E 1px, transparent 1px); background-size: 60px 60px;" />

    <!-- Glowing orbs -->
    <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-primary/10 rounded-full blur-[120px] animate-pulse" />
    <div class="absolute bottom-1/4 right-1/4 w-80 h-80 bg-brand-accent/10 rounded-full blur-[100px] animate-pulse"
      style="animation-delay: 1s;" />

    <!-- Floating particles -->
    <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div v-for="p in particles" :key="p.id"
        class="absolute w-1 h-1 rounded-full bg-brand-primary/40 animate-float"
        :style="{ left: p.x + '%', top: p.y + '%', animationDuration: p.duration + 's', animationDelay: p.delay + 's' }"
      />
    </div>

    <!-- Main content -->
    <div class="relative z-10 text-center max-w-2xl mx-auto">

      <!-- Glitching 404 -->
      <div class="relative mb-6 select-none h-[160px] sm:h-[200px] flex items-center justify-center">
        <div class="text-[160px] sm:text-[200px] font-black leading-none tracking-tighter glitch-text"
          data-text="404">
          404
        </div>
      </div>

      <!-- Animated icon -->
      <div class="flex justify-center mb-8">
        <div class="relative w-24 h-24">
          <div class="absolute inset-0 rounded-full border-2 border-brand-primary/20 animate-spin"
            style="animation-duration: 8s;" />
          <div class="absolute inset-2 rounded-full border border-brand-primary/30 animate-spin"
            style="animation-duration: 5s; animation-direction: reverse;" />
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="w-14 h-14 bg-brand-primary/10 rounded-2xl flex items-center justify-center border border-brand-primary/20 animate-bounce-slow">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 text-brand-primary" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
                <path d="M11 8v3" />
                <path d="M11 14h.01" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- Label -->
      <div class="flex items-center justify-center gap-3 mb-4">
        <div class="h-px w-8 bg-brand-primary" />
        <span class="text-brand-primary font-bold uppercase tracking-[0.2em] text-xs">Page Not Found</span>
        <div class="h-px w-8 bg-brand-primary" />
      </div>

      <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
        Looks Like You're <br />
        <span class="text-brand-primary">Lost in the Digital Space</span>
      </h1>

      <p class="text-brand-muted text-lg mb-12 max-w-lg mx-auto leading-relaxed">
        The page you're looking for doesn't exist or has been moved.
        Let's get you back on track.
      </p>

      <!-- Buttons -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <NuxtLink to="/" class="btn-primary flex items-center justify-center gap-3 group">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 group-hover:-translate-x-1 transition-transform"
            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
          Back to Home
        </NuxtLink>
        <NuxtLink to="/contact" class="btn-secondary flex items-center justify-center gap-3">
          Contact Us
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
          </svg>
        </NuxtLink>
      </div>

      <!-- Quick nav -->
      <div class="mt-14 pt-10 border-t border-white/5">
        <p class="text-brand-muted text-sm mb-6 uppercase tracking-widest font-bold">Or explore</p>
        <div class="flex flex-wrap justify-center gap-3">
          <NuxtLink v-for="link in links" :key="link.to" :to="link.to"
            class="px-5 py-2.5 rounded-full border border-white/10 text-white/60 text-sm font-medium
                   hover:border-brand-primary/40 hover:text-brand-primary hover:bg-brand-primary/5
                   transition-all duration-200">
            {{ link.label }}
          </NuxtLink>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
useSeoMeta({
  title: '404 — Page Not Found | Nexus Digital',
  description: 'The page you are looking for does not exist.',
  robots: 'noindex, nofollow',
})

const links = [
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact' },
]

const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  duration: 4 + Math.random() * 6,
  delay: Math.random() * 4,
}))
</script>

<style scoped>
.glitch-text {
  position: relative;
  color: transparent;
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.07);
  animation: glitch 4s infinite;
}
.glitch-text::before,
.glitch-text::after {
  content: attr(data-text);
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  display: flex; align-items: center; justify-content: center;
}
.glitch-text::before {
  color: rgba(34, 197, 94, 0.12);
  animation: glitch-top 4s infinite;
  clip-path: polygon(0 0, 100% 0, 100% 40%, 0 40%);
}
.glitch-text::after {
  color: rgba(59, 130, 246, 0.08);
  animation: glitch-bottom 4s infinite;
  clip-path: polygon(0 60%, 100% 60%, 100% 100%, 0 100%);
}
@keyframes glitch {
  0%, 90%, 100% { transform: translate(0); }
  92% { transform: translate(-2px, 1px); }
  94% { transform: translate(2px, -1px); }
  96% { transform: translate(-1px, 2px); }
  98% { transform: translate(1px, -2px); }
}
@keyframes glitch-top {
  0%, 90%, 100% { transform: translate(0); }
  92% { transform: translate(3px, 0); }
  94% { transform: translate(-3px, 0); }
  96% { transform: translate(2px, 0); }
}
@keyframes glitch-bottom {
  0%, 90%, 100% { transform: translate(0); }
  92% { transform: translate(-3px, 0); }
  94% { transform: translate(3px, 0); }
  96% { transform: translate(-2px, 0); }
}
@keyframes float {
  0%, 100% { transform: translateY(0) scale(1); opacity: 0.4; }
  50% { transform: translateY(-20px) scale(1.5); opacity: 0.8; }
}
.animate-float { animation: float linear infinite; }

@keyframes bounce-slow {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}
.animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }
</style>