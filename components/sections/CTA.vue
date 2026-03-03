<template>
  <section class="section-padding bg-brand-dark">
    <div class="container-custom">

      <div class="grid lg:grid-cols-2 gap-24 items-center">

        <!-- Left -->
        <div>
          <h2 class="text-5xl font-bold mb-10 text-white">
            Ready To Start Your <br />
            <span class="text-brand-primary">Digital Transformation?</span>
          </h2>
        </div>

        <!-- Right -->
        <div class="glass-card p-12">

          <div v-if="success" class="text-center py-10 text-white">
            ✅ Request Received!
          </div>

          <form v-else @submit.prevent="handleSubmit" class="space-y-8">

            <input v-model="form.name" placeholder="Full Name" class="input-field w-full" />
            <input v-model="form.email" placeholder="Email" class="input-field w-full" />
            <input v-model="form.phone" placeholder="Phone" class="input-field w-full" />
            <input v-model="form.country" placeholder="Country" class="input-field w-full" />
            <textarea v-model="form.message" placeholder="Message" rows="4" class="input-field w-full"></textarea>

            <div v-if="error" class="text-red-400 text-sm">
              {{ error }}
            </div>

            <button
              type="submit"
              class="btn-primary w-full"
              :disabled="loading"
            >
              {{ loading ? 'Sending...' : 'Send Inquiry' }}
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