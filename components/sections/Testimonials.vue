<template>
  <section class="section-padding bg-brand-light">
    <div class="container-custom">

      <div class="text-center mb-20">
        <h2 class="text-5xl font-bold text-zinc-950">
          What Our <span class="text-brand-primary">Clients Say</span>
        </h2>
      </div>

      <div class="grid md:grid-cols-3 gap-10">
        <div
          v-for="review in reviews"
          :key="review.name"
          class="glass-card p-12"
        >
          <p class="text-zinc-950 italic mb-10 text-lg leading-relaxed">
            "{{ review.text }}"
          </p>

          <div class="flex items-center gap-5">
            <img
              :src="review.image"
              class="w-14 h-14 rounded-full object-cover border-2 border-brand-primary/20"
            />
            <div>
              <div class="font-bold text-zinc-800 text-lg">
                {{ review.name }}
              </div>
              <div class="text-xs text-brand-muted font-bold uppercase tracking-widest">
                {{ review.role }}
              </div>
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
    name: "Sarah Jenkins",
    role: "CEO, TechFlow",
    text: "Nexus Digital transformed our online presence completely.",
    image: "https://picsum.photos/seed/person1/100/100"
  },
  {
    name: "Michael Chen",
    role: "CTO, GlobalSoft",
    text: "Their automation reduced our operational costs by 40%.",
    image: "https://picsum.photos/seed/person2/100/100"
  },
  {
    name: "Elena Rodriguez",
    role: "Founder, Bloom Creative",
    text: "Professional, responsive, and incredibly talented.",
    image: "https://picsum.photos/seed/person3/100/100"
  }
]
</script>