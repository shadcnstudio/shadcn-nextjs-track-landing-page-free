import HeroSection from '@/components/blocks/hero-section/hero-section'
import TimelineSection from '@/components/blocks/changelog-content-section/timeline-section'
import FAQ from '@/components/blocks/faq-component/faq-component'
import CTA from '@/components/blocks/cta-section/cta-section'

import { faqItems } from '@/assets/data/faq-content'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <div className='via-primary/20 mx-auto h-px w-4/5 bg-gradient-to-r from-transparent to-transparent'></div>
      <TimelineSection />
      <div className='via-primary/20 mx-auto h-px w-4/5 bg-gradient-to-r from-transparent to-transparent'></div>
      <FAQ faqItems={faqItems} />
      <CTA />
    </div>
  )
}

export default Home
