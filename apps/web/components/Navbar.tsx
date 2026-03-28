import { Button } from '@workspace/ui/components/button'
import { Download, History, Redo, Undo, Upload } from 'lucide-react'
import React from 'react'
import {
    ButtonGroup,
    ButtonGroupSeparator,
    ButtonGroupText,
} from "@workspace/ui/components/button-group"
const Navbar = () => {
    return (
        <div className='flex justify-around pt-5'>
            <div className='text-4xl'>Imagica.</div>
            <div className='flex justify-around mx-5 items-center'>
                <div className='flex justify-around'>
                    <ButtonGroup
                        aria-label="Media controls"
                        className="h-fit mx-4"
                    >
                        <Button variant="outline" size="icon" className='cursor-pointer'>
                            <Undo />
                        </Button>
                        <ButtonGroupSeparator />
                        <Button variant="outline" size="icon" className='cursor-pointer'>
                            <Redo />
                        </Button>
                    </ButtonGroup>
                </div>
                <div className=' bg-secondary w-px h-5'></div>
                <div className='flex mx-2'>
                    <Button className='mx-2 cursor-pointer' variant="secondary"> <Upload /> Upload</Button>
                    <Button className='mx-2 cursor-pointer'>Export <Download /> </Button>
                </div>
                <div className=' bg-secondary w-px mx-2 h-5'></div>
                <div>
                    <Button className='mx-2 cursor-pointer' variant="secondary"><History /> </Button>
                </div>
            </div>
        </div>
    )
}

export default Navbar