<template>
  <section class="section-padding bg-brand-dark overflow-x-hidden">
    <div class="container-custom">

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 items-start lg:items-center">

        <!-- Left -->
        <div>
          <div class="flex items-center gap-3 mb-6 sm:mb-8">
            <div class="h-px w-8 sm:w-12 bg-brand-primary"></div>
            <span class="text-brand-primary font-bold uppercase tracking-[0.2em] text-[10px] sm:text-xs">Contact
              Us</span>
          </div>

          <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-10 text-white leading-tight">
            Ready To Start Your <br />
            <span class="text-brand-primary">Digital Transformation?</span>
          </h2>

          <p class="text-base sm:text-lg text-white/80 mb-8 sm:mb-12">
            Fill out the form and our team will get back to you within 24 hours to discuss your project.
          </p>

          <div class="space-y-6 sm:space-y-8">
            <!-- Headquarters -->
            <div class="flex items-start gap-4 sm:gap-6">
              <div
                class="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  class="lucide lucide-building-2 text-brand-primary w-6 h-6 sm:w-7 sm:h-7" aria-hidden="true">
                  <path d="M10 12h4" />
                  <path d="M10 8h4" />
                  <path d="M14 21v-3a2 2 0 0 0-4 0v3" />
                  <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2" />
                  <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" />
                </svg>
              </div>
              <div>
                <div class="text-white font-bold text-base sm:text-lg">Headquarters</div>
                <div class="text-brand-muted text-sm sm:text-base">123 Tech Plaza, Silicon Valley, CA</div>
              </div>
            </div>

            <!-- Email Support -->
            <div class="flex items-start gap-4 sm:gap-6">
              <div
                class="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  class="lucide lucide-send text-brand-primary w-6 h-6 sm:w-7 sm:h-7" aria-hidden="true">
                  <path
                    d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
                  <path d="m21.854 2.147-10.94 10.939" />
                </svg>
              </div>
              <div>
                <div class="text-white font-bold text-base sm:text-lg">Email Support</div>
                <div class="text-brand-muted text-sm sm:text-base break-all">hello@nexusdigital.com</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Form -->
        <div class="glass-card p-5 sm:p-8 md:p-10 lg:p-12">

          <div v-if="success" class="text-center py-10 text-white">
            ✅ Request Received!
          </div>

          <form v-else @submit.prevent="handleSubmit" class="space-y-6 sm:space-y-8">

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              <div>
                <label class="block text-[10px] sm:text-xs font-bold text-white uppercase tracking-widest mb-2 sm:mb-3">
                  Full Name
                </label>
                <input v-model="form.name" placeholder="John Doe" type="text"
                  class="w-full input-field text-sm sm:text-base" />
              </div>

              <div>
                <label class="block text-[10px] sm:text-xs font-bold text-white uppercase tracking-widest mb-2 sm:mb-3">
                  Email Address
                </label>
                <input v-model="form.email" placeholder="john@company.com" type="email"
                  class="w-full input-field text-sm sm:text-base" />
              </div>

              <div>
                <label class="block text-[10px] sm:text-xs font-bold text-white uppercase tracking-widest mb-2 sm:mb-3">
                  Phone Number
                </label>
                <input v-model="form.phone" placeholder="+1 555 123 4567" type="tel"
                  class="w-full input-field text-sm sm:text-base" />
              </div>

              <div>
                <label class="block text-[10px] sm:text-xs font-bold text-white uppercase tracking-widest mb-2 sm:mb-3">
                  Country
                </label>
                <input v-model="form.country" placeholder="United States" type="text"
                  class="w-full input-field text-sm sm:text-base" />
              </div>
            </div>

            <div>
              <label class="block text-[10px] sm:text-xs font-bold text-white uppercase tracking-widest mb-2 sm:mb-3">
                Message
              </label>
              <textarea v-model="form.message" placeholder="Tell us about your project..." rows="4"
                class="w-full input-field resize-none text-sm sm:text-base"></textarea>
            </div>

            <div v-if="error" class="text-red-400 text-sm">
              {{ error }}
            </div>

            <button type="submit"
              class="btn-primary w-full flex items-center justify-center gap-3 py-4 sm:py-5 text-sm sm:text-base"
              :disabled="loading">
              {{ loading ? 'Sending...' : 'Send Inquiry' }}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="lucide lucide-send w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true">
                <path
                  d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
                <path d="m21.854 2.147-10.94 10.939" />
              </svg>
            </button>

          </form>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue'

const form = reactive({
  name: '',
  email: '',
  phone: '',
  country: '',
  message: ''
})

const success = ref(false)
const error = ref('')
const loading = ref(false)

const validate = () => {
  if (!form.name || !form.email || !form.phone || !form.country || !form.message) {
    return 'All fields are required'
  }
  return ''
}

const handleSubmit = async () => {
  error.value = validate()
  if (error.value) return

  loading.value = true

  try {
    const res = await $fetch('/api/contact', {
      method: 'POST',
      body: form
    })

    if (res.success) {
      success.value = true
      Object.keys(form).forEach(k => form[k] = '')
    }
  } catch (err) {
    error.value = 'Submission failed'
  }

  loading.value = false
}
</script>