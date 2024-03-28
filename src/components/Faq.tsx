'use client'
import { useState } from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
  } from "@material-tailwind/react";
const Faq = () => {
    const [open, setOpen] =useState(0);
 
  const handleOpen = (value:any) => setOpen(open === value ? 0 : value);
  return (
    <div className="mt-24 bg-black flex flex-col items-center justify-center gap-y-10  bg-grid-gray-100/[0.1] text-white px-10 md:px-24 ">
        <div>
            <h2 className="text-2xl font-bold md:text-4xl md:leading-tight text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-fuchsia-200">Frequently Asked Questions</h2>
        </div>
    <div>
    <Accordion placeholder={''} open={open === 1} className="text-gray-300">
      <AccordionHeader className="text-gray-300" placeholder={''} onClick={() => handleOpen(1)}>What is Material Tailwind?</AccordionHeader>
      <AccordionBody>
        <p className="text-base text-gray-300">
        We&apos;re not always in the position that we want to be at. We&apos;re constantly
        growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
        ourselves and actualize our dreams.
        </p>
      </AccordionBody>
    </Accordion>
    <Accordion placeholder={''} open={open === 2}>
      <AccordionHeader className="text-gray-300" placeholder={''} onClick={() => handleOpen(2)}>
        How to use Material Tailwind?
      </AccordionHeader>
      <AccordionBody>
      <p className="text-base text-gray-300">
        We&apos;re not always in the position that we want to be at. We&apos;re constantly
        growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
        ourselves and actualize our dreams.
        </p>
      </AccordionBody>
    </Accordion>
    <Accordion placeholder={''} open={open === 3}>
      <AccordionHeader className="text-gray-300" placeholder={''} onClick={() => handleOpen(3)}>
        What can I do with Material Tailwind?
      </AccordionHeader>
      <AccordionBody>
      <p className="text-base text-gray-300">
        We&apos;re not always in the position that we want to be at. We&apos;re constantly
        growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
        ourselves and actualize our dreams.
        </p>
      </AccordionBody>
    </Accordion>
  </div>
  </div>
  )
}

export default Faq