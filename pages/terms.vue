<template>
  <PageBanner
    title="Terms of Service"
    subtitle="The terms and conditions governing your use of our services."
    breadcrumb="Terms of Service"
    breadcrumb-path="/terms"
  />
  <LegalContent last-updated="January 1, 2025" :sections="sections" />
</template>

<script setup>
import PageBanner from '~/components/sections/PageBanner.vue'
import LegalContent from '~/components/sections/LegalContent.vue'

useSeoMeta({
  title: 'Terms of Service | Nexus Digital Agency',
  description: 'Read the terms and conditions governing the use of Nexus Digital Agency services and website.',
})
useHead({ link: [{ rel: 'canonical', href: 'https://yourdomain.com/terms' }] })

const sections = [
  {
    title: '1. Acceptance of Terms',
    content: 'By accessing and using the Nexus Digital Agency website and services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services. We reserve the right to modify these terms at any time, and your continued use of our services constitutes acceptance of the updated terms.'
  },
  {
    title: '2. Services',
    content: 'Nexus Digital Agency provides digital marketing, web design, web development, SEO, paid advertising, and related technology consulting services. The specific scope of services will be defined in individual project agreements or statements of work signed by both parties.'
  },
  {
    title: '3. Client Responsibilities',
    content: 'You agree to provide accurate and complete information necessary for us to deliver our services. You are responsible for maintaining the confidentiality of any login credentials and for all activities conducted under your account. You agree not to use our services for any unlawful purpose.'
  },
  {
    title: '4. Intellectual Property',
    content: 'Upon full payment, clients receive ownership of the final deliverables created specifically for them. Nexus Digital Agency retains ownership of all pre-existing tools, frameworks, templates, and methodologies used in delivering services. We reserve the right to display completed work in our portfolio unless explicitly agreed otherwise.'
  },
  {
    title: '5. Payment Terms',
    content: 'Payment terms are outlined in individual project agreements. Unless otherwise specified, invoices are due within 14 days of issue. Late payments may incur interest charges. We reserve the right to suspend services for accounts with outstanding balances.'
  },
  {
    title: '6. Limitation of Liability',
    content: "Nexus Digital Agency's liability is limited to the amount paid for the specific service in question. We are not liable for indirect, incidental, or consequential damages. We do not guarantee specific results from digital marketing or SEO services, as search engine algorithms and market conditions are outside our control."
  },
  {
    title: '7. Termination',
    content: 'Either party may terminate a project agreement with 30 days written notice. Upon termination, the client is responsible for payment for all work completed up to the termination date. We reserve the right to terminate services immediately for violation of these terms.'
  },
  {
    title: '8. Governing Law',
    content: 'These terms are governed by the laws of the Province of Ontario, Canada. Any disputes shall be resolved in the courts of Toronto, Ontario.'
  }
]
</script>