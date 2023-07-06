import Image from 'next/legacy/image';
import Link from 'next/link';
import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { FaGithubSquare,FaGlobe } from "react-icons/fa";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

function Items(props:any) {
  return (
    <Col>
          <Card className='bg-gray-50  text-center shadow-md'>
            <div className='items-center'>
                <Image 
                   layout='intrinsic'
                   width={630}
                   height={300}
                   className=' rounded-lg'
                   src={props.src}
                   alt={'abhishek kumar'}
                />
            </div>
            <Card.Body>
              <Card.Title className='text-2xl'>{props.title}</Card.Title>
              <Card.Text className='text-xl'>
               {props.desc}
              </Card.Text>

              <div>
              <footer className="Card.Text-footer text-sm">
             <cite>{props.type} made with {props.techno}</cite>
          </footer>  
              </div>

              <div className='flex flex-row items-center justify-center p-3'>
              <p className=' mx-3'>
              <OverlayTrigger
          placement="top"
          overlay={
            <Tooltip id={'tooltip'}>
              Get source code
            </Tooltip>
          }
        >
          <Link href={props.rode} target='blank' className='text-3xl hover:text-violet-700'> <FaGithubSquare/> </Link>
        </OverlayTrigger>
                  </p>
              <p className=' mx-3'>
              <OverlayTrigger
          placement="top"
          overlay={
            <Tooltip id={'tooltip'}>
              Visit {props.title}
            </Tooltip>
          }
        >
          <Link href={props.pink} target='blank' className='text-3xl hover:text-violet-700'> <FaGlobe/> </Link>
        </OverlayTrigger>
                  </p>
              </div>
            </Card.Body>
          </Card>
        </Col>

  )
}

export default Items;