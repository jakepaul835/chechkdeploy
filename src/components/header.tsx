"use client"; // Ensure this line is at the very top

import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';

export default function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <Navbar expand="lg" className="bg-slate-500">
    <Container>
      <Navbar.Brand href="/" className='text-white'>Navbar</Navbar.Brand>
      <Navbar.Toggle
            aria-controls="navbarScroll"
            className="relative flex flex-col items-center justify-center w-8 h-8 border-none focus:outline-none shadow-none"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <span
              className={`block w-6 h-[2px] bg-white transition-transform duration-300 ease-in-out ${
                navbarOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-[2px] bg-white mt-[5px] transition-opacity duration-300 ease-in-out ${
                navbarOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-[2px] bg-white mt-[5px] transition-transform duration-300 ease-in-out ${
                navbarOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            ></span>
          </Navbar.Toggle>
      <Navbar.Collapse id="navbarScroll"className='' >
        <Nav
          className="mx-auto my-2 my-lg-0 text-white gap-x-8 "
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Link href="/home" className='text-white'>Home</Link>
          <Link href="/about" className='text-white'>About</Link>
          <Link href="/dashboard"  className='text-white'> Contact</Link>
          <Link href="/blog"  className='text-white'>Blogs </Link>
        </Nav>
        <Link href="/login">
          <Button className='text-blue-500 border-none bg-white font-semibold'>Log IN</Button>
        </Link>  
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}
