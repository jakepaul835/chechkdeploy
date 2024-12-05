'use client'
import React, { useState } from 'react';

export default function Page() {
  const [toggled, setToggled] = useState(false);

  const handleToggle = () => {
    setToggled(!toggled);
    console.log('Toggled state:', toggled);
  };

  return (
    <div className='h-[1200px]'>
      <h1 className='text-[50px] text-white text-center uppercase'>
        This is our About Page
      </h1>
      <button 
        className={`btn !text-red bg-sky-50 ${toggled ? 'bg-red text-red     border-red' : ''}`} 
        onClick={handleToggle}
      >
        {toggled ? 'Toggled ON' : 'Toggled OFF'}
      </button>
    </div>
  );
}
