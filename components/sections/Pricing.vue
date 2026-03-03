<template>
  <section class="section-padding bg-brand-light">
    <div class="container-custom">

      <div class="text-center mb-20">
        <h2 class="text-5xl font-bold text-brand-dark">
          Investment For <span class="text-brand-primary">Success</span>
        </h2>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <div
          v-for="plan in plans"
          :key="plan.name"
          :class="[
            'bg-white p-10 rounded-[32px] border re-shadow flex flex-col relative',
            plan.popular ? 'border-brand-primary ring-1 ring-brand-primary' : 'border-slate-100'
          ]"
        >
          <div
            v-if="plan.popular"
            class="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-primary text-brand-dark px-6 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest"
          >
            Most Popular
          </div>

          <div class="mb-10">
            <h3 class="text-2xl font-bold text-brand-dark mb-4">
              {{ plan.name }}
            </h3>

            <div class="flex items-baseline gap-2">
              <span class="text-5xl font-black text-brand-dark">
                {{ plan.price === 'Custom' ? '' : '$' }}{{ plan.price }}
              </span>
              <span v-if="plan.price !== 'Custom'" class="text-brand-muted font-bold">
                /project
              </span>
            </div>

            <p class="text-brand-muted mt-6">
              {{ plan.desc }}
            </p>
          </div>

          <ul class="space-y-5 mb-12 flex-grow">
            <li
              v-for="feature in plan.features"
              :key="feature"
              class="flex items-center gap-4 text-brand-dark font-medium"
            >
              ✓ {{ feature }}
            </li>
          </ul>

          <NuxtLink
            to="/contact"
            :class="[
              'w-full py-5 rounded-full font-bold text-center',
              plan.popular
                ? 'bg-brand-primary text-brand-dark'
                : 'border border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white'
            ]"
          >
            {{ plan.button }}
          </NuxtLink>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
const plans = [
  {
    name: "Starter",
    price: "2,499",
    desc: "Perfect for small businesses.",
    features: ["Custom Web Design", "SEO Optimization", "3 Months Support"],
    button: "Get Started",
    popular: false
  },
  {
    name: "Professional",
    price: "4,999",
    desc: "Ideal for growing companies.",
    features: ["Advanced Web Apps", "E-commerce Integration", "12 Months Support"],
    button: "Choose Professional",
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    desc: "Tailored solutions for large organizations.",
    features: ["Full Digital Transformation", "Cloud Infrastructure", "24/7 Support"],
    button: "Contact Sales",
    popular: false
  }
]
</script>