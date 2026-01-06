import HeroSection from '@/components/blocks/hero-section/hero-section'
import TimelineSection from '@/components/blocks/changelog-content-section/timeline-section'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <div className='via-primary/20 mx-auto h-px w-4/5 bg-gradient-to-r from-transparent to-transparent'></div>
      <TimelineSection />
    </div>
  )
}

export default Home
