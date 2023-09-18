"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export function Blob({ image, name, area_of_discipline }) {
  return (
    <div className='flex flex-col  justify-center items-center'>
      <div
        className={`blob1 bg-blue-500 border-s-4 flex justify-center items-center  w-1/2  overflow-hidden `}
      >
        <Image
          src={image}
          className='w-full'
          width={100}
          height={100}
          alt='red star'
        />
      </div>
      <p className='text-lg font-semibold'>{name}</p>
      <p className=' text-gray-500 font-medium text-base'>
        {area_of_discipline}
      </p>
    </div>
  );
}

// Quote starts here

const quotes = [
  {
    id: 1,
    quote: "Education is not preparation for life; education is life itself.",
    author: "John Dewey",
  },
  {
    id: 2,
    quote:
      "What sculpture is to a block of marble, education is to a human soul.",
    author: "Joseph Addison",
  },

  {
    id: 3,
    quote:
      "Education breeds confidence. Confidence breeds hope. Hope breeds peace.",
    author: "Confucius",
  },
  {
    id: 4,
    quote:
      "Better than a thousand days of diligent study is one day with a great teacher.",
    author: "Japanese Proverb",
  },
  {
    id: 5,
    quote:
      "A good teacher is like a candle—it consumes itself to light the way for others.",
    author: "Mustafa Kemal Atatürk",
  },
  {
    id: 6,
    quote: "Children must be taught how to think, not what to think.",
    author: "Margaret Mead",
  },
  {
    id: 7,
    quote:
      "What we want is to see the child in pursuit of knowledge, and not knowledge in pursuit of the child.",
    author: "George Bernard Shaw",
  },
  {
    id: 8,
    quote: "It takes a big heart to help shape little minds.",
    author: "Unknown",
  },
  {
    id: 9,
    quote:
      "Education is the most powerful weapon which you can use to change the world.",
    author: "Nelson Mandela",
  },
  {
    id: 10,
    quote:
      "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    author: "Benjamin Franklin",
  },
];
export function Quote() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1 >= quotes.length ? 0 : prev + 1));
    }, 10000);

    return () => {
      window.clearInterval(timer);
    };
  });

  const activequote = quotes[activeIndex];
  return (
    <div className='py-10 px-4 border-l-3 border-l-blue-500 space-y-4'>
      <p className='text-white text-xl font-semibold'>{activequote.quote}</p>
      <p className='text-gray-200 font-light'>{activequote.author}</p>
    </div>
  );
}
