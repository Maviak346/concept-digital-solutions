<template>
  <section ref="sectionRef" class="section-padding bg-brand-soft-dark">
    <div class="container-custom">
      <div class="rounded-3xl sm:rounded-[40px] border border-white/5 p-8 sm:p-10 md:p-16">
        <div class="grid grid-cols-1 xl:grid-cols-2 gap-16">

          <!-- LEFT: scrollable cards -->
          <div ref="leftRef" class="flex flex-col gap-6">
            <div v-for="feature in features" :key="feature.title" class="glass-card p-8">
              <div class="flex items-center gap-4 mb-4">
                <div class="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center shrink-0">
                  <component :is="feature.icon" class="w-5 h-5 text-brand-primary" />
                </div>
                <h4 class="text-lg font-bold text-white">{{ feature.title }}</h4>
              </div>
              <p class="text-brand-muted leading-relaxed text-sm mb-3">{{ feature.desc }}</p>
              <p class="text-white/40 leading-relaxed text-sm italic">{{ feature.sub }}</p>
            </div>
          </div>

          <!-- RIGHT: JS-driven fixed panel -->
          <div ref="rightRef">
            <div ref="stickyEl" :style="stickyStyle">
              <div class="flex items-center gap-3 mb-8">
                <div class="h-px w-12 bg-brand-primary" />
                <span class="text-brand-primary font-bold uppercase tracking-[0.2em] text-xs">
                  Why Choose Us
                </span>
              </div>

              <h2 class="text-5xl font-bold mb-8 text-white leading-tight">
                The Trusted Partner For <br />
                <span class="text-brand-primary">Market Leaders</span>
              </h2>

              <p class="text-lg mb-12 text-white/70 leading-relaxed">
                We don't just build websites — we build digital systems that help
                businesses grow, scale, and stay ahead in a competitive market.
              </p>

              <div class="grid grid-cols-2 gap-5 mb-12">
                <div class="border border-white/10 rounded-2xl p-6">
                  <div class="text-3xl font-black text-brand-primary mb-1">100+</div>
                  <div class="text-sm text-white/50">Projects Delivered</div>
                </div>
                <div class="border border-white/10 rounded-2xl p-6">
                  <div class="text-3xl font-black text-brand-primary mb-1">98%</div>
                  <div class="text-sm text-white/50">Client Satisfaction</div>
                </div>
              </div>

              <NuxtLink to="/contact" class="btn-primary inline-block">
                Consult With An Expert
              </NuxtLink>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Layers, TrendingUp, Gauge, Settings2, HeartHandshake } from 'lucide-vue-next'

const sectionRef = ref(null)
const leftRef = ref(null)
const rightRef = ref(null)
const stickyEl = ref(null)
const stickyStyle = ref({})

const features = [
  {
    icon: Layers,
    title: "End-to-End Digital Solutions",
    desc: "From strategy to launch and ongoing growth, we handle everything under one roof — so you don't need multiple vendors.",
    sub: "We manage design, development, marketing, automation, and support seamlessly.",
  },
  {
    icon: TrendingUp,
    title: "Growth-Focused Strategy",
    desc: "Every solution we build is aligned with your business goals — more leads, more sales, and better efficiency.",
    sub: "We focus on measurable results, not just visuals.",
  },
  {
    icon: Gauge,
    title: "Performance & Optimization",
    desc: "Speed, user experience, SEO, and conversion optimization are built into everything we deliver.",
    sub: "We ensure your digital assets perform as good as they look.",
  },
  {
    icon: Settings2,
    title: "Automation & Efficiency",
    desc: "We help streamline operations through booking systems, CRM integration, payment solutions, and workflow automation.",
    sub: "Save time. Reduce manual work. Increase productivity.",
  },
  {
    icon: HeartHandshake,
    title: "Ongoing Support & Partnership",
    desc: "We don't disappear after launch. We provide ongoing guidance, updates, and optimization to help you scale confidently.",
    sub: "Your growth is our priority.",
  },
]

const OFFSET = 140

function onScroll() {
  if (!leftRef.value || !rightRef.value || !stickyEl.value) return

  const leftRect = leftRef.value.getBoundingClientRect()
  const rightRect = rightRef.value.getBoundingClientRect()
  const elHeight = stickyEl.value.offsetHeight

  if (leftRect.top > OFFSET) {
    stickyStyle.value = {}
    return
  }

  const maxBottom = leftRect.bottom - elHeight

  if (maxBottom <= OFFSET) {
    stickyStyle.value = {
      position: 'absolute',
      top: `${leftRef.value.offsetHeight - elHeight}px`,
      width: `${rightRef.value.offsetWidth}px`,
    }
  } else {
    stickyStyle.value = {
      position: 'fixed',
      top: `${OFFSET}px`,
      width: `${rightRef.value.offsetWidth}px`,
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>