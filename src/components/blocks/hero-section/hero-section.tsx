import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

function UpdateSection() {
  return (
    <div className='space-y-4 px-4 py-8 text-center md:px-8 md:py-16'>
      <Badge className='text-sm font-normal' variant='outline'>
        Updates
      </Badge>
      <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>Changelog</h2>
      <p className='text-muted-foreground text-xl'>See what&#39;s new added, changed, fixed, improved or updated.</p>
      <div className='mx-auto flex max-w-sm gap-3 max-sm:flex-col max-sm:items-center'>
        <Input type='text' placeholder='Your email' className='bg-background h-10 flex-1' />
        <Button size='lg' className='rounded-lg text-base'>
          Subscribe
        </Button>
      </div>
    </div>
  )
}

export default UpdateSection
