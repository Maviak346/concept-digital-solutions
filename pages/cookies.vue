<template>
  <PageBanner
    title="Cookie Policy"
    subtitle="How we use cookies and similar tracking technologies."
    breadcrumb="Cookie Policy"
    breadcrumb-path="/cookies"
  />
  <LegalContent last-updated="January 1, 2025" :sections="sections" />
</template>

<script setup>
import PageBanner from '~/components/sections/PageBanner.vue'
import LegalContent from '~/components/sections/LegalContent.vue'

useSeoMeta({
  title: 'Cookie Policy | Nexus Digital Agency',
  description: 'Learn how Nexus Digital Agency uses cookies and similar technologies on our website.',
})
useHead({ link: [{ rel: 'canonical', href: 'https://yourdomain.com/cookies' }] })

const sections = [
  {
    title: '1. What Are Cookies',
    content: 'Cookies are small text files placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences, analyzing how you use our site, and enabling certain features to function correctly.'
  },
  {
    title: '2. Types of Cookies We Use',
    content: 'Essential Cookies: These are necessary for the website to function properly and cannot be disabled. They are set in response to actions you take such as filling in forms. Analytics Cookies: We use these to understand how visitors interact with our website, helping us improve performance and content. Marketing Cookies: These track your browsing habits to deliver advertising relevant to your interests.'
  },
  {
    title: '3. Third-Party Cookies',
    content: 'We use Google Analytics to analyze website traffic and usage patterns. Google may use cookies to track your activity across websites. We may also use cookies from advertising platforms such as Google Ads and Meta to measure the effectiveness of our campaigns.'
  },
  {
    title: '4. Managing Cookies',
    content: 'You can control and manage cookies through your browser settings. Most browsers allow you to refuse cookies or delete existing ones. Please note that disabling certain cookies may affect the functionality of our website. You can also opt out of Google Analytics by installing the Google Analytics opt-out browser add-on.'
  },
  {
    title: '5. Cookie Consent',
    content: 'By continuing to use our website, you consent to our use of cookies as described in this policy. You may withdraw your consent at any time by adjusting your browser settings or contacting us directly.'
  },
  {
    title: '6. Updates to This Policy',
    content: 'We may update this Cookie Policy from time to time. We will notify you of significant changes by posting a notice on our website. Please check this page periodically for updates.'
  }
]
</script>