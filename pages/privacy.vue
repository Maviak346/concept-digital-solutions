<template>
  <PageBanner
    title="Privacy Policy"
    subtitle="How we collect, use, and protect your personal information."
    breadcrumb="Privacy Policy"
    breadcrumb-path="/privacy"
  />
  <LegalContent last-updated="January 1, 2025" :sections="sections" />
</template>

<script setup>
import PageBanner from '~/components/sections/PageBanner.vue'
import LegalContent from '~/components/sections/LegalContent.vue'

useSeoMeta({
  title: 'Privacy Policy | Nexus Digital Agency',
  description: 'Read our privacy policy to understand how Nexus Digital Agency collects, uses, and protects your personal information.',
})
useHead({ link: [{ rel: 'canonical', href: 'https://yourdomain.com/privacy' }] })

const sections = [
  {
    title: '1. Information We Collect',
    content: 'We collect information you provide directly to us, such as when you fill out our contact form, request a consultation, or communicate with us. This includes your name, email address, phone number, company name, and any other information you choose to provide. We also automatically collect certain information about your device and how you interact with our website, including IP address, browser type, pages visited, and time spent on pages.'
  },
  {
    title: '2. How We Use Your Information',
    content: 'We use the information we collect to respond to your inquiries and provide the services you request, send you updates and marketing communications (with your consent), improve our website and services, comply with legal obligations, and protect against fraudulent or illegal activity. We will never sell your personal information to third parties.'
  },
  {
    title: '3. Information Sharing',
    content: 'We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website and conducting our business, provided they agree to keep this information confidential. We may also disclose your information when required by law or to protect our rights.'
  },
  {
    title: '4. Data Retention',
    content: 'We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely delete or anonymize it.'
  },
  {
    title: '5. Your Rights',
    content: 'You have the right to access, correct, or delete your personal information. You may also object to or restrict our processing of your data, request data portability, and withdraw consent at any time. To exercise these rights, please contact us at hello@nexusdigital.com.'
  },
  {
    title: '6. Security',
    content: 'We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.'
  },
  {
    title: '7. Contact Us',
    content: 'If you have any questions about this Privacy Policy, please contact us at hello@nexusdigital.com or write to us at 123 Tech Plaza, Toronto, ON, Canada.'
  }
]
</script>