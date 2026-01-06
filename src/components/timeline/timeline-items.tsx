import type { ReactNode } from 'react'
import React from 'react'

import { Badge } from '@/components/ui/badge'

type TimelineItemProps = {
  date: string
  version: string
  children: ReactNode
}

const TimelineItem = ({ date, version, children }: TimelineItemProps) => {
  return (
    <div id={version} className='relative flex scroll-mt-18 justify-end gap-5 md:gap-11'>
      <div className='flex gap-2'>
        <div>
          <div className='sticky top-19 flex w-25 flex-col items-end gap-2 md:min-w-36'>
            <Badge className='flex justify-end rounded-sm font-medium max-md:hidden'>{version}</Badge>
            <div className='text-right'>{date}</div>
          </div>
        </div>
        <div className='flex flex-col items-center'>
          <div className='sticky top-19 flex size-6 items-center justify-center'>
            <span className='bg-primary/20 flex size-4.5 shrink-0 items-center justify-center rounded-full'>
              <span className='bg-primary size-3 rounded-full' />
            </span>
          </div>
          <span className='border-primary/20 w-px flex-1 border' />
        </div>
      </div>
      <div className='flex flex-1 flex-col gap-4 pb-11'>{children}</div>
    </div>
  )
}

export default TimelineItem
