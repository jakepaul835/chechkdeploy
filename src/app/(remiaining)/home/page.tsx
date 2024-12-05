"use client";

import React from 'react';
import { useState } from 'react';

export default function HomePage() {
  const [toggled,istoggled] = useState(false);

  const handletoggle = () => {
    istoggled(!toggled);
    console.log(toggled);
  }
  return (
      <>
      <h1 className='text-[50px] text-white uppercase text-center'>
        This is our Home Page
      </h1>
      <div className='text-center mt-5'>
        <button className={`btn btn-primary ${toggled ? 'new-class' : '' } `} onClick={handletoggle}>chechk usestate</button>
      </div>
      </>
  );
}

