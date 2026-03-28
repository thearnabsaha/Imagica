import { Button } from '@workspace/ui/components/button'
import React from 'react'

const MainSection = () => {
    return (
        <div className='h-full border border-amber-300 w-full flex flex-col justify-center items-center'>
            <div className='text-center -translate-y-1/8'>
                <h1 className='text-9xl'>A</h1>
                <h3 className='text-2xl font-semibold'>Start Creating</h3>
                <p className='text-muted-foreground text-sm'>Upload a Image here to check full powers of <span className='text-foreground underline'>Imagica</span></p>
                <Button className='px-15 mt-5 cursor-pointer'>Select Image</Button>
            </div>
        </div>
    )
}

export default MainSection