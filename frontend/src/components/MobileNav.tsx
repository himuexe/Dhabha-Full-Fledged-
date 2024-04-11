import {Menu} from 'lucide-react'
import {Sheet,SheetTrigger,SheetContent,SheetTitle,SheetDescription} from '@/components/ui/sheet'
import  {Separator} from '@/components/ui/separator'
import { Button } from './ui/button'
export default function MobileNav() {
  return (
    <Sheet>
        <SheetTrigger>
            <Menu className='text-orange-500'></Menu>
        </SheetTrigger>
        <SheetContent className='space-y-3'>
            <SheetTitle>
                <span>Welcome to Dhabha.com!</span>
            </SheetTitle>
            <Separator></Separator>
            <SheetDescription className='flex'>
                <Button className='flex-1 font-bold bg-orange-500'>Log In</Button>
            </SheetDescription>
        </SheetContent>
    </Sheet>
  )
}
