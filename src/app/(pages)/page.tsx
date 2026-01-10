import HeroSection from '@/components/blocks/hero-section/hero-section'
import TimelineSection from '@/components/blocks/changelog-section/timeline-section'
import FAQ from '@/components/blocks/faq-section/faq-section'
import CTA from '@/components/blocks/cta-section/cta-section'

import { faqItems } from '@/assets/data/faq-content'

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${process.env.NEXT_PUBLIC_APP_URL}#website`,
      name: 'Track',
      description:
        'A clean, centralized page that highlights product updates, improvements, and fixes so users can quickly see what’s new.',
      url: `${process.env.NEXT_PUBLIC_APP_URL}`,
      inLanguage: 'en-US'
    }
  ]
}

const Home = () => {
  return (
    <div>
      <HeroSection />
      <div className='via-primary/20 mx-auto h-px w-4/5 bg-linear-to-r from-transparent to-transparent'></div>
      <TimelineSection />
      <div className='via-primary/20 mx-auto h-px w-4/5 bg-linear-to-r from-transparent to-transparent'></div>
      <FAQ faqItems={faqItems} />
      <CTA />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c')
        }}
      />
    </div>
  )
}

export default Home
