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
    <div id="faq" className="mt-24 bg-black flex flex-col items-center justify-center gap-y-10  bg-grid-gray-100/[0.1] text-white px-10 md:px-24 ">
        <div>
            <h2 className="text-2xl font-bold md:text-4xl md:leading-tight text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-fuchsia-200">Frequently Asked Questions</h2>
        </div>
    <div>
    <Accordion placeholder={''} open={open === 1} className="text-gray-300">
      <AccordionHeader className="text-gray-300" placeholder={''} onClick={() => handleOpen(1)}>What is promogenie?</AccordionHeader>
      <AccordionBody>
        <p className="text-base text-gray-300">
        Promogenie is an AI powered content generation tool which can be used to craft awesome content for your different social media platforms and can save upto 100 hours of hardwork and can also increase your social media reach upto 5x as compared to your normal reach. 
        </p>
      </AccordionBody>
    </Accordion>

    <Accordion placeholder={''} open={open === 2}>
      <AccordionHeader className="text-gray-300" placeholder={''} onClick={() => handleOpen(2)}>
        Is promogenie free to use?
      </AccordionHeader>
      <AccordionBody>
      <p className="text-base text-gray-300">
        Yes, we are currently serving users at a free tier where a user can generate unlimited content and can access all premium social media templates.
        </p>
      </AccordionBody>
    </Accordion>

    <Accordion placeholder={''} open={open === 3}>
      <AccordionHeader className="text-gray-300" placeholder={''} onClick={() => handleOpen(3)}>
        How does promogenie work?
      </AccordionHeader>
      <AccordionBody>
      <p className="text-base text-gray-300">
          Promogenie generate content samples based on the user&apos;s inputs, it also allows customisation with several different filters to generate the most optimised results. 
        </p>
      </AccordionBody>
    </Accordion>

    <Accordion placeholder={''} open={open === 4}>
      <AccordionHeader className="text-gray-300" placeholder={''} onClick={() => handleOpen(4)}>
        What type of content can be generated using promogenie?
      </AccordionHeader>
      <AccordionBody>
      <p className="text-base text-gray-300">
      Promogenie currently serves content for 5+ platforms which includes LinkedIn, Twitter, Instagram, Cold Emails, Customisable blogs, Whatsapp business artciles.
        </p>
      </AccordionBody>
    </Accordion>

    <Accordion placeholder={''} open={open === 5}>
      <AccordionHeader className="text-gray-300" placeholder={''} onClick={() => handleOpen(5)}>
        Will I be able to check my previous generated content?
      </AccordionHeader>
      <AccordionBody>
      <p className="text-base text-gray-300">
       Yes we have developed a proper history management system for users where the user can go and check their previously generated content for any of the supported platforms.
        </p>
      </AccordionBody>
    </Accordion>
    
    <Accordion placeholder={''} open={open === 6}>
      <AccordionHeader className="text-gray-300" placeholder={''} onClick={() => handleOpen(6)}>
        Will there be any new features or innovations in future?
      </AccordionHeader>
      <AccordionBody>
      <p className="text-base text-gray-300">
      Yes, we will be adding new features super soon to make this awesome software more exciting and engaging.
        </p>
      </AccordionBody>
    </Accordion>

    <Accordion placeholder={''} open={open === 7}>
      <AccordionHeader className="text-gray-300" placeholder={''} onClick={() => handleOpen(7)}>
        Is there any customer support available?
      </AccordionHeader>
      <AccordionBody>
      <p className="text-base text-gray-300">
      Yes, we offer 24x7 customer support to all users. In the case of any emergency or bug report you can schedule the meet with us from the home page.
        </p>
      </AccordionBody>
    </Accordion>
  </div>
  </div>
  )
}

export default Faq