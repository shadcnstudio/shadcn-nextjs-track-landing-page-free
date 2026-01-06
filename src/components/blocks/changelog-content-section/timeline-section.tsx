import React from 'react'

import TimelineItem from '@/components/timeline/timeline-items'
import Accordion from '@/components/accordion/accordion'

function TimelineSection() {
  return (
    <section>
      <div className='mx-auto max-w-4xl px-4 py-16'>
        <div className='flex flex-col items-start'>
          {/* Latest Release */}
          <TimelineItem date='January 5, 2026' version='v 2.1.0'>
            <div className='space-y-4'>
              <div className='space-y-1.5'>
                <h3 className='text-xl font-semibold'>Component Sync — Unified Library Management (Beta)</h3>
                <p className='text-muted-foreground text-sm'>
                  We’re launching Component Sync, a new way to manage, version, and update all your shadcn components
                  across projects with a single click.
                </p>
                <p className='font-medium'>Now you can:</p>
                <ul className='text-muted-foreground list-inside list-disc space-y-1.5 text-sm'>
                  <li>Sync shared components instantly between multiple apps</li>
                  <li>Track version diffs and apply updates selectively</li>
                  <li>Automatically resolve dependency conflicts</li>
                </ul>
              </div>
              <Accordion />
              <div className='flex items-center gap-4'>
                <div className='bg-primary/10 text-destructive rounded-md px-3 py-1 text-xs'>/v1/components/sync</div>
                <div className='bg-primary/10 text-destructive rounded-md px-3 py-1 text-xs'>/v1/components/pull</div>
                <div className='bg-primary/10 text-destructive rounded-md px-3 py-1 text-xs'>--interactive</div>
              </div>
            </div>
          </TimelineItem>

          {/* Previous Release */}
          <TimelineItem date='December 15, 2025' version='v 2.0.0'>
            <div className='space-y-4'>
              <h3 className='text-xl font-semibold'>Complete Redesign</h3>
              <p className='text-muted-foreground'>
                Complete overhaul of the user interface with modern design patterns and improved user experience.
              </p>
              <div className='flex flex-wrap gap-2'>
                <span className='rounded bg-blue-100 px-2 py-1 text-sm text-blue-800'>UI/UX</span>
                <span className='rounded bg-green-100 px-2 py-1 text-sm text-green-800'>Performance</span>
                <span className='rounded bg-purple-100 px-2 py-1 text-sm text-purple-800'>Accessibility</span>
              </div>
            </div>
          </TimelineItem>

          {/* Initial Release */}
          <TimelineItem date='November 7, 2025' version='v 1.3.0'>
            <div className='space-y-4'>
              <h3 className='text-xl font-semibold'>Initial Release</h3>
              <p className='text-muted-foreground'>
                Initial release of the product with core functionality and basic features.
              </p>
              <div className='rounded-lg bg-gray-50 p-4'>
                <p className='text-sm text-gray-600'>
                  🎉 Welcome to our first public release! This milestone marks the beginning of our journey to provide
                  you with the best experience possible.
                </p>
              </div>
            </div>
          </TimelineItem>
        </div>
      </div>
    </section>
  )
}

export default TimelineSection
