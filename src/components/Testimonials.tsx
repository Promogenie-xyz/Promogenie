'use client'

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const data = [
    {
      quote:
        "The best ever free content generating tool I've ever used. I was impressed by the clean UI and a great user experience. Will definitely recommend people to use this in their day to day lives.",
      name: "Divyanshu Singh",
      title: "Founder at Comify Technologies",
    },
    {
      quote:
        "Promogenie has revolutionized the way I approach content creation for social media. As a social media manager, I'm constantly on the lookout for fresh and engaging content ideas. ",
      name: "Shivam gupta",
      title: "Student",
    },
];
    
const Testimonials = () => {
  return (
    <div id="testimonials" className="h-[40rem] mt-24 rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
        <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-fuchsia-200 mb-4">Our Testimonials</h1>
       <InfiniteMovingCards
        items={data}
         direction="left" 
        speed="slow"
      /> 
    </div>

  )
}


  
export default Testimonials