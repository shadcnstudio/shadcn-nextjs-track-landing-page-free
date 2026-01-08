import { MenuIcon } from 'lucide-react'

import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList
} from '@/components/ui/navigation-menu'
import { ModeToggle } from '@/components/layout/mode-toggle'

import { cn } from '@/lib/utils'

import Logo from '@/components/logo'

export type NavigationSection = {
  title: string
  href: string
}

type HeaderProps = {
  navigationData: NavigationSection[]
  className?: string
}

const Header = ({ navigationData, className }: HeaderProps) => {
  return (
    <header className={cn('bg-background sticky top-0 z-50 h-17.5', className)}>
      <div className='mx-auto flex h-full max-w-5xl items-center justify-between gap-6 px-4 py-3 sm:px-6 lg:px-8'>
        {/* Logo */}
        <Link href='/#home'>
          <Logo className='gap-3' />
        </Link>

        {/* Navigation */}
        <NavigationMenu className='max-md:hidden'>
          <NavigationMenuList className='flex-wrap justify-start gap-5 lg:gap-12'>
            {navigationData.map(navItem => (
              <NavigationMenuItem key={navItem.title}>
                <NavigationMenuLink
                  href={navItem.href}
                  className='text-muted-foreground hover:text-primary text-base! font-medium hover:bg-transparent'
                >
                  {navItem.title}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Toggle button */}
        <div className='max-md:hidden'>
          <ModeToggle />
        </div>

        {/* Navigation for small screens */}
        <div className='flex gap-4 md:hidden'>
          <ModeToggle />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant='outline' size='icon'>
                <MenuIcon />
                <span className='sr-only'>Menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-56' align='end'>
              {navigationData.map((item, index) => (
                <DropdownMenuItem key={index}>
                  <Link href={item.href}>{item.title}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className='via-primary/20 mx-auto h-px w-4/5 bg-gradient-to-r from-transparent to-transparent'></div>
    </header>
  )
}

export default Header
