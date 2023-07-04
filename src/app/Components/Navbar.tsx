"use client";
import Link from 'next/link';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <div className=''>
     <Navbar expand="md" fixed="top" className=" bg-body-tertiary h-20 shadow-lg ">
      <Container>
        <Navbar className="mr-4 text-xl md:text-3xl  "> <Link href={"/"}>Abhishek</Link></Navbar>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className=" bg-gray-50 me-auto">
            <Nav className="mx-4 text-xl md:text-3xl my-3 lg:my-auto"> <Link href={"/projects"}>Projects</Link> </Nav>
            <Nav className="mx-4 text-xl md:text-3xl my-3 lg:my-auto"> <Link href={"/about"}> About Me</Link></Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavBar;