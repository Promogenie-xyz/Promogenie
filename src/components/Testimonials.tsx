'use client'

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const data = [
    {
      quote:
        "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
      name: "Charles Dickens",
      title: "A Tale of Two Cities",
    },
    {
      quote:
        "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
      name: "William Shakespeare",
      title: "Hamlet",
    },
    {
      quote: "All that we see or seem is but a dream within a dream.",
      name: "Edgar Allan Poe",
      title: "A Dream Within a Dream",
    },
];
    
const Testimonials = () => {
  return (
    <div id="testimonials" className="h-[40rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
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