<template>
  <footer class="bg-brand-dark pt-24 pb-10 border-t border-white/5">
    <div class="container-custom">

      <div class="grid lg:grid-cols-4 gap-16 mb-24">

        <div class="lg:col-span-2">
          <h3 class="text-3xl font-black text-white">
            NEXUS<span class="text-brand-primary">.</span>
          </h3>
          <p class="text-brand-muted mt-6 max-w-md">
            Premium technology consultancy dedicated to elevating brands.
          </p>
        </div>

        <div>
          <h4 class="text-white font-bold mb-6">Quick Links</h4>
          <ul class="space-y-4">
            <li><NuxtLink to="/about">About</NuxtLink></li>
            <li><NuxtLink to="/services">Services</NuxtLink></li>
            <li><NuxtLink to="/contact">Contact</NuxtLink></li>
          </ul>
        </div>

        <div>
          <h4 class="text-white font-bold mb-6">Legal</h4>
          <ul class="space-y-4">
            <li>Privacy Policy</li>
            <li>Terms</li>
          </ul>
        </div>

      </div>

      <div class="border-t border-white/5 pt-12 text-brand-muted text-sm">
        © {{ new Date().getFullYear() }} Nexus Digital Agency
      </div>

    </div>
  </footer>
</template>