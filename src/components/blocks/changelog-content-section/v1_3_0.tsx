import React from 'react'

import TimelineItem from '@/components/timeline/timeline-items'
import Accordion from '@/components/accordion/accordion'
import { accordionDataV1_3_0 } from '@/assets/data/accordion-v1_3_0'

function v1_3_0() {
  return (
    <div>
      <TimelineItem date='November 7, 2025' version='v 1.3.0'>
        <div className='space-y-4'>
          <h3 className='text-xl font-semibold'>Component Sync — Unified Library Management (Beta)</h3>
          <p className='text-muted-foreground text-sm'>
            We’re launching Component Sync, a new way to manage, version, and update all your shadcn components across
            projects with a single click.
          </p>
          <div className='space-y-3'>
            <p className='font-medium'>Now you can:</p>
            <ul className='text-muted-foreground list-inside list-disc space-y-3 text-sm'>
              <li>Sync shared components instantly between multiple apps</li>
              <li>Track version diffs and apply updates selectively</li>
              <li>Automatically resolve dependency conflicts</li>
            </ul>
          </div>
          <Accordion data={accordionDataV1_3_0} />
          <div className='flex flex-wrap items-center gap-4'>
            <div className='bg-primary/10 text-destructive rounded-md px-3 py-1 text-xs'>/v1/components/sync</div>
            <div className='bg-primary/10 text-destructive rounded-md px-3 py-1 text-xs'>/v1/components/pull</div>
            <div className='bg-primary/10 text-destructive rounded-md px-3 py-1 text-xs'>--interactive</div>
          </div>
        </div>
      </TimelineItem>
    </div>
  )
}

export default v1_3_0
