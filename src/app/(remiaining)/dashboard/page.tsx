'use client'
import { useEffect, useState } from 'react';

export default function Dashboard() {
  const [title, setTitle] = useState('This is our Dashboard');

  useEffect(() => {
    const handleScroll = () => {
      // Check if the scroll position is greater than 5
      if (window.scrollY > 5) {
        setTitle('You scrolled down!');
      } else {
        setTitle('This is our Dashboard');
      }
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='h-[1200px]'>
      <h1 className="text-white text-[50px] uppercase flex flex-col items-center">
        {title}
      </h1>
    </div>
  );
}
