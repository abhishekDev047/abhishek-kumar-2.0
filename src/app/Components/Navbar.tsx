"use client";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUserAstronaut } from "react-icons/fa";
import { SiGooglemessages } from "react-icons/si";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

function NavBar() {
  return (
    <div className=''>
      <Navbar expand="md" fixed="top" className=" bg-body-tertiary h-20 shadow-lg NavBar ">
        <Container>
          <Navbar className="mr-4 text-xl md:text-3xl"> <Link href={"/"}> <Image
            className='rounded-full'
            src={'/images/icons.png'}
            height={40}
            width={40}
            alt='home'
          /></Link></Navbar>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className=" bg-gray-50 me-auto items-center md:w-full md:items-end md:justify-end">
            <OverlayTrigger
          placement="bottom"
          overlay={
            <Tooltip id={'tooltip'}>
              Know more about me
            </Tooltip>
          }
        >
              <Nav className="mx-4 text-2xl md:text-4xl my-3 lg:my-auto"> <Link href={"/about"}> <i className='text-violet-600 hover:text-gray-600'><FaUserAstronaut /></i> </Link></Nav>
              </OverlayTrigger>

              <OverlayTrigger
          placement="bottom"
          overlay={
            <Tooltip id={'tooltip'}>
              Contact info
            </Tooltip>
          }
        >

              <Nav className="mx-4 text-2xl md:text-4xl my-3 lg:my-auto"> <Link href={"/contact"}> <i className='text-violet-600 hover:text-gray-600'><SiGooglemessages /></i> </Link></Nav>
              </OverlayTrigger>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar;