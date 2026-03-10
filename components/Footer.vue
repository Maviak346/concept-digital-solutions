<template>
  <footer class="bg-brand-dark pt-16 sm:pt-24 pb-10 border-t border-white/5">
    <div class="container-custom">

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 lg:gap-16 mb-16 md:mb-24">

        <!-- Brand Column -->
        <div class="sm:col-span-2">
          <div class="flex items-center gap-3 mb-8 md:mb-10">
            <div class="w-10 h-10 md:w-12 md:h-12 bg-brand-primary rounded-2xl flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="lucide lucide-building-2 text-brand-dark w-6 h-6 md:w-7 md:h-7" aria-hidden="true">
                <path d="M10 12h4" />
                <path d="M10 8h4" />
                <path d="M14 21v-3a2 2 0 0 0-4 0v3" />
                <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2" />
                <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" />
              </svg>
            </div>
            <span class="text-2xl md:text-3xl font-black text-white tracking-tighter">
              NEXUS<span class="text-brand-primary">.</span>
            </span>
          </div>

          <p class="text-brand-muted text-base md:text-lg max-w-md mb-8 md:mb-10 leading-relaxed">
            Nexus Digital is a premium technology consultancy dedicated to elevating brands through strategic innovation
            and technical mastery.
          </p>

          <div class="flex gap-5 md:gap-6">
            <a href="#"
              class="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-brand-muted hover:text-brand-primary hover:bg-white/10 transition-all border border-white/5"
              aria-label="Twitter">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="lucide lucide-twitter w-5 h-5" aria-hidden="true">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </a>
            <a href="#"
              class="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-brand-muted hover:text-brand-primary hover:bg-white/10 transition-all border border-white/5"
              aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="lucide lucide-linkedin w-5 h-5" aria-hidden="true">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a href="#"
              class="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-brand-muted hover:text-brand-primary hover:bg-white/10 transition-all border border-white/5"
              aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="lucide lucide-instagram w-5 h-5" aria-hidden="true">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
            <a href="#"
              class="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-brand-muted hover:text-brand-primary hover:bg-white/10 transition-all border border-white/5"
              aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="lucide lucide-facebook w-5 h-5" aria-hidden="true">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="pt-4 sm:pt-0">
          <h4 class="text-white font-bold text-lg md:text-xl mb-6 md:mb-10">Quick Links</h4>
          <ul class="space-y-4 md:space-y-6">
            <li>
              <NuxtLink to="/about" class="text-brand-muted hover:text-brand-primary transition-colors font-medium">
                About Us
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/services" class="text-brand-muted hover:text-brand-primary transition-colors font-medium">
                Our Services
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contact" class="text-brand-muted hover:text-brand-primary transition-colors font-medium">
                Contact Us
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Legal -->
        <div class="pt-4 sm:pt-0">
          <h4 class="text-white font-bold text-lg md:text-xl mb-6 md:mb-10">Legal</h4>
          <ul class="space-y-4 md:space-y-6">
            <li>
              <NuxtLink to="/privacy" class="text-brand-muted hover:text-brand-primary transition-colors font-medium">
                Privacy Policy
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/terms" class="text-brand-muted hover:text-brand-primary transition-colors font-medium">
                Terms of Service
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/cookies" class="text-brand-muted hover:text-brand-primary transition-colors font-medium">
                Cookie Policy
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/gdpr" class="text-brand-muted hover:text-brand-primary transition-colors font-medium">
                GDPR
              </NuxtLink>
            </li>
          </ul>
        </div>

      </div>

      <!-- Bottom Bar -->
      <div class="pt-8 md:pt-12 border-t border-white/5 flex justify-center md:justify-between items-center gap-6 md:gap-8">
        <p class="text-brand-muted text-sm font-medium text-center md:text-left">
          © {{ new Date().getFullYear() }} Nexus Digital Agency. All rights reserved.
        </p>
      </div>

    </div>
  </footer>
</template>