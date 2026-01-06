import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'

const items = [
  {
    type: 'new',
    items: [
      '"Sync All" button for project-wide updates',
      'Component diff viewer with inline changelog',
      'Scoped sync — choose which namespaces or folders to update'
    ]
  },
  {
    type: 'updates',
    items: [
      'Faster load times in component explorer (-30%)',
      'Auto-preview for dark/light theme variants',
      'TypeScript types now update automatically when syncing'
    ]
  },
  {
    type: 'bugfixes',
    items: [
      'Fixed sync conflicts with large component libraries',
      'Resolved memory leak in diff viewer',
      'Fixed incorrect version detection for nested components'
    ]
  }
]

const AccordionDemo = () => {
  const getBadgeProps = (type: string) => {
    switch (type) {
      case 'new':
        return {
          className:
            'border-none rounded-sm bg-green-600/10 text-green-600 focus-visible:ring-green-600/20 focus-visible:outline-none dark:bg-green-400/10 dark:text-green-400 dark:focus-visible:ring-green-400/40 [a&]:hover:bg-green-600/5 dark:[a&]:hover:bg-green-400/5',
          dotColor: 'bg-green-600 dark:bg-green-400',
          label: 'New'
        }
      case 'updates':
        return {
          className:
            'border-none rounded-sm bg-sky-600/10 text-sky-600 focus-visible:ring-sky-600/20 focus-visible:outline-none dark:bg-sky-400/10 dark:text-sky-400 dark:focus-visible:ring-sky-400/40 [a&]:hover:bg-sky-600/5 dark:[a&]:hover:bg-sky-400/5',
          dotColor: 'bg-sky-600 dark:bg-sky-400',
          label: 'Updates'
        }
      case 'bugfixes':
        return {
          className:
            'border-none rounded-sm bg-amber-600/10 text-amber-600 focus-visible:ring-amber-600/20 focus-visible:outline-none dark:bg-orange-400/10 dark:text-orange-400 dark:focus-visible:ring-orange-400/40 [a&]:hover:bg-amber-600/5 dark:[a&]:hover:bg-orange-400/5',
          dotColor: 'bg-amber-600 dark:bg-amber-400',
          label: 'Bug Fixes'
        }
      default:
        return {
          className:
            'border-none rounded-sm bg-green-600/10 text-green-600 focus-visible:ring-green-600/20 focus-visible:outline-none dark:bg-green-400/10 dark:text-green-400 dark:focus-visible:ring-green-400/40 [a&]:hover:bg-green-600/5 dark:[a&]:hover:bg-green-400/5',
          dotColor: 'bg-green-600 dark:bg-green-400',
          label: 'New'
        }
    }
  }

  return (
    <Accordion type='single' collapsible className='w-full' defaultValue='item-1'>
      {items.map((item, index) => {
        const badgeProps = getBadgeProps(item.type)

        return (
          <AccordionItem key={index} value={`item-${index + 1}`}>
            <AccordionTrigger className='hover:no-underline'>
              <Badge className={badgeProps.className}>{badgeProps.label}</Badge>
            </AccordionTrigger>
            <AccordionContent className='text-muted-foreground'>
              <ul className='text-muted-foreground list-inside list-disc space-y-3 text-sm'>
                {item.items.map((listItem, listIndex) => (
                  <li key={listIndex}>{listItem}</li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        )
      })}
    </Accordion>
  )
}

export default AccordionDemo
