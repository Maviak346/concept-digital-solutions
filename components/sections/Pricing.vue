<template>
  <section class="section-padding bg-brand-light">
    <div class="container-custom">

      <!-- Header -->
      <div class="text-center mb-20">
        <div class="flex items-center justify-center gap-3 mb-6">
          <div class="h-px w-12 bg-brand-primary"></div>
          <span class="text-brand-primary font-bold uppercase tracking-[0.2em] text-xs">Pricing Plans</span>
          <div class="h-px w-12 bg-brand-primary"></div>
        </div>
        <h2 class="text-5xl font-bold text-brand-dark">
          Investment For <span class="text-brand-primary">Success</span>
        </h2>
      </div>

      <!-- Cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
        <div v-for="plan in plans" :key="plan.name" :class="[
          'bg-white p-6 sm:p-10 lg:p-12 rounded-2xl sm:rounded-[32px] border re-shadow relative flex flex-col',
          plan.popular ? 'border-brand-primary ring-1 ring-brand-primary' : 'border-slate-100'
        ]">
          <!-- Popular badge -->
          <div v-if="plan.popular"
            class="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-primary text-brand-dark px-6 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
            Most Popular
          </div>

          <!-- Plan header -->
          <div class="mb-10">
            <h3 class="text-2xl font-bold text-brand-dark mb-4">{{ plan.name }}</h3>
            <div class="flex items-baseline gap-2">
              <span class="text-5xl font-black text-brand-dark">
                {{ plan.price === 'Custom' ? 'Custom' : `$${plan.price}` }}
              </span>
              <span v-if="plan.price !== 'Custom'" class="text-brand-muted font-bold">/project</span>
            </div>
            <p class="text-brand-muted mt-6">{{ plan.desc }}</p>
          </div>

          <!-- Features -->
          <ul class="space-y-5 mb-12 flex-grow">
            <li v-for="feature in plan.features" :key="feature"
              class="flex items-center gap-4 text-brand-dark font-medium">
              <div class="w-5 h-5 rounded-full bg-brand-primary/10 flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  class="lucide lucide-check w-3 h-3 text-brand-primary" aria-hidden="true">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </div>
              {{ feature }}
            </li>
          </ul>

          <!-- CTA -->
          <NuxtLink to="/contact" :class="[
            'w-full py-5 rounded-full font-bold transition-all text-center',
            plan.popular
              ? 'bg-brand-primary text-brand-dark hover:bg-brand-primary/90'
              : 'border border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white'
          ]">
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
    name: 'Starter',
    price: '2,499',
    desc: 'Perfect for small businesses and startups.',
    features: [
      'Custom Web Design',
      'Responsive Development',
      'SEO Optimization',
      '3 Months Support'
    ],
    button: 'Get Started',
    popular: false
  },
  {
    name: 'Professional',
    price: '4,999',
    desc: 'Ideal for growing companies needing scale.',
    features: [
      'Advanced Web Apps',
      'E-commerce Integration',
      'Performance Tuning',
      '12 Months Support',
      'API Integration'
    ],
    button: 'Choose Professional',
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    desc: 'Tailored solutions for large organizations.',
    features: [
      'Full Digital Transformation',
      'Cloud Infrastructure',
      'AI & Automation',
      '24/7 Dedicated Support',
      'Security Audits'
    ],
    button: 'Contact Sales',
    popular: false
  }
]
</script>