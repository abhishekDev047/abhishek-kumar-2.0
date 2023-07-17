"use client";
import Link from 'next/link';
import React from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { PiProjectorScreenChartFill } from "react-icons/pi";


function TopMove(props:any) {
  return (
    <div className='flex flex-row items-end justify-center p-7  w-full'>

        <div className={props.top}>
        <OverlayTrigger
          placement="top"
          overlay={
            <Tooltip id={'tooltip'}>
              Go to top
            </Tooltip>
          }
        >
            <Link href={props.link1}  > 
            <i className=' h-auto w-auto text-4xl rounded-full text-purple-600'><BsFillArrowUpCircleFill/> </i></Link>
            </OverlayTrigger>
        </div>
        <div className={props.project}>
        <OverlayTrigger
          placement="top"
          overlay={
            <Tooltip id={'tooltip'}>
              Go to Projects
            </Tooltip>
          }
        >
            <Link href={props.prolink}> 
            <i className=' h-auto w-auto text-4xl rounded-full text-purple-600'><PiProjectorScreenChartFill/> </i></Link>
            </OverlayTrigger>
        </div>

    </div>
  )
}

export default TopMove;