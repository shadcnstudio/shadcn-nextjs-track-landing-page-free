import type { ReactNode } from 'react'

import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import type { NavigationSection } from '@/components/layout/header'

const navigationData: NavigationSection[] = [
  {
    title: 'Home',
    href: '#'
  },
  {
    title: 'Products',
    href: '#'
  },
  {
    title: 'About Us',
    href: '#'
  },
  {
    title: 'Contacts',
    href: '#'
  }
]

const PagesLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <div className='relative'>
      {/* Header Section */}
      <Header navigationData={navigationData} />
      {/* Main Content */}
      <main className='flex flex-col'>{children}</main>
      {/* Footer Section */}
      <Footer />
    </div>
  )
}

export default PagesLayout
