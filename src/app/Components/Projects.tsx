"use client";
import React from 'react';
import Row from 'react-bootstrap/Row';
import projects from '@/files/projects';
import Items from './Items';

function Projects() {
  return (
    <div className='items-center justify-center w-full'>
      <Row xs={1} md={2} className="g-4">
        {projects.map((item:any, index:number)=>(
          <Items key={index} title={item.name} desc={item.description} techno={item.technologies} pink={item.link} rode={item.source} type={item.type} src={item.img}/>
        ))}
      </Row>
    </div>
  )
}

export default Projects;