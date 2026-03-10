<template>
  <PageBanner
    title="GDPR Compliance"
    subtitle="Your data protection rights and our commitment to compliance."
    breadcrumb="GDPR"
    breadcrumb-path="/gdpr"
  />
  <LegalContent last-updated="January 1, 2025" :sections="sections" />
</template>

<script setup>
import PageBanner from '~/components/sections/PageBanner.vue'
import LegalContent from '~/components/sections/LegalContent.vue'

useSeoMeta({
  title: 'GDPR Compliance | Nexus Digital Agency',
  description: "Nexus Digital Agency's commitment to GDPR compliance and your data protection rights.",
})
useHead({ link: [{ rel: 'canonical', href: 'https://yourdomain.com/gdpr' }] })

const sections = [
  {
    title: '1. Our Commitment to GDPR',
    content: 'Nexus Digital Agency is committed to complying with the General Data Protection Regulation (GDPR). We act as a data controller for personal information collected through our website and services. We process your data lawfully, fairly, and transparently.'
  },
  {
    title: '2. Lawful Basis for Processing',
    content: 'We process your personal data based on the following lawful bases: Consent — when you voluntarily provide your information via our contact form. Contract — when processing is necessary to deliver services you have requested. Legitimate Interests — for analytics and improving our services. Legal Obligation — when required by applicable law.'
  },
  {
    title: '3. Your Rights Under GDPR',
    content: 'As a data subject, you have the following rights: Right to Access — request a copy of the personal data we hold about you. Right to Rectification — request correction of inaccurate data. Right to Erasure — request deletion of your personal data. Right to Restriction — request that we limit how we process your data. Right to Data Portability — receive your data in a structured, machine-readable format. Right to Object — object to processing based on legitimate interests.'
  },
  {
    title: '4. Data Transfers',
    content: 'We may transfer personal data outside the European Economic Area (EEA) only where adequate safeguards are in place, such as Standard Contractual Clauses approved by the European Commission, or where the recipient country has been deemed to provide adequate protection.'
  },
  {
    title: '5. Data Breach Notification',
    content: 'In the event of a personal data breach that is likely to result in a risk to your rights and freedoms, we will notify the relevant supervisory authority within 72 hours of becoming aware of the breach. Where the breach is likely to result in a high risk, we will also notify affected individuals without undue delay.'
  },
  {
    title: '6. Contact & Data Protection',
    content: 'For all GDPR-related inquiries or to exercise your rights, please contact us at hello@nexusdigital.com. We will respond to all requests within 30 days as required by GDPR.'
  }
]
</script>