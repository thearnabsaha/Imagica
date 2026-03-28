"use client"
import React, { useState } from 'react'
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@workspace/ui/components/card"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@workspace/ui/components/accordion"
import { Slider } from "@workspace/ui/components/slider"
import { Image, Maximize, Sparkles } from 'lucide-react'
const Sidebar = () => {
    const [value, setValue] = useState([100])
    return (
        <div className='h-full w-120'>
            <Card className='mx-5 bg-primary-foreground'>
                <CardHeader>
                    <CardTitle>Tools</CardTitle>
                    <CardTitle>Size</CardTitle>
                    <div className="flex items-center justify-between gap-2">
                        <span className="text-sm text-muted-foreground">
                            {value.join(", ")}
                        </span>
                    </div>
                    <Slider
                        id="slider-demo-temperature"
                        value={value}
                        onValueChange={setValue}
                        max={100}
                        step={1}
                    />
                </CardHeader>
            </Card>
            <Card className='mx-5 my-5 bg-primary-foreground'>
                <CardHeader>
                    <CardTitle>Options</CardTitle>
                </CardHeader>
                <Accordion type="single" collapsible defaultValue="item-1" className='px-5'>
                    <AccordionItem value="item-1">
                        <AccordionTrigger className=' cursor-pointer'><div className='flex items-center'><Sparkles className='mr-2' /> AI Editing Options</div></AccordionTrigger>
                        <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className=' cursor-pointer'><div className='flex items-center'><Image className='mr-2' /> AI Filters</div></AccordionTrigger>
                        <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger className=' cursor-pointer'><div className='flex items-center'><Maximize className='mr-2' /> AI Explanation</div></AccordionTrigger>
                        <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </Card>
        </div >
    )
}

export default Sidebar