<template>
  <section class="section-padding bg-brand-light">
    <div class="container-custom">

      <!-- Header -->
      <div class="text-center mb-20">
        <div class="flex items-center justify-center gap-3 mb-6">
          <div class="h-px w-12 bg-brand-primary"></div>
          <span class="text-brand-primary font-bold uppercase tracking-[0.2em] text-xs">Testimonials</span>
          <div class="h-px w-12 bg-brand-primary"></div>
        </div>
        <h2 class="text-5xl font-bold text-zinc-950">
          What Our <span class="text-brand-primary">Clients Say</span>
        </h2>
      </div>

      <!-- Cards -->
      <div class="grid md:grid-cols-3 gap-10">
        <div
          v-for="review in reviews"
          :key="review.name"
          class="glass-card p-12 relative"
        >
          <!-- Background quote icon -->
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="lucide lucide-quote absolute top-8 right-8 w-16 h-16 text-white/5" aria-hidden="true">
            <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
            <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
          </svg>

          <!-- Stars -->
          <div class="flex gap-1.5 mb-8">
            <svg v-for="i in 5" :key="i"
              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="lucide lucide-star w-5 h-5 fill-brand-primary text-brand-primary" aria-hidden="true">
              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
            </svg>
          </div>

          <!-- Quote text -->
          <p class="text-zinc-950 italic mb-10 text-lg leading-relaxed">
            "{{ review.text }}"
          </p>

          <!-- Author -->
          <div class="flex items-center gap-5">
            <img
              :src="review.image"
              :alt="review.name"
              class="w-14 h-14 rounded-full object-cover border-2 border-brand-primary/20"
              referrerpolicy="no-referrer"
            />
            <div>
              <div class="font-bold text-zinc-800 text-lg">{{ review.name }}</div>
              <div class="text-xs text-brand-muted font-bold uppercase tracking-widest">{{ review.role }}</div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
const reviews = [
  {
    name: 'Sarah Jenkins',
    role: 'CEO, TechFlow',
    text: 'Nexus Digital transformed our online presence completely. Their attention to detail and technical expertise is unmatched in the industry.',
    image: 'https://picsum.photos/seed/person1/100/100'
  },
  {
    name: 'Michael Chen',
    role: 'CTO, GlobalSoft',
    text: 'The automation systems they built for us reduced our operational costs by 40%. A truly strategic partner for any growing business.',
    image: 'https://picsum.photos/seed/person2/100/100'
  },
  {
    name: 'Elena Rodriguez',
    role: 'Founder, Bloom Creative',
    text: "Professional, responsive, and incredibly talented. They didn't just build a website; they built a platform for our future growth.",
    image: 'https://picsum.photos/seed/person3/100/100'
  }
]
</script>