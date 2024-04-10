"use client"

import React from 'react'
import Tilt from 'react-parallax-tilt';
import Image from 'next/image';
import brain from '@/public/brain.png';

const Logo = () => {
  return (
    <div className='ma4 mt0'>
      <Tilt className='Tilt br1 shadow-1' style={{ height: 150, width:150}} options={{ max:60}}>
        <div className='Tilt-inner pa3 light-blue'>
            <Image src={brain} width={120} height={120} alt="logo" />
        </div> 
      </Tilt>
    </div>
    
  )
}

export default Logo