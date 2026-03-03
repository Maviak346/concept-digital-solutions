<template>
  <section class="section-padding bg-brand-soft-dark">
    <div class="container-custom">

      <div class="text-center mb-20">
        <h2 class="text-5xl font-bold text-white">
          Meet Our <span class="text-brand-primary">Expert Team</span>
        </h2>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="member in team"
          :key="member.name"
          class="group"
        >
          <div class="relative overflow-hidden rounded-[24px] mb-6 aspect-[4/5]">
            <img
              :src="member.image"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>

          <h4 class="text-xl font-bold text-white mb-1">
            {{ member.name }}
          </h4>

          <p class="text-brand-primary text-sm font-bold uppercase tracking-widest">
            {{ member.role }}
          </p>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
const team = [
  { name: "Alexander Pierce", role: "Chief Executive Officer", image: "https://picsum.photos/seed/alex/400/500" },
  { name: "Sophia Laurent", role: "Creative Director", image: "https://picsum.photos/seed/sophia/400/500" },
  { name: "Marcus Thorne", role: "Technical Lead", image: "https://picsum.photos/seed/marcus/400/500" },
  { name: "Isabella Vane", role: "Head of Strategy", image: "https://picsum.photos/seed/isabella/400/500" }
]
</script>