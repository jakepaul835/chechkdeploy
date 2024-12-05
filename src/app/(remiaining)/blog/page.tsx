'use client'

import React, { useState, useEffect } from 'react';

export default function Blog() {
  const headings = [
    "This is our Blog",
    "Heading Updated After 1 Minute",
    "Heading Updated After 2 Minutes",
    "Heading Updated After 3 Minutes",
    "Heading Updated After 4 Minutes",
  ];

  const [headingIndex, setHeadingIndex] = useState(0);

  useEffect(() => {
    // Function to update the heading index every minute
    const timer = setInterval(() => {
      setHeadingIndex((prevIndex) => {
        if (prevIndex < headings.length - 1) {
          return prevIndex + 1;
        } else {
          clearInterval(timer); // Stop after reaching the last heading
          return prevIndex;
        }
      });
    }, 60000); // 1 minute in milliseconds

    // Cleanup the interval when the component unmounts
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h1 className="text-white text-[50px] uppercase flex flex-col items-center">
        {headings[headingIndex]}
      </h1>
    </div>
  );
}


