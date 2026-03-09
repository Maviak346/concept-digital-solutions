<script setup>
import PageBanner from '~/components/sections/PageBanner.vue'
import CTA from '~/components/sections/CTA.vue'
</script>

<template>
  <PageBanner title="Contact Us"
    subtitle="Have a project in mind? We'd love to hear from you. Get in touch with our team today."
    breadcrumb="Contact" />

  <div class="section-padding bg-brand-light">
    <div class="container-custom">
      <div class="grid lg:grid-cols-3 gap-10">
        <div class="bg-white p-12 rounded-[32px] re-shadow text-center border border-slate-100">
          <div class="w-20 h-20 bg-brand-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-8"><svg
              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="lucide lucide-phone text-brand-primary w-10 h-10" aria-hidden="true">
              <path
                d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384">
              </path>
            </svg></div>
          <h3 class="text-2xl font-bold text-brand-dark mb-4">Call Us</h3>
          <p class="text-brand-muted font-medium">+1 (555) 123-4567</p>
          <p class="text-brand-muted/60 text-sm mt-2">Mon-Fri: 9am - 6pm</p>
        </div>
        <div class="bg-white p-12 rounded-[32px] re-shadow text-center border border-slate-100">
          <div class="w-20 h-20 bg-brand-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-8"><svg
              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="lucide lucide-mail text-brand-primary w-10 h-10" aria-hidden="true">
              <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
              <rect x="2" y="4" width="20" height="16" rx="2"></rect>
            </svg></div>
          <h3 class="text-2xl font-bold text-brand-dark mb-4">Email Us</h3>
          <p class="text-brand-muted font-medium">hello@nexusdigital.com</p>
          <p class="text-brand-muted/60 text-sm mt-2">We reply within 24 hours</p>
        </div>
        <div class="bg-white p-12 rounded-[32px] re-shadow text-center border border-slate-100">
          <div class="w-20 h-20 bg-brand-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-8"><svg
              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="lucide lucide-map-pin text-brand-primary w-10 h-10" aria-hidden="true">
              <path
                d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0">
              </path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg></div>
          <h3 class="text-2xl font-bold text-brand-dark mb-4">Visit Us</h3>
          <p class="text-brand-muted font-medium">123 Tech Plaza, Silicon Valley, CA</p>
          <p class="text-brand-muted/60 text-sm mt-2">By appointment only</p>
        </div>
      </div>
    </div>
  </div>

  <CTA />

  <div class="h-[400px] bg-slate-200 relative overflow-hidden">
    <div class="absolute inset-0 flex items-center justify-center text-slate-400 font-bold text-2xl">
      INTERACTIVE MAP PLACEHOLDER
    </div>
  </div>
</template>